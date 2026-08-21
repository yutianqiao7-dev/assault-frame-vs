import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { ARENA_R } from './config.js';

function groundTexture() {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#232b3a';
  g.fillRect(0, 0, S, S);
  // 大きなパネル
  g.strokeStyle = '#303b4e';
  g.lineWidth = 6;
  for (let i = 0; i <= 4; i++) {
    const p = (i / 4) * S;
    g.beginPath(); g.moveTo(p, 0); g.lineTo(p, S); g.stroke();
    g.beginPath(); g.moveTo(0, p); g.lineTo(S, p); g.stroke();
  }
  // 細かいライン
  g.strokeStyle = '#2a3444';
  g.lineWidth = 2;
  for (let i = 0; i <= 16; i++) {
    const p = (i / 16) * S;
    g.beginPath(); g.moveTo(p, 0); g.lineTo(p, S); g.stroke();
    g.beginPath(); g.moveTo(0, p); g.lineTo(S, p); g.stroke();
  }
  // アクセント
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

export function buildArena(scene, renderer) {
  const grp = new THREE.Group();
  scene.add(grp);

  // --- 空 ---
  scene.background = new THREE.Color('#0d1526');
  scene.fog = new THREE.Fog('#14203a', 120, 340);

  const skyGeo = new THREE.SphereGeometry(600, 24, 16);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { top: { value: new THREE.Color('#0a1a3a') }, bot: { value: new THREE.Color('#111a26') } },
    vertexShader: `varying float h; void main(){ h = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 top; uniform vec3 bot; varying float h;
      void main(){ gl_FragColor = vec4(mix(bot, top, smoothstep(-0.1,0.6,h)), 1.0); }`,
  });
  grp.add(new THREE.Mesh(skyGeo, skyMat));

  // 星
  const starPos = [];
  for (let i = 0; i < 900; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(500);
    if (v.y < -40) v.y = -v.y;
    starPos.push(v.x, v.y, v.z);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  grp.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x9fc6ff, size: 2.2, sizeAttenuation: false })));

  // --- 地面 ---
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(ARENA_R + 30, 64),
    // color は map への乗算。広い床面は直射を受けて白飛びするので落としておく
    new THREE.MeshStandardMaterial({ map: groundTexture(), color: 0x7d879b, roughness: 0.95, metalness: 0.08 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  grp.add(ground);

  // 境界リング
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(ARENA_R - 1.5, ARENA_R, 96),
    new THREE.MeshBasicMaterial({ color: 0x3f7fc4, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05;
  grp.add(ring);

  // 境界の光の壁
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(ARENA_R, ARENA_R, 60, 64, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0x2b6bb5, transparent: true, opacity: 0.09, side: THREE.BackSide, depthWrite: false,
    })
  );
  wall.position.y = 30;
  grp.add(wall);

  // --- ビル群 ---
  const bMat = [
    new THREE.MeshStandardMaterial({ color: '#4a5870', roughness: 0.78, metalness: 0.18 }),
    new THREE.MeshStandardMaterial({ color: '#3d4a63', roughness: 0.82, metalness: 0.15 }),
    new THREE.MeshStandardMaterial({ color: '#54648a', roughness: 0.74, metalness: 0.22 }),
  ];
  const winMat = new THREE.MeshBasicMaterial({ color: 0x6fa8e8 });
  const rand = mulberry(20250820);
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);

  const place = [];
  const buildings = [];   // カメラのコリジョン用
  const boxes = [];       // 機体・弾の当たり判定用 AABB
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
    // 当たり判定用の AABB（ビルは軸に沿った箱で、必ず地面から生えている）
    boxes.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, top: h });

    // 窓のライン
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
    // 屋上の赤ランプ
    if (rand() < 0.5) {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.5, 6, 5), new THREE.MeshBasicMaterial({ color: 0xff5a5a }));
      lamp.position.set(x, h + 0.6, z);
      grp.add(lamp);
    }
  }

  // --- ライト ---
  // 金属マテリアルは環境マップが無いと真っ黒になるので IBL を入れる
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.38;
  pmrem.dispose();

  const hemi = new THREE.HemisphereLight(0x9ec4ff, 0x232935, 0.6);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xe8f2ff, 1.75);
  key.position.set(60, 110, 40);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 20;
  key.shadow.camera.far = 320;
  const S = 72;
  key.shadow.camera.left = -S; key.shadow.camera.right = S;
  key.shadow.camera.top = S; key.shadow.camera.bottom = -S;
  key.shadow.bias = -0.0012;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x6f9ade, 0.4);
  fill.position.set(-70, 40, -60);
  scene.add(fill);

  // リムライト: 背後やや上から当てて機体の輪郭を背景から切り離す。
  // これが無いと暗い背景に暗い機体が沈んでプラモに見えない。
  const rim = new THREE.DirectionalLight(0xa8ccff, 1.25);
  rim.position.set(-40, 55, -120);
  scene.add(rim);
  const rim2 = new THREE.DirectionalLight(0xffd9a8, 0.55);
  rim2.position.set(90, 30, -70);
  scene.add(rim2);

  return { grp, key, ground, buildings, boxes };
}

function mulberry(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
