import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { ARENA_R } from './config.js';

// ステージ。どれも同じ形の結果を返す:
//   { grp, ground, buildings, boxes, far, dispose() }
//   buildings … カメラのレイキャスト用メッシュ
//   boxes     … collision.js が使う AABB { minX, maxX, minZ, maxZ, top }
//   far       … camera.far に入れる距離
// プレイ範囲はどのステージでも y=0 の平面。コロニーの湾曲は ARENA_R の外だけ。

export const STAGES = {
  city: { name: 'ナイトシティ', desc: '夜の高層ビル街。遮蔽が多く、屋上を取り合う' },
  colony: { name: 'コロニー内部', desc: '閉じた円筒。頭上に街が反り上がり、採光窓が光る' },
  ruins: { name: '廃墟', desc: '崩れた市街。低い瓦礫が多く、高さがばらばら' },
  canyon: { name: '渓谷', desc: '切り立った岩山。遮蔽は少なく大きい。開けた撃ち合い' },
};
export const STAGE_ORDER = ['city', 'colony', 'ruins', 'canyon'];
export const DEFAULT_STAGE = 'city';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

// ---------------------------------------------------------------- 共通
function installLights(scene, cfg) {
  const list = [];
  const add = (l) => { scene.add(l); list.push(l); return l; };

  add(new THREE.HemisphereLight(cfg.hemiSky, cfg.hemiGround, cfg.hemi));

  const key = add(new THREE.DirectionalLight(cfg.keyColor, cfg.key));
  key.position.set(...cfg.keyPos);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 20;
  key.shadow.camera.far = 320;
  const S = 72;
  key.shadow.camera.left = -S; key.shadow.camera.right = S;
  key.shadow.camera.top = S; key.shadow.camera.bottom = -S;
  key.shadow.bias = -0.0012;

  const fill = add(new THREE.DirectionalLight(cfg.fillColor, cfg.fill));
  fill.position.set(...cfg.fillPos);

  // リムライト: 背後やや上から当てて機体の輪郭を背景から切り離す。
  // これが無いと暗い背景に暗い機体が沈んでプラモに見えない。
  for (const r of cfg.rims) add(new THREE.DirectionalLight(r[0], r[1])).position.set(...r[2]);

  // 下からの起こし。閉じた空間で、下向きの面（頭上に回り込んだ陸地）を黒く沈ませない
  if (cfg.up) add(new THREE.DirectionalLight(cfg.up[0], cfg.up[1])).position.set(...cfg.up[2]);

  return { key, list };
}

// 空。上下 2 色のグラデーションを内側から見せるだけ
function skyDome(topHex, botHex, radius = 600) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { top: { value: new THREE.Color(topHex) }, bot: { value: new THREE.Color(botHex) } },
    vertexShader: `varying float h; void main(){ h = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 top; uniform vec3 bot; varying float h;
      void main(){ gl_FragColor = vec4(mix(bot, top, smoothstep(-0.1,0.6,h)), 1.0); }`,
  });
  return new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 16), mat);
}

// 境界のリングと光の壁。どこまで動けるかは見えていないと困る
function boundary(grp, color, opacity) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(ARENA_R - 1.5, ARENA_R, 96),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05;
  grp.add(ring);

  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(ARENA_R, ARENA_R, 60, 64, 1, true),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.BackSide, depthWrite: false })
  );
  wall.position.y = 30;
  grp.add(wall);
}

function mulberry(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// group 以下のジオメトリ／マテリアルを解放する。
// ステージを切り替えるたびに捨てないと GPU 側に溜まっていく
function disposeGroup(grp) {
  grp.traverse((o) => {
    if (o.userData.shared) return;        // 読み込み済み GLB は使い回すので触らない
    if (!o.isMesh && !o.isPoints) return;
    o.geometry?.dispose();
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of mats) {
      if (!m) continue;
      m.map?.dispose();
      m.dispose();
    }
  });
}

// ================================================================ 市街
function groundTexture() {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#232b3a';
  g.fillRect(0, 0, S, S);
  g.strokeStyle = '#303b4e';
  g.lineWidth = 6;
  for (let i = 0; i <= 4; i++) {
    const p = (i / 4) * S;
    g.beginPath(); g.moveTo(p, 0); g.lineTo(p, S); g.stroke();
    g.beginPath(); g.moveTo(0, p); g.lineTo(S, p); g.stroke();
  }
  g.strokeStyle = '#2a3444';
  g.lineWidth = 2;
  for (let i = 0; i <= 16; i++) {
    const p = (i / 16) * S;
    g.beginPath(); g.moveTo(p, 0); g.lineTo(p, S); g.stroke();
    g.beginPath(); g.moveTo(0, p); g.lineTo(S, p); g.stroke();
  }
  g.fillStyle = '#3a4a63';
  for (let i = 0; i < 26; i++) {
    const x = Math.random() * S, y = Math.random() * S;
    g.fillRect(x, y, 26 + Math.random() * 40, 5);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(22, 22);
  t.anisotropy = 4;
  return t;
}

// 廃墟の床: 割れたコンクリート。ひび割れと焼け跡で「戦場のあと」を出す
function crackedTexture() {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#4b453d';
  g.fillRect(0, 0, S, S);
  // 舗装の目地
  g.strokeStyle = '#3b362f';
  g.lineWidth = 5;
  for (let i = 0; i <= 3; i++) {
    const p = (i / 3) * S;
    g.beginPath(); g.moveTo(p, 0); g.lineTo(p, S); g.stroke();
    g.beginPath(); g.moveTo(0, p); g.lineTo(S, p); g.stroke();
  }
  // ひび。折れ線で枝分かれさせる
  g.strokeStyle = '#2b271f';
  for (let i = 0; i < 22; i++) {
    let x = Math.random() * S, y = Math.random() * S;
    let a = Math.random() * Math.PI * 2;
    g.lineWidth = 1 + Math.random() * 2.5;
    g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 6 + Math.random() * 8; k++) {
      a += (Math.random() - 0.5) * 1.1;
      x += Math.cos(a) * (6 + Math.random() * 14);
      y += Math.sin(a) * (6 + Math.random() * 14);
      g.lineTo(x, y);
    }
    g.stroke();
  }
  // 焼け跡
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * S, y = Math.random() * S, r = 14 + Math.random() * 46;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(18,14,11,0.72)');
    grd.addColorStop(1, 'rgba(18,14,11,0)');
    g.fillStyle = grd;
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  // 散った瓦礫
  g.fillStyle = '#5b544a';
  for (let i = 0; i < 160; i++) {
    g.fillRect(Math.random() * S, Math.random() * S, 1 + Math.random() * 4, 1 + Math.random() * 3);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(16, 16);
  t.anisotropy = 4;
  return t;
}

// 渓谷の床: 砂。風紋と、露出した岩肌
function sandTexture() {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#a98a5f';
  g.fillRect(0, 0, S, S);
  // 露出した岩肌
  for (let i = 0; i < 18; i++) {
    const x = Math.random() * S, y = Math.random() * S, r = 20 + Math.random() * 60;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(120,92,58,0.55)');
    grd.addColorStop(1, 'rgba(120,92,58,0)');
    g.fillStyle = grd;
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  // 風紋。うねらせないと縞模様に見える
  g.lineWidth = 2;
  for (let i = 0; i < 60; i++) {
    const y0 = Math.random() * S;
    const amp = 3 + Math.random() * 9;
    const f = 0.012 + Math.random() * 0.02;
    g.strokeStyle = Math.random() < 0.5 ? 'rgba(214,186,140,0.75)' : 'rgba(104,80,50,0.62)';
    g.beginPath();
    for (let x = 0; x <= S; x += 8) g.lineTo(x, y0 + Math.sin(x * f + i) * amp);
    g.stroke();
  }
  // 小石
  for (let i = 0; i < 220; i++) {
    g.fillStyle = Math.random() < 0.5 ? '#7d6242' : '#c2a878';
    g.fillRect(Math.random() * S, Math.random() * S, 1 + Math.random() * 3, 1 + Math.random() * 2);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(26, 26);
  t.anisotropy = 4;
  return t;
}

function buildCity(scene) {
  const grp = new THREE.Group();
  scene.add(grp);

  scene.background = new THREE.Color('#0d1526');
  scene.fog = new THREE.Fog('#14203a', 120, 340);

  grp.add(skyDome('#0a1a3a', '#111a26', 600));

  const starPos = [];
  for (let i = 0; i < 900; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(500);
    if (v.y < -40) v.y = -v.y;
    starPos.push(v.x, v.y, v.z);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  grp.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x9fc6ff, size: 2.2, sizeAttenuation: false })));

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(ARENA_R + 30, 64),
    // color は map への乗算。広い床面は直射を受けて白飛びするので落としておく
    new THREE.MeshStandardMaterial({ map: groundTexture(), color: 0x7d879b, roughness: 0.95, metalness: 0.08 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  grp.add(ground);

  boundary(grp, 0x3f7fc4, 0.09);

  const bMat = [
    new THREE.MeshStandardMaterial({ color: '#4a5870', roughness: 0.78, metalness: 0.18 }),
    new THREE.MeshStandardMaterial({ color: '#3d4a63', roughness: 0.82, metalness: 0.15 }),
    new THREE.MeshStandardMaterial({ color: '#54648a', roughness: 0.74, metalness: 0.22 }),
  ];
  const winMat = new THREE.MeshBasicMaterial({ color: 0x6fa8e8 });
  const rand = mulberry(20250820);
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);

  const place = [];
  const buildings = [];
  const boxes = [];
  for (let i = 0; i < 34; i++) {
    const a = rand() * Math.PI * 2;
    const r = 34 + rand() * (ARENA_R - 42);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.hypot(x, z) < 32) continue;   // 中央は開けておく（射線と視界の確保）
    let ok = true;
    for (const p of place) if (Math.hypot(p[0] - x, p[1] - z) < 23) { ok = false; break; }
    if (!ok) continue;
    place.push([x, z]);

    const w = 7 + rand() * 11, d = 7 + rand() * 11, h = 7 + rand() * 20;
    const b = new THREE.Mesh(boxGeo, bMat[(rand() * 3) | 0]);
    b.scale.set(w, h, d);
    b.position.set(x, h / 2, z);
    b.castShadow = true; b.receiveShadow = true;
    grp.add(b);
    buildings.push(b);
    boxes.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, top: h });

    const rows = Math.floor(h / 5);
    for (let ry = 0; ry < rows; ry++) {
      if (rand() < 0.45) continue;
      const win = new THREE.Mesh(boxGeo, winMat);
      win.scale.set(w * 0.86, 0.7, 0.3);
      win.position.set(x, 3 + ry * 5, z + d / 2 + 0.05);
      grp.add(win);
      const win2 = win.clone();
      win2.position.z = z - d / 2 - 0.05;
      grp.add(win2);
    }
    if (rand() < 0.5) {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.5, 6, 5), new THREE.MeshBasicMaterial({ color: 0xff5a5a }));
      lamp.position.set(x, h + 0.6, z);
      grp.add(lamp);
    }
  }

  const lights = installLights(scene, {
    hemiSky: 0x9ec4ff, hemiGround: 0x232935, hemi: 0.6,
    keyColor: 0xe8f2ff, key: 1.75, keyPos: [60, 110, 40],
    fillColor: 0x6f9ade, fill: 0.4, fillPos: [-70, 40, -60],
    rims: [[0xa8ccff, 1.25, [-40, 55, -120]], [0xffd9a8, 0.55, [90, 30, -70]]],
  });

  return { grp, ground, buildings, boxes, lights, far: 1200, envIntensity: 0.38 };
}

// ========================================================= GLB ステージ
// コロニー / 廃墟 / 渓谷。tools/ の Blender スクリプトが書き出した GLB を読む。
// 見た目以外の約束はどれも同じ:
//   * プレイ範囲は y=0 の平面（地形の起伏は ARENA_R の外だけ）
//   * 当たり判定は <id>_boxes.json の AABB
//   * カメラのレイキャストに使うのは colliders 名で始まるメッシュだけ（遠景は拾わない）
let dracoLoader = null;
const glbCache = new Map();

async function fetchGLB(id) {
  if (glbCache.has(id)) return glbCache.get(id);
  if (!dracoLoader) {
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(asset('draco/'));
    dracoLoader.setDecoderConfig({ type: 'wasm' });
  }
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  const [gltf, boxes] = await Promise.all([
    loader.loadAsync(asset(`models/${id}.glb`)),
    fetch(asset(`models/${id}_boxes.json`)).then((r) => r.json()),
  ]);
  gltf.scene.traverse((o) => { o.userData.shared = true; });
  const rec = { scene: gltf.scene, boxes };
  glbCache.set(id, rec);
  return rec;
}

// GLB のマテリアルはゲーム側で詰める。書き出し直さずに調整できるようにしておく。
//   mul  … ベースカラーの倍率（Blender で塗り直さずに明暗を決める）
//   emis … emissiveIntensity。ブルームの閾値は 0.86。画面を大きく占める面は
//          ここを上げすぎると全体が白く飛ぶ
const GLB_STAGES = {
  colony: {
    colliders: 'CityBlocks',
    bg: '#070b14',
    // 閉じた空間なので霧は薄く長く。手前を曇らせると建物の輪郭が死ぬ
    fog: ['#1b2c4d', 340, 1900],
    ground: { tex: groundTexture, color: 0x6b7793, rough: 0.92, metal: 0.1 },
    boundary: [0x59a0e0, 0.07],
    far: 2200,
    env: 0.4,
    mats: {
      // 採光窓。ラフネス 1 にしないと鋭いスペキュラが乗って、
      // 光源そのものであるはずの窓に「太陽の反射」が焼き付く
      col_pane: { mul: 0.85, emis: 0.55, rough: 1.0, metal: 0.0 },
      col_window: { mul: 1.0, emis: 0.30, rough: 0.85 },
      col_lamp: { mul: 1.0, emis: 1.6 },
      col_ground: { mul: 1.15, shadow: 'receive' },
      col_land: { mul: 1.15 },
      col_building: { mul: 0.62, shadow: 'both' },
      col_frame: { mul: 0.7, rough: 0.75, metal: 0.35 },
    },
    // 採光窓は左右斜め上に走っているので、光もそこから来る
    lights: {
      hemiSky: 0xa9c9ff, hemiGround: 0x5a6f92, hemi: 0.62,
      keyColor: 0xeaf3ff, key: 1.5, keyPos: [40, 120, 95],
      fillColor: 0x7ea6e6, fill: 0.35, fillPos: [-30, 100, -110],
      rims: [[0xa8ccff, 0.9, [-60, 70, -130]], [0xffd0a0, 0.5, [110, 40, -50]]],
      up: [0x9dbbe6, 0.55, [10, -100, -20]],
    },
  },

  ruins: {
    colliders: 'RuinBlocks',
    bg: '#2a1a12',
    sky: ['#6b4526', '#c8794a', 900],   // 砂塵で濁った低い空
    fog: ['#7a4c2c', 90, 540],          // 手前から効かせて、瓦礫を距離で減衰させる
    ground: { tex: crackedTexture, color: 0x8a7a68, rough: 0.96, metal: 0.03 },
    boundary: [0xd4762e, 0.10],
    far: 1600,
    env: 0.34,
    mats: {
      ru_concrete: { mul: 0.86, shadow: 'both' },
      ru_concrete2: { mul: 0.70, shadow: 'both' },
      ru_rust: { mul: 1.0, rough: 0.72, metal: 0.5 },
      ru_rubble: { mul: 1.0, shadow: 'receive' },
      ru_ember: { mul: 1.0, emis: 1.9 },
      ru_dark: { mul: 1.0 },
    },
    // 低い西日。長い影が瓦礫の高さを読ませる
    lights: {
      hemiSky: 0xffc48a, hemiGround: 0x2e1d14, hemi: 0.5,
      keyColor: 0xffd9a0, key: 2.4, keyPos: [130, 46, 78],
      fillColor: 0x8a6a58, fill: 0.32, fillPos: [-80, 60, -70],
      rims: [[0xffb070, 1.15, [-60, 42, -130]], [0x9ab6dd, 0.42, [40, 70, -110]]],
    },
  },

  canyon: {
    colliders: 'CanyonRocks',
    bg: '#4a6a94',
    sky: ['#2f5b96', '#a9c4de', 1600],
    fog: ['#8aa4c2', 220, 1500],
    ground: { tex: sandTexture, color: 0x8f6d45, rough: 0.98, metal: 0.0 },
    boundary: [0x8fd0ff, 0.06],
    far: 3000,
    env: 0.5,
    mats: {
      cy_rock: { mul: 1.0, shadow: 'both' },
      cy_rock2: { mul: 1.0, shadow: 'both' },
      cy_rock3: { mul: 1.0, shadow: 'both' },
      cy_sand: { mul: 1.0, shadow: 'receive' },
      cy_dark: { mul: 1.0 },
    },
    lights: {
      hemiSky: 0xbcd6f5, hemiGround: 0x6b5238, hemi: 0.72,
      keyColor: 0xfff0d2, key: 2.5, keyPos: [90, 120, 60],
      fillColor: 0x94b4dc, fill: 0.42, fillPos: [-70, 70, -80],
      rims: [[0xbcd8ff, 0.95, [-50, 60, -130]], [0xffcf9a, 0.5, [110, 34, -40]]],
    },
  },
};

async function buildGLBStage(scene, id) {
  const cfg = GLB_STAGES[id];
  const { scene: model, boxes } = await fetchGLB(id);

  const grp = new THREE.Group();
  grp.add(model);
  scene.add(grp);

  scene.background = new THREE.Color(cfg.bg);
  scene.fog = new THREE.Fog(cfg.fog[0], cfg.fog[1], cfg.fog[2]);
  if (cfg.sky) grp.add(skyDome(cfg.sky[0], cfg.sky[1], cfg.sky[2]));

  const buildings = [];
  model.traverse((o) => {
    if (!o.isMesh) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    let recv = false, cast = false;
    for (const m of mats) {
      const t = cfg.mats[m.name];
      if (!t) continue;
      // マテリアルは使い回されるので、二度掛けしないように印を付ける
      if (!m.userData.tuned) {
        m.userData.tuned = true;
        if (t.mul !== 1) m.color.multiplyScalar(t.mul);
        m.emissiveIntensity = t.emis ?? 0;
        if (t.rough != null) m.roughness = t.rough;
        if (t.metal != null) m.metalness = t.metal;
      }
      if (t.shadow === 'receive' || t.shadow === 'both') recv = true;
      if (t.shadow === 'both') cast = true;
    }
    o.receiveShadow = recv;
    o.castShadow = cast;
    // プレイ範囲の物だけカメラの当たり判定に使う（遠景まで拾うと重い）
    if (o.name.startsWith(cfg.colliders)) buildings.push(o);
  });

  // プレイ範囲の床。GLB 側の地面と同一平面だが、影を受ける面が要る
  const g = cfg.ground;
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(ARENA_R + 26, 64),
    new THREE.MeshStandardMaterial({ map: g.tex(), color: g.color, roughness: g.rough, metalness: g.metal })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0.02;
  ground.receiveShadow = true;
  grp.add(ground);

  boundary(grp, cfg.boundary[0], cfg.boundary[1]);
  const lights = installLights(scene, cfg.lights);

  return { grp, ground, buildings, boxes, lights, far: cfg.far, envIntensity: cfg.env };
}

// ================================================================ 入口
let env = null;

export async function buildStage(scene, renderer, id) {
  const built = GLB_STAGES[id] ? await buildGLBStage(scene, id) : buildCity(scene);

  // 金属マテリアルは環境マップが無いと真っ黒になるので IBL を入れる。
  // シーンをまたいで使い回す
  if (!env) {
    const pmrem = new THREE.PMREMGenerator(renderer);
    env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
  }
  scene.environment = env;
  scene.environmentIntensity = built.envIntensity;

  built.dispose = () => {
    scene.remove(built.grp);
    disposeGroup(built.grp);   // userData.shared が付いた GLB 側は残る
    for (const l of built.lights.list) scene.remove(l);
  };
  return built;
}

// タイトルで選ばれる前に読んでおく
export function prefetchStage(id) {
  if (GLB_STAGES[id]) fetchGLB(id).catch(() => {});
}
