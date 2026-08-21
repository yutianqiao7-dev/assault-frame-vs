import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { makeBeamBody, glowMaterial } from './glow.js';

// プリミティブから機体を組む。全高は約 3.0 ユニット。
// 見た目は config の shape スペックで決まる:
//   head:     visor / mono / crest / horn / dome
//   shoulder: pad / spike / shield / cannon / binder
//   back:     pack / wings / cannon / funnels / booster
//   gun:      rifle / machinegun / cannon / twin / none
// 返す root の userData に可動パーツを入れる。
// mech.js が pelvis/torso/armL/armR/legL/legR/thrusters/saber/shadow を、
// combat.js が muzzle を参照するので、このキーは変えないこと。

// パネルラインと擦れを載せる共通テクスチャ。
// のっぺりした単色の箱だと、どれだけ形を足してもプラモに見えない。
let panelTex = null;
function panelTexture() {
  if (panelTex) return panelTex;
  const S = 256;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, S, S);
  // パネルの分割線（暗い＝陰になる）
  g.strokeStyle = 'rgba(0,0,0,0.34)';
  g.lineWidth = 2;
  const lines = [[0.28, 'h'], [0.63, 'h'], [0.42, 'v'], [0.78, 'v']];
  for (const [t, dir] of lines) {
    g.beginPath();
    if (dir === 'h') { g.moveTo(0, t * S); g.lineTo(S, t * S); }
    else { g.moveTo(t * S, 0); g.lineTo(t * S, S); }
    g.stroke();
  }
  // 短いディテール線
  g.lineWidth = 1.5;
  g.strokeStyle = 'rgba(0,0,0,0.22)';
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * S, y = Math.random() * S, len = 14 + Math.random() * 40;
    g.beginPath(); g.moveTo(x, y);
    if (Math.random() < 0.5) g.lineTo(x + len, y); else g.lineTo(x, y + len);
    g.stroke();
  }
  // 縁のわずかな暗さ（エッジシェード）
  const grd = g.createLinearGradient(0, 0, 0, S);
  grd.addColorStop(0, 'rgba(0,0,0,0.12)');
  grd.addColorStop(0.3, 'rgba(0,0,0,0)');
  grd.addColorStop(1, 'rgba(0,0,0,0.16)');
  g.fillStyle = grd; g.fillRect(0, 0, S, S);

  panelTex = new THREE.CanvasTexture(c);
  panelTex.wrapS = panelTex.wrapT = THREE.RepeatWrapping;
  panelTex.anisotropy = 4;
  return panelTex;
}

const mats = new Map();
// kind: armor(装甲) / metal(関節・武器) / flat(小物)
function mat(hex, opts = {}) {
  const key = hex + JSON.stringify(opts);
  if (!mats.has(key)) {
    const kind = opts.kind || 'armor';
    const base = kind === 'metal'
      ? { metalness: 0.85, roughness: 0.28 }
      : kind === 'flat'
        ? { metalness: 0.1, roughness: 0.75 }
        : { metalness: 0.42, roughness: 0.34 };   // armor: 半光沢の塗装
    mats.set(key, new THREE.MeshStandardMaterial({
      color: new THREE.Color(hex),
      metalness: opts.metalness ?? base.metalness,
      roughness: opts.roughness ?? base.roughness,
      map: opts.noPanel ? null : panelTexture(),
      emissive: opts.emissive ? new THREE.Color(opts.emissive) : new THREE.Color(0x000000),
      emissiveIntensity: opts.emissiveIntensity ?? 1,
    }));
  }
  return mats.get(key);
}

// 面取りした箱。真四角のままだとエッジに光が乗らず、模型に見えない
const boxGeoCache = new Map();
function boxGeo(w, h, d) {
  const key = `${w.toFixed(3)}|${h.toFixed(3)}|${d.toFixed(3)}`;
  if (!boxGeoCache.has(key)) {
    const r = Math.min(0.035, w * 0.22, h * 0.22, d * 0.22);
    boxGeoCache.set(key, new RoundedBoxGeometry(w, h, d, 1, r));
  }
  return boxGeoCache.get(key);
}

function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const g = new THREE.Mesh(boxGeo(w, h, d), m);
  g.position.set(x, y, z);
  return g;
}
function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 10) {
  const g = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  g.position.set(x, y, z);
  return g;
}
function sph(r, m, x = 0, y = 0, z = 0) {
  const g = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 10), m);
  g.position.set(x, y, z);
  return g;
}

// ---------- 肩 ----------
function addShoulder(pivot, P, kind, s) {
  const main = mat(P.main), acc = mat(P.accent), trim = mat(P.trim);
  switch (kind) {
    case 'spike': {
      const pad = cyl(0.42, 0.5, 0.34, acc, 0.16 * s, 0.02, 0);
      pad.rotation.z = -0.18 * s; pivot.add(pad);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        const sp = cyl(0.0, 0.075, 0.28, trim, 0.16 * s + Math.cos(a) * 0.3, 0.16, Math.sin(a) * 0.3);
        sp.rotation.x = Math.sin(a) * 0.5; sp.rotation.z = -Math.cos(a) * 0.5;
        pivot.add(sp);
      }
      break;
    }
    case 'shield': {
      if (s < 0) {
        pivot.add(box(0.13, 0.95, 0.76, acc, 0.32 * s, -0.14, 0));
        pivot.add(box(0.05, 0.5, 0.3, trim, 0.4 * s, -0.1, 0));
      }
      pivot.add(cyl(0.36, 0.4, 0.3, acc, 0.14 * s, 0.02, 0));
      break;
    }
    case 'cannon': {
      pivot.add(box(0.4, 0.4, 0.5, main, 0.2 * s, 0.02, 0));
      const bar = cyl(0.11, 0.13, 0.95, mat('#2c3340', { kind: 'metal' }), 0.24 * s, 0.26, -0.1);
      bar.rotation.x = Math.PI / 2 - 0.12;
      pivot.add(bar);
      break;
    }
    case 'binder': {
      const b = box(0.16, 1.15, 0.62, acc, 0.34 * s, 0.06, -0.1);
      b.rotation.z = -0.22 * s; b.rotation.x = 0.12;
      pivot.add(b);
      pivot.add(box(0.08, 0.7, 0.2, trim, 0.44 * s, 0.1, 0.08));
      pivot.add(cyl(0.3, 0.34, 0.3, main, 0.13 * s, 0.02, 0));
      break;
    }
    default: { // pad
      pivot.add(box(0.42, 0.42, 0.52, main, 0.2 * s, 0.02, 0));
      pivot.add(box(0.06, 0.3, 0.44, trim, 0.42 * s, 0.02, 0));
    }
  }
}

// ---------- 腕 ----------
function makeArm(P, side, shape) {
  const pivot = new THREE.Group();
  const s = side;                       // +1 = 左, -1 = 右
  const main = mat(P.main), joint = mat(P.joint, { kind: 'metal' }), acc = mat(P.accent);

  const frame = mat('#2b303a', { kind: 'metal' });

  addShoulder(pivot, P, shape.shoulder, s);
  pivot.add(sph(0.16, joint, 0.05 * s, -0.16, 0));
  // 装甲の内側に暗いフレームを一段細く入れて、板の重なりを見せる
  pivot.add(box(0.19, 0.5, 0.21, frame, 0.05 * s, -0.42, 0));
  pivot.add(box(0.24, 0.42, 0.26, main, 0.05 * s, -0.4, 0));      // 上腕
  pivot.add(sph(0.13, joint, 0.05 * s, -0.62, 0));                // 肘
  pivot.add(box(0.22, 0.5, 0.24, frame, 0.05 * s, -0.86, 0));
  pivot.add(box(0.28, 0.46, 0.3, main, 0.05 * s, -0.86, 0));      // 前腕
  // 前腕のスラスター口
  pivot.add(box(0.1, 0.16, 0.05, mat(P.trim, { kind: 'flat' }), 0.2 * s, -0.9, 0.12));
  if (shape.forearmFin) pivot.add(box(0.3, 0.1, 0.32, acc, 0.05 * s, -0.72, 0));
  pivot.add(box(0.2, 0.2, 0.22, joint, 0.05 * s, -1.14, 0));      // 手
  return { pivot };
}

// ---------- 脚 ----------
function makeLeg(P, side, shape) {
  const pivot = new THREE.Group();
  const main = mat(P.main), joint = mat(P.joint, { kind: 'metal' }), acc = mat(P.accent);
  const legMat = shape.legMain ? main : acc;

  const frame = mat('#2b303a', { kind: 'metal' });

  pivot.add(sph(0.17, joint, 0, -0.05, 0));
  pivot.add(box(0.28, 0.6, 0.3, frame, 0, -0.36, 0));
  pivot.add(box(0.34, 0.55, 0.36, legMat, 0, -0.36, 0));          // 腿
  pivot.add(sph(0.16, joint, 0, -0.66, 0));                       // 膝
  if (shape.kneeGuard) pivot.add(box(0.2, 0.18, 0.1, mat(P.trim), 0, -0.66, 0.2));
  pivot.add(box(0.3, 0.62, 0.34, frame, 0, -1.0, 0.01));
  pivot.add(box(0.36, 0.6, 0.4, legMat, 0, -1.0, 0.01));          // 脛
  // 脛サイドのダクト
  for (const sx of [-1, 1]) pivot.add(box(0.04, 0.26, 0.12, mat(P.trim, { kind: 'flat' }), sx * 0.19, -1.02, 0.08));
  if (shape.calfThruster) pivot.add(box(0.3, 0.26, 0.16, acc, 0, -1.06, -0.24));
  pivot.add(sph(0.13, joint, 0, -1.28, 0));                       // 足首
  pivot.add(box(0.4, 0.18, 0.62, main, 0, -1.4, 0.1));            // 足
  pivot.add(box(0.3, 0.16, 0.16, acc, 0, -1.34, -0.16));          // かかと装甲
  pivot.add(box(0.42, 0.08, 0.2, mat(P.trim), 0, -1.46, 0.32));
  return { pivot };
}

// ---------- 頭 ----------
function addHead(head, P, kind) {
  const main = mat(P.main), acc = mat(P.accent), trim = mat(P.trim);
  const joint = mat(P.joint, { kind: 'metal' });
  const eye = mat(P.eye, { emissive: P.eye, emissiveIntensity: 2.6, kind: 'flat', noPanel: true });
  const gold = mat('#f5c542');

  head.add(cyl(0.1, 0.1, 0.12, joint, 0, -0.06, 0));

  if (kind === 'mono') {
    head.add(sph(0.26, main, 0, 0.08, 0));
    head.add(box(0.42, 0.14, 0.12, acc, 0, 0.08, 0.2));
    head.add(sph(0.055, eye, 0, 0.09, 0.26));
    const pipe = cyl(0.045, 0.045, 0.24, joint, 0, 0.2, -0.16);
    pipe.rotation.x = 0.7; head.add(pipe);
    return;
  }
  if (kind === 'dome') {
    head.add(sph(0.27, main, 0, 0.09, 0));
    head.add(box(0.36, 0.1, 0.1, mat('#1b2230'), 0, 0.1, 0.19));
    head.add(box(0.3, 0.05, 0.05, eye, 0, 0.1, 0.23));
    head.add(box(0.5, 0.07, 0.24, acc, 0, 0.22, -0.02));
    return;
  }

  // visor / crest / horn 共通のベース
  head.add(box(0.32, 0.3, 0.32, main, 0, 0.1, 0));
  head.add(box(0.26, 0.12, 0.06, mat('#1b2230'), 0, 0.1, 0.17));
  head.add(box(0.05, 0.06, 0.04, eye, -0.07, 0.11, 0.2));
  head.add(box(0.05, 0.06, 0.04, eye, 0.07, 0.11, 0.2));
  head.add(box(0.14, 0.1, 0.06, gold, 0, 0.0, 0.19));
  head.add(box(0.06, 0.16, 0.2, trim, -0.18, 0.08, 0.02));
  head.add(box(0.06, 0.16, 0.2, trim, 0.18, 0.08, 0.02));

  if (kind === 'crest') {
    // 大型のクレスト（前後に伸びる板）
    head.add(box(0.1, 0.3, 0.5, gold, 0, 0.32, -0.02));
    head.add(box(0.44, 0.06, 0.1, gold, 0, 0.26, 0.1));
    for (const s of [-1, 1]) {
      const b = box(0.3, 0.05, 0.05, gold, s * 0.2, 0.3, 0.0);
      b.rotation.z = -s * 0.35; head.add(b);
    }
  } else if (kind === 'horn') {
    const h = cyl(0.0, 0.07, 0.5, trim, 0, 0.42, 0.08);
    h.rotation.x = -0.35; head.add(h);
    head.add(box(0.3, 0.05, 0.06, trim, 0, 0.26, 0.04));
  } else { // visor = V字アンテナ
    head.add(box(0.36, 0.05, 0.06, gold, 0, 0.28, 0.06));
    for (const s of [-1, 1]) {
      const b = box(0.24, 0.05, 0.05, gold, s * 0.17, 0.34, 0.02);
      b.rotation.z = -s * 0.55; head.add(b);
    }
    head.add(box(0.1, 0.12, 0.08, trim, 0, 0.3, -0.02));
  }
}

// ---------- 銃 ----------
function addGun(gun, P, kind) {
  const g = mat('#2c3340', { kind: 'metal' });
  const glow = mat(P.beam, { emissive: P.beam, emissiveIntensity: 1.4 });
  let reach = 0.9;
  switch (kind) {
    case 'machinegun':
      gun.add(box(0.14, 0.14, 0.9, g, 0, 0, 0.3));
      gun.add(box(0.12, 0.26, 0.14, g, 0, -0.14, 0.02));
      { const drum = cyl(0.17, 0.17, 0.1, g, 0, -0.02, 0.14); drum.rotation.z = Math.PI / 2; gun.add(drum); }
      reach = 0.78; break;
    case 'cannon':
      gun.add(box(0.22, 0.22, 1.3, g, 0, 0.02, 0.45));
      gun.add(box(0.13, 0.28, 0.16, g, 0, -0.16, 0.05));
      { const m = cyl(0.16, 0.14, 0.22, g, 0, 0.02, 1.08); m.rotation.x = Math.PI / 2; gun.add(m); }
      reach = 1.2; break;
    case 'twin':
      for (const dx of [-0.09, 0.09]) gun.add(box(0.1, 0.1, 0.8, g, dx, 0.02, 0.3));
      gun.add(box(0.12, 0.24, 0.14, g, 0, -0.14, 0.02));
      reach = 0.74; break;
    case 'none':
      reach = 0.35; break;
    default: // rifle
      gun.add(box(0.13, 0.13, 1.0, g, 0, 0, 0.34));
      gun.add(box(0.11, 0.24, 0.13, g, 0, -0.13, 0.0));
      gun.add(box(0.2, 0.2, 0.12, g, 0, 0.06, 0.06));
      { const e = cyl(0.05, 0.05, 0.2, glow, 0, 0, 0.86, 8); e.rotation.x = Math.PI / 2; gun.add(e); }
      reach = 0.9;
  }
  return reach;
}

// ---------- バックパック ----------
function addBack(torso, P, kind, flameMat, thrusters) {
  const main = mat(P.main), acc = mat(P.accent), trim = mat(P.trim);
  const joint = mat(P.joint, { kind: 'metal' });
  const pack = box(0.6, 0.5, 0.24, kind === 'wings' || kind === 'funnels' ? acc : main, 0, 0.34, -0.34);
  torso.add(pack);

  if (kind === 'wings') {
    for (const s of [-1, 1]) {
      const w = box(0.1, 0.9, 0.55, acc, s * 0.34, 0.5, -0.42);
      w.rotation.z = -s * 0.4; w.rotation.x = 0.25;
      torso.add(w);
      const tip = box(0.06, 0.5, 0.18, trim, s * 0.52, 0.82, -0.5);
      tip.rotation.z = -s * 0.4; torso.add(tip);
    }
  } else if (kind === 'cannon') {
    for (const s of [-1, 1]) {
      const c = cyl(0.1, 0.12, 1.15, mat('#2c3340', { kind: 'metal' }), s * 0.3, 0.55, -0.4);
      c.rotation.x = 0.32; torso.add(c);
    }
    torso.add(box(0.7, 0.24, 0.2, acc, 0, 0.62, -0.4));
  } else if (kind === 'funnels') {
    // オールレンジ攻撃のビット（見た目のみ、実体は combat.js が別途出す）
    for (let i = 0; i < 4; i++) {
      const s = i < 2 ? -1 : 1;
      const f = box(0.14, 0.34, 0.14, trim, s * (0.24 + (i % 2) * 0.17), 0.3 + (i % 2) * 0.28, -0.46);
      f.rotation.x = 0.2; torso.add(f);
    }
  } else if (kind === 'booster') {
    for (const s of [-1, 1]) {
      const b = cyl(0.15, 0.19, 0.8, acc, s * 0.3, 0.42, -0.46);
      b.rotation.x = 0.18; torso.add(b);
    }
  }

  const nozzleDx = kind === 'booster' ? [-0.3, 0.3] : [-0.22, 0.22];
  for (const dx of nozzleDx) {
    const nz = cyl(0.14, 0.18, 0.22, joint, dx, 0.1, -0.44);
    nz.rotation.x = 0.25; torso.add(nz);
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.4, 8), flameMat);
    fl.position.set(dx, -0.16, -0.84);
    fl.rotation.x = -Math.PI / 2 + 0.3;
    fl.visible = false;
    torso.add(fl);
    thrusters.push(fl);
  }
  return pack;
}

export function buildMech(P, shape = {}) {
  const sh = {
    head: 'visor', shoulder: 'pad', back: 'pack', gun: 'rifle',
    forearmFin: true, kneeGuard: true, calfThruster: false, legMain: false,
    chestDuct: true, pipes: false, saberCount: 1,
    ...shape,
  };

  const root = new THREE.Group();
  const main = mat(P.main), acc = mat(P.accent), trim = mat(P.trim);
  const joint = mat(P.joint, { kind: 'metal' });

  // --- 腰 ---
  const pelvis = new THREE.Group();
  pelvis.position.y = 1.5;
  root.add(pelvis);
  pelvis.add(box(0.62, 0.3, 0.44, sh.legMain ? acc : main, 0, 0, 0));
  pelvis.add(box(0.26, 0.34, 0.12, trim, 0, -0.02, 0.24));
  pelvis.add(box(0.7, 0.16, 0.16, acc, 0, -0.14, -0.2));
  for (const sx of [-1, 1]) pelvis.add(box(0.12, 0.36, 0.3, acc, sx * 0.36, -0.08, 0.02));   // サイドアーマー

  // --- 胴 ---
  const torso = new THREE.Group();
  torso.position.y = 0.24;
  pelvis.add(torso);
  torso.add(box(0.66, 0.28, 0.4, joint, 0, 0.02, 0));
  torso.add(box(0.78, 0.54, 0.44, mat('#2b303a', { kind: 'metal' }), 0, 0.38, 0));
  torso.add(box(0.86, 0.5, 0.5, sh.legMain ? main : acc, 0, 0.38, 0));
  // 胸のスリット
  for (let i = 0; i < 3; i++) {
    torso.add(box(0.5, 0.025, 0.04, mat('#171b22', { kind: 'flat', noPanel: true }), 0, 0.2 + i * 0.055, 0.26));
  }
  if (sh.chestDuct) {
    torso.add(box(0.24, 0.4, 0.1, mat('#ffe14d'), -0.24, 0.4, 0.24));
    torso.add(box(0.24, 0.4, 0.1, mat('#ffe14d'), 0.24, 0.4, 0.24));
    torso.add(box(0.3, 0.26, 0.12, trim, 0, 0.3, 0.26));
  } else {
    torso.add(box(0.5, 0.2, 0.1, acc, 0, 0.5, 0.26));
  }
  if (sh.pipes) {
    for (let i = 0; i < 4; i++) {
      const p = cyl(0.06, 0.06, 0.1, joint, -0.3 + i * 0.2, 0.62, 0.18);
      p.rotation.x = 0.4; torso.add(p);
    }
  }

  // --- バックパック / スラスター ---
  const thrusters = [];
  // 噴射は加算合成。不透明のままブルームに乗せると機体を覆い隠す
  const flameMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(P.flame || '#8fd6ff'),
    transparent: true, opacity: 0.42, depthWrite: false,
    blending: THREE.AdditiveBlending, toneMapped: false,
  });
  const pack = addBack(torso, P, sh.back, flameMat, thrusters);

  // 脚部スラスター
  for (const dx of [-0.22, 0.22]) {
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.85, 7), flameMat);
    fl.position.set(dx, -1.5, 0.06);
    fl.rotation.x = Math.PI;
    fl.visible = false;
    pelvis.add(fl);
    thrusters.push(fl);
  }

  // --- 頭 ---
  const head = new THREE.Group();
  head.position.y = 0.72;
  torso.add(head);
  addHead(head, P, sh.head);

  // --- 腕 / 脚 ---
  const armL = makeArm(P, 1, sh); armL.pivot.position.set(0.52, 0.42, 0); torso.add(armL.pivot);
  const armR = makeArm(P, -1, sh); armR.pivot.position.set(-0.52, 0.42, 0); torso.add(armR.pivot);
  const legL = makeLeg(P, 1, sh); legL.pivot.position.set(0.22, -0.12, 0); pelvis.add(legL.pivot);
  const legR = makeLeg(P, -1, sh); legR.pivot.position.set(-0.22, -0.12, 0); pelvis.add(legR.pivot);

  // --- 銃 (右手) ---
  const gun = new THREE.Group();
  gun.position.set(-0.05, -1.2, 0.05);
  armR.pivot.add(gun);
  const reach = addGun(gun, P, sh.gun);
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0, reach);
  gun.add(muzzle);

  // --- ビームサーベル (左手・格闘時のみ表示) ---
  const saber = new THREE.Group();
  saber.position.set(0.05, -1.2, 0);
  armL.pivot.add(saber);
  const grip = cyl(0.06, 0.05, 0.3, mat('#c8ccd4', { metalness: 0.9, roughness: 0.2 }), 0, 0, 0.04);
  grip.rotation.x = Math.PI / 2; saber.add(grip);
  saber.add(cyl(0.075, 0.075, 0.05, mat(P.trim, { metalness: 0.7 }), 0, 0, 0.17));
  // 発光口
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), glowMaterial(P.beam, 0.9));
  emitter.position.set(0, 0, 0.2); saber.add(emitter);

  const BLADE_LEN = 2.15;
  const blade = makeBeamBody(BLADE_LEN, 0.135, P.beam, { coreRatio: 0.34, glowOpacity: 0.42 });
  blade.position.set(0, 0, 0.2 + BLADE_LEN / 2);
  saber.add(blade);
  // 刃先の光の玉
  const bladeTip = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), glowMaterial(P.beam, 0.4));
  bladeTip.position.set(0, 0, 0.2 + BLADE_LEN);
  saber.add(bladeTip);

  let blade2 = null;
  if (sh.saberCount > 1) {
    blade2 = makeBeamBody(BLADE_LEN, 0.135, P.beam, { coreRatio: 0.34, glowOpacity: 0.42 });
    blade2.position.set(0, 0, -0.1 - BLADE_LEN / 2);
    saber.add(blade2);                 // 両刃サーベル
    const t2 = bladeTip.clone();
    t2.position.set(0, 0, -0.1 - BLADE_LEN);
    saber.add(t2);
  }
  // 軌跡を引くための刃の根本 / 先端
  // 軌跡は刃の外側 55% ぶんだけ引く。根本から引くと巨大な扇になって画面を覆う
  const bladeBase = new THREE.Object3D(); bladeBase.position.set(0, 0, 0.2 + BLADE_LEN * 0.62); saber.add(bladeBase);
  const bladeEnd = new THREE.Object3D(); bladeEnd.position.set(0, 0, 0.2 + BLADE_LEN); saber.add(bladeEnd);
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
    thrusters, saber, blade, blade2, bladeBase, bladeEnd, muzzle, gun, shadow, pack,
  };
  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  shadow.castShadow = false;
  return root;
}
