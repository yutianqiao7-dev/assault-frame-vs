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
export const DOWN_MAX_TIME = 3.2;   // ここを過ぎたら空中でも強制的に起き上がる(ハメ防止)
export const DOWN_HIT_SCALE = 0.32; // ダウン追撃のダメージ補正
// 射撃がよろけを取るのに必要なダウン値の蓄積。マシンガンのような
// 単発の軽い弾が毎発のけぞらせて拘束し続けるのを防ぐ（格闘は常によろける）
export const STAGGER_THRESHOLD = 1.0;
export const DOWN_KNOCK_MIN = 11;   // 強制ダウン時の最低吹き飛ばし。密着で撃ち続けさせない
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
// boomerang … 投げて戻ってくる。往路と復路の両方に判定
// melee_special … 特殊格闘（突進）
// 共通フラグ: pierce=true で貫通（同じ相手には1回だけ当たる）

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
      awake:    { label:'AW', name:'ハイパーランス', kind:'laser',
                  dmg:34, down:0.5, cooldown:0, fireDelay:0.34, duration:1.8, tickGap:0.1,
                  range:150, radius:2.2, turn:1.6 },
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
      awake:    { label:'AW', name:'全門斉射', kind:'spread',
                  dmg:40, down:0.6, cooldown:0, fireDelay:0.26, speed:155, life:1.5,
                  homing:0.95, radius:0.42, count:12, spreadAngle:0.26 },
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
      awake:    { label:'AW', name:'一斉射撃', kind:'missile',
                  dmg:34, down:0.7, cooldown:0, fireDelay:0.22, speed:104, life:2.6,
                  homing:2.0, radius:0.44, splash:5, count:10, launchGap:0.06, arc:0.32 },
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
      awake:    { label:'AW', name:'零距離乱舞', kind:'melee_special',
                  dmg:225, down:5.0, cooldown:0, rushSpeed:92, rushRange:999, rushTime:1.4, swingDur:0.95 },
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
      awake:    { label:'AW', name:'全砲門斉射', kind:'shell',
                  dmg:78, down:2.0, cooldown:0, fireDelay:0.3, speed:96, life:2.8,
                  homing:0.6, radius:1.0, splash:11, arc:0.24, burst:6, burstGap:0.1 },
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
                  cooldown:2.2, fireDelay:0.42, duration:1.5, range:150, radius:1.0, turn:1.5 },
      sp_melee: { label:'HD', name:'高速突撃', kind:'melee_special',
                  ammo:1, reload:8.0, dmg:135, down:5.0,
                  cooldown:1.3, rushSpeed:64, rushRange:56, rushTime:1.0 },
      awake:    { label:'AW', name:'全基展開', kind:'funnel',
                  dmg:30, down:0.8, cooldown:0, fireDelay:0.24, speed:165, life:1.1,
                  homing:0.95, radius:0.4, count:6, bitTime:2.6, bitOrbit:20, bitFireGap:0.8 },
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

  // ==================== 1500: 軽量・高機動 ====================
  lava: {
    id: 'lava', name: 'ラーヴァ', cost: 1500, hp: 480,
    role: '軽量', desc: '紙装甲だが最速。落ちても1500しか減らない',
    palette: { main:'#e8c33a', accent:'#2b2b30', trim:'#ff8a3c', joint:'#7c8189', eye:'#7ef0ff', beam:'#ffd45c', flame:'#ffe08a' },
    shape: { head:'twin', shoulder:'drum', back:'booster', gun:'machinegun', legMain:true, chestDuct:false, forearmFin:false },
    walk: 14, bdSpeed: 33, bdDrain: 20, stepSpeed: 37, stepCost: 13, stepDur: 0.30,
    riseSpeed: 17, riseDrain: 23, airMove: 19, meleeCost: 10, boostRecover: 100,
    weapons: {
      shot:     { label:'VC', name:'バルカン', kind:'bullet',
                  ammo:30, reload:3.6, dmg:13, down:0.3, speed:140, life:1.1,
                  cooldown:0.09, fireDelay:0.06, homing:0.55, radius:0.28, burst:4, burstGap:0.07 },
      sub:      { label:'MM', name:'マイクロミサイル', kind:'missile',
                  ammo:3, reload:5.5, dmg:26, down:0.6, speed:96, life:2.2,
                  cooldown:0.85, fireDelay:0.16, homing:1.8, radius:0.4, splash:4,
                  count:3, launchGap:0.08, arc:0.24 },
      sp_shot:  { label:'SP', name:'スプレッド', kind:'spread',
                  ammo:3, reload:6.0, dmg:26, down:0.6, speed:128, life:1.1,
                  cooldown:0.8, fireDelay:0.18, homing:0.4, radius:0.36,
                  count:3, spreadAngle:0.15 },
      sp_melee: { label:'DS', name:'ダッシュスラスト', kind:'melee_special',
                  ammo:2, reload:6.5, dmg:88, down:5.0,
                  cooldown:1.0, rushSpeed:74, rushRange:52, rushTime:0.95 },
      awake:    { label:'AW', name:'フルバーストミサイル', kind:'missile',
                  dmg:30, down:0.6, cooldown:0, fireDelay:0.2, speed:100, life:2.6,
                  homing:2.1, radius:0.42, splash:5, count:12, launchGap:0.05, arc:0.3 },
    },
    melee: {
      range: 36, hitRadius: 4.4,
      n:    { label:'N格闘', rushSpeed:54, rushTime:0.95, stages:[
              { dmg:46, down:0.6, dur:0.32, knock:2,  pull:true  },
              { dmg:42, down:0.6, dur:0.30, knock:2,  pull:true  },
              { dmg:70, down:3.0, dur:0.50, knock:18, pull:false } ] },
      side: { label:'横格闘', rushSpeed:60, rushTime:0.90, arc:0.9, stages:[
              { dmg:44, down:0.6, dur:0.30, knock:2,  pull:true  },
              { dmg:66, down:3.0, dur:0.48, knock:16, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:70, rushTime:0.80, stages:[
              { dmg:78, down:3.0, dur:0.52, knock:20, pull:false } ] },
    },
  },

  // ==================== 1500: 軽量・格闘 ====================
  vespa: {
    id: 'vespa', name: 'ヴェスパ', cost: 1500, hp: 470,
    role: '軽量格闘', desc: '射撃はほぼ無い。速さで懐に入る一点勝負',
    palette: { main:'#f2f4f7', accent:'#e0562c', trim:'#2b3038', joint:'#8d939c', eye:'#ffd23f', beam:'#ff9a3c', flame:'#ffc07a' },
    shape: { head:'horn', shoulder:'wing', back:'booster', gun:'none', chestDuct:false },
    walk: 14.5, bdSpeed: 34, bdDrain: 20, stepSpeed: 38, stepCost: 13, stepDur: 0.30,
    riseSpeed: 17.5, riseDrain: 23, airMove: 20, meleeCost: 9, boostRecover: 100,
    weapons: {
      shot:     { label:'NL', name:'ニードル', kind:'bullet',
                  ammo:4, reload:5.0, dmg:28, down:0.9, speed:150, life:1.0,
                  cooldown:0.55, fireDelay:0.1, homing:0.5, radius:0.3 },
      sub:      { label:'TK', name:'投擲ナイフ', kind:'spread',
                  ammo:2, reload:5.5, dmg:36, down:0.9, speed:130, life:1.2,
                  cooldown:0.7, fireDelay:0.14, homing:0.65, radius:0.35,
                  count:2, spreadAngle:0.1 },
      sp_shot:  { label:'HK', name:'ワイヤーフック', kind:'shell',
                  ammo:2, reload:6.5, dmg:55, down:2.0, speed:105, life:1.3,
                  cooldown:0.8, fireDelay:0.16, homing:0.9, radius:0.55 },
      sp_melee: { label:'PS', name:'ピアススラスト', kind:'melee_special',
                  ammo:2, reload:6.5, dmg:105, down:5.0,
                  cooldown:1.0, rushSpeed:78, rushRange:58, rushTime:1.05 },
      awake:    { label:'AW', name:'連刃突撃', kind:'melee_special',
                  dmg:190, down:5.0, cooldown:0, rushSpeed:96, rushRange:999, rushTime:1.4, swingDur:0.9 },
    },
    melee: {
      range: 44, hitRadius: 4.4,
      n:    { label:'N格闘', rushSpeed:56, rushTime:1.05, stages:[
              { dmg:48, down:0.5, dur:0.30, knock:2,  pull:true  },
              { dmg:44, down:0.5, dur:0.28, knock:2,  pull:true  },
              { dmg:42, down:0.5, dur:0.28, knock:2,  pull:true  },
              { dmg:80, down:3.0, dur:0.52, knock:20, pull:false } ] },
      side: { label:'横格闘', rushSpeed:62, rushTime:1.00, arc:0.95, stages:[
              { dmg:46, down:0.5, dur:0.28, knock:2,  pull:true  },
              { dmg:44, down:0.5, dur:0.28, knock:2,  pull:true  },
              { dmg:74, down:3.0, dur:0.48, knock:18, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:72, rushTime:0.90, stages:[
              { dmg:58, down:1.5, dur:0.34, knock:4,  pull:true  },
              { dmg:88, down:3.5, dur:0.54, knock:22, pull:false } ] },
    },
  },

  // ==================== 2000: 変則射撃 ====================
  orca: {
    id: 'orca', name: 'オルカ', cost: 2000, hp: 610,
    role: '変則', desc: '貫通ビームと戻ってくるブーメラン。射線が読みにくい',
    palette: { main:'#26324a', accent:'#c9d3e2', trim:'#3fd0c0', joint:'#79828f', eye:'#3fd0c0', beam:'#5fffe0', flame:'#8ffff0' },
    shape: { head:'mask', shoulder:'blade', back:'blades', gun:'bow', legMain:true },
    walk: 12, bdSpeed: 27, bdDrain: 23, stepSpeed: 31, stepCost: 16, stepDur: 0.34,
    riseSpeed: 15, riseDrain: 26, airMove: 15, meleeCost: 13, boostRecover: 100,
    weapons: {
      shot:     { label:'PB', name:'貫通ビーム', kind:'beam', pierce: true,
                  ammo:6, reload:3.6, dmg:62, down:1.8, speed:175, life:1.5,
                  cooldown:0.7, fireDelay:0.18, homing:0.55, radius:0.4 },
      sub:      { label:'BM', name:'ブーメラン', kind:'boomerang',
                  ammo:2, reload:6.0, dmg:58, down:1.6, speed:82, life:3.0,
                  cooldown:1.0, fireDelay:0.2, homing:0.5, radius:0.9, turnAt:0.6 },
      sp_shot:  { label:'FB', name:'拡散ビーム', kind:'spread',
                  ammo:2, reload:7.0, dmg:30, down:0.7, speed:140, life:1.2,
                  cooldown:0.95, fireDelay:0.22, homing:0.4, radius:0.4,
                  count:4, spreadAngle:0.18 },
      sp_melee: { label:'SW', name:'ソードスロー', kind:'melee_special',
                  ammo:1, reload:8.0, dmg:112, down:5.0,
                  cooldown:1.25, rushSpeed:56, rushRange:46, rushTime:0.9 },
      awake:    { label:'AW', name:'極大貫通ビーム', kind:'beam', pierce: true,
                  dmg:150, down:4.0, cooldown:0, fireDelay:0.3, speed:210, life:2.0,
                  homing:0.8, radius:1.1 },
    },
    melee: {
      range: 38, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:46, rushTime:0.95, stages:[
              { dmg:58, down:0.8, dur:0.40, knock:2,  pull:true  },
              { dmg:52, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:84, down:3.0, dur:0.58, knock:18, pull:false } ] },
      side: { label:'横格闘', rushSpeed:52, rushTime:0.90, arc:0.7, stages:[
              { dmg:54, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:78, down:3.0, dur:0.56, knock:16, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:60, rushTime:0.80, stages:[
              { dmg:70, down:2.0, dur:0.46, knock:6,  pull:true  },
              { dmg:82, down:3.0, dur:0.58, knock:20, pull:false } ] },
    },
  },

  // ==================== 2500: 重量格闘 ====================
  grave: {
    id: 'grave', name: 'グラーヴ', cost: 2500, hp: 690,
    role: '重格闘', desc: '両刃と肩ブレード。遅いが一撃が重い格闘機',
    palette: { main:'#241f2b', accent:'#8e2436', trim:'#d4b25a', joint:'#5f6470', eye:'#ff5a5a', beam:'#ff4d6a', flame:'#ff8a9a' },
    shape: { head:'crest', shoulder:'blade', back:'wings', gun:'none', saberCount:2, legMain:true, chestDuct:false },
    walk: 11.5, bdSpeed: 27, bdDrain: 23, stepSpeed: 30, stepCost: 16, stepDur: 0.34,
    riseSpeed: 14.5, riseDrain: 26, airMove: 14, meleeCost: 13, boostRecover: 100,
    weapons: {
      shot:     { label:'HC', name:'ハンドキャノン', kind:'shell',
                  ammo:4, reload:4.5, dmg:72, down:2.0, speed:100, life:1.8,
                  cooldown:0.85, fireDelay:0.22, homing:0.5, radius:0.7, splash:4, arc:0.12 },
      sub:      { label:'BT', name:'ブレードスロー', kind:'boomerang',
                  ammo:2, reload:6.5, dmg:64, down:1.8, speed:76, life:3.0,
                  cooldown:1.05, fireDelay:0.22, homing:0.45, radius:0.95, turnAt:0.55 },
      sp_shot:  { label:'SH', name:'衝撃波', kind:'spread',
                  ammo:2, reload:7.5, dmg:40, down:1.0, speed:88, life:1.1,
                  cooldown:1.0, fireDelay:0.26, homing:0.2, radius:0.7,
                  count:4, spreadAngle:0.22 },
      sp_melee: { label:'GC', name:'両断', kind:'melee_special',
                  ammo:1, reload:8.5, dmg:145, down:5.0,
                  cooldown:1.4, rushSpeed:58, rushRange:48, rushTime:0.95 },
      awake:    { label:'AW', name:'大回転斬', kind:'melee_special',
                  dmg:240, down:5.0, cooldown:0, rushSpeed:82, rushRange:999, rushTime:1.5, swingDur:1.0 },
    },
    melee: {
      range: 40, hitRadius: 4.8,
      n:    { label:'N格闘', rushSpeed:48, rushTime:1.00, stages:[
              { dmg:70, down:1.0, dur:0.46, knock:3,  pull:true  },
              { dmg:64, down:1.0, dur:0.44, knock:3,  pull:true  },
              { dmg:104, down:3.0, dur:0.66, knock:22, pull:false } ] },
      side: { label:'横格闘', rushSpeed:54, rushTime:0.95, arc:0.65, stages:[
              { dmg:66, down:1.0, dur:0.42, knock:3,  pull:true  },
              { dmg:96, down:3.0, dur:0.62, knock:20, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:62, rushTime:0.85, stages:[
              { dmg:124, down:3.5, dur:0.70, knock:26, pull:false } ] },
    },
  },

  // ==================== 2500: 超重装 ====================
  titan: {
    id: 'titan', name: 'タイタン', cost: 2500, hp: 800,
    role: '重装', desc: '全機体で最も硬い。ガトリングで面を張る',
    palette: { main:'#3f4a3a', accent:'#8a7332', trim:'#d0a83c', joint:'#5a5f57', eye:'#ffb03a', beam:'#ffc24d', flame:'#ffcf80' },
    shape: { head:'dome', shoulder:'cannon', back:'tank', gun:'gatling', legMain:true, forearmFin:false },
    walk: 9.5, bdSpeed: 22, bdDrain: 27, stepSpeed: 26, stepCost: 20, stepDur: 0.36,
    riseSpeed: 13, riseDrain: 30, airMove: 11, meleeCost: 19, boostRecover: 100,
    weapons: {
      shot:     { label:'GT', name:'ガトリング', kind:'bullet',
                  ammo:40, reload:5.0, dmg:14, down:0.28, speed:145, life:1.3,
                  cooldown:0.07, fireDelay:0.08, homing:0.55, radius:0.3, burst:5, burstGap:0.06 },
      sub:      { label:'HM', name:'重ミサイル', kind:'missile',
                  ammo:4, reload:7.5, dmg:48, down:1.0, speed:82, life:3.0,
                  cooldown:1.2, fireDelay:0.26, homing:1.5, radius:0.6, splash:6,
                  count:4, launchGap:0.12, arc:0.38 },
      sp_shot:  { label:'MT', name:'迫撃砲', kind:'shell',
                  ammo:2, reload:8.0, dmg:120, down:3.5, speed:58, life:2.4,
                  cooldown:1.3, fireDelay:0.34, homing:0.3, radius:1.1, splash:8, arc:0.6 },
      sp_melee: { label:'CR', name:'圧殺', kind:'melee_special',
                  ammo:1, reload:9.0, dmg:118, down:5.0,
                  cooldown:1.5, rushSpeed:42, rushRange:36, rushTime:0.85 },
      awake:    { label:'AW', name:'全弾発射', kind:'missile',
                  dmg:38, down:0.7, cooldown:0, fireDelay:0.26, speed:96, life:3.0,
                  homing:1.9, radius:0.5, splash:6, count:14, launchGap:0.05, arc:0.36 },
    },
    melee: {
      range: 30, hitRadius: 5.0,
      n:    { label:'N格闘', rushSpeed:36, rushTime:0.85, stages:[
              { dmg:82, down:1.5, dur:0.54, knock:5,  pull:true  },
              { dmg:106, down:3.0, dur:0.72, knock:26, pull:false } ] },
      side: { label:'横格闘', rushSpeed:40, rushTime:0.85, arc:0.35, stages:[
              { dmg:98, down:3.0, dur:0.66, knock:22, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:46, rushTime:0.80, stages:[
              { dmg:126, down:3.5, dur:0.76, knock:28, pull:false } ] },
    },
  },

  // ==================== 3000: 万能 ====================
  seraph: {
    id: 'seraph', name: 'セラフ', cost: 3000, hp: 720,
    role: '万能', desc: '6基のファンネルと貫通ビーム。隙が無い代わりに3000',
    palette: { main:'#f4f6fa', accent:'#d9b04a', trim:'#4a9de0', joint:'#98a1ad', eye:'#8ff0ff', beam:'#7fd8ff', flame:'#bfeaff' },
    shape: { head:'visor', shoulder:'binder', back:'funnels', gun:'twin' },
    walk: 13, bdSpeed: 30, bdDrain: 21, stepSpeed: 34, stepCost: 15, stepDur: 0.33,
    riseSpeed: 16.5, riseDrain: 24, airMove: 17, meleeCost: 13, boostRecover: 100,
    weapons: {
      shot:     { label:'PB', name:'貫通ビーム', kind:'beam', pierce: true,
                  ammo:7, reload:3.2, dmg:66, down:1.8, speed:180, life:1.5,
                  cooldown:0.62, fireDelay:0.15, homing:0.75, radius:0.42 },
      sub:      { label:'FN', name:'ファンネル', kind:'funnel',
                  ammo:6, reload:8.0, dmg:34, down:0.8, speed:155, life:1.0,
                  cooldown:1.4, fireDelay:0.2, homing:0.85, radius:0.38,
                  count:6, bitTime:3.6, bitOrbit:18, bitFireGap:0.7 },
      sp_shot:  { label:'TB', name:'ツインビーム', kind:'spread',
                  ammo:4, reload:5.5, dmg:44, down:1.1, speed:160, life:1.4,
                  cooldown:0.75, fireDelay:0.16, homing:0.8, radius:0.4,
                  count:2, spreadAngle:0.05 },
      sp_melee: { label:'RD', name:'急速接近', kind:'melee_special',
                  ammo:1, reload:7.5, dmg:128, down:5.0,
                  cooldown:1.25, rushSpeed:68, rushRange:58, rushTime:1.0 },
      awake:    { label:'AW', name:'全周制圧', kind:'funnel',
                  dmg:30, down:0.8, cooldown:0, fireDelay:0.24, speed:170, life:1.1,
                  homing:0.95, radius:0.4, count:7, bitTime:2.6, bitOrbit:22, bitFireGap:0.8 },
    },
    melee: {
      range: 40, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:50, rushTime:0.95, stages:[
              { dmg:60, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:54, down:0.8, dur:0.36, knock:2,  pull:true  },
              { dmg:90, down:3.0, dur:0.58, knock:20, pull:false } ] },
      side: { label:'横格闘', rushSpeed:56, rushTime:0.90, arc:0.75, stages:[
              { dmg:56, down:0.8, dur:0.36, knock:2,  pull:true  },
              { dmg:52, down:0.8, dur:0.34, knock:2,  pull:true  },
              { dmg:82, down:3.0, dur:0.54, knock:18, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:64, rushTime:0.80, stages:[
              { dmg:78, down:2.0, dur:0.46, knock:6,  pull:true  },
              { dmg:90, down:3.0, dur:0.56, knock:22, pull:false } ] },
    },
  },

  // ==================== 1500: 追加 ====================
  fang: {
    id: 'fang', name: 'ファング', cost: 1500, hp: 440,
    role: '格闘', desc: '銃を持たない二刀。最速で殴りに行くが当たれば即溶ける',
    palette: { main:'#2c2f3a', accent:'#c8324a', trim:'#e8e9ee', joint:'#6b7280', eye:'#ff4d6a', beam:'#ff5a7d', flame:'#ff9ab0' },
    shape: { head:'mask', shoulder:'wing', back:'blades', gun:'none', saberCount:2, legMain:true, chestDuct:false, forearmFin:false },
    walk: 15, bdSpeed: 35, bdDrain: 19, stepSpeed: 40, stepCost: 12, stepDur: 0.28,
    riseSpeed: 18, riseDrain: 22, airMove: 20, meleeCost: 8, boostRecover: 108,
    weapons: {
      // 銃が無いぶん、寄るための武装だけを持たせる
      shot:     { label:'TK', name:'投擲ナイフ', kind:'bullet',
                  ammo:6, reload:3.4, dmg:22, down:0.5, speed:135, life:1.0,
                  cooldown:0.34, fireDelay:0.08, homing:0.7, radius:0.26 },
      sub:      { label:'SB', name:'散弾ブレード', kind:'spread',
                  ammo:2, reload:6.4, dmg:30, down:0.7, speed:120, life:0.7,
                  cooldown:0.9, fireDelay:0.14, homing:0.5, radius:0.36,
                  count:4, spreadAngle:0.16 },
      sp_shot:  { label:'CB', name:'カッターブーメラン', kind:'boomerang',
                  ammo:2, reload:7.0, dmg:48, down:1.2, speed:104, life:2.6,
                  cooldown:1.0, fireDelay:0.16, homing:0.6, radius:0.5, turnAt:0.5 },
      sp_melee: { label:'DF', name:'ダブルファング', kind:'melee_special',
                  ammo:2, reload:8.0, dmg:112, down:5.0,
                  cooldown:1.2, rushSpeed:70, rushRange:58, rushTime:1.0 },
      awake:    { label:'AW', name:'牙裂', kind:'melee_special',
                  dmg:215, down:5.0, cooldown:0, rushSpeed:108, rushRange:999, rushTime:1.5, swingDur:0.95 },
    },
    melee: {
      range: 44, hitRadius: 4.8,
      n:    { label:'N格闘', rushSpeed:60, rushTime:1.0, stages:[
              { dmg:44, down:0.6, dur:0.30, knock:2,  pull:true  },
              { dmg:44, down:0.6, dur:0.30, knock:2,  pull:true  },
              { dmg:46, down:0.8, dur:0.32, knock:2,  pull:true  },
              { dmg:74, down:3.0, dur:0.54, knock:18, pull:false } ] },
      side: { label:'横格闘', rushSpeed:66, rushTime:0.92, arc:0.78, stages:[
              { dmg:48, down:0.7, dur:0.30, knock:2,  pull:true  },
              { dmg:52, down:0.8, dur:0.32, knock:2,  pull:true  },
              { dmg:72, down:3.0, dur:0.52, knock:16, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:76, rushTime:0.86, stages:[
              { dmg:66, down:2.0, dur:0.40, knock:5,  pull:true  },
              { dmg:84, down:3.0, dur:0.54, knock:22, pull:false } ] },
    },
  },

  bulwark: {
    id: 'bulwark', name: 'バルワーク', cost: 1500, hp: 610,
    role: '弾幕', desc: '鈍いが硬い。撃ち続けて相手を近づけない',
    palette: { main:'#6e7663', accent:'#3b4038', trim:'#d0a03a', joint:'#7b8087', eye:'#ff9a3c', beam:'#ffbf5c', flame:'#ffd9a0' },
    shape: { head:'twin', shoulder:'drum', back:'tank', gun:'gatling', legMain:true, chestDuct:false, forearmFin:false, kneeGuard:false },
    walk: 9, bdSpeed: 22, bdDrain: 26, stepSpeed: 25, stepCost: 20, stepDur: 0.40,
    riseSpeed: 12.5, riseDrain: 30, airMove: 11, meleeCost: 18, boostRecover: 88,
    weapons: {
      shot:     { label:'GG', name:'ガトリング', kind:'bullet',
                  ammo:60, reload:5.0, dmg:11, down:0.22, speed:150, life:1.2,
                  cooldown:0.07, fireDelay:0.05, homing:0.5, radius:0.26, burst:6, burstGap:0.06 },
      sub:      { label:'GL', name:'グレネード', kind:'shell',
                  ammo:3, reload:6.5, dmg:78, down:2.5, speed:70, life:2.4,
                  cooldown:0.95, fireDelay:0.26, homing:0.35, radius:0.85, splash:8, arc:0.34 },
      sp_shot:  { label:'FS', name:'散弾砲', kind:'spread',
                  ammo:3, reload:6.2, dmg:24, down:0.5, speed:118, life:0.8,
                  cooldown:0.9, fireDelay:0.18, homing:0.45, radius:0.36,
                  count:5, spreadAngle:0.2 },
      sp_melee: { label:'RM', name:'ラムアタック', kind:'melee_special',
                  ammo:1, reload:9.5, dmg:104, down:5.0,
                  cooldown:1.5, rushSpeed:44, rushRange:34, rushTime:0.85 },
      awake:    { label:'AW', name:'制圧散弾', kind:'spread',
                  dmg:34, down:0.5, cooldown:0, fireDelay:0.24, speed:130, life:1.1,
                  homing:0.6, radius:0.4, count:14, spreadAngle:0.34 },
    },
    melee: {
      range: 32, hitRadius: 5.0,
      n:    { label:'N格闘', rushSpeed:36, rushTime:0.9, stages:[
              { dmg:64, down:1.0, dur:0.50, knock:3,  pull:true  },
              { dmg:88, down:3.0, dur:0.68, knock:20, pull:false } ] },
      side: { label:'横格闘', rushSpeed:40, rushTime:0.88, arc:0.42, stages:[
              { dmg:70, down:1.2, dur:0.48, knock:4,  pull:true  },
              { dmg:84, down:3.0, dur:0.66, knock:18, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:46, rushTime:0.82, stages:[
              { dmg:96, down:3.0, dur:0.62, knock:24, pull:false } ] },
    },
  },

  // ==================== 2000: 追加 ====================
  hazel: {
    id: 'hazel', name: 'ヘイゼル', cost: 2000, hp: 600,
    role: '設置', desc: '地雷で通り道を潰す。正面から撃ち合う機体ではない',
    palette: { main:'#8a9a6b', accent:'#31382c', trim:'#e0642e', joint:'#79808a', eye:'#b6ff5a', beam:'#a8ff6a', flame:'#d8ffa0' },
    shape: { head:'mask', shoulder:'drum', back:'tank', gun:'machinegun', legMain:true, chestDuct:false },
    walk: 12, bdSpeed: 26, bdDrain: 23, stepSpeed: 30, stepCost: 16, stepDur: 0.35,
    riseSpeed: 15, riseDrain: 26, airMove: 15, meleeCost: 14, boostRecover: 100,
    weapons: {
      shot:     { label:'AR', name:'アサルトライフル', kind:'bullet',
                  ammo:24, reload:3.4, dmg:16, down:0.35, speed:145, life:1.2,
                  cooldown:0.11, fireDelay:0.07, homing:0.6, radius:0.28, burst:3, burstGap:0.08 },
      // 設置武装。相手の足元ではなく手前に落ちる (dropAt)
      sub:      { label:'MN', name:'散布地雷', kind:'mine',
                  ammo:2, reload:8.0, dmg:96, down:3.0, speed:34, life:16,
                  cooldown:1.1, fireDelay:0.24, homing:0, radius:0.5,
                  splash:9, arc:0.5, armTime:0.7, trigger:7, dropAt:0.55 },
      sp_shot:  { label:'SM', name:'散布地雷（3）', kind:'mine',
                  ammo:1, reload:11.0, dmg:70, down:2.0, speed:30, life:14,
                  cooldown:1.5, fireDelay:0.3, homing:0, radius:0.45,
                  splash:8, arc:0.6, armTime:0.7, trigger:6.5, dropAt:0.42,
                  count:3, launchGap:0.1 },
      sp_melee: { label:'CH', name:'チェーンソー', kind:'melee_special',
                  ammo:1, reload:9.0, dmg:118, down:5.0,
                  cooldown:1.35, rushSpeed:50, rushRange:42, rushTime:0.9 },
      awake:    { label:'AW', name:'全周散布', kind:'mine',
                  dmg:74, down:2.0, cooldown:0, fireDelay:0.26, speed:40, life:12,
                  homing:0, radius:0.5, splash:10, arc:0.4, armTime:0.35, trigger:9,
                  dropAt:0.95, scatter:15, count:8, launchGap:0.06 },
    },
    melee: {
      range: 36, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:44, rushTime:0.92, stages:[
              { dmg:58, down:0.8, dur:0.42, knock:2,  pull:true  },
              { dmg:56, down:0.8, dur:0.42, knock:2,  pull:true  },
              { dmg:86, down:3.0, dur:0.62, knock:18, pull:false } ] },
      side: { label:'横格闘', rushSpeed:48, rushTime:0.9, arc:0.56, stages:[
              { dmg:60, down:1.0, dur:0.40, knock:3,  pull:true  },
              { dmg:82, down:3.0, dur:0.58, knock:16, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:54, rushTime:0.84, stages:[
              { dmg:72, down:2.0, dur:0.48, knock:6,  pull:true  },
              { dmg:86, down:3.0, dur:0.58, knock:20, pull:false } ] },
    },
  },

  // ==================== 2500: 追加 ====================
  lance: {
    id: 'lance', name: 'ランス', cost: 2500, hp: 620,
    role: '狙撃', desc: '長射程の貫通弾。一発が重いが、誘導は他より弱く撃つ間隔も遅い',
    palette: { main:'#33465e', accent:'#c9d3e0', trim:'#4ad0c0', joint:'#7d8794', eye:'#7dffe8', beam:'#6ff0d8', flame:'#a8f5ea' },
    shape: { head:'twin', shoulder:'shield', back:'cannon', gun:'bow', forearmFin:false },
    walk: 11, bdSpeed: 26, bdDrain: 24, stepSpeed: 30, stepCost: 17, stepDur: 0.36,
    riseSpeed: 14.5, riseDrain: 27, airMove: 14, meleeCost: 16, boostRecover: 96,
    weapons: {
      // 射程と一発の重さで差を付ける。誘導は他より弱いが、
      // このゲームに手動照準は無いので下げすぎるとただ当たらないだけになる
      shot:     { label:'LR', name:'ロングライフル', kind:'beam', pierce: true,
                  ammo:6, reload:4.2, dmg:84, down:2.4, speed:230, life:2.2,
                  cooldown:0.88, fireDelay:0.24, homing:0.75, radius:0.4 },
      sub:      { label:'PC', name:'パルスキャノン', kind:'laser',
                  ammo:1, reload:7.5, dmg:34, down:0.5, duration:1.1, tickGap:0.1,
                  cooldown:1.35, fireDelay:0.3, range:120, radius:1.5, turn:1.4 },
      sp_shot:  { label:'SG', name:'狙撃グレネード', kind:'shell',
                  ammo:2, reload:7.5, dmg:88, down:3.0, speed:92, life:2.6,
                  cooldown:1.05, fireDelay:0.3, homing:0.55, radius:0.85, splash:7, arc:0.2 },
      sp_melee: { label:'BL', name:'ブレイクランス', kind:'melee_special',
                  ammo:1, reload:9.5, dmg:124, down:5.0,
                  cooldown:1.4, rushSpeed:56, rushRange:50, rushTime:0.95 },
      awake:    { label:'AW', name:'長時間照射', kind:'laser',
                  dmg:36, down:0.5, cooldown:0, fireDelay:0.36, duration:2.2, tickGap:0.1,
                  range:170, radius:2.0, turn:1.2 },
    },
    melee: {
      range: 36, hitRadius: 4.6,
      n:    { label:'N格闘', rushSpeed:46, rushTime:0.92, stages:[
              { dmg:62, down:0.9, dur:0.44, knock:3,  pull:true  },
              { dmg:90, down:3.0, dur:0.62, knock:20, pull:false } ] },
      side: { label:'横格闘', rushSpeed:50, rushTime:0.9, arc:0.6, stages:[
              { dmg:58, down:0.8, dur:0.40, knock:2,  pull:true  },
              { dmg:60, down:1.0, dur:0.42, knock:3,  pull:true  },
              { dmg:78, down:3.0, dur:0.58, knock:16, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:60, rushTime:0.82, stages:[
              { dmg:100, down:3.0, dur:0.62, knock:24, pull:false } ] },
    },
  },

  // ==================== 3000: 追加 ====================
  garuda: {
    id: 'garuda', name: 'ガルーダ', cost: 3000, hp: 680,
    role: '空戦', desc: '上昇と空中機動が突出。地上に降りると持ち味が消える',
    palette: { main:'#e6ecf4', accent:'#2a6ec8', trim:'#f2c53d', joint:'#8b95a3', eye:'#8fe8ff', beam:'#6fc8ff', flame:'#a8dcff' },
    shape: { head:'horn', shoulder:'wing', back:'wings', gun:'twin' },
    walk: 11, bdSpeed: 29, bdDrain: 20, stepSpeed: 33, stepCost: 15, stepDur: 0.32,
    // 上昇と空中移動に全振り。ブースト回復は遅く、降りると立て直しに時間がかかる
    riseSpeed: 24, riseDrain: 19, airMove: 26, meleeCost: 12, boostRecover: 86,
    weapons: {
      shot:     { label:'TB', name:'ツインビーム', kind:'spread',
                  ammo:6, reload:3.4, dmg:46, down:1.1, speed:170, life:1.5,
                  cooldown:0.66, fireDelay:0.14, homing:0.85, radius:0.4,
                  count:2, spreadAngle:0.045 },
      sub:      { label:'DM', name:'降下ミサイル', kind:'missile',
                  ammo:4, reload:6.0, dmg:34, down:0.7, speed:104, life:2.6,
                  cooldown:0.9, fireDelay:0.16, homing:2.0, radius:0.42, splash:5,
                  count:4, launchGap:0.07, arc:0.4 },
      sp_shot:  { label:'DB', name:'ダイブビーム', kind:'beam', pierce: true,
                  ammo:3, reload:6.5, dmg:78, down:2.2, speed:200, life:1.6,
                  cooldown:1.0, fireDelay:0.2, homing:0.7, radius:0.46 },
      sp_melee: { label:'FD', name:'フォールダウン', kind:'melee_special',
                  ammo:2, reload:8.5, dmg:126, down:5.0,
                  cooldown:1.3, rushSpeed:74, rushRange:62, rushTime:1.05 },
      awake:    { label:'AW', name:'降下爆撃', kind:'missile',
                  dmg:40, down:0.8, cooldown:0, fireDelay:0.24, speed:112, life:2.8,
                  homing:2.2, radius:0.46, splash:6, count:12, launchGap:0.05, arc:0.44 },
    },
    melee: {
      range: 42, hitRadius: 4.8,
      n:    { label:'N格闘', rushSpeed:58, rushTime:1.0, stages:[
              { dmg:56, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:58, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:88, down:3.0, dur:0.58, knock:20, pull:false } ] },
      side: { label:'横格闘', rushSpeed:64, rushTime:0.94, arc:0.72, stages:[
              { dmg:60, down:0.9, dur:0.36, knock:3,  pull:true  },
              { dmg:86, down:3.0, dur:0.56, knock:18, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:72, rushTime:0.86, stages:[
              { dmg:80, down:2.0, dur:0.44, knock:6,  pull:true  },
              { dmg:92, down:3.0, dur:0.56, knock:24, pull:false } ] },
    },
  },

  sovereign: {
    id: 'sovereign', name: 'ソヴリン', cost: 3000, hp: 740,
    role: '格闘', desc: '3000の格闘機。押し切る力はあるが、迎撃されると重い',
    palette: { main:'#1f2430', accent:'#a4832e', trim:'#b03a4a', joint:'#8d949e', eye:'#ffcf4d', beam:'#ffb03c', flame:'#ffcf8a' },
    shape: { head:'crest', shoulder:'blade', back:'blades', gun:'rifle', saberCount:2, legMain:true },
    walk: 13.5, bdSpeed: 31, bdDrain: 21, stepSpeed: 36, stepCost: 14, stepDur: 0.32,
    riseSpeed: 17, riseDrain: 24, airMove: 18, meleeCost: 11, boostRecover: 104,
    weapons: {
      shot:     { label:'BR', name:'ビームライフル', kind:'beam',
                  ammo:7, reload:3.4, dmg:72, down:2.0, speed:165, life:1.5,
                  cooldown:0.66, fireDelay:0.16, homing:0.9, radius:0.44 },
      sub:      { label:'GB', name:'グレイブブーメラン', kind:'boomerang',
                  ammo:3, reload:5.5, dmg:62, down:1.4, speed:118, life:3.0,
                  cooldown:0.85, fireDelay:0.16, homing:0.85, radius:0.55, turnAt:0.62 },
      sp_shot:  { label:'RB', name:'ロングビーム', kind:'laser',
                  ammo:1, reload:8.0, dmg:30, down:0.45, duration:1.3, tickGap:0.1,
                  cooldown:1.4, fireDelay:0.28, range:104, radius:1.7, turn:1.3 },
      sp_melee: { label:'RS', name:'ロイヤルスラッシュ', kind:'melee_special',
                  ammo:2, reload:8.0, dmg:140, down:5.0,
                  cooldown:1.25, rushSpeed:66, rushRange:56, rushTime:1.0 },
      awake:    { label:'AW', name:'王剣一閃', kind:'melee_special',
                  dmg:255, down:5.0, cooldown:0, rushSpeed:88, rushRange:999, rushTime:1.5, swingDur:1.0 },
    },
    melee: {
      range: 47, hitRadius: 5.0,
      n:    { label:'N格闘', rushSpeed:54, rushTime:1.0, stages:[
              { dmg:58, down:0.7, dur:0.36, knock:2,  pull:true  },
              { dmg:56, down:0.7, dur:0.36, knock:2,  pull:true  },
              { dmg:60, down:0.8, dur:0.38, knock:2,  pull:true  },
              { dmg:92, down:3.0, dur:0.60, knock:22, pull:false } ] },
      side: { label:'横格闘', rushSpeed:60, rushTime:0.96, arc:0.7, stages:[
              { dmg:64, down:0.9, dur:0.36, knock:3,  pull:true  },
              { dmg:66, down:1.0, dur:0.38, knock:3,  pull:true  },
              { dmg:88, down:3.0, dur:0.58, knock:20, pull:false } ] },
      fwd:  { label:'前格闘', rushSpeed:68, rushTime:0.88, stages:[
              { dmg:86, down:2.0, dur:0.46, knock:8,  pull:true  },
              { dmg:98, down:3.0, dur:0.58, knock:26, pull:false } ] },
    },
  },
};

// コスト帯ごとに並べる（選択画面の並び順）
export const MECH_ORDER = [
  'lava', 'vespa', 'fang', 'bulwark',
  'brave', 'aegis', 'garm', 'orca', 'hazel',
  'nox', 'grave', 'tempest', 'titan', 'lance',
  'vulca', 'seraph', 'garuda', 'sovereign',
];

// 武装の設定を検証する。kind ごとに「無いと壊れるキー」を持っているか見る。
// laser の duration を書き忘れると life が NaN になり、NaN <= 0 が false なので
// ビームが永久に消えない — この手の取り違えは黙って通ると発見が遅れる。
// 開発時に main.js から呼ぶ（本番ビルドからは消える）。
const REQUIRED = {
  beam:   ['speed', 'life', 'radius'],
  bullet: ['speed', 'life', 'radius'],
  shell:  ['speed', 'life', 'radius'],
  spread: ['speed', 'life', 'radius', 'count'],
  missile:['speed', 'life', 'radius', 'count'],
  boomerang: ['speed', 'life', 'radius'],
  mine:   ['speed', 'life', 'radius', 'splash'],
  laser:  ['duration', 'range', 'radius'],
  funnel: ['speed', 'life', 'radius', 'count', 'bitTime'],
  melee_special: ['rushSpeed', 'rushRange', 'rushTime'],
};
const COMMON = ['dmg', 'down', 'cooldown'];

export function validateMechs() {
  const problems = [];
  for (const id of MECH_ORDER) {
    const m = MECHS[id];
    if (!m) { problems.push(`${id}: MECHS に無い`); continue; }
    for (const slot of [...WEAPON_ORDER, 'awake']) {
      const w = m.weapons[slot];
      if (!w) continue;
      const need = REQUIRED[w.kind];
      if (!need) { problems.push(`${id}.${slot}: 未知の kind '${w.kind}'`); continue; }
      for (const k of [...COMMON, ...need]) {
        if (!Number.isFinite(w[k])) problems.push(`${id}.${slot} (${w.kind}): ${k} が無い/数値でない`);
      }
      // 使われないキーは書き間違いの可能性が高い
      for (const k of Object.keys(w)) {
        if (k === 'life' && w.kind === 'laser') problems.push(`${id}.${slot}: laser に life は無効（duration のこと？）`);
        if (k === 'tick') problems.push(`${id}.${slot}: tick は無効（tickGap のこと？）`);
        if (k === 'duration' && w.kind !== 'laser') problems.push(`${id}.${slot}: ${w.kind} に duration は無効`);
      }
    }
    for (const dk of MELEE_DIRS) {
      const v = m.melee[dk];
      if (!v) continue;
      if (!v.stages || !v.stages.length) problems.push(`${id}.melee.${dk}: stages が空`);
    }
  }
  return problems;
}
