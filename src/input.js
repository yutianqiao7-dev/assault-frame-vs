// キーボード & タッチ入力。
// out.mx / out.my は敵方向を基準にした -1..1 (my=+1 で敵に接近)
// 射撃系は「押しっぱなしで連射」、格闘/ステップ/覚醒はエッジ入力。

const KEYMAP = {
  KeyW: 'up', ArrowUp: 'up',
  KeyS: 'down', ArrowDown: 'down',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
  KeyJ: 'shot',
  KeyK: 'melee',
  KeyL: 'jump', Space: 'jump',
  ShiftLeft: 'step', ShiftRight: 'step',
  KeyU: 'sub',
  KeyI: 'sp_shot',
  KeyO: 'sp_melee',
  KeyQ: 'awake',
};

export class Input {
  constructor() {
    this.held = new Set();
    this.edge = new Set();
    this.stick = { x: 0, y: 0 };
    this.touchStick = { active: false, id: -1, ox: 0, oy: 0 };
    this.out = {
      mx: 0, my: 0, jump: false, stepPressed: false,
      shot: false, melee: false, sub: false, sp_shot: false, sp_melee: false, awake: false,
    };
    this._bindKeys();
    this._bindTouch();
  }

  press(a) { if (!this.held.has(a)) this.edge.add(a); this.held.add(a); }
  release(a) { this.held.delete(a); }

  _bindKeys() {
    addEventListener('keydown', (e) => {
      const a = KEYMAP[e.code];
      if (!a) return;
      if (e.repeat) return;
      e.preventDefault();
      this.press(a);
    });
    addEventListener('keyup', (e) => {
      const a = KEYMAP[e.code];
      if (!a) return;
      e.preventDefault();
      this.release(a);
    });
    addEventListener('blur', () => { this.held.clear(); });
  }

  _bindTouch() {
    const zone = document.getElementById('stickZone');
    const base = document.getElementById('stickBase');
    const knob = document.getElementById('stickKnob');
    const R = 52;

    const setKnob = (dx, dy) => {
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const start = (e) => {
      const t = e.changedTouches ? e.changedTouches[0] : e;
      this.touchStick.active = true;
      this.touchStick.id = t.identifier ?? 'mouse';
      const rect = base.getBoundingClientRect();
      // 指を置いた場所にスティックを移動
      this.touchStick.ox = t.clientX;
      this.touchStick.oy = t.clientY;
      base.style.left = `${t.clientX}px`;
      base.style.bottom = 'auto';
      base.style.top = `${t.clientY}px`;
      base.style.margin = '-59px 0 0 -59px';
      base.classList.add('active');
      setKnob(0, 0);
      e.preventDefault();
    };
    const move = (e) => {
      if (!this.touchStick.active) return;
      const list = e.changedTouches ? Array.from(e.changedTouches) : [e];
      const t = list.find((x) => (x.identifier ?? 'mouse') === this.touchStick.id);
      if (!t) return;
      let dx = t.clientX - this.touchStick.ox;
      let dy = t.clientY - this.touchStick.oy;
      const len = Math.hypot(dx, dy);
      if (len > R) { dx = (dx / len) * R; dy = (dy / len) * R; }
      setKnob(dx, dy);
      this.stick.x = dx / R;
      this.stick.y = -dy / R;   // 画面上方向 = 前進
      e.preventDefault();
    };
    const end = (e) => {
      const list = e.changedTouches ? Array.from(e.changedTouches) : [e];
      const t = list.find((x) => (x.identifier ?? 'mouse') === this.touchStick.id);
      if (!t && e.changedTouches) return;
      this.touchStick.active = false;
      this.stick.x = 0; this.stick.y = 0;
      setKnob(0, 0);
      base.classList.remove('active');
    };

    zone.addEventListener('touchstart', start, { passive: false });
    zone.addEventListener('touchmove', move, { passive: false });
    zone.addEventListener('touchend', end);
    zone.addEventListener('touchcancel', end);
    zone.addEventListener('mousedown', start);
    addEventListener('mousemove', move);
    addEventListener('mouseup', end);

    for (const btn of document.querySelectorAll('#btnPad .gb')) {
      const act = btn.dataset.act;
      const down = (e) => { e.preventDefault(); this.press(act); btn.classList.add('on'); };
      const up = (e) => { e.preventDefault(); this.release(act); btn.classList.remove('on'); };
      btn.addEventListener('touchstart', down, { passive: false });
      btn.addEventListener('touchend', up);
      btn.addEventListener('touchcancel', up);
      btn.addEventListener('mousedown', down);
      btn.addEventListener('mouseup', up);
      btn.addEventListener('mouseleave', up);
    }
  }

  read() {
    const o = this.out;
    let mx = this.stick.x, my = this.stick.y;
    if (this.held.has('left')) mx -= 1;
    if (this.held.has('right')) mx += 1;
    if (this.held.has('up')) my += 1;
    if (this.held.has('down')) my -= 1;
    const len = Math.hypot(mx, my);
    if (len > 1) { mx /= len; my /= len; }
    o.mx = mx; o.my = my;

    o.jump = this.held.has('jump');
    o.shot = this.held.has('shot');
    o.stepPressed = this.edge.has('step');
    o.melee = this.edge.has('melee');
    o.sub = this.edge.has('sub');
    o.sp_shot = this.edge.has('sp_shot');
    o.sp_melee = this.edge.has('sp_melee');
    o.awake = this.edge.has('awake');
    return o;
  }

  endFrame() { this.edge.clear(); }
}
