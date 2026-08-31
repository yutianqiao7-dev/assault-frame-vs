// 個人用の機体上書き — 雛形
//
// 使い方:
//   1. このファイルを src/mechs.local.js にコピーする
//   2. 中身を好きに書き換える
//   3. npm run dev で立ち上げる
//
// 開発サーバでしか読まれない。本番ビルドには入らないので、
// 公開している GitHub Pages 側は元のまま。
// src/mechs.local.js は .gitignore に入れてあるのでコミットもされない。
//
// スマホで遊ぶときは、PC で npm run dev を立ち上げてから
// 同じ Wi-Fi で http://<PCのIPアドレス>:5174 を開く。

export const MECH_OVERRIDES = {
  // ---- 既存の機体を書き換える ----
  // 書いたキーだけが上書きされる（書かなかった物はそのまま）
  brave: {
    name: '好きな名前',
    desc: '説明文もここで変えられる',
    palette: {
      main: '#e9eef5',    // 主色
      accent: '#2f6fd0',  // 差し色
      trim: '#d8322f',    // ふち・小物
      joint: '#8d97a6',   // 関節・金属
      eye: '#ffd23f',     // 目（発光）
      beam: '#ff5d7a',    // ビーム・サーベルの色
      flame: '#8fd6ff',   // スラスターの炎
    },
    // 見た目のパーツ。使える値は src/mechmodel.js の先頭のコメント参照
    //   head:     visor / mono / crest / horn / dome / twin / mask
    //   shoulder: pad / spike / shield / cannon / binder / drum / wing / blade
    //   back:     pack / wings / cannon / funnels / booster / tank / blades
    //   gun:      rifle / machinegun / cannon / twin / bow / gatling / none
    shape: { head: 'crest', shoulder: 'binder', back: 'wings', gun: 'rifle' },
    weapons: {
      shot: { name: '武装名も変えられる', dmg: 75 },
      // 覚醒技（覚醒中にもう一度 覚醒ボタン）
      awake: { name: '覚醒技の名前' },
    },
  },

  // ---- 機体を増やす ----
  // base に雛形にする機体の id を書くと、それを複製してから差分を当てる
  mymech: {
    base: 'seraph',
    name: '追加した機体',
    role: '万能',
    desc: 'seraph をコピーして色と形だけ変えたもの',
    cost: 3000,
    hp: 700,
    palette: {
      main: '#1b1e26', accent: '#c02b3a', trim: '#e8c33a',
      joint: '#8d97a6', eye: '#7ef0ff', beam: '#7ef0ff', flame: '#bfeaff',
    },
    shape: { head: 'mask', shoulder: 'spike', back: 'blades', gun: 'bow' },
  },
};

// 選択画面の並び順を変えたいときだけ書く（省略可）
// export const ORDER = ['brave', 'mymech', 'garm'];
