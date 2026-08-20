import * as THREE from 'three';

// プリミティブから機体を組む。全高は約 3.0 ユニット。
// 返す root の userData に可動パーツ(head/torso/armL/armR/legL/legR/thrusters/saber/muzzle)を入れる。

const mats = new Map();
function mat(hex, opts = {}) {
  const key = hex + JSON.stringify(opts);
  if (!mats.has(key)) {
    mats.set(key, new THREE.MeshStandardMaterial({
      color: new THREE.Color(hex),
      metalness: opts.metalness ?? 0.18,
      roughness: opts.roughness ?? 0.5,
      emissive: opts.emissive ? new THREE.Color(opts.emissive) : new THREE.Color(0x000000),
      emissiveIntensity: opts.emissiveIntensity ?? 1,
    }));
  }
  return mats.get(key);
}

function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const g = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  g.position.set(x, y, z);
  g.castShadow = true;
  return g;
}
function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 10) {
  const g = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  g.position.set(x, y, z);
  g.castShadow = true;
  return g;
}
function sph(r, m, x = 0, y = 0, z = 0) {
  const g = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 10), m);
  g.position.set(x, y, z);
  g.castShadow = true;
  return g;
}

// 腕: 肩ピボット原点から下に伸ばす
function makeArm(P, side, build) {
  const pivot = new THREE.Group();          // 肩関節
  const s = side; // +1 = 左(x+), -1 = 右(x-)
  const main = mat(P.main), joint = mat(P.joint, { metalness: 0.6 }), acc = mat(P.accent);

  // 肩アーマー
  if (build === 'garm') {
    if (s > 0) {
      // スパイクアーマー
      const pad = cyl(0.42, 0.5, 0.34, acc, 0.16 * s, 0.02, 0);
      pad.rotation.z = -0.18 * s; pivot.add(pad);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        const sp = cyl(0.0, 0.075, 0.28, mat(P.trim), 0.16 * s + Math.cos(a) * 0.3, 0.16, Math.sin(a) * 0.3);
        sp.rotation.x = Math.sin(a) * 0.5; sp.rotation.z = -Math.cos(a) * 0.5;
        pivot.add(sp);
      }
    } else {
      // シールド
      const sh = box(0.12, 0.86, 0.7, acc, 0.3 * s, -0.12, 0);
      pivot.add(sh);
      pivot.add(cyl(0.36, 0.4, 0.3, acc, 0.14 * s, 0.02, 0));
    }
  } else {
    const pad = box(0.42, 0.42, 0.52, main, 0.2 * s, 0.02, 0);
    pivot.add(pad);
    pivot.add(box(0.06, 0.3, 0.44, mat(P.trim), 0.42 * s, 0.02, 0));
  }

  pivot.add(sph(0.16, joint, 0.05 * s, -0.16, 0));
  // 上腕
  pivot.add(box(0.24, 0.42, 0.26, main, 0.05 * s, -0.4, 0));
  // 肘
  pivot.add(sph(0.13, joint, 0.05 * s, -0.62, 0));
  // 前腕
  const fore = box(0.28, 0.46, 0.3, s > 0 ? main : main, 0.05 * s, -0.86, 0);
  pivot.add(fore);
  if (build === 'brave') pivot.add(box(0.3, 0.1, 0.32, acc, 0.05 * s, -0.72, 0));
  // 手
  const hand = box(0.2, 0.2, 0.22, joint, 0.05 * s, -1.14, 0);
  pivot.add(hand);

  return { pivot, hand };
}

function makeLeg(P, side, build) {
  const pivot = new THREE.Group();
  const s = side;
  const main = mat(P.main), joint = mat(P.joint, { metalness: 0.6 }), acc = mat(P.accent);
  const legMat = build === 'garm' ? mat(P.main) : acc;

  pivot.add(sph(0.17, joint, 0, -0.05, 0));
  // 腿
  pivot.add(box(0.34, 0.55, 0.36, legMat, 0, -0.36, 0));
  // 膝
  pivot.add(sph(0.16, joint, 0, -0.66, 0));
  if (build === 'brave') pivot.add(box(0.2, 0.18, 0.1, mat(P.trim), 0, -0.66, 0.2));
  // 脛
  pivot.add(box(0.36, 0.6, 0.4, legMat, 0, -1.0, 0.01));
  if (build === 'garm') {
    // ふくらはぎスラスター
    pivot.add(box(0.3, 0.26, 0.16, acc, 0, -1.06, -0.24));
  }
  // 足
  pivot.add(box(0.4, 0.18, 0.62, main, 0, -1.4, 0.1));
  pivot.add(box(0.42, 0.08, 0.2, mat(P.trim), 0, -1.46, 0.32));
  return { pivot };
}

export function buildMech(P, build = 'brave') {
  const root = new THREE.Group();
  const main = mat(P.main), acc = mat(P.accent), trim = mat(P.trim);
  const joint = mat(P.joint, { metalness: 0.65, roughness: 0.3 });
  const eye = mat(P.eye, { emissive: P.eye, emissiveIntensity: 2.4, metalness: 0, roughness: 1 });

  // --- 腰 ---
  const pelvis = new THREE.Group();
  pelvis.position.y = 1.5;
  root.add(pelvis);
  pelvis.add(box(0.62, 0.3, 0.44, build === 'garm' ? acc : main, 0, 0, 0));
  pelvis.add(box(0.26, 0.34, 0.12, trim, 0, -0.02, 0.24)); // フロントアーマー
  pelvis.add(box(0.7, 0.16, 0.16, acc, 0, -0.14, -0.2));   // リアアーマー

  // --- 胴 ---
  const torso = new THREE.Group();
  torso.position.y = 0.24;
  pelvis.add(torso);
  torso.add(box(0.66, 0.28, 0.4, joint, 0, 0.02, 0));           // 腹
  torso.add(box(0.86, 0.5, 0.5, build === 'garm' ? main : acc, 0, 0.38, 0)); // 胸
  if (build === 'brave') {
    torso.add(box(0.24, 0.4, 0.1, mat('#ffe14d'), -0.24, 0.4, 0.24)); // ダクト
    torso.add(box(0.24, 0.4, 0.1, mat('#ffe14d'), 0.24, 0.4, 0.24));
    torso.add(box(0.3, 0.26, 0.12, trim, 0, 0.3, 0.26));
  } else {
    torso.add(box(0.5, 0.2, 0.1, acc, 0, 0.5, 0.26));
    // 動力パイプ
    for (let i = 0; i < 4; i++) {
      const p = cyl(0.06, 0.06, 0.1, joint, -0.3 + i * 0.2, 0.62, 0.18);
      p.rotation.x = 0.4; torso.add(p);
    }
  }

  // --- バックパック / スラスター ---
  const pack = box(0.6, 0.5, 0.24, build === 'garm' ? acc : main, 0, 0.34, -0.34);
  torso.add(pack);
  const thrusters = [];
  const flameMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(build === 'garm' ? '#ffb96b' : '#8fd6ff'),
    transparent: true, opacity: 0.9, depthWrite: false,
  });
  for (const dx of [-0.22, 0.22]) {
    const nz = cyl(0.14, 0.18, 0.22, joint, dx, 0.1, -0.44);
    nz.rotation.x = 0.25; torso.add(nz);
    // ブースト中かどうかは一目で分からないと困るので、噴射は大きめに
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.26, 1.7, 8), flameMat);
    fl.position.set(dx, -0.18, -0.96);
    fl.rotation.x = -Math.PI / 2 + 0.3;
    fl.visible = false;
    torso.add(fl);
    thrusters.push(fl);
  }
  // 脚部スラスター（機体が浮いているのを分かりやすく）
  for (const dx of [-0.22, 0.22]) {
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.17, 1.1, 7), flameMat);
    fl.position.set(dx, -1.62, 0.06);
    fl.rotation.x = Math.PI;
    fl.visible = false;
    pelvis.add(fl);
    thrusters.push(fl);
  }

  // --- 頭 ---
  const head = new THREE.Group();
  head.position.y = 0.72;
  torso.add(head);
  head.add(cyl(0.1, 0.1, 0.12, joint, 0, -0.06, 0));
  if (build === 'garm') {
    head.add(sph(0.26, main, 0, 0.08, 0));
    head.add(box(0.42, 0.14, 0.12, acc, 0, 0.08, 0.2));
    const monoeye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), eye);
    monoeye.position.set(0, 0.09, 0.26);
    head.add(monoeye);
    // 頭頂パイプ
    const pipe = cyl(0.045, 0.045, 0.24, joint, 0, 0.2, -0.16);
    pipe.rotation.x = 0.7; head.add(pipe);
  } else {
    head.add(box(0.32, 0.3, 0.32, main, 0, 0.1, 0));
    head.add(box(0.26, 0.12, 0.06, mat('#1b2230'), 0, 0.1, 0.17)); // バイザー
    head.add(box(0.05, 0.06, 0.04, eye, -0.07, 0.11, 0.2));
    head.add(box(0.05, 0.06, 0.04, eye, 0.07, 0.11, 0.2));
    head.add(box(0.14, 0.1, 0.06, mat('#f5c542'), 0, 0.0, 0.19));  // 口
    // 頬ダクト
    head.add(box(0.06, 0.16, 0.2, trim, -0.18, 0.08, 0.02));
    head.add(box(0.06, 0.16, 0.2, trim, 0.18, 0.08, 0.02));
    // V字アンテナ
    const fin = box(0.36, 0.05, 0.06, mat('#f5c542'), 0, 0.28, 0.06);
    head.add(fin);
    for (const s of [-1, 1]) {
      const b = box(0.24, 0.05, 0.05, mat('#f5c542'), s * 0.17, 0.34, 0.02);
      b.rotation.z = -s * 0.55; head.add(b);
    }
    head.add(box(0.1, 0.12, 0.08, trim, 0, 0.3, -0.02));
  }

  // --- 腕 ---
  const armL = makeArm(P, 1, build); armL.pivot.position.set(0.52, 0.42, 0); torso.add(armL.pivot);
  const armR = makeArm(P, -1, build); armR.pivot.position.set(-0.52, 0.42, 0); torso.add(armR.pivot);

  // --- 脚 ---
  const legL = makeLeg(P, 1, build); legL.pivot.position.set(0.22, -0.12, 0); pelvis.add(legL.pivot);
  const legR = makeLeg(P, -1, build); legR.pivot.position.set(-0.22, -0.12, 0); pelvis.add(legR.pivot);

  // --- 銃 (右手) ---
  const gun = new THREE.Group();
  gun.position.set(-0.05, -1.2, 0.05);
  armR.pivot.add(gun);
  const gunMat = mat('#2c3340', { metalness: 0.7, roughness: 0.35 });
  if (build === 'garm') {
    gun.add(box(0.14, 0.14, 0.9, gunMat, 0, 0, 0.3));
    gun.add(box(0.12, 0.26, 0.14, gunMat, 0, -0.14, 0.02));
    const drum = cyl(0.17, 0.17, 0.1, gunMat, 0, -0.02, 0.14); drum.rotation.z = Math.PI / 2; gun.add(drum);
  } else {
    gun.add(box(0.13, 0.13, 1.0, gunMat, 0, 0, 0.34));
    gun.add(box(0.11, 0.24, 0.13, gunMat, 0, -0.13, 0.0));
    gun.add(box(0.2, 0.2, 0.12, gunMat, 0, 0.06, 0.06));
    const emitter = cyl(0.05, 0.05, 0.2, mat('#8fd6ff', { emissive: '#8fd6ff', emissiveIntensity: 1.4 }), 0, 0, 0.86, 8);
    emitter.rotation.x = Math.PI / 2;
    gun.add(emitter);
  }
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0, build === 'garm' ? 0.78 : 0.9);
  gun.add(muzzle);

  // --- プラズマブレード (左手・格闘時のみ表示) ---
  const saber = new THREE.Group();
  saber.position.set(0.05, -1.2, 0);
  armL.pivot.add(saber);
  const bladeMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(P.beam), transparent: true, opacity: 0.92, depthWrite: false,
  });
  const grip = cyl(0.055, 0.055, 0.26, mat('#c8ccd4', { metalness: 0.8 }), 0, 0, 0.02);
  grip.rotation.x = Math.PI / 2; saber.add(grip);
  const blade = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.09, 2.1, 8), bladeMat);
  blade.rotation.x = Math.PI / 2; blade.position.set(0, 0, 1.15);
  saber.add(blade);
  saber.visible = false;

  // --- 接地シャドウ ---
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1.05, 20),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.34, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);

  root.userData = {
    pelvis, torso, head, armL: armL.pivot, armR: armR.pivot,
    legL: legL.pivot, legR: legR.pivot,
    thrusters, saber, blade, muzzle, gun, shadow, pack,
  };
  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  shadow.castShadow = false;
  return root;
}
