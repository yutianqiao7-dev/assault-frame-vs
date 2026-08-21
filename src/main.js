import * as THREE from 'three';
import * as C from './config.js';
import { buildArena } from './arena.js';
import { Mech, EMPTY_INPUT } from './mech.js';
import { Projectiles, FX } from './combat.js';
import { ChaseCamera } from './camera.js';
import { Input } from './input.js';
import { AI } from './ai.js';
import { HUD } from './hud.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const app = document.getElementById('app');
const isMobile = matchMedia('(pointer: coarse)').matches || innerWidth < 760;

// ---------- renderer ----------
const renderer = new THREE.WebGLRenderer({
  antialias: !isMobile,
  powerPreference: 'high-performance',
  preserveDrawingBuffer: import.meta.env.DEV,   // 開発時のキャプチャ用。本番では無効
});
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = isMobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(52, 1, 0.5, 1200);
const chase = new ChaseCamera(camera);

const arena = buildArena(scene, renderer);
chase.colliders = arena.buildings;   // カメラがビルにめり込まないように

// ---------- ポストプロセス ----------
// ビーム・サーベル・スラスターは加算合成の発光体として描いているので、
// ブルームが無いとただの明るい単色に見える。threshold を上げて
// 発光体だけ拾い、機体や地面はにじませない。
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(1, 1),
  isMobile ? 0.42 : 0.55,   // strength
  isMobile ? 0.45 : 0.55,   // radius
  0.86,                     // threshold: 発光体だけ拾う
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

function renderFrame() { composer.render(); }

// ---------- world ----------
const fx = new FX(scene);
const world = {
  scene, fx,
  projectiles: null,
  mechs: [],
  spawnShot(owner, key) { world.projectiles.spawn(owner, key); },
  hit(attacker, victim, dmg, down, dir, knock, kind) {
    const d = victim.takeHit(attacker, dmg, down, dir, knock, kind);
    if (d > 0 && (victim === game.self || attacker === game.self)) chase.bump(kind === 'melee' ? 0.55 : 0.3);
  },
  onDeath(victim, attacker) {
    const side = victim.team === 'ally' ? 'ally' : 'foe';
    game.cost[side] = Math.max(0, game.cost[side] - victim.d.cost);
    chase.bump(1.2);
    hud.message(victim === game.self ? 'DOWN...' : 'DESTROYED', victim === game.self ? '#ff6b74' : '#ffcf4d');
    if (game.cost[side] <= 0) game.finish(side === 'ally' ? 'lose' : 'win');
  },
  // ステップすると自分に向かってきている敵弾の誘導が切れる。
  // このジャンルで「ステップが防御の要」になる仕組みで、これが無いと
  // 誘導が強い射撃から距離を取っても逃げ切れない。
  breakHoming(mech) {
    let n = 0;
    for (const p of world.projectiles.list) {
      if (p.owner.team !== mech.team && p.homing > 0) { p.homing = 0; n++; }
    }
    return n;
  },
  msg(t) { hud.message(t, '#ffcf4d'); },
};
world.projectiles = new Projectiles(world);

const hud = new HUD();
const input = new Input();

// ---------- game ----------
const game = {
  self: null, foe: null, ai: null, camera,
  cost: { ally: C.TEAM_COST, foe: C.TEAM_COST },
  time: C.BATTLE_TIME,
  running: false,
  over: false,

  init(selfId = 'brave', foeId = 'garm', level = 'normal') {
    for (const m of world.mechs) { scene.remove(m.root); if (m.trail) scene.remove(m.trail.mesh); }
    world.mechs.length = 0;
    world.projectiles.clear();
    fx.clear();

    const self = new Mech(C.MECHS[selfId], 'ally', world);
    const foe = new Mech(C.MECHS[foeId], 'foe', world);
    self.isPlayer = true;
    self.target = foe;
    foe.target = self;
    self.pos.set(0, 0, -42); self.yaw = 0;
    foe.pos.set(0, 0, 42); foe.yaw = Math.PI;
    world.mechs.push(self, foe);

    this.self = self; this.foe = foe;
    this.ai = new AI(foe, world, level);
    this.cost.ally = C.TEAM_COST;
    this.cost.foe = C.TEAM_COST;
    this.time = C.BATTLE_TIME;
    this.over = false;

    hud.setup(self, foe);
    chase.snap(self, foe);
  },

  finish(result) {
    if (this.over) return;
    this.over = true;
    this.running = false;
    const el = document.getElementById('result');
    const title = document.getElementById('resTitle');
    title.textContent = result === 'win' ? 'MISSION COMPLETE' : result === 'lose' ? 'MISSION FAILED' : 'DRAW';
    title.className = result === 'win' ? 'win' : 'lose';
    el.classList.remove('hidden');
  },
};

// ---------- loop ----------
let viewW = 0, viewH = 0;
function resize() {
  const w = Math.max(1, Math.floor(visualViewport ? visualViewport.width : innerWidth));
  const h = Math.max(1, Math.floor(visualViewport ? visualViewport.height : innerHeight));
  if (w === viewW && h === viewH) return;
  viewW = w; viewH = h;
  renderer.setSize(w, h, false);           // updateStyle=false (CSSで100%指定済み)
  composer.setSize(w, h);
  // ブルームはぼかしなので内部解像度を落としても見た目がほぼ変わらない。
  // スマホでは半分にして塗りつぶし負荷を 1/4 にする
  const bq = isMobile ? 0.5 : 1;
  bloom.setSize(Math.max(1, Math.floor(w * bq)), Math.max(1, Math.floor(h * bq)));
  camera.aspect = w / h;
  const portrait = h > w;
  chase.portrait = portrait;
  camera.fov = portrait ? 62 : (camera.aspect < 1.7 ? 54 : 48);
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

function tick(dt) {
  const inp = game.running ? input.read() : EMPTY_INPUT;

  if (game.running && !game.over) {
    game.time -= dt;
    if (game.time <= 0) {
      game.time = 0;
      const r = game.cost.ally === game.cost.foe ? 'draw' : (game.cost.ally > game.cost.foe ? 'win' : 'lose');
      game.finish(r);
    }
  }

  const aiInp = game.ai ? game.ai.update(dt) : EMPTY_INPUT;
  if (game.self) game.self.update(dt, game.running ? inp : EMPTY_INPUT);
  if (game.foe) game.foe.update(dt, game.running ? aiInp : EMPTY_INPUT);

  world.projectiles.update(dt, world.mechs);
  fx.update(dt);
  chase.update(dt, game.self, game.foe);
  if (game.self) hud.update(dt, game);
  input.endFrame();
}

let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  resize();
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.1) dt = 0.1;      // タブ復帰時の巨大 dt をクランプ
  tick(dt);
  renderFrame();
}

let level = localStorage.getItem('gvs.level') || 'easy';
for (const b of document.querySelectorAll('#lvPick .lv')) {
  b.classList.toggle('on', b.dataset.lv === level);
  b.addEventListener('click', () => {
    level = b.dataset.lv;
    localStorage.setItem('gvs.level', level);
    for (const o of document.querySelectorAll('#lvPick .lv')) o.classList.toggle('on', o === b);
  });
}

// ---------- 機体選択 ----------
const MOVE_ROWS = [
  ['射撃', (m) => m.weapons.shot],
  ['サブ', (m) => m.weapons.sub],
  ['特射', (m) => m.weapons.sp_shot],
  ['特格', (m) => m.weapons.sp_melee],
];

let selfId = localStorage.getItem('gvs.self') || 'brave';
let foeId = localStorage.getItem('gvs.foe') || 'garm';
if (!C.MECHS[selfId]) selfId = 'brave';
if (!C.MECHS[foeId]) foeId = 'garm';

function describe(id) {
  const m = C.MECHS[id];
  const el = document.getElementById('mechInfo');
  const moves = MOVE_ROWS.map(([label, get]) => {
    const w = get(m);
    return w ? `<div><i>${label}</i><span>${w.name}</span></div>` : '';
  }).join('');
  const melee = C.MELEE_DIRS.map((dk) => {
    const v = m.melee[dk];
    return v ? `<div><i>${v.label}</i><span>${v.stages.length}段 / 総${v.stages.reduce((a, s) => a + s.dmg, 0)}</span></div>` : '';
  }).join('');
  el.innerHTML = `
    <div class="miTop"><span class="miName">${m.name}</span><span class="miRole">${m.role}</span></div>
    <div class="miDesc">${m.desc}</div>
    <div class="miStats">
      <span><b>コスト</b>${m.cost}</span><span><b>耐久</b>${m.hp}</span>
      <span><b>歩き</b>${m.walk}</span><span><b>BD</b>${m.bdSpeed}</span>
    </div>
    <div class="miMoves">${moves}${melee}</div>`;
}

function buildPicker(containerId, isFoe) {
  const box = document.getElementById(containerId);
  box.innerHTML = '';
  for (const id of C.MECH_ORDER) {
    const m = C.MECHS[id];
    const b = document.createElement('button');
    b.className = 'mp' + (isFoe ? ' foeSel' : '');
    b.dataset.id = id;
    b.innerHTML = `<span class="mpChip">${m.cost}</span>
                   <span class="mpName">${m.name}</span>
                   <span class="mpCost">${m.role}</span>`;
    b.addEventListener('click', () => {
      if (isFoe) { foeId = id; localStorage.setItem('gvs.foe', id); }
      else { selfId = id; localStorage.setItem('gvs.self', id); describe(id); }
      for (const o of box.children) o.classList.toggle('on', o === b);
      if (!game.running) game.init(selfId, foeId, level);   // 背景プレビューを更新
    });
    box.appendChild(b);
  }
  const cur = isFoe ? foeId : selfId;
  for (const o of box.children) o.classList.toggle('on', o.dataset.id === cur);
}

buildPicker('selfPick', false);
buildPicker('foePick', true);
describe(selfId);

// ---------- 起動 ----------
// タイトルの背景には選択中の組み合わせを出す
game.init(selfId, foeId, level);
requestAnimationFrame(frame);

function startBattle() {
  game.init(selfId, foeId, level);
  game.running = true;
  last = performance.now();
  hud.message('BATTLE START', '#8fd6ff');
}

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('gate').classList.add('hidden');
  hud.show();
  document.getElementById('touch').classList.remove('hidden');
  startBattle();
});

document.getElementById('againBtn').addEventListener('click', () => {
  document.getElementById('result').classList.add('hidden');
  startBattle();
});

// ---------- デバッグ (開発時のみ。本番ビルドでは丸ごと消える) ----------
if (import.meta.env.DEV) {
  window.__dbg = {
    THREE, scene, camera, renderer, composer, bloom, game, world, hud, input, chase,
    step(dt = 1 / 60, n = 1) { for (let i = 0; i < n; i++) tick(dt); renderFrame(); },
    sim(n, dt = 1 / 60, onFrame) { for (let i = 0; i < n; i++) { if (onFrame) onFrame(i); tick(dt); } },
    render() { renderFrame(); },
  };
}
