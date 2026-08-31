import Peer from 'peerjs';

// PeerJS の公開ブローカーを「出会い」だけに使い、対戦の通信自体は
// WebRTC の DataChannel で 2 台が直接やり取りする。
// ブローカーは接続確立までしか関与しないので、繋がったあとは第三者を通らない。

// 数字だけ。スマホでテンキーが出るので、英字フリック（IME の変換）を通らない。
// 10^4 = 10000 通りしかないが、同時に立っている部屋はごく少数だし、
// 重複したら host() が別のコードで取り直す
const CODE_CHARS = '0123456789';
const PREFIX = 'afvs-';          // 公開ブローカー上で他アプリと衝突しないように
const RT_LABEL = 'afvs-rt';      // リアルタイム用（順序保証なし）のチャンネル名

export function makeCode(n = 4) {
  let s = '';
  for (let i = 0; i < n; i++) s += CODE_CHARS[(Math.random() * CODE_CHARS.length) | 0];
  return s;
}

export function normalizeCode(s) {
  // 全角数字も受ける（日本語キーボードだと混ざりやすい）
  return (s || '')
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/\D/g, '')
    .slice(0, 4);
}

export class Net {
  constructor() {
    this.peer = null;
    this.conn = null;          // 制御用: 確実に届く（順序保証あり）
    this.rt = null;            // リアルタイム用: 落ちてもよい（順序保証なし）
    this.role = null;          // 'host' | 'guest'
    this.code = '';
    this.state = 'idle';       // idle / opening / waiting / connecting / connected / closed / error
    this.error = '';
    this.onState = () => {};
    this.onMessage = () => {};
    this.pingMs = 0;
    this._pingSent = 0;
    this._pingTimer = null;
  }

  setState(s, err = '') {
    this.state = s;
    this.error = err;
    this.onState(s, err);
  }

  get connected() { return this.state === 'connected' && this.conn && this.conn.open; }
  get rtReady() { return !!(this.rt && this.rt.open); }

  _newPeer(id) {
    return new Peer(id, { debug: 0 });
  }

  // ---- ホスト: 部屋を作って待つ ----
  async host(attempt = 0) {
    this.close();
    this.role = 'host';
    this.setState('opening');
    const code = makeCode();
    return new Promise((resolve, reject) => {
      const peer = this._newPeer(PREFIX + code);
      this.peer = peer;
      let settled = false;

      peer.on('open', () => {
        this.code = code;
        settled = true;
        this.setState('waiting');
        resolve(code);
      });
      peer.on('connection', (conn) => {
        if (conn.label === RT_LABEL) { this._bindRT(conn); return; }
        // 先着の1台だけ受け付ける
        if (this.conn) { conn.close(); return; }
        this._bind(conn);
      });
      peer.on('error', (e) => {
        // コードが埋まっていたら別のコードで取り直す
        if (!settled && e.type === 'unavailable-id' && attempt < 5) {
          peer.destroy();
          this.host(attempt + 1).then(resolve, reject);
          return;
        }
        if (!settled) { this.setState('error', describeError(e)); reject(e); }
        else this.setState('error', describeError(e));
      });
    });
  }

  // ---- ゲスト: 部屋コードで入る ----
  async join(code) {
    this.close();
    this.role = 'guest';
    this.code = normalizeCode(code);
    this.setState('connecting');
    return new Promise((resolve, reject) => {
      const peer = this._newPeer(null);
      this.peer = peer;
      let settled = false;

      peer.on('open', () => {
        const conn = peer.connect(PREFIX + this.code, { reliable: true });
        // 相手がいない場合 PeerJS は open を返さないので自前でタイムアウトする
        const timer = setTimeout(() => {
          if (!settled) {
            settled = true;
            this.setState('error', 'その部屋コードの相手が見つかりません');
            reject(new Error('timeout'));
          }
        }, 12000);
        conn.on('open', () => {
          clearTimeout(timer);
          settled = true;
          this._bind(conn);
          this._openRT(peer);
          resolve();
        });
      });
      peer.on('error', (e) => {
        if (!settled) {
          settled = true;
          this.setState('error', describeError(e));
          reject(e);
        } else this.setState('error', describeError(e));
      });
    });
  }

  _bind(conn) {
    this.conn = conn;
    conn.on('data', (m) => this._onData(m));
    conn.on('close', () => { this.setState('closed'); this.conn = null; });
    conn.on('error', (e) => this.setState('error', describeError(e)));
    this.setState('connected');
    clearInterval(this._pingTimer);
    this._pingTimer = setInterval(() => {
      if (this.connected) this.send({ t: 'ping', a: performance.now() });
    }, 1000);
  }

  // 状態同期はリアルタイム用チャンネルで送る。
  // 順序保証ありのチャンネルだと、1 パケット落ちただけで後続が全部待たされ
  // (head-of-line blocking)、取り戻したときにまとめて届いてカクつく。
  // 古いスナップショットは使い道が無いので、落ちてくれたほうがよい。
  // まだ開いていなければ制御チャンネルに流す（繋がりはする）
  _openRT(peer) {
    try {
      const rt = peer.connect(PREFIX + this.code, { reliable: false, label: RT_LABEL });
      rt.on('open', () => { this.rt = rt; });
      rt.on('close', () => { if (this.rt === rt) this.rt = null; });
      rt.on('error', () => { if (this.rt === rt) this.rt = null; });
      rt.on('data', (m) => this._onData(m));
    } catch (e) { /* 張れなくても制御チャンネルで動く */ }
  }

  _bindRT(conn) {
    conn.on('open', () => { this.rt = conn; });
    conn.on('data', (m) => this._onData(m));
    conn.on('close', () => { if (this.rt === conn) this.rt = null; });
    conn.on('error', () => { if (this.rt === conn) this.rt = null; });
    if (conn.open) this.rt = conn;
  }

  _onData(m) {
    if (m && m.t === 'ping') { this.send({ t: 'pong', a: m.a }); return; }
    if (m && m.t === 'pong') { this.pingMs = Math.round(performance.now() - m.a); return; }
    this.onMessage(m);
  }

  send(msg) {
    if (this.conn && this.conn.open) {
      try { this.conn.send(msg); } catch (e) { /* 送信失敗は次のフレームで取り返す */ }
    }
  }

  sendRT(msg) {
    const c = (this.rt && this.rt.open) ? this.rt : this.conn;
    if (c && c.open) {
      try { c.send(msg); } catch (e) { /* 落ちてよい種類のメッセージ */ }
    }
  }

  close() {
    clearInterval(this._pingTimer);
    this._pingTimer = null;
    if (this.rt) { try { this.rt.close(); } catch (e) { /* already gone */ } this.rt = null; }
    if (this.conn) { try { this.conn.close(); } catch (e) { /* already gone */ } this.conn = null; }
    if (this.peer) { try { this.peer.destroy(); } catch (e) { /* already gone */ } this.peer = null; }
    this.role = null;
    this.code = '';
    this.pingMs = 0;
    if (this.state !== 'idle') this.setState('idle');
  }
}

function describeError(e) {
  const t = e && e.type;
  if (t === 'peer-unavailable') return 'その部屋コードの相手が見つかりません';
  if (t === 'unavailable-id') return '部屋コードが使用中です';
  if (t === 'network' || t === 'server-error') return '接続サーバーに繋がりません';
  if (t === 'browser-incompatible') return 'このブラウザは通信対戦に対応していません';
  return (e && (e.message || e.type)) || '接続エラー';
}
