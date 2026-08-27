import * as THREE from 'three';

const _dir = new THREE.Vector3();
const _want = new THREE.Vector3();
const _look = new THREE.Vector3();
const _pivot = new THREE.Vector3();
const _ray = new THREE.Vector3();
const _caster = new THREE.Raycaster();

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

  endFocus() { this._focusAng = undefined; }

  update(dt, self, target) {
    if (!self) return;
    const sp = self.pos;

    if (target && target.alive) {
      _dir.copy(target.pos).sub(sp); _dir.y = 0;
      if (_dir.lengthSq() < 1e-4) _dir.set(0, 0, 1);
      _dir.normalize();
    } else {
      _dir.set(Math.sin(self.yaw), 0, Math.cos(self.yaw));
    }

    const dist = target && target.alive ? Math.hypot(target.pos.x - sp.x, target.pos.z - sp.z) : 40;

    // 自機基準で組む。注視点に敵の高度をそのまま混ぜると、
    // 敵が上に居るときに自機が画面下に押し出されるので、寄与は 0.3 に抑える。
    const back = THREE.MathUtils.clamp(11 + dist * 0.12, 11, 22)
      * (this.portrait ? 1.22 : 1) * (1 + this.intro * 0.6);
    const camH = 4.8 + this.intro * 7.0;                         // 自機からのカメラ高
    const ahead = THREE.MathUtils.clamp(dist * 0.55, 10, 34);    // 注視点を前に置く距離
    const dy = target && target.alive ? target.pos.y - sp.y : 0;
    const lookH = 1.2 + THREE.MathUtils.clamp(dy * 0.3, -3, 9);

    _want.set(sp.x - _dir.x * back, sp.y + camH, sp.z - _dir.z * back);
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

    const k = 1 - Math.pow(0.0006, dt);
    this.pos.lerp(_want, k);

    _look.set(sp.x + _dir.x * ahead, sp.y + lookH, sp.z + _dir.z * ahead);
    this.look.lerp(_look, 1 - Math.pow(0.0008, dt));

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
