import * as THREE from 'three';

// 発光体（ビーム・サーベル・爆発）の共通パーツ。
// 「白熱したコア + 色付きの外側グロー」を加算合成で重ねる。
// 単色の不透明メッシュのままだとブルームが乗っても“明るい棒”にしか見えないので、
// 中心を白飛びさせて外側だけ色を付けるのが要点。

const matCache = new Map();

export function glowMaterial(color, opacity = 0.85) {
  const key = `${color}|${opacity}`;
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,        // ブルームのしきい値を超えさせるため
    }));
  }
  return matCache.get(key);
}

// コアは白、外側は武装カラー。radius は外側グローの太さ
export function makeBeamBody(len, radius, color, opts = {}) {
  const g = new THREE.Group();
  const coreR = radius * (opts.coreRatio ?? 0.38);

  const core = new THREE.Mesh(
    new THREE.CapsuleGeometry(coreR, Math.max(len - coreR * 2, 0.01), 3, 8),
    glowMaterial('#ffffff', 1.0)
  );
  const glow = new THREE.Mesh(
    new THREE.CapsuleGeometry(radius, Math.max(len - radius * 2, 0.01), 3, 10),
    glowMaterial(color, opts.glowOpacity ?? 0.5)
  );
  // カプセルは Y 軸方向に伸びるので Z 向きに倒す
  core.rotation.x = Math.PI / 2;
  glow.rotation.x = Math.PI / 2;
  g.add(glow); g.add(core);
  g.userData.core = core;
  g.userData.glow = glow;
  return g;
}

// 中心が白く外へ向かって消えるグラデーション。
// 球メッシュのままだと輪郭が硬く「玉」に見えるので、閃光や爆発はこれを使う。
let softTex = null;
export function softTexture() {
  if (softTex) return softTex;
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0.0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,0.75)');
  grd.addColorStop(0.55, 'rgba(255,255,255,0.22)');
  grd.addColorStop(1.0, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
  softTex = new THREE.CanvasTexture(c);
  return softTex;
}

export function makeSoftSprite(color, opacity = 0.9) {
  return new THREE.Sprite(new THREE.SpriteMaterial({
    map: softTexture(),
    color: new THREE.Color(color),
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  }));
}

// 弾の周りに出す柔らかい光の玉（板ポリではなく球で十分）
export function makeGlowBall(r, color, opacity = 0.55) {
  return new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), glowMaterial(color, opacity));
}

// ===== 軌跡（サーベルの振り・弾の尾） =====
// 直近 N フレームの (根本, 先端) を溜めて三角ストリップにする。
export class Trail {
  constructor(segments, color, opacity = 0.55) {
    this.n = segments;
    this.pts = new Array(segments);
    for (let i = 0; i < segments; i++) this.pts[i] = { a: new THREE.Vector3(), b: new THREE.Vector3() };
    this.count = 0;

    const g = new THREE.BufferGeometry();
    this.positions = new Float32Array(segments * 2 * 3);
    this.alphas = new Float32Array(segments * 2);
    g.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    const idx = [];
    for (let i = 0; i < segments - 1; i++) {
      const o = i * 2;
      idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2);
    }
    g.setIndex(idx);

    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity } },
      vertexShader: `
        attribute float aAlpha;
        varying float vA;
        void main(){ vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 uColor; uniform float uOpacity;
        varying float vA;
        void main(){ gl_FragColor = vec4(uColor, vA * uOpacity); }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });

    this.mesh = new THREE.Mesh(g, mat);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
  }

  reset() { this.count = 0; this.mesh.visible = false; }

  push(a, b) {
    // 末尾に足して古いものを押し出す
    const last = this.pts.pop();
    last.a.copy(a); last.b.copy(b);
    this.pts.unshift(last);
    this.count = Math.min(this.count + 1, this.n);
    this.rebuild();
  }

  rebuild() {
    const p = this.positions, al = this.alphas;
    for (let i = 0; i < this.n; i++) {
      const s = this.pts[i];
      const o = i * 6;
      p[o] = s.a.x; p[o + 1] = s.a.y; p[o + 2] = s.a.z;
      p[o + 3] = s.b.x; p[o + 4] = s.b.y; p[o + 5] = s.b.z;
      // 新しいほど濃く。溜まっていない範囲は透明
      const fade = i < this.count ? Math.pow(1 - i / this.n, 2.4) : 0;
      al[i * 2] = fade * 0.15;   // 根本側は薄く
      al[i * 2 + 1] = fade;      // 先端側を濃く
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.attributes.aAlpha.needsUpdate = true;
    this.mesh.visible = this.count > 1;
  }
}
