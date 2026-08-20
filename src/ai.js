import * as THREE from 'three';
import { EMPTY_INPUT } from './mech.js';

const _v = new THREE.Vector3();

// 難易度プリセット
// aimError: 狙点のブレ（距離に対する割合）。大きいほど当たらない。
export const AI_LEVELS = {
  easy:   { react: 0.75, dodge: 0.28, aggro: 0.40, meleeWant: 0.20, boostUse: 0.35, aimError: 0.16, fireRate: 0.30 },
  normal: { react: 0.45, dodge: 0.52, aggro: 0.62, meleeWant: 0.35, boostUse: 0.58, aimError: 0.085, fireRate: 0.55 },
  hard:   { react: 0.22, dodge: 0.80, aggro: 0.85, meleeWant: 0.55, boostUse: 0.80, aimError: 0.03, fireRate: 0.85 },
};

export class AI {
  constructor(mech, world, level = 'normal') {
    this.m = mech;
    this.world = world;
    this.L = AI_LEVELS[level] || AI_LEVELS.normal;
    mech.aimError = this.L.aimError;
    this.inp = { ...EMPTY_INPUT };
    this.decideT = 0;
    this.strafe = Math.random() < 0.5 ? 1 : -1;
    this.wantDist = 34 + Math.random() * 18;
    this.boostT = 0;
    this.holdBoost = false;
    this.reactT = 0;
    this.dodgeCool = 0;
  }

  update(dt) {
    const m = this.m, t = m.target, L = this.L;
    const i = this.inp;
    i.shot = i.melee = i.sub = i.sp_shot = i.sp_melee = i.awake = false;
    i.stepPressed = false;

    if (!m.alive || !t || !t.alive) { i.mx = 0; i.my = 0; i.jump = false; return i; }

    this.decideT -= dt;
    this.boostT -= dt;
    this.dodgeCool -= dt;
    this.reactT -= dt;

    const dist = m.distTo(t);
    const hpRate = m.hp / m.maxHp;

    // ---- 方針を定期的に切り替え ----
    if (this.decideT <= 0) {
      this.decideT = 0.35 + Math.random() * 0.8;
      if (Math.random() < 0.35) this.strafe *= -1;
      this.wantDist = hpRate < 0.35 ? 48 + Math.random() * 20 : 28 + Math.random() * 22;
      this.holdBoost = Math.random() < L.boostUse;
      this.boostT = 0.4 + Math.random() * 1.0;
    }

    // ---- 移動 ----
    let my = 0;
    if (dist > this.wantDist + 8) my = 1;
    else if (dist < this.wantDist - 8) my = -1;
    else my = (Math.random() - 0.5) * 0.3;
    i.my = my * (0.6 + L.aggro * 0.5);
    i.mx = this.strafe * (0.7 + Math.random() * 0.3);

    // ---- ブースト ----
    const lowBoost = m.boost < 25;
    i.jump = this.holdBoost && this.boostT > 0 && !m.overheat && !lowBoost;
    // 地上に降りて回復したい
    if (lowBoost && !m.grounded) i.jump = false;

    // ---- 回避 ----
    if (this.dodgeCool <= 0 && m.boost > m.d.stepCost + 8) {
      const danger = this.incoming();
      if (danger && Math.random() < L.dodge) {
        i.stepPressed = true;
        i.mx = this.strafe;
        i.my = 0;
        this.dodgeCool = 0.45;
        this.strafe *= -1;
      }
    }

    // ---- 覚醒 ----
    if (m.awakeReady && (hpRate < 0.55 || t.hp / t.maxHp < 0.3) && Math.random() < 0.04) i.awake = true;

    // ---- 攻撃 ----
    if (this.reactT <= 0) {
      this.reactT = L.react * (0.6 + Math.random() * 0.8);
      const facing = this.facingRate(t);

      if (dist < m.d.melee.range * 0.85 && Math.random() < L.meleeWant) {
        if (m.ammo.sp_melee > 0 && Math.random() < 0.3) i.sp_melee = true;
        else i.melee = true;
      } else if (facing > 0.85) {
        const r = Math.random();
        if (dist < 60 && m.ammo.sub > 0 && r < 0.18) i.sub = true;
        else if (dist < 55 && m.ammo.sp_shot > 0 && r < 0.28) i.sp_shot = true;
        else if (m.ammo.shot > 0 && r < L.fireRate) i.shot = true;
      }
    }
    // 射撃は押しっぱなし扱いなので、撃たない時は明示的にfalse
    if (!i.shot && m.st === 'fire') i.shot = false;

    return i;
  }

  facingRate(t) {
    _v.copy(t.pos).sub(this.m.pos); _v.y = 0; _v.normalize();
    const fx = Math.sin(this.m.yaw), fz = Math.cos(this.m.yaw);
    return _v.x * fx + _v.z * fz;
  }

  // 自分に向かってくる弾があるか
  incoming() {
    const m = this.m;
    for (const p of this.world.projectiles.list) {
      if (p.owner.team === m.team) continue;
      _v.copy(m.pos); _v.y += 1.5;
      _v.sub(p.pos);
      const d = _v.length();
      if (d > 55) continue;
      const speed = p.vel.length();
      const dot = (_v.x * p.vel.x + _v.y * p.vel.y + _v.z * p.vel.z) / (d * speed);
      if (dot > 0.93 && d / speed < 0.55) return true;
    }
    // 相手が格闘で突っ込んで来ている
    const t = m.target;
    if (t && t.st === 'rush' && m.distTo(t) < 22) return true;
    return false;
  }
}
