import * as THREE from 'three';

const _dir = new THREE.Vector3();
const _want = new THREE.Vector3();
const _look = new THREE.Vector3();
const _pivot = new THREE.Vector3();
const _ray = new THREE.Vector3();
const _caster = new THREE.Raycaster();
const _side = new THREE.Vector3();


// VSシリーズ風ロックオンカメラ: 自機の後方から、自機と敵の両方が映る位置へ。
export class ChaseCamera {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3(0, 14, -34);
    this.look = new THREE.Vector3();
    this.shake = 0;
    this.portrait = false;
    // 開幕の引き。1 で大きく引いて高く、0 で通常。main.js がスタンバイ中に減らす
    this.intro = 0;
    // 格闘の寄り。1 で横から見る形、0 で通常の真後ろ
    this.melee = 0;
    this.meleeSide = 1;
    this._sidePicked = false;
  }

  bump(v = 1) { this.shake = Math.min(1.4, this.shake + v); }

  // 撃墜演出用。倒された機体の周りを回り込みながら寄る。
  // t は演出開始からの経過秒
  focusOn(mech, t, dt) {
    if (!mech) return;
    const p = mech.pos;
    // 最初は寄って、あとからゆっくり引く
    const dist = 9 + Math.min(t, 2.4) * 5.5;
    const height = 3.2 + Math.min(t, 2.4) * 1.6;
    // 開始時のカメラ位置から回り込みを始める（急にワープしない）
    if (this._focusAng === undefined) {
      this._focusAng = Math.atan2(this.cam.position.x - p.x, this.cam.position.z - p.z);
    }
    this._focusAng += dt * 0.55;

    _want.set(
      p.x + Math.sin(this._focusAng) * dist,
      p.y + height,
      p.z + Math.cos(this._focusAng) * dist,
    );
    if (_want.y < 2.5) _want.y = 2.5;
    if (this.colliders && this.colliders.length) {
      _pivot.set(p.x, p.y + 1.8, p.z);
      _ray.copy(_want).sub(_pivot);
      const len = _ray.length();
      if (len > 0.5) {
        _caster.set(_pivot, _ray.divideScalar(len));
        _caster.far = len;
        const hit = _caster.intersectObjects(this.colliders, false)[0];
        if (hit) _want.copy(_pivot).addScaledVector(_caster.ray.direction, Math.max(3, hit.distance - 1.4));
      }
    }
    this.pos.lerp(_want, 1 - Math.pow(0.02, dt));

    _look.set(p.x, p.y + 1.7, p.z);
    this.look.lerp(_look, 1 - Math.pow(0.008, dt));

    this.cam.position.copy(this.pos);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 2.0);
      const sc = this.shake * this.shake * 1.1;
      this.cam.position.x += (Math.random() - 0.5) * sc;
      this.cam.position.y += (Math.random() - 0.5) * sc;
      this.cam.position.z += (Math.random() - 0.5) * sc;
    }
    this.cam.lookAt(this.look);
  }

  endFocus() {
    this._focusAng = undefined;
    // 撃墜演出の間は update を通らないので、格闘の寄りが凍ったまま残る
    this.melee = 0;
    this._sidePicked = false;
  }

  // 格闘中のカメラ位置。2 機の中点を軸に、結ぶ線の横から捉える。
  // 自機を軸に回すだけでは足りない: 接触時の間合いは 5 程度しかないので、
  // 自機の後ろから 35 度ずらしても敵との角度差は 11 度にしかならず、
  // 機体の幅のほうが大きいので結局重なって見える
  _meleePos(out, sp, tp, side, dist) {
    const px = _dir.z * side, pz = -_dir.x * side;
    // 横 0.9 : 後ろ 0.45 で混ぜる（約 63 度）。真横まで回すと前後が分からなくなる
    let vx = px * 0.9 - _dir.x * 0.45;
    let vz = pz * 0.9 - _dir.z * 0.45;
    const l = Math.hypot(vx, vz) || 1;
    vx /= l; vz /= l;
    // 2 機が画面に収まる距離。間合に比例させないと、離れているときに
    // 両端へ広がって自機が画面の端へ追いやられる
    const md = 9.5 + dist * 0.62;
    out.set((sp.x + tp.x) * 0.5 + vx * md,
            Math.max(sp.y, tp.y) + 4.2,
            (sp.z + tp.z) * 0.5 + vz * md);
  }

  // 中点から out の位置までが、どれだけ空いているか。回り込む側を決めるのに使う
  _clearance(sp, tp, out) {
    if (!this.colliders || !this.colliders.length) return 999;
    _pivot.set((sp.x + tp.x) * 0.5, Math.max(sp.y, tp.y) + 2.2, (sp.z + tp.z) * 0.5);
    _ray.copy(out).sub(_pivot);
    const len = _ray.length();
    if (len < 0.5) return 999;
    _caster.set(_pivot, _ray.divideScalar(len));
    _caster.far = len;
    const hit = _caster.intersectObjects(this.colliders, false)[0];
    return hit ? hit.distance : 999;
  }

  update(dt, self, target) {
    if (!self) return;
    const sp = self.pos;
    const hasT = !!(target && target.alive);

    if (hasT) {
      _dir.copy(target.pos).sub(sp); _dir.y = 0;
      if (_dir.lengthSq() < 1e-4) _dir.set(0, 0, 1);
      _dir.normalize();
    } else {
      _dir.set(Math.sin(self.yaw), 0, Math.cos(self.yaw));
    }

    const dist = hasT ? Math.hypot(target.pos.x - sp.x, target.pos.z - sp.z) : 40;

    // --- 格闘中の寄り ---
    // 真後ろのままだと、突進中は敵がちょうど自機の陰に入って何も見えない。
    // 横へ回り込んで 2 機を横から見る形にする
    const inMelee = hasT && (self.st === 'rush' || self.st === 'swing');
    const goal = inMelee ? 1 : 0;
    // 入りは速く、戻りはゆっくり。斬り終わりにカメラが飛ぶと酔う
    this.melee += (goal - this.melee) * (1 - Math.pow(goal > this.melee ? 0.004 : 0.22, dt));
    if (!inMelee && this.melee < 0.02) this._sidePicked = false;
    const m = this.melee;

    // 自機基準で組む。注視点に敵の高度をそのまま混ぜると、
    // 敵が上に居るときに自機が画面下に押し出されるので、寄与は 0.3 に抑える。
    const back = THREE.MathUtils.clamp(11 + dist * 0.12, 11, 22)
      * (this.portrait ? 1.22 : 1) * (1 + this.intro * 0.6) * (1 - m * 0.22);
    const camH = (4.8 + this.intro * 7.0) * (1 - m * 0.45) + m * 1.1;
    const ahead = THREE.MathUtils.clamp(dist * 0.55, 10, 34);    // 注視点を前に置く距離
    const dy = hasT ? target.pos.y - sp.y : 0;
    const lookH = 1.2 + THREE.MathUtils.clamp(dy * 0.3, -3, 9);

    // 回り込む向き。格闘の入り口で 1 回だけ左右を決める。
    // 毎フレーム選び直すと、壁際でカメラが左右に暴れる
    if (inMelee && !this._sidePicked) {
      this._sidePicked = true;
      const want = self.meleeSide < 0 ? -1 : 1;
      this._meleePos(_side, sp, target.pos, want, dist);
      const room = this._clearance(sp, target.pos, _side);
      this._meleePos(_side, sp, target.pos, -want, dist);
      const other = this._clearance(sp, target.pos, _side);
      // 入れたい側が明らかに塞がっていたら反対へ回す
      this.meleeSide = other > room + 3 ? -want : want;
    }

    _want.set(sp.x - _dir.x * back, sp.y + camH, sp.z - _dir.z * back);
    // 格闘の画作りは「近いほど強く」。突進の出だしはまだ遠いので後方視点のまま、
    // 接触する頃に横からの画になる
    const mf = m * THREE.MathUtils.clamp(1 - (dist - 6) / 20, 0, 1);
    if (mf > 0.001 && hasT) {
      this._meleePos(_side, sp, target.pos, this.meleeSide, dist);
      _want.lerp(_side, mf);
    }
    if (_want.y < 3.0) _want.y = 3.0;                            // 地面にめり込まない

    // ビルにめり込む場合は手前まで引き寄せる
    if (this.colliders && this.colliders.length) {
      _pivot.set(sp.x, sp.y + 2.2, sp.z);
      _ray.copy(_want).sub(_pivot);
      const len = _ray.length();
      if (len > 0.5) {
        _caster.set(_pivot, _ray.divideScalar(len));
        _caster.far = len;
        const hit = _caster.intersectObjects(this.colliders, false)[0];
        if (hit) _want.copy(_pivot).addScaledVector(_caster.ray.direction, Math.max(2.5, hit.distance - 1.4));
      }
    }

    // 格闘中は機体が速く動くので、追従も速くする
    const follow = 0.0006 * (1 - m) + 0.00006 * m;
    this.pos.lerp(_want, 1 - Math.pow(follow, dt));

    _look.set(sp.x + _dir.x * ahead, sp.y + lookH, sp.z + _dir.z * ahead);
    if (m > 0.001 && hasT) {
      // 注視点を 2 機の中点へ寄せる。これをしないと横から見ても
      // 画面の端に寄って、結局どちらかが切れる
      _look.x += ((sp.x + target.pos.x) * 0.5 - _look.x) * m;
      _look.y += ((sp.y + target.pos.y) * 0.5 + 1.7 - _look.y) * m;
      _look.z += ((sp.z + target.pos.z) * 0.5 - _look.z) * m;
    }
    this.look.lerp(_look, 1 - Math.pow(0.0008 * (1 - m) + 0.00008 * m, dt));

    this.cam.position.copy(this.pos);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 3.2);
      const s = this.shake * this.shake * 0.9;
      this.cam.position.x += (Math.random() - 0.5) * s;
      this.cam.position.y += (Math.random() - 0.5) * s;
      this.cam.position.z += (Math.random() - 0.5) * s;
    }
    this.cam.lookAt(this.look);
  }

  snap(self, target) {
    for (let i = 0; i < 40; i++) this.update(1 / 30, self, target);
  }
}
