import { WEAPON_ORDER, MELEE_DIRS } from './config.js';

// ホストが全部シミュレーションし、ゲストは結果を受け取って描画するだけ。
// （今のシミュレーションは Math.random() を各所で使っていて決定的ではないので、
//   両者が独立に計算する方式では必ずズレる）
//
// 数値の配列で送る。キー名を持つ JSON より 3 倍ほど小さい。

const ST = ['free', 'step', 'land', 'fire', 'rush', 'swing', 'stagger', 'down', 'wake', 'dead'];
const r2 = (v) => Math.round(v * 100) / 100;
const r1 = (v) => Math.round(v * 10) / 10;

// ---------- 機体 ----------
export function packMech(m) {
  const u = m.root.userData;
  return [
    r2(m.pos.x), r2(m.pos.y), r2(m.pos.z),
    r1(m.vel.x), r1(m.vel.y), r1(m.vel.z),
    r2(m.yaw),
    ST.indexOf(m.st), r2(m.stT), r2(m.stDur),
    m.hp, Math.round(m.boost),
    (m.overheat ? 1 : 0) | (m.grounded ? 2 : 0) | (m.boosting ? 4 : 0) | (u.saber.visible ? 8 : 0),
    r1(m.invuln), Math.round(m.awake), r1(m.awakeT),
    m.ammo.shot ?? 0, m.ammo.sub ?? 0, m.ammo.sp_shot ?? 0, m.ammo.sp_melee ?? 0,
    m.meleeStage, MELEE_DIRS.indexOf(m.meleeDir), WEAPON_ORDER.indexOf(m.fireKey),
  ];
}

// snap: 受信した配列。lerp=true なら位置だけ補間して残りは即反映
export function applyMech(m, a, blend = 1) {
  const u = m.root.userData;
  // 位置は受信値へ寄せる（毎フレームは速度で外挿しているので、ここは補正）
  m.pos.x += (a[0] - m.pos.x) * blend;
  m.pos.y += (a[1] - m.pos.y) * blend;
  m.pos.z += (a[2] - m.pos.z) * blend;
  m.vel.set(a[3], a[4], a[5]);
  m.yaw = a[6];

  m.st = ST[a[7]] || 'free';
  m.stT = a[8]; m.stDur = a[9];
  m.hp = a[10]; m.boost = a[11];
  const f = a[12];
  m.overheat = !!(f & 1); m.grounded = !!(f & 2); m.boosting = !!(f & 4);
  u.saber.visible = !!(f & 8);
  m.invuln = a[13]; m.awake = a[14]; m.awakeT = a[15];
  m.awakeReady = m.awake >= 100 && m.awakeT <= 0;
  m.ammo.shot = a[16]; m.ammo.sub = a[17]; m.ammo.sp_shot = a[18]; m.ammo.sp_melee = a[19];
  m.meleeStage = a[20];
  m.meleeDir = MELEE_DIRS[a[21]] || 'n';
  m.meleeVar = m.d.melee[m.meleeDir] || m.d.melee.n;
  m.fireKey = WEAPON_ORDER[a[22]] || null;
}

// ---------- 弾 ----------
// [id, ownerIdx, weaponIdx, x, y, z, vx, vy, vz]
export function packShots(list, mechs) {
  const out = [];
  for (const p of list) {
    if (p.netId == null) continue;
    out.push(
      p.netId, mechs.indexOf(p.owner), WEAPON_ORDER.indexOf(p.key),
      r1(p.pos.x), r1(p.pos.y), r1(p.pos.z),
      Math.round(p.vel.x), Math.round(p.vel.y), Math.round(p.vel.z),
    );
  }
  return out;
}

// ---------- ファンネルのビット ----------
export function packBits(list, mechs) {
  const out = [];
  for (const b of list) {
    if (b.netId == null) continue;
    out.push(b.netId, mechs.indexOf(b.owner), r1(b.pos.x), r1(b.pos.y), r1(b.pos.z));
  }
  return out;
}

// ---------- 照射ビーム ----------
export function packBeams(list, mechs) {
  const out = [];
  for (const b of list) {
    out.push(mechs.indexOf(b.owner), r2(b.dir.x), r2(b.dir.y), r2(b.dir.z), r2(b.life));
  }
  return out;
}

export function packSnapshot(game, world, seq) {
  const mechs = world.mechs;
  return {
    t: 's', n: seq,
    m: [packMech(mechs[0]), packMech(mechs[1])],
    p: packShots(world.projectiles.list, mechs),
    b: packBits(world.projectiles.bits, mechs),
    l: packBeams(world.projectiles.beams, mechs),
    tm: r1(game.time),
    c: [game.cost.ally, game.cost.foe],
    o: game.over ? 1 : 0,
  };
}
