import * as THREE from 'three';
import * as C from './config.js';
import { buildStage, prefetchStage, STAGES, STAGE_ORDER, DEFAULT_STAGE } from './stages.js';
import { Mech, EMPTY_INPUT } from './mech.js';
import { loadMechParts } from './mechmodel.js';
import { Projectiles, FX } from './combat.js';
import { ChaseCamera } from './camera.js';
import { Input } from './input.js';
import { AI } from './ai.js';
import { HUD } from './hud.js';
import { Collision } from './collision.js';
import { Net, normalizeCode } from './net.js';
import { packSnapshot, applyMech } from './netsync.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const app = document.getElementById('app');
const isMobile = matchMedia('(pointer: coarse)').matches || innerWidth < 760;

// ---------- renderer ----------
const renderer = new THREE.WebGLRenderer({
  antialias: !isMobile,
  powerPreference: 'high-performance',
  preserveDrawingBuffer: import.meta.env.DEV,   // 開発時のキャプチャ用。本番では無効
});
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = isMobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(52, 1, 0.5, 1200);
const chase = new ChaseCamera(camera);

const collision = new Collision([]);
let arena = null;
let stageId = localStorage.getItem('gvs.stage') || DEFAULT_STAGE;
if (!STAGES[stageId]) stageId = DEFAULT_STAGE;

// ステージを差し替える。GLB を読むものがあるので非同期
let stageLoading = null;
async function setStage(id) {
  if (arena && arena.id === id) return;
  const p = (async () => {
    const built = await buildStage(scene, renderer, id);
    if (arena) arena.dispose();
    built.id = id;
    arena = built;
    chase.colliders = arena.buildings;   // カメラがビルにめり込まないように
    collision.boxes = arena.boxes;
    camera.far = arena.far;
    camera.updateProjectionMatrix();
  })();
  stageLoading = p;
  try { await p; } finally { if (stageLoading === p) stageLoading = null; }
}

// ---------- ポストプロセス ----------
// ビーム・サーベル・スラスターは加算合成の発光体として描いているので、
// ブルームが無いとただの明るい単色に見える。threshold を上げて
// 発光体だけ拾い、機体や地面はにじませない。
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(1, 1),
  isMobile ? 0.42 : 0.55,   // strength
  isMobile ? 0.45 : 0.55,   // radius
  0.86,                     // threshold: 発光体だけ拾う
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

function renderFrame() { composer.render(); }

// ---------- world ----------
const fx = new FX(scene);
const world = {
  scene, fx, collision,
  projectiles: null,
  mechs: [],
  // ゲストが自機を先読みしている間は true。
  // 予測はあくまで見た目の話なので、弾を出したりダメージを与えたりはさせない
  // （ホストから届く本物と二重になる）
  predicting: false,
  spawnShot(owner, key) { if (world.predicting) return; world.projectiles.spawn(owner, key); },
  hit(attacker, victim, dmg, down, dir, knock, kind) {
    if (world.predicting) return;
    const d = victim.takeHit(attacker, dmg, down, dir, knock, kind);
    if (d > 0 && (victim === game.self || attacker === game.self)) chase.bump(kind === 'melee' ? 0.55 : 0.3);
  },
  onDeath(victim, attacker) {
    const side = victim.team === 'ally' ? 'ally' : 'foe';
    game.cost[side] = Math.max(0, game.cost[side] - victim.d.cost);
    chase.bump(1.2);
    const last = game.cost[side] <= 0;
    if (last) {
      // 最後の1機。すぐリザルトを出さず、撃墜演出に入る
      startFinish(side === 'ally' ? 'lose' : 'win', victim);
    } else {
      hud.message(victim === game.self ? 'DOWN...' : 'DESTROYED', victim === game.self ? '#ff6b74' : '#ffcf4d');
      hitStop(0.09, 0.12);      // 通常の撃墜にも軽い溜め
    }
  },
  // ステップすると自分に向かってきている敵弾の誘導が切れる。
  // このジャンルで「ステップが防御の要」になる仕組みで、これが無いと
  // 誘導が強い射撃から距離を取っても逃げ切れない。
  breakHoming(mech) {
    let n = 0;
    for (const p of world.projectiles.list) {
      if (p.owner.team !== mech.team && p.homing > 0) { p.homing = 0; n++; }
    }
    return n;
  },
  msg(t) { hud.message(t, '#ffcf4d'); },
};
world.projectiles = new Projectiles(world);

const hud = new HUD();
const input = new Input();

// ---------- game ----------
const game = {
  self: null, foe: null, ai: null, camera,
  cost: { ally: C.TEAM_COST, foe: C.TEAM_COST },
  time: C.BATTLE_TIME,
  running: false,
  paused: false,
  over: false,
  mode: 'cpu',          // 'cpu' | 'host' | 'guest'

  init(selfId = 'brave', foeId = 'garm', level = 'normal') {
    for (const m of world.mechs) { scene.remove(m.root); if (m.trail) scene.remove(m.trail.mesh); }
    world.mechs.length = 0;
    world.projectiles.clear();
    fx.clear();

    const self = new Mech(C.MECHS[selfId], 'ally', world);
    const foe = new Mech(C.MECHS[foeId], 'foe', world);
    self.isPlayer = true;
    self.target = foe;
    foe.target = self;
    self.pos.set(0, 0, -42); self.yaw = 0;
    foe.pos.set(0, 0, 42); foe.yaw = Math.PI;
    world.mechs.push(self, foe);

    this.self = self; this.foe = foe;
    // 通信対戦では相手は人間なので CPU を作らない
    this.ai = this.mode === 'cpu' ? new AI(foe, world, level) : null;
    this.cost.ally = C.TEAM_COST;
    this.cost.foe = C.TEAM_COST;
    this.time = C.BATTLE_TIME;
    this.over = false;

    hud.setup(self, foe);
    chase.snap(self, foe);
  },

  finish(result) {
    if (this.over) return;
    this.over = true;
    this.running = false;
    this.paused = false;
    document.getElementById('pauseBtn').classList.add('hidden');
    document.getElementById('pauseMenu').classList.add('hidden');
    document.getElementById('touch').classList.add('hidden');
    const el = document.getElementById('result');
    const title = document.getElementById('resTitle');
    title.textContent = result === 'win' ? 'MISSION COMPLETE' : result === 'lose' ? 'MISSION FAILED' : 'DRAW';
    title.className = result === 'win' ? 'win' : 'lose';
    el.classList.remove('hidden');
    // 通信対戦ではホストだけが決着を判定し、結果を相手に伝える
    if (this.mode === 'host' && net.connected && !finishSeq.active) net.send({ t: 'end', r: result });
    // 通信対戦では「もう一度」は片方だけでは成立しないので隠す
    $('againBtn').classList.toggle('hidden', this.mode !== 'cpu');
  },
};

// ---------- loop ----------
let viewW = 0, viewH = 0;
function resize() {
  const w = Math.max(1, Math.floor(visualViewport ? visualViewport.width : innerWidth));
  const h = Math.max(1, Math.floor(visualViewport ? visualViewport.height : innerHeight));
  if (w === viewW && h === viewH) return;
  viewW = w; viewH = h;
  renderer.setSize(w, h, false);           // updateStyle=false (CSSで100%指定済み)
  composer.setSize(w, h);
  // ブルームはぼかしなので内部解像度を落としても見た目がほぼ変わらない。
  // スマホでは半分にして塗りつぶし負荷を 1/4 にする
  const bq = isMobile ? 0.5 : 1;
  bloom.setSize(Math.max(1, Math.floor(w * bq)), Math.max(1, Math.floor(h * bq)));
  camera.aspect = w / h;
  const portrait = h > w;
  chase.portrait = portrait;
  camera.fov = portrait ? 62 : (camera.aspect < 1.7 ? 54 : 48);
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

function tick(dt) {
  // ポーズ中は入力もシミュレーションも進めない（描画だけ続く）
  if (game.paused) { input.read(); input.endFrame(); return; }

  const inp = game.running ? input.read() : EMPTY_INPUT;

  if (game.mode === 'guest') {
    netGuestTick(dt, inp);
    input.endFrame();
    return;
  }

  if (game.running && !game.over) {
    game.time -= dt;
    if (game.time <= 0) {
      game.time = 0;
      const r = game.cost.ally === game.cost.foe ? 'draw' : (game.cost.ally > game.cost.foe ? 'win' : 'lose');
      game.finish(r);
    }
  }

  // 相手の入力: CPU か、通信相手から届いたもの
  const foeInp = game.mode === 'host' ? netRemoteInput() : (game.ai ? game.ai.update(dt) : EMPTY_INPUT);
  if (game.self) game.self.update(dt, game.running ? inp : EMPTY_INPUT);
  if (game.foe) game.foe.update(dt, game.running ? foeInp : EMPTY_INPUT);

  world.projectiles.update(dt, world.mechs);
  fx.update(dt);
  if (!finishSeq.active) chase.update(dt, game.self, game.foe);
  if (game.self) hud.update(dt, game);

  if (game.mode === 'host') netHostSend(dt);
  updatePing();
  input.endFrame();
}

let pingAcc = 0;
function updatePing() {
  const el = $('netPing');
  if (game.mode === 'cpu' || !net.connected) { el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  if (++pingAcc % 30 === 0) el.textContent = `PING ${net.pingMs}ms`;
}

let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  resize();
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.1) dt = 0.1;      // タブ復帰時の巨大 dt をクランプ
  updateStandby(dt);           // 演出は実時間で進める
  updateFinish(dt);
  updateFlash(dt);
  tick(dt * timeScale);
  renderFrame();
}

let level = localStorage.getItem('gvs.level') || 'easy';
for (const b of document.querySelectorAll('#lvPick .lv')) {
  b.classList.toggle('on', b.dataset.lv === level);
  b.addEventListener('click', () => {
    level = b.dataset.lv;
    localStorage.setItem('gvs.level', level);
    for (const o of document.querySelectorAll('#lvPick .lv')) o.classList.toggle('on', o === b);
  });
}

// ---------- 機体選択 ----------
const MOVE_ROWS = [
  ['射撃', (m) => m.weapons.shot],
  ['サブ', (m) => m.weapons.sub],
  ['特射', (m) => m.weapons.sp_shot],
  ['特格', (m) => m.weapons.sp_melee],
];

let selfId = localStorage.getItem('gvs.self') || 'brave';
let foeId = localStorage.getItem('gvs.foe') || 'garm';
if (!C.MECHS[selfId]) selfId = 'brave';
if (!C.MECHS[foeId]) foeId = 'garm';

function describe(id) {
  const m = C.MECHS[id];
  const el = document.getElementById('mechInfo');
  const moves = MOVE_ROWS.map(([label, get]) => {
    const w = get(m);
    return w ? `<div><i>${label}</i><span>${w.name}</span></div>` : '';
  }).join('');
  const melee = C.MELEE_DIRS.map((dk) => {
    const v = m.melee[dk];
    return v ? `<div><i>${v.label}</i><span>${v.stages.length}段 / 総${v.stages.reduce((a, s) => a + s.dmg, 0)}</span></div>` : '';
  }).join('');
  el.innerHTML = `
    <div class="miTop"><span class="miName">${m.name}</span><span class="miRole">${m.role}</span></div>
    <div class="miDesc">${m.desc}</div>
    <div class="miStats">
      <span><b>コスト</b>${m.cost}</span><span><b>耐久</b>${m.hp}</span>
      <span><b>歩き</b>${m.walk}</span><span><b>BD</b>${m.bdSpeed}</span>
    </div>
    <div class="miMoves">${moves}${melee}</div>`;
}

function buildPicker(containerId, isFoe) {
  const box = document.getElementById(containerId);
  box.innerHTML = '';
  for (const id of C.MECH_ORDER) {
    const m = C.MECHS[id];
    const b = document.createElement('button');
    b.className = 'mp' + (isFoe ? ' foeSel' : '');
    b.dataset.id = id;
    b.innerHTML = `<span class="mpChip">${m.cost}</span>
                   <span class="mpName">${m.name}</span>
                   <span class="mpCost">${m.role}</span>`;
    b.addEventListener('click', () => {
      if (isFoe) { foeId = id; localStorage.setItem('gvs.foe', id); }
      else { selfId = id; localStorage.setItem('gvs.self', id); describe(id); }
      for (const o of box.children) o.classList.toggle('on', o === b);
      if (!game.running) game.init(selfId, foeId, level);   // 背景プレビューを更新
    });
    box.appendChild(b);
  }
  const cur = isFoe ? foeId : selfId;
  for (const o of box.children) o.classList.toggle('on', o.dataset.id === cur);
}

buildPicker('selfPick', false);
buildPicker('foePick', true);
describe(selfId);

// ---------- ステージ選択 ----------
function buildStagePicker() {
  const box = document.getElementById('stagePick');
  box.innerHTML = '';
  for (const id of STAGE_ORDER) {
    const s = STAGES[id];
    const b = document.createElement('button');
    b.className = 'sp';
    b.dataset.id = id;
    b.innerHTML = `<span class="spName">${s.name}</span><span class="spDesc">${s.desc}</span>`;
    b.addEventListener('click', () => pickStage(id));
    // 触れた時点で裏で取りに行く。起動時に全部落とすと、
    // 遊ばないステージのぶんまで毎回ダウンロードすることになる
    b.addEventListener('pointerenter', () => prefetchStage(id), { once: true });
    box.appendChild(b);
  }
  markStage();
}
function markStage() {
  for (const o of document.getElementById('stagePick').children) {
    o.classList.toggle('on', o.dataset.id === stageId);
  }
}
async function pickStage(id) {
  if (id === stageId && arena) return;
  stageId = id;
  localStorage.setItem('gvs.stage', id);
  markStage();
  const box = document.getElementById('stagePick');
  box.classList.add('loading');
  try {
    await setStage(id);
    if (!game.running) game.init(selfId, foeId, level);   // 背景プレビューを作り直す
  } catch (e) {
    console.error(e);
    hud.message('ステージを読み込めませんでした', '#ff6b74');
    stageId = DEFAULT_STAGE; markStage();
    await setStage(DEFAULT_STAGE);
  } finally {
    box.classList.remove('loading');
  }
}
buildStagePicker();

// ---------- 起動 ----------
// タイトルの背景には選択中の組み合わせを出す
(async () => {
  // Blender 製の機体パーツ。読めなければ手続き生成のプリミティブに落ちる
  const asset = (f) => `${import.meta.env.BASE_URL}${f}`;
  try {
    await loadMechParts(asset('models/mechparts.glb'), asset('draco/'));
  } catch (e) {
    console.warn('機体パーツを読み込めませんでした。簡易モデルで続行します', e);
  }
  try {
    await setStage(stageId);
  } catch (e) {
    console.error(e);
    stageId = DEFAULT_STAGE; markStage();
    await setStage(DEFAULT_STAGE);
  }
  game.init(selfId, foeId, level);
  last = performance.now();
  requestAnimationFrame(frame);
})();

const $ = (id) => document.getElementById(id);

// ==================== 開幕のスタンバイ ====================
// バトル開始直後に少し間を置き、READY → FIGHT で始める。
// この間は game.running が false なので入力も戦闘タイマーも進まない。
// 機体は EMPTY_INPUT で更新され続けるので、棒立ちではなく待機モーションが出る。
// 演出は実時間で進める（撃墜演出と同じ理由: timeScale に引きずられない）
const STANDBY = { total: 2.0, fight: 0.66 };
let standbyT = 0;

function showReady(text, cls) {
  const b = $('readyBanner');
  $('readyText').textContent = text;
  b.className = '';
  void b.offsetWidth;          // アニメーションを最初から流し直す
  b.className = cls;
}
function hideReady() { $('readyBanner').className = ''; }

function startStandby() {
  standbyT = STANDBY.total;
  game.running = false;
  // 引いた位置から始めて、FIGHT に向けてゆっくり寄る
  chase.intro = 1;
  chase.snap(game.self, game.foe);
  showReady('READY', 'ready');
}

function updateStandby(dt) {
  if (standbyT <= 0 || game.paused) return;
  const prev = standbyT;
  standbyT -= dt;
  // 残り時間の 1.5 乗。最初は速く引きが取れて、最後はぴたりと収まる
  chase.intro = Math.pow(Math.max(0, standbyT) / STANDBY.total, 1.5);
  if (prev > STANDBY.fight && standbyT <= STANDBY.fight) {
    showReady('FIGHT!', 'fight');
    chase.bump(0.35);
  }
  if (standbyT <= 0) endStandby();
}

// スタンバイを終えて動けるようにする
function endStandby() {
  standbyT = 0;
  chase.intro = 0;
  game.running = true;
}

// 対戦そのものをやめる。こちらは running を立てない
function cancelStandby() {
  standbyT = 0;
  chase.intro = 0;
  hideReady();
}

// ==================== 撃墜演出 ====================
// 最後の1機を落としたとき、すぐリザルトを出さずに
// ヒットストップ → スローモーション → 寄りのカメラ → 爆発 → リザルト
// の順で見せる。演出そのものは実時間で進み、シミュレーションだけが遅くなる。

let timeScale = 1;
let hitStopT = 0, hitStopScale = 1;

// 一瞬だけ時間を潰す（当たった感を出す）
function hitStop(dur, scale) {
  hitStopT = Math.max(hitStopT, dur);
  hitStopScale = scale;
}

const FIN = {
  stop: 0.14,      // 完全に近い静止
  slow: 1.45,      // スローモーション終わり
  ramp: 2.35,      // 等速へ戻し終わり
  result: 2.75,    // リザルト表示
};

const finishSeq = { active: false, t: 0, result: null, victim: null, nextBoom: 0, shown: false };

function startFinish(result, victim) {
  if (finishSeq.active || game.over) return;
  finishSeq.active = true;
  finishSeq.t = 0;
  finishSeq.result = result;
  finishSeq.victim = victim;
  finishSeq.nextBoom = 0.35;
  finishSeq.shown = false;

  game.running = false;          // 入力も CPU も止める（機体は落下・爆散だけする）
  chase.endFocus();
  chase.bump(1.4);
  fx.finishBlast(victim.pos);
  flash(0.85, 0.5);
  showFinishBanner(result === 'win' ? 'DESTROYED' : 'SHOT DOWN');

  $('touch').classList.add('hidden');
  $('pauseBtn').classList.add('hidden');

  // 相手にも同じ演出を始めさせる（結果は相手視点で反転）
  if (game.mode === 'host' && net.connected) {
    net.send({ t: 'fin', r: result, v: world.mechs.indexOf(victim) });
  }
}

function updateFinish(dt) {
  // ヒットストップは演出中かどうかに関わらず効く
  if (hitStopT > 0) {
    hitStopT -= dt;
    timeScale = hitStopScale;
    if (hitStopT <= 0) timeScale = 1;
  } else if (!finishSeq.active) {
    timeScale = 1;
  }

  if (!finishSeq.active) return;
  const f = finishSeq;
  f.t += dt;

  // 時間の伸縮
  if (f.t < FIN.stop) timeScale = 0.06;
  else if (f.t < FIN.slow) timeScale = 0.24;
  else if (f.t < FIN.ramp) {
    const q = (f.t - FIN.slow) / (FIN.ramp - FIN.slow);
    timeScale = 0.24 + q * 0.76;
  } else timeScale = 1;

  // 追い討ちの小爆発
  if (f.t < FIN.ramp && f.t >= f.nextBoom) {
    f.nextBoom = f.t + 0.22 + Math.random() * 0.2;
    fx.secondary(f.victim.pos, 4.5);
    chase.bump(0.35);
  }

  // カメラは倒された機体に寄る
  chase.focusOn(f.victim, f.t, dt);

  if (!f.shown && f.t >= FIN.result) {
    f.shown = true;
    game.finish(f.result);
  }
}

function endFinish() {
  finishSeq.active = false;
  finishSeq.victim = null;
  timeScale = 1;
  hitStopT = 0;
  chase.endFocus();
  $('finishBanner').classList.remove('on');
  $('flash').style.opacity = '0';
}

// 白フラッシュ。CSS のトランジションではなく手で減衰させる
let flashV = 0, flashDecay = 1;
function flash(v, decay) { flashV = Math.max(flashV, v); flashDecay = decay; }
function updateFlash(dt) {
  if (flashV <= 0) return;
  flashV = Math.max(0, flashV - dt / flashDecay);
  $('flash').style.opacity = String(flashV);
}

function showFinishBanner(text) {
  const b = $('finishBanner');
  $('finishText').textContent = text;
  b.classList.remove('on');
  void b.offsetWidth;          // アニメーションを頭から再生させる
  b.classList.add('on');
}

// ==================== 通信対戦 ====================
// ホストが両機をシミュレーションし、ゲストは自分の入力を送って結果を描画する。
const net = new Net();
const SNAPSHOT_HZ = 30;
const INPUT_HZ = 30;

// エッジ入力（格闘・ステップ等）は「押した回数」を送る。
// 毎フレームの真偽値だと、送信とホストのフレームがズレたときに
// 取りこぼしたり二重に出たりする。差分なら順序が入れ替わっても拾える。
const EDGE_KEYS = ['stepPressed', 'melee', 'sub', 'sp_shot', 'sp_melee', 'awake'];
const localCounts = {};
const remoteCounts = {};
const remoteSeen = {};
for (const k of EDGE_KEYS) { localCounts[k] = 0; remoteCounts[k] = 0; remoteSeen[k] = 0; }

const remoteInput = { ...EMPTY_INPUT };
let netSendAcc = 0;
let snapSeq = 0;
let lastSnapshot = null;
let guestReady = false;

// エッジ入力は「押した回数」で送るので、送信が毎フレームである必要はない。
// 貯めるのは毎フレーム、送るのは 30Hz。取りこぼしは出ない。
// 使い回しのオブジェクトに詰める（毎フレーム作ると GC が回る）
const _inMsg = { t: 'in', x: 0, y: 0, j: 0, s: 0, e: [] };
let inSendAcc = 0;

function netAccumInput(inp) {
  for (const k of EDGE_KEYS) if (inp[k]) localCounts[k]++;
}

function netSendInput(dt, inp) {
  inSendAcc += dt;
  if (inSendAcc < 1 / INPUT_HZ) return;
  inSendAcc = 0;
  _inMsg.x = Math.round(inp.mx * 100) / 100;
  _inMsg.y = Math.round(inp.my * 100) / 100;
  _inMsg.j = inp.jump ? 1 : 0;
  _inMsg.s = inp.shot ? 1 : 0;
  for (let i = 0; i < EDGE_KEYS.length; i++) _inMsg.e[i] = localCounts[EDGE_KEYS[i]];
  net.sendRT(_inMsg);
}

// ホスト側: 届いた入力を 1 フレームぶんの入力に変換する
function netRemoteInput() {
  const o = remoteInput;
  for (const k of EDGE_KEYS) {
    o[k] = remoteCounts[k] > remoteSeen[k];
    if (o[k]) remoteSeen[k]++;      // 溜まっていたら 1 フレームに 1 回ずつ消化する
  }
  return o;
}

function netOnMessage(m) {
  if (!m) return;
  if (m.t === 'in') {
    remoteInput.mx = m.x; remoteInput.my = m.y;
    remoteInput.jump = !!m.j; remoteInput.shot = !!m.s;
    for (let i = 0; i < EDGE_KEYS.length; i++) remoteCounts[EDGE_KEYS[i]] = m.e[i];
    return;
  }
  if (m.t === 'hello') {           // ゲストが機体を伝えてきた
    guestFoeId = C.MECHS[m.mech] ? m.mech : 'garm';
    net.send({ t: 'start', h: selfId, g: guestFoeId, st: stageId });
    startNetBattle('host');
    return;
  }
  if (m.t === 'start') {           // ホストが開始を宣言
    hostMechId = C.MECHS[m.h] ? m.h : 'brave';
    // ステージはホストに合わせる。読み込み待ちの間に来るスナップショットは
    // guestReady が立つまで捨てられるので、遅れても追いつける
    const want = STAGES[m.st] ? m.st : DEFAULT_STAGE;
    if (want !== stageId || !arena) {
      netStatusText('netJoinStatus', 'ステージを読み込んでいます…');
      setStage(want)
        .then(() => { stageId = want; markStage(); startNetBattle('guest'); })
        .catch(() => { netStatusText('netJoinStatus', 'ステージを読み込めませんでした', true); net.close(); });
    } else {
      startNetBattle('guest');
    }
    return;
  }
  if (m.t === 's') { lastSnapshot = m; guestReady = true; return; }
  if (m.t === 'fin') {
    // ホストが最後の1機を落とした。こちらでも同じ演出を回す
    const victim = world.mechs[m.v];
    const mine = m.r === 'win' ? 'lose' : m.r === 'lose' ? 'win' : 'draw';
    if (victim) startFinish(mine, victim);
    else game.finish(mine);
    return;
  }
  if (m.t === 'end') {
    // 演出中なら、その終わりでリザルトが出るので何もしない
    if (finishSeq.active) return;
    game.finish(m.r === 'win' ? 'lose' : m.r === 'lose' ? 'win' : 'draw');
    return;
  }
  if (m.t === 'menu') { opponentLeft(); return; }
}

let guestFoeId = 'garm';   // ホストから見た相手の機体
let hostMechId = 'brave';  // ゲストから見た相手の機体

function netHostSend(dt) {
  netSendAcc += dt;
  if (netSendAcc < 1 / SNAPSHOT_HZ) return;
  netSendAcc = 0;
  if (!net.connected) return;
  net.sendRT(packSnapshot(game, world, ++snapSeq));
}

// ゲスト側: シミュレーションはせず、受け取った状態を反映して描く
// 自機を先読みしてよい状態か。よろけ・ダウン・撃墜中は操作が効かないので、
// 予測しても外れるだけ。素直にホストの値に従う
const PREDICTABLE = new Set(['free', 'step', 'land', 'fire', 'rush', 'swing']);
const PREDICT_SNAP = 3.0;     // これ以上ずれたら補間せず即座に合わせる

function netGuestTick(dt, inp) {
  if (net.connected) { netAccumInput(inp); netSendInput(dt, inp); }

  const me = world.mechs[1];    // ゲストから見た自機
  const predict = !!me && game.running && PREDICTABLE.has(me.st);

  const snap = lastSnapshot;
  if (snap) {
    lastSnapshot = null;
    // world.mechs[0] がホスト機、[1] がゲスト機。ゲストから見た自機は [1]
    applyMech(world.mechs[0], snap.m[0], 0.4);
    // 自機は予測で動かしているので、位置は弱く引き戻すだけにする。
    // 毎回 0.4 で引くと自分の操作と綱引きになってガタつく。
    // ただし大きく離れたら見た目より正しさを優先して即合わせる
    const a = snap.m[1];
    const err = predict
      ? Math.hypot(me.pos.x - a[0], me.pos.y - a[1], me.pos.z - a[2])
      : 0;
    applyMech(me, a, predict ? (err > PREDICT_SNAP ? 1 : 0.18) : 0.4);
    world.projectiles.syncShots(snap.p, world.mechs, C.WEAPON_ORDER);
    world.projectiles.syncBits(snap.b, world.mechs);
    world.projectiles.syncBeams(snap.l, world.mechs);
    game.time = snap.tm;
    game.cost.ally = snap.c[1];    // 表示は自分＝ゲスト側が ALLY
    game.cost.foe = snap.c[0];
    for (const m of world.mechs) {
      if (m.hp < m.netPrevHp) fxHitAt(m);
      if (m.st === 'dead' && m.netPrevSt !== 'dead') fx.explode(m.pos);
      m.netPrevHp = m.hp; m.netPrevSt = m.st;
    }
  }

  // 自機だけはホストと同じコードでローカルに動かす（クライアント予測）。
  // これが無いと自機が「入力 → ホスト → スナップショット」を待ってから
  // 動き出すので、RTT ぶんまるごと操作が遅れて「重い」と感じる。
  // 弾やダメージはホストが出す本物だけを使うので、予測中は捨てる
  if (predict) {
    world.predicting = true;
    me.update(dt, inp);
    world.predicting = false;
  }

  // 相手機（と予測できない状態の自機）は速度で外挿して滑らかに見せる
  for (const m of world.mechs) {
    if (m.st === 'dead') { m.root.visible = false; continue; }
    m.root.visible = true;
    if (predict && m === me) continue;      // update() が位置も姿勢も進めている
    m.pos.addScaledVector(m.vel, dt);
    m.root.position.copy(m.pos);
    m.root.rotation.y = m.yaw;
    const shFloor = collision.floorAt(m.pos.x, m.pos.z);
    const sh = m.root.userData.shadow;
    sh.position.y = shFloor - m.pos.y + 0.03;
    m.animT += dt; m.stT += dt;
    m.pose(dt);
    m.updateTrail();
  }
  world.projectiles.extrapolate(dt);
  fx.update(dt);
  if (!finishSeq.active) chase.update(dt, game.self, game.foe);
  if (game.self) hud.update(dt, game);
  updatePing();
}

function fxHitAt(m) {
  const p = m.pos.clone(); p.y += 1.6;
  fx.hit(p, m.d.palette.beam);
}

// 通信対戦の開始。ホストとゲストで自機/相手機の割り当てが逆になる
function startNetBattle(role) {
  endFinish();
  game.mode = role;
  const hostId = role === 'host' ? selfId : hostMechId;
  const guestId = role === 'host' ? guestFoeId : selfId;
  game.init(hostId, guestId, level);
  // world.mechs は [ホスト機, ゲスト機] の順。自分の機体を self にする
  const mine = role === 'host' ? world.mechs[0] : world.mechs[1];
  const theirs = role === 'host' ? world.mechs[1] : world.mechs[0];
  game.self = mine; game.foe = theirs;
  mine.isPlayer = true; theirs.isPlayer = false;
  for (const m of world.mechs) { m.netPrevHp = m.hp; m.netPrevSt = m.st; }
  for (const k of EDGE_KEYS) { localCounts[k] = 0; remoteCounts[k] = 0; remoteSeen[k] = 0; }
  lastSnapshot = null; guestReady = false; snapSeq = 0;

  hud.setup(mine, theirs);
  chase.snap(mine, theirs);
  closeNetPanel();
  $('gate').classList.add('hidden');
  hud.show();
  game.paused = false;
  game.over = false;
  $('pauseMenu').classList.add('hidden');
  $('pauseBtn').classList.remove('hidden');
  $('result').classList.add('hidden');
  $('touch').classList.remove('hidden');
  last = performance.now();
  // ホストとゲストで開始の合図が RTT ぶんずれるが、
  // 2 秒の間があるおかげで実質そろう（回線が落ち着く時間にもなる）
  startStandby();
}

function opponentLeft() {
  if (game.mode === 'cpu') return;
  hud.message('相手が退出しました', '#ff6b74');
  net.close();
  setTimeout(toMainMenu, 1200);
}


function setPaused(on) {
  // 通信対戦では相手の時間を止められないので、こちらも止めない。
  // 「PAUSE」と名乗らず、メニューだけ開く
  const canFreeze = game.mode === 'cpu';
  game.paused = on && canFreeze;
  $('pauseMenu').querySelector('h2').textContent = canFreeze ? 'PAUSE' : 'MENU';
  $('resumeBtn').textContent = canFreeze ? '続ける' : '戻る';
  $('pauseMenu').classList.toggle('hidden', !on);
  $('touch').classList.toggle('hidden', on);   // 誤爆防止で操作系を隠す
  last = performance.now();                    // 再開時に dt が飛ばないように
}

function startBattle() {
  endFinish();
  game.mode = 'cpu';
  game.init(selfId, foeId, level);
  game.paused = false;
  $('pauseMenu').classList.add('hidden');
  $('pauseBtn').classList.remove('hidden');
  $('result').classList.add('hidden');
  $('touch').classList.remove('hidden');
  last = performance.now();
  startStandby();
}

// 対戦をやめてタイトルへ戻る
function toMainMenu() {
  endFinish();
  cancelStandby();
  if (net.connected) net.send({ t: 'menu' });
  net.close();
  closeNetPanel();
  game.mode = 'cpu';
  $('netPing').classList.add('hidden');
  game.running = false;
  game.paused = false;
  game.over = false;
  $('pauseMenu').classList.add('hidden');
  $('pauseBtn').classList.add('hidden');
  $('result').classList.add('hidden');
  $('touch').classList.add('hidden');
  hud.hide();
  $('gate').classList.remove('hidden');
  game.init(selfId, foeId, level);   // 背景を選択中の組み合わせに戻す
  last = performance.now();
}

// ---------- 通信対戦の画面まわり ----------
let uiMode = 'cpu';    // タイトルで選んでいるモード

function setUiMode(m) {
  uiMode = m;
  for (const b of document.querySelectorAll('#modePick .md')) b.classList.toggle('on', b.dataset.mode === m);
  $('lvPick').classList.toggle('hidden', m !== 'cpu');
  $('startBtn').classList.toggle('hidden', m !== 'cpu');
  $('netPick').classList.toggle('hidden', m !== 'net');
  $('foePick').parentElement.classList.toggle('hidden', m !== 'cpu');  // 相手機はホストが決めない
  $('stageNote').textContent = m === 'cpu' ? '' : '部屋を作った側のものが使われます';
}

function openNetPanel(kind) {
  $('netPanel').classList.remove('hidden');
  $('netTitle').textContent = kind === 'host' ? '部屋を作る' : '部屋に入る';
  $('netHostBox').classList.toggle('hidden', kind !== 'host');
  $('netJoinBox').classList.toggle('hidden', kind !== 'join');
  $('netStatus').className = 'netStatus';
  $('netJoinStatus').className = 'netStatus';
  $('netJoinStatus').textContent = '';
}
function closeNetPanel() { $('netPanel').classList.add('hidden'); }

function netStatusText(el, msg, isErr) {
  const e = $(el);
  e.textContent = msg;
  e.className = 'netStatus' + (isErr ? ' err' : '');
}

net.onMessage = netOnMessage;
net.onState = (st, err) => {
  if (st === 'waiting') netStatusText('netStatus', '相手の接続を待っています…');
  if (st === 'connected' && net.role === 'host') netStatusText('netStatus', '接続しました。開始します…');
  if (st === 'connected' && net.role === 'guest') netStatusText('netJoinStatus', '接続しました。開始を待っています…');
  if (st === 'error') {
    netStatusText(net.role === 'guest' ? 'netJoinStatus' : 'netStatus', err || '接続エラー', true);
  }
  if (st === 'closed' && game.running) opponentLeft();
};

$('hostBtn').addEventListener('click', async () => {
  openNetPanel('host');
  $('roomCode').textContent = '----';
  netStatusText('netStatus', '部屋を準備中…');
  try {
    const code = await net.host();
    $('roomCode').textContent = code;
  } catch (e) { /* onState がエラーを出す */ }
});

$('joinBtn').addEventListener('click', () => {
  openNetPanel('join');
  $('codeInput').value = '';
  setTimeout(() => $('codeInput').focus(), 50);
});

// 部屋コード欄。日本語キーボードの英字フリックは IME の変換（composition）を通るので、
// 変換中に value を書き換えると IME の内部状態が壊れて文字がだぶる。
// 変換が確定するまで触らないこと。
let codeComposing = false;
$('codeInput').addEventListener('compositionstart', () => { codeComposing = true; });
$('codeInput').addEventListener('compositionend', (e) => {
  codeComposing = false;
  normalizeCodeInput(e.target);
});
$('codeInput').addEventListener('input', (e) => {
  if (codeComposing) return;
  normalizeCodeInput(e.target);
});
function normalizeCodeInput(el) {
  const v = normalizeCode(el.value);
  if (v !== el.value) el.value = v;   // 変わらないときは書かない（カーソルが飛ぶ）
}
$('codeInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('connectBtn').click(); });

$('connectBtn').addEventListener('click', async () => {
  const code = normalizeCode($('codeInput').value);
  if (code.length < 4) { netStatusText('netJoinStatus', '4文字のコードを入れてください', true); return; }
  netStatusText('netJoinStatus', '接続中…');
  try {
    await net.join(code);
    net.send({ t: 'hello', mech: selfId });   // 自分の機体を伝える。開始はホストが宣言する
  } catch (e) { /* onState がエラーを出す */ }
});

$('netCancelBtn').addEventListener('click', () => { net.close(); closeNetPanel(); });

for (const b of document.querySelectorAll('#modePick .md')) {
  b.addEventListener('click', () => setUiMode(b.dataset.mode));
}
setUiMode('cpu');

// スタンバイ中も押せるようにする。ボタンが出ているのに 2 秒間反応しないのは事故に見える
const canPause = () => (game.running || standbyT > 0) && !game.over;
$('pauseBtn').addEventListener('click', () => { if (canPause()) setPaused(true); });
$('resumeBtn').addEventListener('click', () => setPaused(false));
$('toMenuBtn').addEventListener('click', toMainMenu);
$('resultMenuBtn').addEventListener('click', toMainMenu);
addEventListener('keydown', (e) => {
  if (e.code !== 'Escape') return;
  if (canPause() || game.paused) setPaused(!game.paused);
});

$('startBtn').addEventListener('click', () => {
  $('gate').classList.add('hidden');
  hud.show();
  startBattle();
});

$('againBtn').addEventListener('click', startBattle);

// ---------- デバッグ (開発時のみ。本番ビルドでは丸ごと消える) ----------
if (import.meta.env.DEV) {
  window.__dbg = {
    THREE, scene, camera, renderer, composer, bloom, game, world, hud, input, chase, net,
    step(dt = 1 / 60, n = 1) { for (let i = 0; i < n; i++) tick(dt); renderFrame(); },
    sim(n, dt = 1 / 60, onFrame) { for (let i = 0; i < n; i++) { if (onFrame) onFrame(i); tick(dt); } },
    // 演出込みで 1 フレーム進める（rAF が止まる環境で撃墜演出を検証するため）
    frames(n, dt = 1 / 60) {
      for (let i = 0; i < n; i++) {
        updateStandby(dt); updateFinish(dt); updateFlash(dt); tick(dt * timeScale);
      }
    },
    standby: { get t() { return standbyT; }, get intro() { return chase.intro; }, skip: endStandby },
    finish: { get seq() { return finishSeq; }, get scale() { return timeScale; } },
    netMsg: (m) => netOnMessage(m),
    render() { renderFrame(); },
    // プレビューが非表示だと rAF が止まり、描画バッファも 1x1 のままになる。
    // 明示的にサイズを与えて描き、dev サーバの /__shot に投げて目視確認する
    async shot(name, opt = {}) {
      const W = opt.w || 1280, H = opt.h || 720;
      if (opt.frames) this.frames(opt.frames);
      if (opt.at) { camera.position.set(...opt.at); camera.lookAt(...(opt.look || [0, 1.5, 0])); }
      renderer.setSize(W, H, false);
      composer.setSize(W, H); bloom.setSize(W, H);
      camera.aspect = W / H; camera.updateProjectionMatrix();
      renderer.domElement.width = W; renderer.domElement.height = H;
      renderer.setSize(W, H, false);
      renderFrame();
      const url = renderer.domElement.toDataURL('image/jpeg', 0.88);
      await fetch(`/__shot/${name}`, { method: 'POST', body: url.split(',')[1] });
      return name;
    },
    // 機体を正面から見る定番のカット
    async mechShot(name, mech, dist = 5.4, side = 0, up = 1.6) {
      const p = (mech || game.self).pos;
      return this.shot(name, { at: [p.x + side, p.y + up, p.z + dist], look: [p.x, p.y + 1.45, p.z] });
    },
  };
}
