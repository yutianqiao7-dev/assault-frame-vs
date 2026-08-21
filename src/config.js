// ===== 世界の基本定数 =====
// 単位: 1ユニット ≒ 6m 相当。機体の全高は約 3 ユニット。
export const GRAVITY = 30;          // 落下加速度 (u/s^2)
export const TERMINAL_FALL = 34;    // 落下速度上限
export const ARENA_R = 95;          // フィールド半径（1vs1向けに狭め）
export const GROUND_Y = 0;

export const BATTLE_TIME = 180;     // 制限時間(秒)
export const TEAM_COST = 6000;      // 戦力ゲージ

// ===== ダウン / 補正 =====
export const DOWN_LIMIT = 5.0;      // ダウン値がこれ以上で強制ダウン
export const DOWN_DECAY_DELAY = 1.6;// 最後に食らってからこの秒数でダウン値リセット開始
export const DOWN_TIME = 1.5;       // ダウン中(受け身不可)の時間
export const WAKEUP_INVULN = 0.9;   // 起き上がり後の無敵

// ヒット数ごとのダメージ補正(コンボ補正)
export const COMBO_SCALE = [1.0, 0.85, 0.74, 0.65, 0.58, 0.52, 0.47, 0.43, 0.40];

// ===== 覚醒 =====
export const AWAKE_DURATION = 9.0;
export const AWAKE_GAIN_DEAL = 0.11;  // 与ダメ1あたりのゲージ増加(%)
export const AWAKE_GAIN_TAKE = 0.16;  // 被ダメ1あたり
export const AWAKE_SPEED = 1.22;      // 覚醒中の移動倍率
export const AWAKE_DMG   = 1.13;      // 覚醒中の与ダメ倍率

// ===== ブースト共通 =====
export const BOOST_MAX = 100;
export const OVERHEAT_LAND_LAG = 1.15; // オーバーヒート着地の硬直
export const NORMAL_LAND_LAG   = 0.30; // 通常着地硬直
export const STEP_LAND_LAG     = 0.14; // 着地ずらし相当
export const GROUND_DASH_TIME  = 0.50; // 地上ブーストダッシュで浮き上がるまでの時間
export const MELEE_DRAIN_MUL   = 0.75; // 格闘中のブースト消費 (bdDrain に対する倍率)

// ===== 武装の kind =====
// beam    … 直進ビーム（誘導あり）
// bullet  … 実弾。burst で連射
// shell   … 砲弾。arc で山なり、splash で爆風
// spread  … 拡散。count 発を spreadAngle の範囲にばらまく
// missile … 誘導弾を count 発、launchGap 秒おきに撃つ
// laser   … 照射ビーム。duration 秒のあいだ判定が出続ける
// funnel  … オールレンジ攻撃。count 基のビットが敵を包囲して撃つ
// melee_special … 特殊格闘（突進）

export const WEAPON_ORDER = ['shot', 'sub', 'sp_shot', 'sp_melee'];
export const MELEE_DIRS = ['n', 'side', 'fwd'];

export const MECHS = {
  // ==================== 2000: バランス型 ====================
  brave: {
    id: 'brave', name: 'ブレイヴ', cost: 2000, hp: 620,
    role: 'バランス', desc: '素直な性能。全距離をこなす基本機体',
    palette: { main:'#e9eef5', accent:'#2f6fd0', trim:'#d8322f', joint:'#8d97a6', eye:'#ffd23f', beam:'#ff5d7a', flame:'#8fd6ff' },
    shape: { head:'visor', shoulder:'pad', back:'pack', gun:'rifle' },
    walk: 12, bdSpeed: 27, bdDrain: 24, stepSpeed: 31, stepCost: 17, stepDur: 0.34,
    riseSpeed: 15, riseDrain: 27, airMove: 15, meleeCost: 14, boostRecover: 100,
    weapons: {
      shot:     { label:'PR', name:'パルスライフル', kind:'beam',
                  ammo:8, reload:3.0, dmg:70, down:2.0, speed:150, life:1.4,
                  cooldown:0.62, fireDelay:0.16, homing:0.9, radius:0.45 },
      sub:      { label:'HB', name:'ヘヴィバズーカ', kind:'shell',
                  ammo:2, reload:6.0, dmg:95, down:3.0, speed:78, life:2.4,
                  cooldown:0.95, fireDelay:0.26, homing:0.45, radius:0.9, splash:6, arc:0.22 },
      sp_shot:  { label:'WA', name:'ウェイトアンカー', kind:'shell',
                  ammo:2, reload:8.0, dmg:110, down:5.0, speed:52, life:2.0,
                  cooldown:1.1, fireDelay:0.34, homing:0.7, radius:1.2, arc:0.42 },
      sp_melee: { label:'PL', name:'プラズマランス', kind:'melee_special',
                  ammo:1, reload:9.0, dmg:130, down:5.0,
                  cooldown:1.4, rushSpeed:52, rushRange:46, rushTime:0.9 },
    },
    melee: {
      range: 38, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:44, rushTime:0.95, stages:[
              { dmg:60, down:0.8, dur:0.42, knock:2,  pull:true  },
              { dmg:52, down:0.8, dur:0.40, knock:2,  pull:true  },
              { dmg:88, down:3.0, dur:0.62, knock:18, pull:false } ] },
      side: { label:'横格闘', rushSpeed:50, rushTime:0.9, arc:0.6, stages:[
              { dmg:55, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:80, down:3.0, dur:0.58, knock:16, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:58, rushTime:0.8, stages:[
              { dmg:75, down:2.0, dur:0.50, knock:6,  pull:true  },
              { dmg:85, down:3.0, dur:0.60, knock:20, pull:false } ] },
    },
  },

  // ==================== 2000: 射撃・防御型 ====================
  aegis: {
    id: 'aegis', name: 'アイギス', cost: 2000, hp: 640,
    role: '射撃', desc: 'シールドと弾幕。距離を取って撃ち続ける',
    palette: { main:'#dfe6ef', accent:'#1f5f9e', trim:'#f0a03c', joint:'#7f8a99', eye:'#6effc0', beam:'#5fe3ff', flame:'#9be8ff' },
    shape: { head:'dome', shoulder:'shield', back:'wings', gun:'twin', chestDuct:false },
    walk: 11.5, bdSpeed: 25, bdDrain: 22, stepSpeed: 30, stepCost: 16, stepDur: 0.36,
    riseSpeed: 15, riseDrain: 25, airMove: 14, meleeCost: 16, boostRecover: 100,
    weapons: {
      shot:     { label:'TW', name:'ツインビーム', kind:'spread',
                  ammo:9, reload:3.4, dmg:42, down:1.1, speed:150, life:1.4,
                  cooldown:0.66, fireDelay:0.15, homing:0.85, radius:0.4,
                  count:2, spreadAngle:0.045 },
      sub:      { label:'MP', name:'ミサイルポッド', kind:'missile',
                  ammo:4, reload:6.5, dmg:34, down:0.8, speed:92, life:2.6,
                  cooldown:1.0, fireDelay:0.2, homing:1.7, radius:0.5, splash:5,
                  count:4, launchGap:0.1, arc:0.3 },
      sp_shot:  { label:'SB', name:'拡散ビーム', kind:'spread',
                  ammo:2, reload:7.5, dmg:32, down:0.7, speed:132, life:1.2,
                  cooldown:1.0, fireDelay:0.24, homing:0.35, radius:0.42,
                  count:5, spreadAngle:0.2 },
      sp_melee: { label:'SH', name:'シールドバッシュ', kind:'melee_special',
                  ammo:1, reload:8.5, dmg:105, down:5.0,
                  cooldown:1.3, rushSpeed:48, rushRange:38, rushTime:0.85 },
    },
    melee: {
      range: 34, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:40, rushTime:0.90, stages:[
              { dmg:58, down:1.0, dur:0.46, knock:3,  pull:true  },
              { dmg:80, down:3.0, dur:0.62, knock:18, pull:false } ] },
      side: { label:'横格闘', rushSpeed:46, rushTime:0.85, arc:0.5, stages:[
              { dmg:55, down:1.0, dur:0.44, knock:3,  pull:true  },
              { dmg:76, down:3.0, dur:0.58, knock:16, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:52, rushTime:0.80, stages:[
              { dmg:88, down:3.0, dur:0.64, knock:20, pull:false } ] },
    },
  },

  // ==================== 2000: 実弾・手数型 ====================
  garm: {
    id: 'garm', name: 'ガルム', cost: 2000, hp: 600,
    role: '手数', desc: 'マシンガンで削る。単発は軽いが手数で押す',
    palette: { main:'#4f7a52', accent:'#2f4d33', trim:'#8fae7a', joint:'#5c6157', eye:'#ff4d4d', beam:'#ffb03a', flame:'#ffb96b' },
    shape: { head:'mono', shoulder:'spike', back:'pack', gun:'machinegun', pipes:true, legMain:true, chestDuct:false, kneeGuard:false, calfThruster:true, forearmFin:false },
    walk: 11.5, bdSpeed: 26, bdDrain: 23, stepSpeed: 30, stepCost: 17, stepDur: 0.34,
    riseSpeed: 14.5, riseDrain: 26, airMove: 14, meleeCost: 14, boostRecover: 100,
    weapons: {
      shot:     { label:'AM', name:'アサルトマシンガン', kind:'bullet',
                  ammo:24, reload:4.0, dmg:16, down:0.35, speed:135, life:1.2,
                  cooldown:0.10, fireDelay:0.08, homing:0.6, radius:0.3, burst:3, burstGap:0.09 },
      sub:      { label:'SB', name:'ショートバズーカ', kind:'shell',
                  ammo:2, reload:6.5, dmg:90, down:3.0, speed:74, life:2.4,
                  cooldown:0.95, fireDelay:0.28, homing:0.45, radius:0.9, splash:6, arc:0.24 },
      sp_shot:  { label:'GR', name:'グレネード', kind:'shell',
                  ammo:3, reload:7.0, dmg:70, down:2.5, speed:46, life:1.9,
                  cooldown:0.8, fireDelay:0.24, homing:0.3, radius:1.0, splash:7, arc:0.55 },
      sp_melee: { label:'TK', name:'タックル', kind:'melee_special',
                  ammo:1, reload:8.0, dmg:100, down:5.0,
                  cooldown:1.3, rushSpeed:50, rushRange:42, rushTime:0.85 },
    },
    melee: {
      range: 36, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:42, rushTime:0.95, stages:[
              { dmg:65, down:1.0, dur:0.46, knock:3,  pull:true  },
              { dmg:58, down:1.0, dur:0.44, knock:3,  pull:true  },
              { dmg:82, down:3.0, dur:0.60, knock:20, pull:false } ] },
      side: { label:'横格闘', rushSpeed:48, rushTime:0.90, arc:0.55, stages:[
              { dmg:60, down:1.0, dur:0.42, knock:3,  pull:true  },
              { dmg:78, down:3.0, dur:0.58, knock:18, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:54, rushTime:0.80, stages:[
              { dmg:95, down:3.0, dur:0.62, knock:22, pull:false } ] },
    },
  },

  // ==================== 2500: 格闘特化 ====================
  nox: {
    id: 'nox', name: 'ノクス', cost: 2500, hp: 620,
    role: '格闘', desc: '射撃は貧弱。とにかく近づいて4段で削り切る',
    palette: { main:'#4a3a6b', accent:'#1b1626', trim:'#b98cf0', joint:'#6b6f80', eye:'#c96bff', beam:'#b06bff', flame:'#c79bff' },
    shape: { head:'horn', shoulder:'pad', back:'booster', gun:'none', saberCount:2, chestDuct:false, legMain:true },
    walk: 13.5, bdSpeed: 31, bdDrain: 21, stepSpeed: 35, stepCost: 15, stepDur: 0.32,
    riseSpeed: 16, riseDrain: 25, airMove: 18, meleeCost: 11, boostRecover: 100,
    weapons: {
      shot:     { label:'HG', name:'ハンドガン', kind:'bullet',
                  ammo:6, reload:4.5, dmg:34, down:1.0, speed:140, life:1.1,
                  cooldown:0.5, fireDelay:0.12, homing:0.55, radius:0.35 },
      sub:      { label:'TB', name:'投擲ブレード', kind:'spread',
                  ammo:2, reload:6.0, dmg:42, down:1.0, speed:120, life:1.3,
                  cooldown:0.8, fireDelay:0.18, homing:0.7, radius:0.4,
                  count:3, spreadAngle:0.16 },
      sp_shot:  { label:'SL', name:'スラッシュハーケン', kind:'shell',
                  ammo:2, reload:7.0, dmg:65, down:2.0, speed:95, life:1.4,
                  cooldown:0.85, fireDelay:0.2, homing:0.85, radius:0.6 },
      sp_melee: { label:'BL', name:'瞬間突撃', kind:'melee_special',
                  ammo:2, reload:7.5, dmg:120, down:5.0,
                  cooldown:1.1, rushSpeed:72, rushRange:62, rushTime:1.1 },
    },
    melee: {
      range: 46, hitRadius: 4.8,
      n:    { label:'N格闘', rushSpeed:52, rushTime:1.05, stages:[
              { dmg:58, down:0.6, dur:0.34, knock:2,  pull:true  },
              { dmg:50, down:0.6, dur:0.32, knock:2,  pull:true  },
              { dmg:48, down:0.6, dur:0.32, knock:2,  pull:true  },
              { dmg:96, down:3.0, dur:0.58, knock:22, pull:false } ] },
      side: { label:'横格闘', rushSpeed:58, rushTime:1.00, arc:0.85, stages:[
              { dmg:56, down:0.6, dur:0.32, knock:2,  pull:true  },
              { dmg:52, down:0.6, dur:0.32, knock:2,  pull:true  },
              { dmg:88, down:3.0, dur:0.54, knock:20, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:68, rushTime:0.90, stages:[
              { dmg:70,  down:1.5, dur:0.40, knock:4,  pull:true  },
              { dmg:105, down:3.5, dur:0.62, knock:24, pull:false } ] },
    },
  },

  // ==================== 2500: 砲撃型 ====================
  tempest: {
    id: 'tempest', name: 'テンペスト', cost: 2500, hp: 720,
    role: '砲撃', desc: '重い・遅い・硬い。当たれば一撃が大きい',
    palette: { main:'#8a8f99', accent:'#c8722a', trim:'#3a3f4a', joint:'#606672', eye:'#ffcf4d', beam:'#ffa040', flame:'#ffc46b' },
    shape: { head:'visor', shoulder:'cannon', back:'cannon', gun:'cannon', legMain:true, forearmFin:false },
    walk: 10, bdSpeed: 23, bdDrain: 26, stepSpeed: 27, stepCost: 19, stepDur: 0.36,
    riseSpeed: 13.5, riseDrain: 29, airMove: 12, meleeCost: 18, boostRecover: 100,
    weapons: {
      shot:     { label:'LC', name:'ロングキャノン', kind:'shell',
                  ammo:5, reload:4.2, dmg:105, down:2.5, speed:110, life:2.2,
                  cooldown:1.05, fireDelay:0.3, homing:0.5, radius:0.8, splash:5, arc:0.1 },
      sub:      { label:'MS', name:'ミサイル斉射', kind:'missile',
                  ammo:6, reload:7.5, dmg:36, down:0.7, speed:88, life:2.8,
                  cooldown:1.2, fireDelay:0.24, homing:1.6, radius:0.5, splash:5,
                  count:6, launchGap:0.09, arc:0.42 },
      sp_shot:  { label:'HE', name:'榴弾', kind:'spread',
                  ammo:2, reload:8.0, dmg:44, down:1.0, speed:70, life:2.0,
                  cooldown:1.15, fireDelay:0.3, homing:0.25, radius:0.8, splash:6,
                  count:4, spreadAngle:0.17, arc:0.35 },
      sp_melee: { label:'AK', name:'アンカー', kind:'melee_special',
                  ammo:1, reload:9.0, dmg:110, down:5.0,
                  cooldown:1.5, rushSpeed:44, rushRange:40, rushTime:0.9 },
    },
    melee: {
      range: 32, hitRadius: 4.8,
      n:    { label:'N格闘', rushSpeed:38, rushTime:0.90, stages:[
              { dmg:75, down:1.5, dur:0.52, knock:4,  pull:true  },
              { dmg:98, down:3.0, dur:0.68, knock:24, pull:false } ] },
      side: { label:'横格闘', rushSpeed:42, rushTime:0.85, arc:0.4, stages:[
              { dmg:92, down:3.0, dur:0.62, knock:20, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:48, rushTime:0.80, stages:[
              { dmg:115, down:3.5, dur:0.72, knock:26, pull:false } ] },
    },
  },

  // ==================== 3000: 高性能・オールレンジ ====================
  vulca: {
    id: 'vulca', name: 'ヴァルカ', cost: 3000, hp: 700,
    role: '高性能', desc: 'ファンネルと照射ビーム。ただし落ちると3000減る',
    palette: { main:'#c2352f', accent:'#1e2029', trim:'#e2b53c', joint:'#8d97a6', eye:'#7ef0ff', beam:'#ff7de0', flame:'#ffa8f0' },
    shape: { head:'crest', shoulder:'binder', back:'funnels', gun:'rifle' },
    walk: 13, bdSpeed: 30, bdDrain: 22, stepSpeed: 34, stepCost: 16, stepDur: 0.34,
    riseSpeed: 16.5, riseDrain: 25, airMove: 17, meleeCost: 13, boostRecover: 100,
    weapons: {
      shot:     { label:'HR', name:'ハイビームライフル', kind:'beam',
                  ammo:7, reload:3.2, dmg:80, down:2.0, speed:165, life:1.5,
                  cooldown:0.6, fireDelay:0.15, homing:0.95, radius:0.5 },
      sub:      { label:'FN', name:'ファンネル', kind:'funnel',
                  ammo:6, reload:8.5, dmg:38, down:0.9, speed:150, life:1.0,
                  cooldown:1.5, fireDelay:0.2, homing:0.8, radius:0.4,
                  count:3, bitTime:3.2, bitOrbit:16, bitFireGap:0.75 },
      sp_shot:  { label:'LZ', name:'照射ビーム', kind:'laser',
                  ammo:1, reload:11.0, dmg:26, down:0.55, tickGap:0.12,
                  cooldown:2.2, fireDelay:0.42, duration:1.5, range:150, radius:1.6, turn:1.5 },
      sp_melee: { label:'HD', name:'高速突撃', kind:'melee_special',
                  ammo:1, reload:8.0, dmg:135, down:5.0,
                  cooldown:1.3, rushSpeed:64, rushRange:56, rushTime:1.0 },
    },
    melee: {
      range: 40, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:48, rushTime:0.95, stages:[
              { dmg:62, down:0.8, dur:0.40, knock:2,  pull:true  },
              { dmg:55, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:92, down:3.0, dur:0.60, knock:20, pull:false } ] },
      side: { label:'横格闘', rushSpeed:54, rushTime:0.90, arc:0.7, stages:[
              { dmg:58, down:0.8, dur:0.36, knock:2,  pull:true  },
              { dmg:52, down:0.8, dur:0.36, knock:2,  pull:true  },
              { dmg:84, down:3.0, dur:0.56, knock:18, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:62, rushTime:0.80, stages:[
              { dmg:80, down:2.0, dur:0.48, knock:6,  pull:true  },
              { dmg:92, down:3.0, dur:0.58, knock:22, pull:false } ] },
    },
  },
};

export const MECH_ORDER = ['brave', 'aegis', 'garm', 'nox', 'tempest', 'vulca'];
