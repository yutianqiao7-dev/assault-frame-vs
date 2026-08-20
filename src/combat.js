import * as THREE from 'three';
import { GRAVITY, ARENA_R } from './config.js';

const _v = new THREE.Vector3();
const _d = new THREE.Vector3();
const _prev = new THREE.Vector3();
const _seg = new THREE.Vector3();
const _w = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

// 点 c と線分 a→b の最短距離の2乗（1フレームで判定をすり抜けるのを防ぐ）
function distSqPointSegment(c, a, b) {
  _seg.copy(b).sub(a);
  _w.copy(c).sub(a);
  const len2 = _seg.lengthSq();
  let t = len2 > 1e-8 ? _w.dot(_seg) / len2 : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  _w.copy(a).addScaledVector(_seg, t);
  return _w.distanceToSquared(c);
}

// ============ 弾 ============
export class Projectiles {
  constructor(world) {
    this.world = world;
    this.list = [];
    this.beamGeo = new THREE.CylinderGeometry(0.16, 0.16, 3.4, 6);
    this.beamGeo.rotateX(Math.PI / 2);
    this.bulletGeo = new THREE.SphereGeometry(0.16, 6, 5);
    this.shellGeo = new THREE.SphereGeometry(0.32, 8, 6);
    this.matCache = new Map();
  }

  mat(color) {
    if (!this.matCache.has(color)) {
      this.matCache.set(color, new THREE.MeshBasicMaterial({
        color: new THREE.Color(color), transparent: true, opacity: 0.95, depthWrite: false,
      }));
    }
    return this.matCache.get(color);
  }

  spawn(owner, key) {
    const w = owner.d.weapons[key];
    const u = owner.root.userData;
    u.muzzle.updateWorldMatrix(true, false);
    const origin = new THREE.Vector3().setFromMatrixPosition(u.muzzle.matrixWorld);

    const tgt = owner.target;
    const aimOff = new THREE.Vector3();
    _d.set(0, 0, 1).applyAxisAngle(_up, owner.yaw);
    if (tgt && tgt.alive) {
      // 簡易偏差射撃
      const dist = origin.distanceTo(tgt.pos);
      const lead = Math.min(dist / w.speed, 1.2);
      _v.copy(tgt.pos).addScaledVector(tgt.vel, lead * 0.75);
      _v.y += 1.3;
      // CPU は狙点をブレさせる（プレイヤーは owner.aimError 未設定＝0）
      const ae = owner.aimError || 0;
      if (ae > 0) {
        const k = dist * ae;
        aimOff.set((Math.random() - 0.5) * 2 * k, (Math.random() - 0.5) * k, (Math.random() - 0.5) * 2 * k);
        _v.add(aimOff);
      } else aimOff.set(0, 0, 0);
      _d.copy(_v).sub(origin).normalize();
    }
    if (w.arc) _d.y += w.arc;
    _d.normalize();

    const color = w.kind === 'beam' ? owner.d.palette.beam
      : w.kind === 'bullet' ? '#ffe08a' : '#ffb45c';
    const geo = w.kind === 'beam' ? this.beamGeo : w.kind === 'bullet' ? this.bulletGeo : this.shellGeo;
    const mesh = new THREE.Mesh(geo, this.mat(color));
    mesh.position.copy(origin);

    const spread = w.kind === 'bullet' ? 0.035 : 0;
    if (spread) {
      _d.x += (Math.random() - 0.5) * spread;
      _d.y += (Math.random() - 0.5) * spread;
      _d.z += (Math.random() - 0.5) * spread;
      _d.normalize();
    }

    const p = {
      mesh, owner, w, key,
      pos: origin.clone(),
      vel: _d.clone().multiplyScalar(w.speed),
      life: w.life,
      radius: w.radius,
      homing: w.homing || 0,
      aimOff,                    // 誘導もこのズレを引き継ぐ（そうしないと外した弾が戻ってくる）
      gravity: w.arc ? GRAVITY * 0.55 : 0,
      dead: false,
    };
    if (w.kind === 'beam') { mesh.scale.z = 1.6; }
    this.world.scene.add(mesh);
    this.list.push(p);
    this.world.fx.muzzle(origin, color);
    return p;
  }

  update(dt, mechs) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      p.life -= dt;

      // 誘導
      const tgt = p.owner.target;
      if (p.homing > 0 && tgt && tgt.alive && p.life > 0.15) {
        _v.copy(tgt.pos).add(p.aimOff); _v.y += 1.3;
        _d.copy(_v).sub(p.pos).normalize();
        const speed = p.vel.length();
        p.vel.addScaledVector(_d, p.homing * speed * 2.2 * dt);
        p.vel.normalize().multiplyScalar(speed);
      }
      if (p.gravity) p.vel.y -= p.gravity * dt;

      _prev.copy(p.pos);
      p.pos.addScaledVector(p.vel, dt);
      p.mesh.position.copy(p.pos);
      if (p.w.kind === 'beam' || p.w.kind === 'shell') {
        p.mesh.lookAt(p.pos.x + p.vel.x, p.pos.y + p.vel.y, p.pos.z + p.vel.z);
      }

      // 命中判定
      let hitSomething = false;
      for (const m of mechs) {
        if (m === p.owner || !m.alive || m.team === p.owner.team) continue;
        if (m.invuln > 0) continue;
        _v.copy(m.pos); _v.y += 1.6;
        const r = p.radius + 2.0;   // 機体の当たり判定（全高3・幅1.2程度を球で近似）
        if (distSqPointSegment(_v, _prev, p.pos) < r * r) {
          _d.copy(p.vel).normalize();
          this.world.hit(p.owner, m, p.w.dmg, p.w.down, _d, p.w.kind === 'shell' ? 8 : 3, p.w.kind);
          hitSomething = true;
          break;
        }
      }

      const outside = p.pos.y < 0 || Math.hypot(p.pos.x, p.pos.z) > ARENA_R + 20;
      if (hitSomething || p.life <= 0 || outside) {
        if (p.w.splash && (hitSomething || p.pos.y < 0)) {
          this.world.fx.explodeSmall(p.pos, '#ffb45c');
          for (const m of mechs) {
            if (!m.alive || m.team === p.owner.team || m.invuln > 0) continue;
            _v.copy(m.pos); _v.y += 1.5;
            if (_v.distanceTo(p.pos) < p.w.splash && !hitSomething) {
              _d.copy(_v).sub(p.pos).normalize();
              this.world.hit(p.owner, m, p.w.dmg * 0.6, p.w.down * 0.5, _d, 5, 'shell');
            }
          }
        } else if (hitSomething) {
          this.world.fx.hit(p.pos, '#ffffff');
        }
        this.world.scene.remove(p.mesh);
        this.list.splice(i, 1);
      }
    }
  }

  clear() {
    for (const p of this.list) this.world.scene.remove(p.mesh);
    this.list.length = 0;
  }
}

// ============ エフェクト ============
export class FX {
  constructor(scene) {
    this.scene = scene;
    this.items = [];
    this.sphereGeo = new THREE.SphereGeometry(1, 10, 8);
    this.ringGeo = new THREE.RingGeometry(0.7, 1, 20);
    this.ringGeo.rotateX(-Math.PI / 2);
  }

  add(mesh, life, fn) {
    this.scene.add(mesh);
    this.items.push({ mesh, life, max: life, fn });
  }

  _ball(pos, color, r, life, grow, up = 0) {
    const m = new THREE.Mesh(this.sphereGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: true, opacity: 0.9, depthWrite: false,
    }));
    m.position.copy(pos);
    m.scale.setScalar(r);
    this.add(m, life, (it, p) => {
      it.mesh.scale.setScalar(r * (1 + grow * p));
      it.mesh.material.opacity = 0.9 * (1 - p);
      if (up) it.mesh.position.y += up * 0.016;
    });
  }

  muzzle(pos, color) { this._ball(pos, color, 0.38, 0.09, 1.1); }
  hit(pos, color) {
    this._ball(pos, color, 0.7, 0.24, 2.6);
    this._ball(pos, '#ffffff', 0.4, 0.14, 3.0);
  }
  explodeSmall(pos, color) {
    this._ball(pos, color, 1.2, 0.4, 3.2);
    this._ball(pos, '#fff2c0', 0.7, 0.22, 3.6);
  }
  explode(pos) {
    this._ball(pos, '#fff0a0', 2.0, 0.5, 3.0, 20);
    this._ball(pos, '#ff8a3c', 3.0, 0.75, 3.4, 14);
    this._ball(pos, '#552211', 4.0, 1.1, 2.6, 8);
    const ring = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({
      color: 0xffd08a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false,
    }));
    ring.position.copy(pos); ring.position.y += 1.2;
    this.add(ring, 0.6, (it, p) => {
      it.mesh.scale.setScalar(2 + p * 26);
      it.mesh.material.opacity = 0.85 * (1 - p);
    });
  }
  burst(pos, color) {
    const ring = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false,
    }));
    ring.position.copy(pos); ring.position.y += 1.4;
    this.add(ring, 0.7, (it, p) => {
      it.mesh.scale.setScalar(1 + p * 16);
      it.mesh.material.opacity = 0.9 * (1 - p);
    });
  }
  stepPuff(pos, dir) {
    const m = new THREE.Mesh(this.sphereGeo, new THREE.MeshBasicMaterial({
      color: 0xbfd8ff, transparent: true, opacity: 0.4, depthWrite: false,
    }));
    m.position.copy(pos).addScaledVector(dir, -1.4); m.position.y += 1.3;
    m.scale.setScalar(0.5);
    this.add(m, 0.26, (it, p) => {
      it.mesh.scale.setScalar(0.5 + p * 1.5);
      it.mesh.material.opacity = 0.4 * (1 - p);
    });
  }
  landPuff(pos) {
    const ring = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({
      color: 0xc8d6e8, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false,
    }));
    ring.position.set(pos.x, 0.06, pos.z);
    this.add(ring, 0.42, (it, p) => {
      it.mesh.scale.setScalar(1 + p * 5);
      it.mesh.material.opacity = 0.4 * (1 - p);
    });
  }

  update(dt) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.life -= dt;
      const p = 1 - it.life / it.max;
      if (it.fn) it.fn(it, Math.min(p, 1));
      if (it.life <= 0) {
        this.scene.remove(it.mesh);
        it.mesh.material.dispose();
        this.items.splice(i, 1);
      }
    }
  }

  clear() {
    for (const it of this.items) { this.scene.remove(it.mesh); it.mesh.material.dispose(); }
    this.items.length = 0;
  }
}
