import * as THREE from 'three';
import { GRAVITY, ARENA_R } from './config.js';

const _v = new THREE.Vector3();
const _d = new THREE.Vector3();
const _prev = new THREE.Vector3();
const _seg = new THREE.Vector3();
const _w = new THREE.Vector3();
const _tmp = new THREE.Vector3();
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

// ============ 弾・ビーム・ビット ============
export class Projectiles {
  constructor(world) {
    this.world = world;
    this.list = [];        // 通常弾（AI の回避判定もこれを見る）
    this.beams = [];       // 照射ビーム
    this.bits = [];        // ファンネル
    this.beamGeo = new THREE.CylinderGeometry(0.16, 0.16, 3.4, 6);
    this.beamGeo.rotateX(Math.PI / 2);
    this.bulletGeo = new THREE.SphereGeometry(0.16, 6, 5);
    this.shellGeo = new THREE.SphereGeometry(0.32, 8, 6);
    this.bitGeo = new THREE.BoxGeometry(0.34, 0.34, 0.9);
    this.laserGeo = new THREE.CylinderGeometry(1, 1, 1, 12, 1, true);
    this.laserGeo.rotateX(Math.PI / 2);
    this.laserGeo.translate(0, 0, 0.5);   // 原点から +Z 方向に伸びる
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

  muzzleOf(owner) {
    const u = owner.root.userData;
    u.muzzle.updateWorldMatrix(true, false);
    return new THREE.Vector3().setFromMatrixPosition(u.muzzle.matrixWorld);
  }

  // 敵の未来位置（偏差）＋ CPU の狙いのブレ
  aimPoint(owner, tgt, speed, out) {
    const dist = owner.pos.distanceTo(tgt.pos);
    const lead = Math.min(dist / Math.max(speed, 1), 1.2);
    out.copy(tgt.pos).addScaledVector(tgt.vel, lead * 0.75);
    out.y += 1.3;
    const ae = owner.aimError || 0;
    if (ae > 0) {
      const k = dist * ae;
      out.x += (Math.random() - 0.5) * 2 * k;
      out.y += (Math.random() - 0.5) * k;
      out.z += (Math.random() - 0.5) * 2 * k;
    }
    return dist;
  }

  spawn(owner, key) {
    const w = owner.d.weapons[key];
    if (!w) return;
    if (w.kind === 'laser') return this.spawnLaser(owner, key);
    if (w.kind === 'funnel') return this.spawnBits(owner, key);
    const n = w.kind === 'spread' ? (w.count || 1) : 1;
    for (let i = 0; i < n; i++) this.spawnOne(owner, key, i, n);
  }

  // ---- 通常弾 1発 ----
  spawnOne(owner, key, idx = 0, total = 1, origin = null, aimOverride = null) {
    const w = owner.d.weapons[key];
    const from = origin || this.muzzleOf(owner);

    const tgt = owner.target;
    const aimOff = new THREE.Vector3();
    const gravity = w.arc != null ? GRAVITY * 0.55 : 0;
    let dist = 40;
    _d.set(0, 0, 1).applyAxisAngle(_up, owner.yaw);
    if (aimOverride) {
      _d.copy(aimOverride).sub(from).normalize();
    } else if (tgt && tgt.alive) {
      dist = this.aimPoint(owner, tgt, w.speed, _v);
      // 誘導が狙点のズレを引き継ぐように、素の狙点との差分を持たせる
      // (これが無いと CPU の外した弾が敵に吸い戻される)
      aimOff.copy(_v).sub(tgt.pos); aimOff.y -= 1.3;
      // 山なり弾は落下ぶんを撃ち上げて狙う。arc はさらに山を高くする係数。
      // (固定角度を足すだけだと距離によって大きく外れる)
      if (gravity) {
        const t = dist / Math.max(w.speed, 1);
        _v.y += 0.5 * gravity * t * t * (1 + (w.arc || 0));
      }
      _d.copy(_v).sub(from).normalize();
    }

    // 拡散: 総数に応じて左右に振る
    if (total > 1 && w.spreadAngle) {
      const t = total === 1 ? 0 : (idx / (total - 1)) * 2 - 1;   // -1 .. 1
      _d.applyAxisAngle(_up, t * w.spreadAngle);
      _d.y += t * w.spreadAngle * 0.25;
      _d.normalize();
    }
    // ミサイルは撃つたびに射出方向をばらす。ただし誘導の旋回半径は
    // speed / (homing * 2.2) と大きいので、近距離でばらすと一生当たらない。
    // 距離に応じてばらつきを絞る。
    if (w.kind === 'missile') {
      const k = Math.min(1, dist / 50);
      _d.applyAxisAngle(_up, (Math.random() - 0.5) * 0.5 * k);
      _d.y += (0.25 + Math.random() * 0.2) * k;
      _d.normalize();
    }

    const spread = w.kind === 'bullet' ? 0.035 : 0;
    if (spread) {
      _d.x += (Math.random() - 0.5) * spread;
      _d.y += (Math.random() - 0.5) * spread;
      _d.z += (Math.random() - 0.5) * spread;
      _d.normalize();
    }

    const color = (w.kind === 'beam' || w.kind === 'spread') ? owner.d.palette.beam
      : w.kind === 'bullet' ? '#ffe08a' : '#ffb45c';
    const geo = (w.kind === 'beam' || w.kind === 'spread') ? this.beamGeo
      : w.kind === 'bullet' ? this.bulletGeo : this.shellGeo;
    const mesh = new THREE.Mesh(geo, this.mat(color));
    mesh.position.copy(from);
    if (w.kind === 'beam') mesh.scale.z = 1.6;
    if (w.kind === 'spread') mesh.scale.set(0.7, 0.7, 0.9);

    const p = {
      mesh, owner, w, key,
      pos: from.clone(),
      vel: _d.clone().multiplyScalar(w.speed),
      life: w.life,
      radius: w.radius,
      homing: w.homing || 0,
      gravity,
      aimOff,
    };
    this.world.scene.add(mesh);
    this.list.push(p);
    this.world.fx.muzzle(from, color);
    return p;
  }

  // ---- 照射ビーム ----
  spawnLaser(owner, key) {
    const w = owner.d.weapons[key];
    const from = this.muzzleOf(owner);
    _d.set(0, 0, 1).applyAxisAngle(_up, owner.yaw);
    const tgt = owner.target;
    if (tgt && tgt.alive) { this.aimPoint(owner, tgt, 9999, _v); _d.copy(_v).sub(from).normalize(); }

    const color = owner.d.palette.beam;
    const core = new THREE.Mesh(this.laserGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ffffff'), transparent: true, opacity: 0.95, depthWrite: false,
    }));
    const glow = new THREE.Mesh(this.laserGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: true, opacity: 0.45,
      depthWrite: false, side: THREE.DoubleSide,
    }));
    const grp = new THREE.Group();
    grp.add(core); grp.add(glow);
    grp.position.copy(from);
    this.world.scene.add(grp);

    const b = {
      grp, core, glow, owner, w, color,
      dir: _d.clone(),
      life: w.duration,
      tick: 0,
      hitOnce: new Set(),
    };
    this.beams.push(b);
    this.world.fx.muzzle(from, color);
    return b;
  }

  // ---- ファンネル ----
  spawnBits(owner, key) {
    const w = owner.d.weapons[key];
    const from = this.muzzleOf(owner);
    const n = w.count || 3;
    for (let i = 0; i < n; i++) {
      const mesh = new THREE.Mesh(this.bitGeo, this.mat(owner.d.palette.trim));
      mesh.position.copy(from);
      this.world.scene.add(mesh);
      this.bits.push({
        mesh, owner, w, key,
        pos: from.clone(),
        life: w.bitTime,
        phase: (i / n) * Math.PI * 2,
        fireT: 0.5 + i * (w.bitFireGap || 0.7) * 0.5,
      });
    }
    this.world.fx.burst(owner.pos, owner.d.palette.trim);
  }

  update(dt, mechs) {
    this.updateShots(dt, mechs);
    this.updateBeams(dt, mechs);
    this.updateBits(dt, mechs);
  }

  updateShots(dt, mechs) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      p.life -= dt;

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
      if (p.w.kind !== 'bullet') {
        p.mesh.lookAt(p.pos.x + p.vel.x, p.pos.y + p.vel.y, p.pos.z + p.vel.z);
      }

      let hitSomething = false;
      for (const m of mechs) {
        if (m === p.owner || !m.alive || m.team === p.owner.team) continue;
        if (m.invuln > 0) continue;
        _v.copy(m.pos); _v.y += 1.6;
        const r = p.radius + 2.0;
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

  updateBeams(dt, mechs) {
    for (let i = this.beams.length - 1; i >= 0; i--) {
      const b = this.beams[i];
      b.life -= dt;
      const w = b.w;
      const from = this.muzzleOf(b.owner);
      b.grp.position.copy(from);

      // 照射しながらゆっくり追尾する
      const tgt = b.owner.target;
      if (tgt && tgt.alive) {
        _v.copy(tgt.pos); _v.y += 1.5;
        _d.copy(_v).sub(from).normalize();
        const turn = Math.min(1, (w.turn || 1.2) * dt);
        b.dir.lerp(_d, turn).normalize();
      }
      b.grp.lookAt(from.x + b.dir.x, from.y + b.dir.y, from.z + b.dir.z);

      // 見た目: 長さ range、太さは撃ち始めに膨らんでから絞る
      const p = 1 - b.life / w.duration;
      const flare = p < 0.12 ? p / 0.12 : (b.life < 0.18 ? b.life / 0.18 : 1);
      const rad = (w.radius || 1.4) * (0.55 + flare * 0.45);
      b.core.scale.set(rad * 0.45, rad * 0.45, w.range);
      b.glow.scale.set(rad, rad, w.range);
      b.core.material.opacity = 0.95 * flare;
      b.glow.material.opacity = 0.45 * flare;

      // 判定: 一定間隔でヒットを刻む
      b.tick -= dt;
      if (b.tick <= 0 && b.life > 0) {
        b.tick = w.tickGap || 0.12;
        _tmp.copy(from).addScaledVector(b.dir, w.range);
        for (const m of mechs) {
          if (m === b.owner || !m.alive || m.team === b.owner.team || m.invuln > 0) continue;
          _v.copy(m.pos); _v.y += 1.6;
          const r = (w.radius || 1.4) + 1.8;
          if (distSqPointSegment(_v, from, _tmp) < r * r) {
            this.world.hit(b.owner, m, w.dmg, w.down, b.dir, 2, 'laser');
          }
        }
      }

      if (b.life <= 0) {
        this.world.scene.remove(b.grp);
        b.core.material.dispose(); b.glow.material.dispose();
        this.beams.splice(i, 1);
      }
    }
  }

  updateBits(dt, mechs) {
    for (let i = this.bits.length - 1; i >= 0; i--) {
      const bit = this.bits[i];
      bit.life -= dt;
      const w = bit.w;
      const tgt = bit.owner.target;

      if (tgt && tgt.alive) {
        // 敵の周囲を回りながら位置取りする
        bit.phase += dt * 1.6;
        const r = w.bitOrbit || 16;
        _v.set(
          tgt.pos.x + Math.cos(bit.phase) * r,
          tgt.pos.y + 6 + Math.sin(bit.phase * 0.7) * 3,
          tgt.pos.z + Math.sin(bit.phase) * r
        );
      } else {
        _v.copy(bit.owner.pos); _v.y += 6;
      }
      bit.pos.lerp(_v, 1 - Math.pow(0.02, dt));
      bit.mesh.position.copy(bit.pos);
      if (tgt && tgt.alive) bit.mesh.lookAt(tgt.pos.x, tgt.pos.y + 1.5, tgt.pos.z);

      bit.fireT -= dt;
      if (bit.fireT <= 0 && tgt && tgt.alive && bit.life > 0.3) {
        bit.fireT = w.bitFireGap || 0.7;
        this.spawnOne(bit.owner, bit.key, 0, 1, bit.pos.clone());
      }

      if (bit.life <= 0) {
        this.world.fx.hit(bit.pos, bit.owner.d.palette.trim);
        this.world.scene.remove(bit.mesh);
        this.bits.splice(i, 1);
      }
    }
  }

  clear() {
    for (const p of this.list) this.world.scene.remove(p.mesh);
    for (const b of this.beams) {
      this.world.scene.remove(b.grp);
      b.core.material.dispose(); b.glow.material.dispose();
    }
    for (const b of this.bits) this.world.scene.remove(b.mesh);
    this.list.length = 0;
    this.beams.length = 0;
    this.bits.length = 0;
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
      color: 0xc8d6e8, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false,
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
