import * as THREE from 'three';
import { GRAVITY, ARENA_R } from './config.js';
import { makeBeamBody, makeGlowBall, glowMaterial, makeSoftSprite } from './glow.js';

const _v = new THREE.Vector3();
const _d = new THREE.Vector3();
const _prev = new THREE.Vector3();
const _seg = new THREE.Vector3();
const _w = new THREE.Vector3();
const _tmp = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _e = new THREE.Vector3();

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
    // 発射口が細く、遠方に向かって広がる形。真後ろから見たときに
    // ただの円盤に見えないよう、開口とセグメントを調整している
    this.laserGeo = new THREE.CylinderGeometry(1, 0.28, 1, 20, 1, true);
    this.laserGeo.rotateX(Math.PI / 2);
    this.laserGeo.translate(0, 0, 0.5);   // 原点から +Z 方向に伸びる
    this.matCache = new Map();
    this.shotProto = new Map();
    this.nextNetId = 1;   // 通信対戦で弾を同定するための通し番号
    this.netShots = new Map();   // ゲスト側が描くだけの弾
    this.netBits = new Map();
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
      // 地雷は相手に当てる物ではなく通り道に置く物。
      // そのまま狙うと足元に落ちて即起爆し、ただの遅いグレネードになる
      if (w.kind === 'mine') {
        // 複数まくときに 1 点へ固まらないよう、落点も横位置もばらす
        const f = (w.dropAt ?? 0.55) * (0.82 + Math.random() * 0.36);
        const sc = w.scatter ?? 9;
        _v.set(from.x + (_v.x - from.x) * f + (Math.random() - 0.5) * sc,
               0,
               from.z + (_v.z - from.z) * f + (Math.random() - 0.5) * sc);
        dist = Math.hypot(_v.x - from.x, _v.z - from.z);
        aimOff.set(0, 0, 0);
      }
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

    const color = (w.kind === 'beam' || w.kind === 'spread' || w.kind === 'boomerang')
      ? owner.d.palette.beam
      : w.kind === 'bullet' ? '#ffd98a' : '#ffb45c';
    const mesh = this.makeShotMesh(w, color);
    mesh.position.copy(from);

    const p = {
      mesh, owner, w, key,
      pos: from.clone(),
      vel: _d.clone().multiplyScalar(w.speed),
      life: w.life,
      radius: w.radius,
      homing: w.homing || 0,
      gravity,
      aimOff,
      color,
      hitSet: (w.pierce || w.kind === 'boomerang') ? new Set() : null,   // 消えずに通過する弾。同じ相手を連続で刺さない
      boomT: 0,                              // ブーメラン: 折り返しまでの経過
      returning: false,
      stuck: false,                          // 地雷: 着地したか
      armT: 0,                               // 地雷: 着地からの経過
      blast: false,                          // 地雷: 起爆した
    };
    p.netId = this.nextNetId++;
    this.world.scene.add(mesh);
    this.list.push(p);
    this.world.fx.muzzle(from, color);
    return p;
  }

  // 弾の見た目。白いコア＋色付きグローで、ブルームが乗ると発光体に見える
  makeShotMesh(w, color) {
    const key = `${w.kind}|${color}|${w.radius}`;
    if (!this.shotProto.has(key)) {
      let proto;
      if (w.kind === 'beam' || w.kind === 'spread') {
        const len = w.kind === 'beam' ? 5.2 : 3.0;
        proto = makeBeamBody(len, Math.max(w.radius, 0.34), color, { coreRatio: 0.4, glowOpacity: 0.4 });
      } else if (w.kind === 'boomerang') {
        proto = new THREE.Group();
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(2.0, 0.16, 0.42),
          new THREE.MeshStandardMaterial({ color: 0xc8ccd4, metalness: 0.9, roughness: 0.22 })
        );
        // 回転させる刃は children[0] に置く。
        // userData に参照を入れても clone() で JSON 化されて壊れる
        proto.add(blade);
        proto.add(makeGlowBall(0.55, color, 0.3));
      } else if (w.kind === 'mine') {
        // 地雷: 地面に転がる暗い塊＋起爆灯。
        // 発光は小さく抑える。踏むまで気づかせない武装なので、
        // 遠くから光って見えると置く意味が無くなる
        proto = new THREE.Group();
        const body = new THREE.Mesh(
          new THREE.CylinderGeometry(w.radius * 1.5, w.radius * 1.8, w.radius * 1.1, 8),
          new THREE.MeshStandardMaterial({ color: 0x2a2f38, metalness: 0.7, roughness: 0.45 })
        );
        proto.add(body);
        const lamp = makeGlowBall(w.radius * 0.55, color, 0.8);
        lamp.position.y = w.radius * 0.8;
        proto.add(lamp);            // children[1] を点滅させる
      } else if (w.kind === 'bullet') {
        proto = new THREE.Group();
        proto.add(makeGlowBall(Math.max(w.radius, 0.22), '#ffffff', 0.95));
        proto.add(makeGlowBall(Math.max(w.radius, 0.22) * 2.4, color, 0.28));
        // 曳光弾らしく後ろに尾を引く
        const tail = new THREE.Mesh(
          new THREE.ConeGeometry(Math.max(w.radius, 0.2) * 0.9, 2.2, 6),
          glowMaterial(color, 0.22)
        );
        tail.rotation.x = -Math.PI / 2; tail.position.z = -1.1;
        proto.add(tail);
      } else {
        // 砲弾: 芯は実体、周りに熱を持たせる
        proto = new THREE.Group();
        const body = new THREE.Mesh(
          new THREE.CapsuleGeometry(w.radius * 0.6, w.radius * 1.4, 3, 8),
          new THREE.MeshStandardMaterial({ color: 0x9aa2ae, metalness: 0.75, roughness: 0.35 })
        );
        body.rotation.x = Math.PI / 2;
        proto.add(body);
        proto.add(makeGlowBall(w.radius * 1.5, color, 0.4));
        const flame = new THREE.Mesh(
          new THREE.ConeGeometry(w.radius * 0.8, 2.6, 7), glowMaterial(color, 0.3)
        );
        flame.rotation.x = -Math.PI / 2; flame.position.z = -1.4;
        proto.add(flame);
      }
      this.shotProto.set(key, proto);
    }
    return this.shotProto.get(key).clone();
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
      color: new THREE.Color('#ffffff'), transparent: true, opacity: 0.95,
      depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    const glow = new THREE.Mesh(this.laserGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: true, opacity: 0.45,
      depthWrite: false, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    const grp = new THREE.Group();
    grp.add(core); grp.add(glow);
    grp.position.copy(from);
    this.world.scene.add(grp);

    const b = {
      grp, core, glow, owner, w, color,
      dir: _d.clone(),
      // duration が無いと life が NaN になり、NaN <= 0 が false なので
      // ビームが永久に消えなくなる。設定ミスで不死身の物を作らせない
      life: Number.isFinite(w.duration) ? w.duration : 1.2,
      dur: Number.isFinite(w.duration) ? w.duration : 1.2,
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
        netId: this.nextNetId++,
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

      // ブーメラン: 一定時間で折り返し、投げ主のところへ戻る
      if (p.w.kind === 'boomerang') {
        p.boomT += dt;
        if (!p.returning && p.boomT >= (p.w.turnAt || 0.55)) {
          p.returning = true;
          if (p.hitSet) p.hitSet.clear();   // 復路でもう一度当たる
        }
        if (p.returning) {
          _v.copy(p.owner.pos); _v.y += 1.4;
          _d.copy(_v).sub(p.pos);
          const dist = _d.length();
          _d.normalize();
          const sp = p.vel.length() || p.w.speed;
          p.vel.lerp(_d.multiplyScalar(sp), 1 - Math.pow(0.004, dt));
          if (dist < 3) p.life = 0;         // 手元に戻ったら消える
        }
        if (p.mesh.children[0]) p.mesh.children[0].rotation.y += dt * 26;
      }

      // 地雷: 地面に着いたらそこに留まり、起爆待ちに入る
      if (p.w.kind === 'mine' && p.stuck) {
        p.armT += dt;
        const lamp = p.mesh.children[1];
        // 起爆前は速く、待機中はゆっくり点滅させて「生きている」ことを見せる
        if (lamp) lamp.visible = Math.sin(p.armT * (p.armT < (p.w.armTime || 0.6) ? 26 : 6)) > -0.2;
      }

      _prev.copy(p.pos);
      p.pos.addScaledVector(p.vel, dt);
      p.mesh.position.copy(p.pos);
      if (p.w.kind !== 'bullet') {
        p.mesh.lookAt(p.pos.x + p.vel.x, p.pos.y + p.vel.y, p.pos.z + p.vel.z);
      }

      if (p.w.kind === 'mine' && !p.stuck) {
        const floor = this.world.collision ? this.world.collision.floorAt(p.pos.x, p.pos.z) : 0;
        if (p.pos.y <= floor + 0.4) {
          p.pos.y = floor + 0.4;
          p.vel.set(0, 0, 0);
          p.gravity = 0;
          p.stuck = true;
          p.mesh.position.copy(p.pos);
          p.mesh.rotation.set(0, Math.random() * 6.28, 0);
        }
      }
      // 起爆: 武装した地雷に敵が近づいたら
      if (p.w.kind === 'mine' && p.stuck && p.armT >= (p.w.armTime || 0.6)) {
        for (const m of mechs) {
          if (!m.alive || m.team === p.owner.team || m.invuln > 0) continue;
          _v.copy(m.pos); _v.y += 1.2;
          if (_v.distanceTo(p.pos) < (p.w.trigger || 7)) { p.blast = true; break; }
        }
      }

      let hitSomething = false;
      for (const m of mechs) {
        if (m === p.owner || !m.alive || m.team === p.owner.team) continue;
        if (m.invuln > 0) continue;
        if (p.hitSet && p.hitSet.has(m)) continue;      // 貫通弾は同じ相手を刺し直さない
        _v.copy(m.pos); _v.y += 1.6;
        const r = p.radius + 2.0;
        if (distSqPointSegment(_v, _prev, p.pos) < r * r) {
          _d.copy(p.vel).normalize();
          this.world.hit(p.owner, m, p.w.dmg, p.w.down, _d, p.w.kind === 'shell' ? 8 : 3, p.w.kind);
          if (p.hitSet) { p.hitSet.add(m); this.world.fx.hit(p.pos, p.color); }
          else hitSomething = true;                     // 貫通しない弾はここで消える
          break;
        }
      }

      // ビルに遮られたら、その手前で消す
      let blocked = false;
      const col = this.world.collision;
      if (!hitSomething && col) {
        const t = col.segmentHit(_prev.x, _prev.y, _prev.z, p.pos.x, p.pos.y, p.pos.z);
        if (t >= 0) {
          p.pos.lerpVectors(_prev, p.pos, Math.max(t - 0.01, 0));
          // ブーメランは壁に当たったら折り返して戻る
          if (p.w.kind === 'boomerang' && !p.returning) {
            p.returning = true; p.vel.negate();
            if (p.hitSet) p.hitSet.clear();
          }
          // 地雷は壁でも止まる（ビルの角に置ける）
          else if (p.w.kind === 'mine' && !p.stuck) {
            p.vel.set(0, 0, 0); p.gravity = 0; p.stuck = true;
            p.mesh.position.copy(p.pos);
          }
          else blocked = true;
        }
      }

      // ブーメランは地面すれすれを滑って戻る。誘導で下を向いたときに
      // 地面に潜って消えてしまうと、往復する武装にならない
      if (p.w.kind === 'boomerang' && p.pos.y < 1.0) {
        p.pos.y = 1.0;
        if (p.vel.y < 0) p.vel.y = 0;
      }

      const outside = p.pos.y < 0 || Math.hypot(p.pos.x, p.pos.z) > ARENA_R + 20;
      if (hitSomething || blocked || p.blast || p.life <= 0 || outside) {
        if (blocked) this.world.fx.hit(p.pos, p.color);   // ビルに着弾
        if (p.w.splash && (hitSomething || blocked || p.blast || p.pos.y < 0)) {
          this.world.fx.explodeSmall(p.pos, '#ffb45c');
          for (const m of mechs) {
            if (!m.alive || m.team === p.owner.team || m.invuln > 0) continue;
            _v.copy(m.pos); _v.y += 1.5;
            if (_v.distanceTo(p.pos) < p.w.splash && !hitSomething) {
              _d.copy(_v).sub(p.pos).normalize();
              // 地雷は爆風が本体。砲弾の巻き込みと違って減衰させない
              const k = p.w.kind === 'mine' ? 1 : 0.6;
              this.world.hit(p.owner, m, p.w.dmg * k, p.w.down * (k === 1 ? 1 : 0.5), _d, 5, 'shell');
            }
          }
        }
        // 命中エフェクトは takeHit 側で出しているので、ここでは出さない
        // (二重に出すと加算合成で真っ白に飛ぶ)
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

      // ビルに遮られたらそこまでで止める
      const col = this.world.collision;
      const reach = col
        ? col.rayDistance(from.x, from.y, from.z, b.dir.x, b.dir.y, b.dir.z, w.range)
        : w.range;

      // 見た目: 長さ reach、太さは撃ち始めに膨らんでから絞る
      const p = 1 - b.life / b.dur;
      const flare = p < 0.12 ? p / 0.12 : (b.life < 0.18 ? b.life / 0.18 : 1);
      const rad = (w.radius || 1.4) * (0.55 + flare * 0.45);
      b.core.scale.set(rad * 0.45, rad * 0.45, reach);
      b.glow.scale.set(rad, rad, reach);
      b.core.material.opacity = 0.95 * flare;
      b.glow.material.opacity = 0.45 * flare;

      // 判定: 一定間隔でヒットを刻む
      b.tick -= dt;
      if (b.tick <= 0 && b.life > 0) {
        b.tick = w.tickGap || 0.12;
        _tmp.copy(from).addScaledVector(b.dir, reach);
        for (const m of mechs) {
          if (m === b.owner || !m.alive || m.team === b.owner.team || m.invuln > 0) continue;
          _v.copy(m.pos); _v.y += 1.6;
          const r = (w.radius || 1.4) + 1.8;
          if (distSqPointSegment(_v, from, _tmp) < r * r) {
            this.world.hit(b.owner, m, w.dmg, w.down, b.dir, 2, 'laser');
          }
        }
      }

      if (!(b.life > 0)) {          // NaN もここで確実に落とす
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

  // ===== 通信対戦: ゲスト側でホストの弾を再現する =====
  // ホストが送ってくるのは [id, ownerIdx, weaponIdx, x,y,z, vx,vy,vz] の並び。
  // 見た目と外挿のためだけに持ち、当たり判定はホストしか行わない。
  syncShots(arr, mechs, WEAPON_ORDER) {
    const seen = new Set();
    for (let i = 0; i < arr.length; i += 9) {
      const id = arr[i], owner = mechs[arr[i + 1]], key = WEAPON_ORDER[arr[i + 2]];
      if (!owner || !key) continue;
      seen.add(id);
      let p = this.netShots.get(id);
      if (!p) {
        const w = owner.d.weapons[key];
        if (!w) continue;
        const color = (w.kind === 'beam' || w.kind === 'spread') ? owner.d.palette.beam
          : w.kind === 'bullet' ? '#ffd98a' : '#ffb45c';
        const mesh = this.makeShotMesh(w, color);
        this.world.scene.add(mesh);
        p = { mesh, w, pos: new THREE.Vector3(), vel: new THREE.Vector3() };
        this.netShots.set(id, p);
        this.world.fx.muzzle(new THREE.Vector3(arr[i + 3], arr[i + 4], arr[i + 5]), color);
      }
      p.pos.set(arr[i + 3], arr[i + 4], arr[i + 5]);
      p.vel.set(arr[i + 6], arr[i + 7], arr[i + 8]);
      p.mesh.position.copy(p.pos);
      if (p.w.kind !== 'bullet') p.mesh.lookAt(p.pos.x + p.vel.x, p.pos.y + p.vel.y, p.pos.z + p.vel.z);
    }
    for (const [id, p] of this.netShots) {
      if (seen.has(id)) continue;
      this.world.scene.remove(p.mesh);
      this.netShots.delete(id);
    }
  }

  syncBits(arr, mechs) {
    const seen = new Set();
    for (let i = 0; i < arr.length; i += 5) {
      const id = arr[i], owner = mechs[arr[i + 1]];
      if (!owner) continue;
      seen.add(id);
      let b = this.netBits.get(id);
      if (!b) {
        const mesh = new THREE.Mesh(this.bitGeo, this.mat(owner.d.palette.trim));
        this.world.scene.add(mesh);
        b = { mesh, owner };
        this.netBits.set(id, b);
      }
      b.mesh.position.set(arr[i + 2], arr[i + 3], arr[i + 4]);
      const t = owner.target;
      if (t) b.mesh.lookAt(t.pos.x, t.pos.y + 1.5, t.pos.z);
    }
    for (const [id, b] of this.netBits) {
      if (seen.has(id)) continue;
      this.world.scene.remove(b.mesh);
      this.netBits.delete(id);
    }
  }

  syncBeams(arr, mechs) {
    // 本数が変わったら作り直す（同時に何本も出る武装ではない）
    while (this.beams.length > arr.length / 5) {
      const b = this.beams.pop();
      this.world.scene.remove(b.grp);
      b.core.material.dispose(); b.glow.material.dispose();
    }
    for (let i = 0; i < arr.length; i += 5) {
      const owner = mechs[arr[i]];
      if (!owner) continue;
      const idx = i / 5;
      if (!this.beams[idx]) {
        const b = this.spawnLaser(owner, 'sp_shot');
        this.beams.pop();          // spawnLaser が push したものを所定の位置へ
        this.beams[idx] = b;
      }
      const b = this.beams[idx];
      b.dir.set(arr[i + 1], arr[i + 2], arr[i + 3]);
      b.life = arr[i + 4];
    }
  }

  // ゲスト側: スナップショットの間を速度で埋める
  extrapolate(dt) {
    for (const p of this.netShots.values()) {
      p.pos.addScaledVector(p.vel, dt);
      p.mesh.position.copy(p.pos);
    }
  }

  clearNet() {
    for (const p of this.netShots.values()) this.world.scene.remove(p.mesh);
    for (const b of this.netBits.values()) this.world.scene.remove(b.mesh);
    this.netShots.clear();
    this.netBits.clear();
  }

  clear() {
    this.clearNet();
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
    this.debrisGeo = new THREE.BoxGeometry(0.34, 0.34, 0.7);
    // 衝撃波は細い輪。太い輪を巨大化させると、寄りのカメラで
    // ただの白い帯になって画面を覆ってしまう
    this.shockGeo = new THREE.RingGeometry(0.975, 1.0, 72);
    this.shockGeo.rotateX(-Math.PI / 2);
  }

  add(mesh, life, fn) {
    this.scene.add(mesh);
    this.items.push({ mesh, life, max: life, fn });
  }

  _ball(pos, color, r, life, grow, up = 0, additive = true) {
    // 発光はスプライト（中心が明るく外へ消えるので輪郭が出ない）、
    // 煙だけは加算にせず球メッシュのまま
    const m = additive
      ? makeSoftSprite(color, 0.9)
      : new THREE.Mesh(this.sphereGeo, new THREE.MeshBasicMaterial({
          color: new THREE.Color(color), transparent: true, opacity: 0.9, depthWrite: false,
        }));
    m.position.copy(pos);
    m.scale.setScalar(r * (additive ? 1.6 : 1));   // スプライトは板なので少し大きめに
    const base = r * (additive ? 1.6 : 1);
    this.add(m, life, (it, p) => {
      it.mesh.scale.setScalar(base * (1 + grow * p));
      it.mesh.material.opacity = 0.9 * (1 - p);
      if (up) it.mesh.position.y += up * 0.016;
    });
  }

  muzzle(pos, color) {
    this._ball(pos, '#ffffff', 0.22, 0.06, 1.2);
    this._ball(pos, color, 0.32, 0.09, 1.5);
  }
  hit(pos, color) {
    this._ball(pos, color, 0.55, 0.24, 2.6);
    this._ball(pos, '#ffffff', 0.3, 0.12, 3.0);
    const ring = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: true, opacity: 0.8, side: THREE.DoubleSide,
      depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    ring.position.copy(pos);
    ring.rotation.x = Math.random() * Math.PI; ring.rotation.z = Math.random() * Math.PI;
    this.add(ring, 0.2, (it, p) => {
      it.mesh.scale.setScalar(0.5 + p * 2.6);
      it.mesh.material.opacity = 0.45 * (1 - p);
    });
  }
  explodeSmall(pos, color) {
    this._ball(pos, color, 1.2, 0.4, 3.2);
    this._ball(pos, '#fff2c0', 0.7, 0.22, 3.6);
  }
  explode(pos) {
    // 機体の中心で炸裂させる。足元(pos.y=0)のままだと下半分が地面に埋まる
    _e.copy(pos); _e.y += 1.6;
    this._ball(_e, '#fffbe0', 0.9, 0.26, 2.0, 6);
    this._ball(_e, '#fff0a0', 1.3, 0.46, 2.6, 18);
    this._ball(_e, '#ff8a3c', 1.9, 0.7, 2.8, 12);
    this._ball(_e, '#ff5a20', 2.6, 0.95, 2.2, 8);
    const ring = new THREE.Mesh(this.shockGeo, new THREE.MeshBasicMaterial({
      color: 0xffd08a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false,
      blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    ring.position.set(pos.x, 0.12, pos.z);
    this.add(ring, 0.5, (it, p) => {
      it.mesh.scale.setScalar(2 + p * 13);
      const f2 = 1 - p;
      it.mesh.material.opacity = 0.9 * f2 * f2 * f2;
    });
  }
  // 撃墜演出用の大爆発。通常の explode より段数が多く、破片も飛ぶ
  finishBlast(pos) {
    _e.copy(pos); _e.y += 1.6;
    // 白熱 → 火球 → 燻り
    this._ball(_e, '#ffffff', 1.6, 0.18, 2.6, 4);
    this._ball(_e, '#fffbe0', 1.4, 0.4, 3.0, 10);
    this._ball(_e, '#ffd06a', 2.2, 0.75, 3.4, 16);
    this._ball(_e, '#ff7a28', 3.2, 1.15, 3.0, 12);
    this._ball(_e, '#c23a10', 4.0, 1.7, 2.4, 7);

    // 地表を走る衝撃波。2本を少しずらして重ねる。
    // 縦向きの輪も試したが、下半分が地面に埋まって「輪っか」に見えるのでやめた
    for (const [delay, grow] of [[0, 22], [0.14, 15]]) {
      const ring = new THREE.Mesh(this.shockGeo, new THREE.MeshBasicMaterial({
        color: 0xfff0c0, transparent: true, opacity: 0, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
      }));
      ring.position.set(pos.x, 0.12, pos.z);
      const life = 0.6 + delay;
      this.add(ring, life, (it, p) => {
        const q = Math.max(0, p * life - delay) / 0.6;
        it.mesh.scale.setScalar(1 + q * grow);
        const f2 = 1 - q;
        it.mesh.material.opacity = q <= 0 ? 0 : 0.95 * f2 * f2 * f2;
      });
    }

    // 破片: 光る小片が放射状に飛んで落ちる
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(this.debrisGeo, new THREE.MeshBasicMaterial({
        color: new THREE.Color(i % 3 === 0 ? '#ffd06a' : '#ff8a3c'),
        transparent: true, opacity: 0.95, depthWrite: false,
        blending: THREE.AdditiveBlending, toneMapped: false,
      }));
      m.position.copy(_e);
      const dir = new THREE.Vector3().randomDirection();
      if (dir.y < 0) dir.y = -dir.y;
      const vel = dir.multiplyScalar(14 + Math.random() * 26);
      vel.y += 6;
      const spin = new THREE.Vector3().randomDirection().multiplyScalar(9);
      const life = 1.1 + Math.random() * 0.7;
      this.add(m, life, (it, p) => {
        const dt = 1 / 60;
        vel.y -= 34 * dt;
        it.mesh.position.addScaledVector(vel, dt);
        it.mesh.rotation.x += spin.x * dt;
        it.mesh.rotation.y += spin.y * dt;
        it.mesh.rotation.z += spin.z * dt;
        it.mesh.material.opacity = 0.95 * (1 - p * p);
      });
    }
  }

  // 追撃の小爆発（撃墜演出の途中で散らす）
  secondary(pos, spread = 4) {
    _e.copy(pos);
    _e.x += (Math.random() - 0.5) * spread * 2;
    _e.y += 1.0 + Math.random() * 2.5;
    _e.z += (Math.random() - 0.5) * spread * 2;
    this._ball(_e, '#fff0a0', 0.8, 0.26, 2.4, 8);
    this._ball(_e, '#ff8a3c', 1.3, 0.5, 2.8, 6);
  }

  burst(pos, color) {
    const ring = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({
      color: new THREE.Color(color), transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false,
      blending: THREE.AdditiveBlending, toneMapped: false,
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
