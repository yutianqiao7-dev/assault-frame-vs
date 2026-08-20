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

// ===== 機体データ =====
// weapons のキーは入力アクション名と一致させる: shot / sub / sp_shot / sp_melee
export const MECHS = {
  brave: {
    id: 'brave',
    name: 'ブレイヴ',
    cost: 2000,
    hp: 620,
    // 見た目
    palette: { main:'#e9eef5', accent:'#2f6fd0', trim:'#d8322f', joint:'#8d97a6', eye:'#ffd23f', beam:'#ff5d7a' },
    build: 'brave',
    // 運動性能
    walk: 12,
    bdSpeed: 27,
    bdDrain: 24,        // BD中の毎秒ブースト消費
    stepSpeed: 31,
    stepCost: 17,
    stepDur: 0.34,
    riseSpeed: 15,
    riseDrain: 27,
    airMove: 15,
    boostRecover: 100,  // 着地時に全回復
    // 武装
    weapons: {
      shot: {
        label:'PR', name:'パルスライフル', kind:'beam',
        ammo:8, reload:3.0, dmg:70, down:2.0, speed:150, life:1.4,
        cooldown:0.62, fireDelay:0.16, homing:0.9, radius:0.45,
      },
      sub: {
        label:'HB', name:'ヘヴィバズーカ', kind:'shell',
        ammo:2, reload:6.0, dmg:95, down:3.0, speed:78, life:2.4,
        cooldown:0.95, fireDelay:0.26, homing:0.45, radius:0.9, splash:6, arc:0.22,
      },
      sp_shot: {
        label:'WA', name:'ウェイトアンカー', kind:'shell',
        ammo:2, reload:8.0, dmg:110, down:5.0, speed:52, life:2.0,
        cooldown:1.1, fireDelay:0.34, homing:0.7, radius:1.2, arc:0.42,
      },
      sp_melee: {
        label:'PL', name:'プラズマランス', kind:'melee_special',
        ammo:1, reload:9.0, dmg:130, down:5.0,
        cooldown:1.4, rushSpeed:52, rushRange:46, rushTime:0.9,
      },
    },
    // N格闘 (段ごと)
    melee: {
      range: 38, rushSpeed: 44, rushTime: 0.95, hitRadius: 4.6,
      stages: [
        { dmg:60, down:0.8, dur:0.42, knock:2,  pull:true  },
        { dmg:52, down:0.8, dur:0.40, knock:2,  pull:true  },
        { dmg:88, down:3.0, dur:0.62, knock:18, pull:false },
      ],
    },
  },

  garm: {
    id: 'garm',
    name: 'ガルム',
    cost: 2000,
    hp: 600,
    palette: { main:'#4f7a52', accent:'#2f4d33', trim:'#8fae7a', joint:'#5c6157', eye:'#ff4d4d', beam:'#ffb03a' },
    build: 'garm',
    walk: 11.5,
    bdSpeed: 26,
    bdDrain: 23,
    stepSpeed: 30,
    stepCost: 17,
    stepDur: 0.34,
    riseSpeed: 14.5,
    riseDrain: 26,
    airMove: 14,
    boostRecover: 100,
    weapons: {
      shot: {
        label:'AM', name:'アサルトマシンガン', kind:'bullet',
        ammo:24, reload:4.0, dmg:16, down:0.35, speed:135, life:1.2,
        cooldown:0.10, fireDelay:0.08, homing:0.6, radius:0.3, burst:3, burstGap:0.09,
      },
      sub: {
        label:'SB', name:'ショートバズーカ', kind:'shell',
        ammo:2, reload:6.5, dmg:90, down:3.0, speed:74, life:2.4,
        cooldown:0.95, fireDelay:0.28, homing:0.45, radius:0.9, splash:6, arc:0.24,
      },
      sp_shot: {
        label:'GR', name:'グレネード', kind:'shell',
        ammo:3, reload:7.0, dmg:70, down:2.5, speed:46, life:1.9,
        cooldown:0.8, fireDelay:0.24, homing:0.3, radius:1.0, splash:7, arc:0.55,
      },
      sp_melee: {
        label:'TK', name:'タックル', kind:'melee_special',
        ammo:1, reload:8.0, dmg:100, down:5.0,
        cooldown:1.3, rushSpeed:50, rushRange:42, rushTime:0.85,
      },
    },
    melee: {
      range: 36, rushSpeed: 42, rushTime: 0.95, hitRadius: 4.6,
      stages: [
        { dmg:65, down:1.0, dur:0.46, knock:3,  pull:true  },
        { dmg:58, down:1.0, dur:0.44, knock:3,  pull:true  },
        { dmg:82, down:3.0, dur:0.60, knock:20, pull:false },
      ],
    },
  },
};

export const WEAPON_ORDER = ['shot', 'sub', 'sp_shot', 'sp_melee'];
