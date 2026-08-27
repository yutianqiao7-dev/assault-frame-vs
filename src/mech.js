import * as THREE from 'three';
import { buildMech, HIP_Y } from './mechmodel.js';
import { Trail } from './glow.js';
import * as C from './config.js';

const _v = new THREE.Vector3();
const _f = new THREE.Vector3();
const _r = new THREE.Vector3();
const _tb = new THREE.Vector3();
const _te = new THREE.Vector3();
const _hit = new THREE.Vector3();

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
function angLerp(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export class Mech {
  constructor(data, team, world) {
    this.d = data;
    this.team = team;          // 'ally' | 'foe'
    this.world = world;
    this.isPlayer = false;

    this.root = buildMech(data.palette, data.shape);
    world.scene.add(this.root);

    // 振りの軌跡。刃はワールド座標で拾うのでシーン直下に置く
    this.trail = new Trail(7, data.palette.beam, 0.16);
    world.scene.add(this.trail.mesh);

    this.pos = new THREE.Vector3(0, 0, 0);
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.grounded = true;

    this.maxHp = data.hp;
    this.hp = data.hp;
    this.boost = C.BOOST_MAX;
    this.overheat = false;

    this.st = 'free';          // free / step / land / fire / rush / swing / stagger / down / wake / dead
    this.stT = 0;
    this.stDur = 0;

    this.stepDir = new THREE.Vector3();
    this.boosting = false;
    this.wasAir = false;

    // 攻撃側のコンボ管理
    this.comboHits = 0;
    this.comboDmg = 0;
    this.comboT = 0;

    // 被弾側
    this.downValue = 0;
    this.staggerAccum = 0;     // よろけまでの蓄積（射撃用）
    this.downT = 0;            // ダウン値の減衰待ち
    this.invuln = 0;

    // 覚醒
    this.awake = 0;            // 0-100
    this.awakeT = 0;           // 残り秒
    this.awakeReady = false;

    // 武装
    this.ammo = {};
    this.reload = {};
    this.cool = {};
    for (const k of C.WEAPON_ORDER) {
      const w = data.weapons[k];
      if (!w) continue;
      this.ammo[k] = w.ammo;
      this.reload[k] = 0;
      this.cool[k] = 0;
    }
    this.burstQueue = null;    // マシンガン等の連射

    this.meleeStage = -1;
    this.meleeKey = 'melee';
    this.meleeVar = data.melee.n;   // 現在出している格闘の派生 (n / side / fwd)
    this.meleeDir = 'n';
    this.meleeSide = 1;
    this.fireKey = null;
    this.fireT = -1;
    this.stepGround = false;
    this.groundDashT = 0;
    this.buf = null;
    this.bufT = 0;
    this.swingHit = true;
    this.swingStage = null;
    this.deadT = 0;
    this.animT = 0;
    this.hitFlash = 0;

    this.target = null;
  }

  get alive() { return this.st !== 'dead'; }
  get busy() { return this.st === 'fire' || this.st === 'rush' || this.st === 'swing' || this.st === 'land' || this.st === 'stagger' || this.st === 'down' || this.st === 'wake'; }
  get canAct() { return this.st === 'free' || this.st === 'step' || (this.st === 'swing' && this.stT > 0.1) || (this.st === 'fire' && this.stT > this.fireCancelT); }
  get speedMul() { return this.awakeT > 0 ? C.AWAKE_SPEED : 1; }
  get dmgMul() { return this.awakeT > 0 ? C.AWAKE_DMG : 1; }

  setState(s, dur = 0) { this.st = s; this.stT = 0; this.stDur = dur; }

  // 敵方向を基準にした前 / 右ベクトル
  frame() {
    if (this.target && this.target.alive) {
      _f.copy(this.target.pos).sub(this.pos); _f.y = 0;
      if (_f.lengthSq() < 1e-4) _f.set(0, 0, 1);
      _f.normalize();
    } else {
      _f.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    }
    // 画面右 = cross(前方, 上) = (-f.z, 0, f.x)
    // ここを (f.z, 0, -f.x) にすると左右が反転する
    _r.set(-_f.z, 0, _f.x);
    return { f: _f, r: _r };
  }

  distTo(o) { return Math.hypot(o.pos.x - this.pos.x, o.pos.z - this.pos.z, (o.pos.y - this.pos.y) * 0.8); }

  // ================= 更新 =================
  update(dt, input) {
    this.animT += dt;
    this.stT += dt;
    this.hitFlash = Math.max(0, this.hitFlash - dt * 4);
    this.invuln = Math.max(0, this.invuln - dt);

    for (const k of C.WEAPON_ORDER) {
      if (this.cool[k] > 0) this.cool[k] -= dt;
      const w = this.d.weapons[k];
      if (!w) continue;
      if (this.ammo[k] < w.ammo) {
        this.reload[k] += dt;
        if (this.reload[k] >= w.reload) { this.reload[k] = 0; this.ammo[k] = w.ammo; }
      } else this.reload[k] = 0;
    }
    if (this.burstQueue) {
      this.burstQueue.t -= dt;
      if (this.burstQueue.t <= 0) {
        this.world.spawnShot(this, this.burstQueue.key);
        this.burstQueue.n--;
        if (this.burstQueue.n <= 0) this.burstQueue = null;
        else this.burstQueue.t = this.burstQueue.gap;
      }
    }

    // ダウン値の自然減衰
    if (this.downT > 0) { this.downT -= dt; if (this.downT <= 0) { this.downValue = 0; this.staggerAccum = 0; } }
    // コンボ切れ
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) { this.comboHits = 0; this.comboDmg = 0; } }

    // 覚醒
    if (this.awakeT > 0) {
      this.awakeT -= dt;
      this.awake = Math.max(0, (this.awakeT / C.AWAKE_DURATION) * 100);
      if (this.awakeT <= 0) { this.awake = 0; this.awakeReady = false; }
    } else if (this.awake >= 100) this.awakeReady = true;

    if (this.st === 'dead') {
      this.deadT -= dt;
      if (this.deadT <= 0) this.respawn();
      this.trail.reset();
      // 撃墜直後のわずかな間だけ残骸を残す。
      // 即座に消すと、寄りのカメラが何もない地面を映すことになる
      const elapsed = DEAD_TIME - this.deadT;
      if (elapsed < DEAD_SHOW) {
        this.root.visible = true;
        const p = elapsed / DEAD_SHOW;
        this.root.rotation.x = -1.1 * p;          // 崩れ落ちる
        this.root.rotation.z = 0.5 * p;
        this.root.position.y = this.pos.y - p * 0.8;
        this.root.scale.setScalar(1 - p * 0.12);
      } else {
        this.root.visible = false;
      }
      return;
    }
    this.root.visible = true;

    const inp = input || EMPTY_INPUT;
    this.think(dt, inp);
    this.physics(dt);
    this.pose(dt);
    this.updateTrail();
  }

  // ---------- 入力処理 ----------
  think(dt, inp) {
    const d = this.d;
    const { f, r } = this.frame();

    // 先行入力バッファ (硬直中に押しても受け付ける)
    if (this.bufT > 0) this.bufT -= dt;
    if (this.bufT <= 0) this.buf = null;
    for (const k of BUFFERED) {
      if (k === 'step' ? inp.stepPressed : inp[k]) { this.buf = k; this.bufT = BUFFER_TIME; }
    }
    const want = (k) => (k === 'step' ? inp.stepPressed : inp[k]) || (this.buf === k && this.bufT > 0);
    const consume = (k) => { if (this.buf === k) { this.buf = null; this.bufT = 0; } };

    // --- 覚醒発動 ---
    if (inp.awake && this.awakeReady && this.awakeT <= 0 && this.st !== 'down' && this.st !== 'wake') {
      this.awakeT = C.AWAKE_DURATION;
      this.awake = 100;
      this.awakeReady = false;
      this.boost = C.BOOST_MAX;
      this.overheat = false;
      this.setState('free');
      this.invuln = Math.max(this.invuln, 0.4);
      this.world.fx.burst(this.pos, this.d.palette.beam);
      this.world.msg('BURST!');
    }

    // --- ダウン / 起き上がり ---
    if (this.st === 'down') {
      // 接地して規定時間、または上限時間を過ぎたら（空中でも）起き上がる
      if ((this.grounded && this.stT > C.DOWN_TIME) || this.stT > C.DOWN_MAX_TIME) {
        this.setState('wake', 0.45);
        // 起き上がりモーション中に無敵を使い切ると、動ける頃には無敵が無い。
        // モーションぶんを足して「動ける状態で WAKEUP_INVULN 秒」を保証する
        this.invuln = 0.45 + C.WAKEUP_INVULN;
        this.downValue = 0;
        this.staggerAccum = 0;
      }
      return;
    }
    if (this.st === 'wake') { if (this.stT >= this.stDur) this.setState('free'); return; }
    if (this.st === 'stagger') { if (this.stT >= this.stDur) this.setState('free'); return; }
    if (this.st === 'land') {
      if (this.stT >= this.stDur) { this.setState('free'); }
      return;
    }

    // --- ステップ ---
    const firing = this.fireKey && d.weapons[this.fireKey];
    const lockedByLaser = this.st === 'fire' && firing && firing.kind === 'laser' && this.stT < this.fireCancelT;
    const canStep = !this.overheat && !lockedByLaser && this.boost >= d.stepCost &&
      (this.st === 'free' || this.st === 'fire' || this.st === 'swing' || this.st === 'step' && this.stT > 0.18);
    if (want('step') && canStep) {
      consume('step');
      let dx = inp.mx, dy = inp.my;
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) { dx = 0; dy = -1; }  // 入力なしは後ろステップ
      this.stepDir.copy(f).multiplyScalar(dy).addScaledVector(r, dx).normalize();
      this.boost -= d.stepCost;
      if (this.boost <= 0) { this.boost = 0; this.overheat = true; }
      this.stepGround = this.grounded;      // 地上ステップは接地したまま滑る
      this.setState('step', d.stepDur);
      if (this.stepGround) this.vel.y = 0;
      else this.vel.y = Math.max(this.vel.y * 0.2, 0);
      this.world.breakHoming(this);   // 誘導切り
      this.world.fx.stepPuff(this.pos, this.stepDir);
      return;
    }

    // --- 攻撃入力 ---
    if (this.canAct) {
      if (want('melee') && this.tryMelee(meleeDirOf(inp), inp)) { consume('melee'); return; }
      if (want('sp_melee') && this.trySpMelee()) { consume('sp_melee'); return; }
      if (want('sub') && this.tryFire('sub')) { consume('sub'); return; }
      if (want('sp_shot') && this.tryFire('sp_shot')) { consume('sp_shot'); return; }
      if (inp.shot && this.tryFire('shot')) return;
    }

    // --- 格闘中 ---
    if (this.st === 'rush') { this.updateRush(dt); return; }
    if (this.st === 'swing') {
      // 格闘中は空中で静止（重力なし）。ブーストは吹かし続けているので消費する
      this.drainMeleeBoost(dt);
      this.vel.x *= Math.pow(0.02, dt);
      this.vel.z *= Math.pow(0.02, dt);
      this.vel.y = lerp(this.vel.y, 0, 1 - Math.pow(0.02, dt));
      if (this.stT >= this.stDur) {
        this.setState('fire', 0.28);   // 振り抜き硬直
        this.fireKey = null; this.fireT = -1;
        this.root.userData.saber.visible = false;
        this.meleeStage = -1;
      }
      return;
    }
    if (this.st === 'fire') {
      if (this.stT >= this.stDur) this.setState('free');
      // 射撃硬直中は慣性のみ
      this.vel.x *= Math.pow(0.22, dt);
      this.vel.z *= Math.pow(0.22, dt);
      if (!this.grounded) this.vel.y -= C.GRAVITY * 0.65 * dt;
      return;
    }

    // --- 移動 ---
    const moveLen = Math.hypot(inp.mx, inp.my);
    const wantBoost = inp.jump && !this.overheat && this.boost > 0;
    this.boosting = wantBoost && this.st !== 'step';

    if (this.st === 'step') {
      const ease = 1 - Math.pow(this.stT / this.stDur, 2) * 0.45;
      this.vel.x = this.stepDir.x * d.stepSpeed * this.speedMul * ease;
      this.vel.z = this.stepDir.z * d.stepSpeed * this.speedMul * ease;
      if (this.stepGround) this.vel.y = 0;
      else this.vel.y = Math.max(this.vel.y - C.GRAVITY * 0.22 * dt, -5);
      if (this.stT >= this.stDur) {
        this.setState('free');
        this.vel.x *= 0.35; this.vel.z *= 0.35;
      }
      return;
    }

    if (!this.boosting) this.groundDashT = 0;

    if (this.boosting) {
      const sp = d.bdSpeed * this.speedMul;
      // 地上ブーストダッシュ: 押し始めの GROUND_DASH_TIME は浮かずに地面を滑走する。
      // 押し続けるとそのまま上昇へ移行。着地すると onLand でリセットされるので、
      // 着地→即ブーストの流れでまた地上を滑れる。
      const groundDash = this.grounded && moveLen > 0.2 && this.groundDashT < C.GROUND_DASH_TIME;
      if (groundDash) this.groundDashT += dt;

      if (moveLen > 0.2) {
        _v.copy(f).multiplyScalar(inp.my / Math.max(1, moveLen)).addScaledVector(r, inp.mx / Math.max(1, moveLen));
        _v.normalize();
        const k = 1 - Math.pow(groundDash ? 0.0003 : 0.0008, dt);
        this.vel.x = lerp(this.vel.x, _v.x * sp, k);
        this.vel.z = lerp(this.vel.z, _v.z * sp, k);
        this.boost -= d.bdDrain * dt;
      } else {
        this.vel.x *= Math.pow(0.05, dt);
        this.vel.z *= Math.pow(0.05, dt);
        this.boost -= d.riseDrain * 0.55 * dt;
      }

      if (groundDash) {
        this.vel.y = 0;                       // 浮かない
      } else {
        this.vel.y = lerp(this.vel.y, d.riseSpeed * this.speedMul, 1 - Math.pow(0.002, dt));
        this.boost -= d.riseDrain * 0.45 * dt;
        this.grounded = false;
      }

      if (this.boost <= 0) {
        this.boost = 0; this.overheat = true; this.boosting = false;
        // 地上でオーバーヒートしたらその場で硬直（空中なら落下→着地時に硬直）
        if (this.grounded) {
          this.setState('land', C.OVERHEAT_LAND_LAG);
          this.vel.x *= 0.2; this.vel.z *= 0.2;
        }
      }
    } else if (this.grounded) {
      const sp = d.walk * this.speedMul;
      if (moveLen > 0.2) {
        _v.copy(f).multiplyScalar(inp.my / Math.max(1, moveLen)).addScaledVector(r, inp.mx / Math.max(1, moveLen));
        _v.normalize();
        this.vel.x = lerp(this.vel.x, _v.x * sp, 1 - Math.pow(0.0005, dt));
        this.vel.z = lerp(this.vel.z, _v.z * sp, 1 - Math.pow(0.0005, dt));
      } else {
        this.vel.x *= Math.pow(0.0005, dt);
        this.vel.z *= Math.pow(0.0005, dt);
      }
    } else {
      // 空中（ブーストなし）＝ 落下しつつ弱い制御
      if (moveLen > 0.2 && !this.overheat) {
        _v.copy(f).multiplyScalar(inp.my / Math.max(1, moveLen)).addScaledVector(r, inp.mx / Math.max(1, moveLen));
        _v.normalize();
        this.vel.x = lerp(this.vel.x, _v.x * d.airMove, 1 - Math.pow(0.35, dt));
        this.vel.z = lerp(this.vel.z, _v.z * d.airMove, 1 - Math.pow(0.35, dt));
      }
      this.vel.y -= C.GRAVITY * dt;
    }
  }

  // ---------- 射撃 ----------
  get fireCancelT() {
    // 照射ビームを撃っている間はキャンセル不可（そのぶんリスクが高い）
    const w = this.fireKey && this.d.weapons[this.fireKey];
    if (w && w.kind === 'laser') return w.fireDelay + w.duration;
    return 0.22;
  }

  tryFire(key) {
    const w = this.d.weapons[key];
    if (!w || w.kind === 'melee_special') return false;
    // ファンネルは1回の使用で count 基ぶん消費する
    const cost = w.kind === 'funnel' ? (w.count || 1) : 1;
    if (this.ammo[key] < cost || this.cool[key] > 0) return false;
    this.ammo[key] -= cost;
    this.cool[key] = w.cooldown;
    // 照射ビームは発射中ずっと動けない
    const hold = w.kind === 'laser' ? w.duration : 0;
    this.setState('fire', w.fireDelay + hold + w.cooldown * 0.85);
    this.fireKey = key;
    this.fireT = w.fireDelay;
    this.grounded = this.grounded && this.vel.y <= 0;
    return true;
  }

  trySpMelee() {
    const w = this.d.weapons.sp_melee;
    if (!w || this.ammo.sp_melee <= 0 || this.cool.sp_melee > 0) return false;
    if (!this.target || !this.target.alive) return false;
    if (this.distTo(this.target) > w.rushRange) return false;
    if (!this.payMeleeBoost()) return false;
    this.ammo.sp_melee--;
    this.cool.sp_melee = w.cooldown;
    this.meleeKey = 'sp_melee';
    this.meleeVar = null;
    this.meleeStage = -1;
    this.setState('rush', w.rushTime);
    this.root.userData.saber.visible = true;
    return true;
  }

  // dir: 'n' / 'side' / 'fwd'
  tryMelee(dir, inp) {
    const m = this.d.melee;
    if (!this.target || !this.target.alive) return false;
    // 連撃（追撃も踏み込むぶんブーストを食う）。派生は初段のものを引き継ぐ
    if (this.st === 'swing' && this.meleeKey === 'melee' && this.meleeStage < this.meleeVar.stages.length - 1) {
      if (!this.payMeleeBoost(0.55)) return false;
      this.meleeStage++;
      this.startSwing();
      return true;
    }
    if (this.distTo(this.target) > m.range) return false;
    if (!this.payMeleeBoost()) return false;
    const v = m[dir] || m.n;
    this.meleeKey = 'melee';
    this.meleeDir = dir;
    this.meleeVar = v;
    this.meleeSide = inp && inp.mx < 0 ? -1 : 1;
    this.meleeStage = -1;
    this.setState('rush', v.rushTime);
    this.root.userData.saber.visible = true;
    return true;
  }

  // 格闘の踏み込みコスト。足りなければ出せない
  payMeleeBoost(mul = 1) {
    const cost = (this.d.meleeCost ?? 14) * mul;
    if (this.overheat || this.boost < cost) return false;
    this.boost -= cost;
    return true;
  }

  // 突進・振り中の継続消費。切れたらオーバーヒートして格闘は中断
  drainMeleeBoost(dt) {
    if (this.overheat) return false;
    this.boost -= this.d.bdDrain * C.MELEE_DRAIN_MUL * dt;
    if (this.boost <= 0) {
      this.boost = 0;
      this.overheat = true;
      return false;
    }
    return true;
  }

  updateRush(dt) {
    if (!this.drainMeleeBoost(dt)) { this.endMelee(); return; }
    const t = this.target;
    const isSp = this.meleeKey === 'sp_melee';
    const conf = isSp ? this.d.weapons.sp_melee : (this.meleeVar || this.d.melee.n);
    const hitR = isSp ? 4.6 : this.d.melee.hitRadius;
    if (!t || !t.alive) { this.endMelee(); return; }

    // 水平距離で間合いを測る（真上に乗り上げるのを防ぐ）
    const dx = t.pos.x - this.pos.x;
    const dz = t.pos.z - this.pos.z;
    const horiz = Math.hypot(dx, dz);
    const aimY = Math.max(t.pos.y, 0) + 1.1;
    const dy = aimY - this.pos.y;

    if (horiz < hitR && Math.abs(dy) < 4) {
      this.meleeStage = 0;
      this.startSwing();
      return;
    }

    const sp = (conf.rushSpeed ?? 44) * this.speedMul;
    // 水平は間合いまで、垂直は相手の高さに合わせる
    let hx = horiz > 1e-4 ? dx / horiz : 0;
    let hz = horiz > 1e-4 ? dz / horiz : 0;
    // 横格闘は回り込みながら寄る（間合いが詰まるほど直進に戻す）
    if (!isSp && conf.arc) {
      const swing = conf.arc * this.meleeSide * clamp((horiz - hitR) / 26, 0, 1);
      const px = -hz, pz = hx;
      const nx = hx + px * swing, nz = hz + pz * swing;
      const nl = Math.hypot(nx, nz) || 1;
      hx = nx / nl; hz = nz / nl;
    }
    this.vel.set(hx * sp, clamp(dy * 2.6, -sp * 0.6, sp * 0.6), hz * sp);
    this.grounded = false;

    if (this.stT >= this.stDur) this.endMelee();
  }

  startSwing() {
    const isSp = this.meleeKey === 'sp_melee';
    const stage = isSp
      ? { dmg: this.d.weapons.sp_melee.dmg, down: this.d.weapons.sp_melee.down, dur: 0.75, knock: 22, pull: false }
      : (this.meleeVar || this.d.melee.n).stages[this.meleeStage];
    this.setState('swing', stage.dur);
    this.swingStage = stage;
    this.swingHit = false;
    this.vel.set(0, 0, 0);
    if (this.pos.y < 1.2) this.pos.y = 1.2;   // 地上格闘でも浮く
  }

  endMelee() {
    this.setState('fire', 0.4);
    this.fireT = -1;
    this.root.userData.saber.visible = false;
    this.meleeStage = -1;
  }

  // ---------- 物理 ----------
  physics(dt) {
    // 発射タイミング
    if (this.fireT >= 0 && this.st === 'fire') {
      const prev = this.fireT;
      this.fireT -= dt;
      if (prev > 0 && this.fireT <= 0) {
        const w = this.d.weapons[this.fireKey];
        this.world.spawnShot(this, this.fireKey);
        // burst(実弾の連射) と missile(斉射) を同じ仕組みで撃つ
        const rep = (w.kind === 'missile' ? w.count : w.burst) || 1;
        const gap = (w.kind === 'missile' ? w.launchGap : w.burstGap) || 0.09;
        if (rep > 1) this.burstQueue = { key: this.fireKey, n: rep - 1, t: gap, gap };
      }
    }
    // 格闘ヒット判定
    if (this.st === 'swing' && !this.swingHit && this.stT > 0.1) {
      const t = this.target;
      if (t && t.alive && this.distTo(t) < (this.d.melee.hitRadius + 2.4)) {
        this.swingHit = true;
        const s = this.swingStage;
        _v.copy(t.pos).sub(this.pos).normalize();
        this.world.hit(this, t, s.dmg, s.down, _v, s.knock, 'melee');
        if (s.pull) { t.pos.copy(this.pos).addScaledVector(_v, 4.4); t.pos.y = this.pos.y; t.vel.set(0, 0.8, 0); }
      } else if (this.stT > 0.22) this.swingHit = true; // 空振り
    }
    if (this.st === 'swing' && this.stT >= this.stDur * 0.95) this.root.userData.saber.visible = false;

    // 積分
    this.pos.addScaledVector(this.vel, dt);

    // ダウン中の落下
    if (this.st === 'down' || this.st === 'stagger') {
      if (!this.grounded) this.vel.y -= C.GRAVITY * dt;
      this.vel.x *= Math.pow(0.25, dt);
      this.vel.z *= Math.pow(0.25, dt);
    }
    this.vel.y = Math.max(this.vel.y, -C.TERMINAL_FALL);

    // フィールド外
    const rr = Math.hypot(this.pos.x, this.pos.z);
    if (rr > C.ARENA_R) {
      const k = C.ARENA_R / rr;
      this.pos.x *= k; this.pos.z *= k;
      this.vel.x *= 0.2; this.vel.z *= 0.2;
    }

    // ビルの側面で止める。屋上より上にいるときは素通りする。
    // 先に横を解決しておけば、床の判定は「足元にある屋上」を見るだけで済む。
    const col = this.world.collision;
    if (col) {
      const before = this.pos.x + this.pos.z;
      col.pushOut(this.pos, MECH_RADIUS);
      if (this.pos.x + this.pos.z !== before) {
        // 壁に当たったぶんの速度を殺す（張り付いて加速し続けないように）
        this.vel.x *= 0.15; this.vel.z *= 0.15;
      }
    }

    // 接地（格闘の動作中は着地しない）。床は地面かビルの屋上
    const floor = col ? col.floorAt(this.pos.x, this.pos.z) : C.GROUND_Y;
    const meleeLocked = this.st === 'rush' || this.st === 'swing';
    const wasAir = !this.grounded;
    if (this.pos.y <= floor) {
      this.pos.y = floor;
      if (meleeLocked) {
        this.grounded = false;
        if (this.vel.y < 0) this.vel.y = 0;
      } else {
        if (wasAir) this.onLand();
        this.grounded = true;
        if (this.vel.y < 0) this.vel.y = 0;
      }
    } else {
      this.grounded = false;
    }

    // 硬直中の地上摩擦
    if (this.grounded && (this.st === 'land' || this.st === 'stagger' || this.st === 'wake' || this.st === 'down')) {
      const f = Math.pow(0.008, dt);
      this.vel.x *= f; this.vel.z *= f;
    }

    // ブースト回復（地上で非ブースト時）
    if (this.grounded && !this.boosting && this.st !== 'step') {
      this.boost = Math.min(C.BOOST_MAX, this.boost + 62 * dt);
      if (this.boost >= C.BOOST_MAX * 0.999) this.overheat = false;
    }

    // 向き
    if (this.st !== 'down') {
      const t = this.target;
      if (t && t.alive) {
        const want = Math.atan2(t.pos.x - this.pos.x, t.pos.z - this.pos.z);
        this.yaw = angLerp(this.yaw, want, 1 - Math.pow(0.0006, dt));
      }
    }

    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
    const sh = this.root.userData.shadow;
    const shFloor = col ? col.floorAt(this.pos.x, this.pos.z) : C.GROUND_Y;
    sh.position.y = shFloor - this.pos.y + 0.03;
    const k = clamp(1 - (this.pos.y - shFloor) / 40, 0.25, 1);
    sh.scale.setScalar(k);
    sh.material.opacity = 0.34 * k;
  }

  onLand() {
    if (this.st === 'down') { this.vel.x *= 0.1; this.vel.z *= 0.1; return; }
    if (this.st === 'stagger') return;
    const lag = this.overheat ? C.OVERHEAT_LAND_LAG
      : (this.st === 'step' ? C.STEP_LAND_LAG : C.NORMAL_LAND_LAG);
    this.boost = C.BOOST_MAX;
    this.overheat = false;
    this.boosting = false;
    this.groundDashT = 0;   // 着地→即ブーストでまた地上を滑れる
    this.vel.x *= 0.15; this.vel.z *= 0.15;
    this.setState('land', lag);
    this.world.fx.landPuff(this.pos);
  }

  // ---------- 被弾 ----------
  takeHit(attacker, rawDmg, downVal, dir, knock, kind) {
    if (!this.alive || this.invuln > 0) return 0;

    // すでにダウンしている相手への追撃は「ダウン追撃」。
    // ダウン時間を延長せず、打ち上げ直しもせず、ダメージも大きく落とす。
    // (ここを分けないと、特格→射撃連打で永久に起き上がれないハメになる)
    const alreadyDown = this.st === 'down';

    let scale = C.COMBO_SCALE[Math.min(attacker.comboHits, C.COMBO_SCALE.length - 1)];
    if (alreadyDown) scale *= C.DOWN_HIT_SCALE;
    const dmg = Math.round(rawDmg * scale * attacker.dmgMul);
    this.hp = Math.max(0, this.hp - dmg);
    this.hitFlash = 1;

    attacker.comboHits++;
    attacker.comboDmg += dmg;
    attacker.comboT = 2.2;
    attacker.gainAwake(dmg * C.AWAKE_GAIN_DEAL);
    this.gainAwake(dmg * C.AWAKE_GAIN_TAKE);

    this.downValue = Math.min(this.downValue + downVal, C.DOWN_LIMIT * 2);
    this.downT = C.DOWN_DECAY_DELAY;

    _hit.copy(this.pos); _hit.y += 1.6;   // 足元ではなく機体中心で光らせる
    this.world.fx.hit(_hit, kind === 'melee' ? '#ffd166' : this.d.palette.beam);

    if (this.hp <= 0) { this.die(attacker); return dmg; }

    if (alreadyDown) {
      // ダウン継続。軽く小突くだけで、浮かせ直さない
      this.vel.addScaledVector(dir, knock * 0.12);
      this.vel.y = Math.min(this.vel.y, 1.5);
      return dmg;
    }

    if (this.downValue >= C.DOWN_LIMIT || knock > 12) {
      // 強制ダウンはしっかり吹き飛ばす。密着のまま撃ち続けられるとハメになる
      const push = Math.max(knock, C.DOWN_KNOCK_MIN) + 8;
      this.setState('down');
      this.vel.set(dir.x * push, 9 + knock * 0.35, dir.z * push);
      this.grounded = false;
      this.staggerAccum = 0;
      this.root.userData.saber.visible = false;
      return dmg;
    }

    // 格闘は必ずよろける。射撃は蓄積がしきい値を超えたときだけ
    this.staggerAccum += downVal;
    if (kind === 'melee' || this.staggerAccum >= C.STAGGER_THRESHOLD) {
      this.staggerAccum = 0;
      this.setState('stagger', downVal >= 1 ? 0.55 : 0.34);
      this.vel.addScaledVector(dir, knock * 0.9);
      if (this.grounded) this.vel.y = 1.5;
      this.grounded = false;
    } else {
      // 蓄積中はのけぞらない（ダメージとダウン値だけ入る）
      this.vel.addScaledVector(dir, knock * 0.25);
    }
    return dmg;
  }

  gainAwake(v) {
    if (this.awakeT > 0) return;
    this.awake = Math.min(100, this.awake + v);
    if (this.awake >= 100) this.awakeReady = true;
  }

  die(attacker) {
    this.setState('dead');
    this.deadT = DEAD_TIME;
    this.awakeT = 0;
    this.burstQueue = null;
    this.root.userData.saber.visible = false;
    this.world.fx.explode(this.pos);
    this.world.onDeath(this, attacker);
  }

  respawn() {
    this.root.rotation.set(0, 0, 0);
    this.root.scale.setScalar(1);
    this.hp = this.maxHp;
    this.boost = C.BOOST_MAX;
    this.overheat = false;
    this.downValue = 0;
    this.invuln = 1.6;
    this.vel.set(0, 0, 0);
    for (const k of C.WEAPON_ORDER) { if (this.d.weapons[k]) { this.ammo[k] = this.d.weapons[k].ammo; this.reload[k] = 0; this.cool[k] = 0; } }
    const a = Math.random() * Math.PI * 2;
    const t = this.target;
    if (t) {
      this.pos.set(t.pos.x + Math.cos(a) * 60, 22, t.pos.z + Math.sin(a) * 60);
    } else this.pos.set(0, 22, 0);
    this.setState('free');
  }

  // ---------- 軌跡 ----------
  updateTrail() {
    const u = this.root.userData;
    const swinging = this.st === 'swing' && u.saber.visible;
    if (!swinging) { this.trail.reset(); return; }
    u.bladeBase.updateWorldMatrix(true, false);
    u.bladeEnd.updateWorldMatrix(true, false);
    _tb.setFromMatrixPosition(u.bladeBase.matrixWorld);
    _te.setFromMatrixPosition(u.bladeEnd.matrixWorld);
    this.trail.push(_tb, _te);
  }

  // ---------- ポーズ ----------
  pose(dt) {
    const u = this.root.userData;
    const t = this.animT;
    const spd = Math.hypot(this.vel.x, this.vel.z);

    const thrOn = this.boosting || this.st === 'step' || this.st === 'rush';
    for (const fl of u.thrusters) {
      fl.visible = thrOn;
      if (thrOn) fl.scale.set(1, 0.7 + Math.sin(t * 40) * 0.25 + Math.min(spd / 30, 1) * 0.5, 1);
    }

    let lx = 0, rx = 0, armLx = 0, armRx = 0, armRz = 0, armLz = 0, torsoX = 0, pelvY = 0;

    if (this.st === 'down') {
      // 仰向けに吹き飛ぶ
      this.root.rotation.x = lerp(this.root.rotation.x, this.grounded ? -1.35 : -0.9, 1 - Math.pow(0.001, dt));
      u.saber.visible = false;
      return;
    }
    this.root.rotation.x = lerp(this.root.rotation.x, 0, 1 - Math.pow(0.002, dt));

    if (this.st === 'stagger') {
      torsoX = 0.4; armLx = 0.7; armRx = 0.7;
    } else if (this.st === 'wake') {
      const p = this.stT / this.stDur;
      this.root.rotation.x = -1.35 * (1 - p);
      torsoX = 0.3 * (1 - p);
    } else if (this.st === 'swing' || this.st === 'rush') {
      const p = this.st === 'swing' ? clamp(this.stT / this.stDur, 0, 1) : 0;
      // 振りかぶり → 振り抜き
      const s = p < 0.28 ? -1 + p / 0.28 * 0.15 : (p - 0.28) / 0.72;
      torsoX = -0.25 + s * 0.5;
      armLz = -2.7 + Math.max(0, s) * 3.9;   // 大きく振り下ろす
      armLx = -1.1 + Math.max(0, s) * 1.7;
      armRx = 0.5;
      lx = -0.6; rx = 0.3;
    } else if (this.st === 'fire' && this.fireKey) {
      const w = this.d.weapons[this.fireKey];
      armRx = w && w.arc ? -2.0 - w.arc : -1.62;  // 銃を構える
      armLx = -0.35;
      torsoX = w && w.arc ? -0.12 : 0.04;
      lx = -0.25; rx = 0.2;
    } else if (this.boosting || !this.grounded) {
      // 空中: 脚を後ろに流す
      const back = clamp(spd / 26, 0, 1);
      lx = -0.55 - back * 0.5 + Math.sin(t * 3) * 0.05;
      rx = -0.35 - back * 0.35 - Math.sin(t * 3) * 0.05;
      armLx = 0.35 + back * 0.25; armRx = 0.3 + back * 0.2;
      armLz = 0.25; armRz = -0.25;
      torsoX = 0.12 + back * 0.2;
      pelvY = 0;
    } else if (spd > 1.2) {
      const w = t * 7.5;
      lx = Math.sin(w) * 0.5; rx = -Math.sin(w) * 0.5;
      armLx = -Math.sin(w) * 0.3; armRx = Math.sin(w) * 0.3;
      pelvY = Math.abs(Math.sin(w * 2)) * 0.06;
      torsoX = 0.06;
    } else {
      const b = Math.sin(t * 1.8) * 0.02;
      lx = 0; rx = 0; armLx = 0.05 + b; armRx = 0.05 + b; pelvY = b;
    }

    if (this.st === 'land') {
      const p = 1 - clamp(this.stT / Math.max(this.stDur, 0.01), 0, 1);
      pelvY -= 0.28 * p; lx = 0.5 * p; rx = 0.5 * p; torsoX = 0.35 * p;
    }
    if (this.st === 'step') {
      torsoX = 0.22; lx = -0.7; rx = -0.35; armLx = 0.5; armRx = 0.5;
    }

    // 攻撃・ステップはキビキビ、通常はなめらかに
    const snappy = this.st === 'swing' || this.st === 'step' || this.st === 'stagger' || this.st === 'rush';
    const k = Math.min(1, dt * (snappy ? 42 : 15));
    u.legL.rotation.x = lerp(u.legL.rotation.x, lx, k);
    u.legR.rotation.x = lerp(u.legR.rotation.x, rx, k);
    u.armL.rotation.x = lerp(u.armL.rotation.x, armLx, k);
    u.armR.rotation.x = lerp(u.armR.rotation.x, armRx, k);
    u.armL.rotation.z = lerp(u.armL.rotation.z, armLz, k);
    u.armR.rotation.z = lerp(u.armR.rotation.z, armRz, k);
    u.torso.rotation.x = lerp(u.torso.rotation.x, torsoX, k);
    u.pelvis.position.y = lerp(u.pelvis.position.y, HIP_Y + pelvY, k);

    // 無敵中の点滅
    this.root.visible = this.invuln > 0 ? Math.sin(this.invuln * 34) > -0.25 : true;
  }
}

// スティックの倒し方で格闘の派生を決める（横 → 横格、前 → 前格、それ以外 → N格）
function meleeDirOf(inp) {
  const ax = Math.abs(inp.mx), ay = Math.abs(inp.my);
  if (ax > 0.45 && ax >= ay) return 'side';
  if (inp.my > 0.45) return 'fwd';
  return 'n';
}

const MECH_RADIUS = 1.35;   // 機体をこの半径の円柱として壁に当てる
const DEAD_TIME = 3.0;      // 撃墜からリスポーンまで
const DEAD_SHOW = 0.32;     // そのうち残骸が見えている時間

const BUFFERED = ['melee', 'sp_melee', 'sub', 'sp_shot', 'step'];
const BUFFER_TIME = 0.35;

export const EMPTY_INPUT = {
  mx: 0, my: 0, jump: false, stepPressed: false,
  shot: false, melee: false, sub: false, sp_shot: false, sp_melee: false, awake: false,
};
