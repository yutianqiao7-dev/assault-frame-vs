// 個人用の機体上書き。
//
// `src/mechs.local.js` を置くと、その内容が MECHS に被さる。
// 名前・説明・配色・形（shape）・武装名・数値、どれでも差し替えられる。
// 雛形は tools/mechs.local.example.js にある。コピーして使うこと。
//
// **この仕組みは開発サーバ (npm run dev) でしか動かない。**
// 本番ビルドからは丸ごと消えるので、公開している GitHub Pages 側には
// 一切影響しない。手元で遊ぶための物と割り切ってある。
//
// スマホで遊ぶときは、PC で `npm run dev` を立ち上げて
// 同じ Wi-Fi から `http://<PCのIPアドレス>:5174` を開けばよい
// (vite.config.js の server.host が true になっている)。
//
// mechs.local.js は .gitignore に入れてあるので、コミットにも入らない。

import { MECHS, MECH_ORDER } from './config.js';

// ファイルが無くても glob は空のオブジェクトを返すので、ビルドは壊れない
const found = import.meta.env.DEV
  ? import.meta.glob('./mechs.local.js', { eager: true })
  : {};

function isPlainObject(v) {
  return v && typeof v === 'object' && !Array.isArray(v);
}

// 配列は「丸ごと差し替え」。段数を減らしたいときに混ざると困る
function merge(dst, src) {
  for (const k of Object.keys(src)) {
    const v = src[k];
    if (isPlainObject(v) && isPlainObject(dst[k])) merge(dst[k], v);
    else dst[k] = v;
  }
  return dst;
}

// 戻り値: 適用した機体 id の配列（何も無ければ空）
export function applyLocalMechs() {
  const mod = Object.values(found)[0];
  if (!mod) return [];
  const over = mod.MECH_OVERRIDES || mod.default;
  if (!isPlainObject(over)) return [];

  const applied = [];
  for (const [id, patch] of Object.entries(over)) {
    if (!isPlainObject(patch)) continue;
    if (MECHS[id]) {
      merge(MECHS[id], patch);
    } else {
      // 新しい id は、雛形にする機体を base で指定する
      const base = patch.base && MECHS[patch.base];
      if (!base) continue;
      const copy = structuredClone(base);
      delete patch.base;
      merge(copy, patch);
      copy.id = id;
      MECHS[id] = copy;
      if (!MECH_ORDER.includes(id)) MECH_ORDER.push(id);
    }
    applied.push(id);
  }
  // 並び順の指定があれば差し替える
  if (Array.isArray(mod.ORDER) && mod.ORDER.length) {
    const valid = mod.ORDER.filter((id) => MECHS[id]);
    if (valid.length) MECH_ORDER.splice(0, MECH_ORDER.length, ...valid);
  }
  return applied;
}
