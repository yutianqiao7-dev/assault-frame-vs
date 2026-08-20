import * as THREE from 'three';
import { WEAPON_ORDER, TEAM_COST } from './config.js';

const _p = new THREE.Vector3();
const $ = (id) => document.getElementById(id);

export class HUD {
  constructor() {
    this.el = {
      hud: $('hud'),
      costAlly: $('costAlly').querySelector('.costBar i'),
      costAllyN: $('costAlly').querySelector('.costNum'),
      costFoe: $('costFoe').querySelector('.costBar i'),
      costFoeN: $('costFoe').querySelector('.costNum'),
      timer: $('battleTimer'),
      reticle: $('reticle'),
      arrow: $('offscreenArrow'),
      foeMarker: $('foeMarker'),
      foeHp: $('foeMarker').querySelector('.fhp b'),
      foeName: $('foeMarker').querySelector('.fname'),
      selfName: $('selfName'),
      hpBar: $('hpBar'), hpDelay: $('hpDelay'), hpNum: $('hpNum'),
      boostBar: $('boostBar'), boostTxt: $('boostTxt'),
      awakeBar: $('awakeBar'), awakeWrap: $('awakeWrap'),
      ammoRow: $('ammoRow'),
      combo: $('comboPop'),
      msg: $('centerMsg'),
    };
    this.ammoEls = null;
    this.delayHp = 1;
    this.comboT = 0;
    this.msgT = 0;
  }

  setup(self, foe) {
    this.el.selfName.textContent = self.d.name;
    this.el.foeName.textContent = foe.d.name;
    this.el.hpNum.textContent = self.hp;
    this.delayHp = 1;

    // 武装表示を組む
    this.el.ammoRow.innerHTML = '';
    this.ammoEls = {};
    for (const k of WEAPON_ORDER) {
      const w = self.d.weapons[k];
      if (!w) continue;
      const row = document.createElement('div');
      row.className = 'ammo';
      const lab = document.createElement('b');
      lab.textContent = w.label;
      row.appendChild(lab);
      if (w.ammo <= 8) {
        const pips = document.createElement('span');
        pips.className = 'pips';
        for (let i = 0; i < w.ammo; i++) pips.appendChild(document.createElement('i'));
        row.appendChild(pips);
        this.ammoEls[k] = { row, pips: Array.from(pips.children), num: null };
      } else {
        const num = document.createElement('span');
        row.appendChild(num);
        this.ammoEls[k] = { row, pips: null, num };
      }
      this.el.ammoRow.appendChild(row);
    }
  }

  update(dt, game) {
    const { self, foe, camera } = game;
    const e = this.el;

    // 戦力ゲージ
    e.costAlly.style.transform = `scaleX(${game.cost.ally / TEAM_COST})`;
    e.costAllyN.textContent = Math.max(0, Math.round(game.cost.ally));
    e.costFoe.style.transform = `scaleX(${game.cost.foe / TEAM_COST})`;
    e.costFoeN.textContent = Math.max(0, Math.round(game.cost.foe));

    const tt = Math.max(0, Math.ceil(game.time));
    e.timer.textContent = tt;
    e.timer.style.color = tt <= 20 ? '#ff6b74' : '';

    // 自機HP
    const hpR = self.hp / self.maxHp;
    e.hpBar.style.transform = `scaleX(${hpR})`;
    if (hpR < this.delayHp) {
      this.delayHp = Math.max(hpR, this.delayHp - dt * 0.35);
    } else this.delayHp = hpR;
    e.hpDelay.style.transform = `scaleX(${this.delayHp})`;
    e.hpNum.textContent = self.hp;

    // ブースト
    const bR = self.boost / 100;
    e.boostBar.style.transform = `scaleX(${bR})`;
    e.boostBar.classList.toggle('hot', self.overheat || bR < 0.22);
    e.boostTxt.textContent = self.overheat ? 'OVERHEAT' : 'BOOST';

    // 覚醒
    e.awakeBar.style.transform = `scaleX(${self.awake / 100})`;
    e.awakeWrap.classList.toggle('full', self.awakeReady && self.awakeT <= 0);

    // 弾数
    for (const k of WEAPON_ORDER) {
      const ui = this.ammoEls && this.ammoEls[k];
      if (!ui) continue;
      const w = self.d.weapons[k];
      const n = self.ammo[k];
      if (ui.pips) {
        for (let i = 0; i < ui.pips.length; i++) ui.pips[i].classList.toggle('on', i < n);
      } else {
        ui.num.textContent = `${n}/${w.ammo}`;
      }
      ui.row.classList.toggle('reloading', n < w.ammo && self.reload[k] > 0);
    }

    // 敵マーカー / レティクル
    if (foe.alive) {
      _p.copy(foe.pos); _p.y += 3.4;
      _p.project(camera);
      const inFront = _p.z < 1;
      const sx = (_p.x * 0.5 + 0.5) * innerWidth;
      const sy = (-_p.y * 0.5 + 0.5) * innerHeight;
      const onScreen = inFront && _p.x > -1 && _p.x < 1 && _p.y > -1 && _p.y < 1;

      e.foeMarker.style.opacity = onScreen ? '1' : '0';
      if (onScreen) {
        e.foeMarker.style.transform = `translate(${sx}px, ${sy}px) translate(-50%,-100%)`;
        e.foeHp.style.transform = `scaleX(${foe.hp / foe.maxHp})`;
      }

      if (!onScreen) {
        e.arrow.style.opacity = '1';
        let ax = _p.x, ay = _p.y;
        if (!inFront) { ax = -ax; ay = -ay; }
        const ang = Math.atan2(ax, ay);
        const R = Math.min(innerWidth, innerHeight) * 0.3;
        e.arrow.style.transform = `translate(${Math.sin(ang) * R}px, ${-Math.cos(ang) * R}px) rotate(${ang}rad) translate(-50%,-50%)`;
      } else e.arrow.style.opacity = '0';

      // レティクル: 敵が画面中央付近なら赤
      const centered = onScreen && Math.abs(_p.x) < 0.16 && Math.abs(_p.y) < 0.2;
      const dist = self.distTo(foe);
      e.reticle.classList.toggle('locked', centered);
      e.reticle.classList.toggle('near', !centered && dist < self.d.melee.range);
    } else {
      e.foeMarker.style.opacity = '0';
      e.arrow.style.opacity = '0';
      e.reticle.classList.remove('locked', 'near');
    }

    // コンボ表示
    if (self.comboHits >= 2 && self.comboT > 0) {
      this.comboT = 0.9;
      e.combo.innerHTML = `${self.comboDmg}<small>${self.comboHits} HIT</small>`;
    }
    if (this.comboT > 0) {
      this.comboT -= dt;
      e.combo.style.opacity = Math.min(1, this.comboT * 3);
      e.combo.style.transform = `translateX(-50%) scale(${1 + Math.max(0, (this.comboT - 0.7)) * 0.6})`;
    } else e.combo.style.opacity = '0';

    // センターメッセージ
    if (this.msgT > 0) {
      this.msgT -= dt;
      e.msg.style.opacity = Math.min(1, this.msgT * 2.5);
      e.msg.style.transform = `translate(-50%,-50%) scale(${1 + Math.max(0, this.msgT - 0.9) * 0.5})`;
    } else e.msg.style.opacity = '0';
  }

  message(text, color) {
    this.el.msg.textContent = text;
    this.el.msg.style.color = color || '#fff';
    this.msgT = 1.4;
  }

  show() { this.el.hud.classList.remove('hidden'); }
  hide() { this.el.hud.classList.add('hidden'); }
}
