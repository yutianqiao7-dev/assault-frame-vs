// ビル（軸に沿った箱、必ず地面から生えている）との当たり判定。
// AABB は { minX, maxX, minZ, maxZ, top } の形で stages.js から受け取る。

const EPS = 0.05;

export class Collision {
  constructor(boxes = []) {
    this.boxes = boxes;
  }

  // (x,z) を含む箱のうち、いちばん高い屋上の高さ。無ければ 0
  floorAt(x, z) {
    let top = 0;
    for (const b of this.boxes) {
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ && b.top > top) top = b.top;
    }
    return top;
  }

  // 半径 r の円柱を箱の外へ押し出す。屋上より上にいる場合は素通り。
  // 戻り値: 押し出したら true
  pushOut(pos, r, tolerance = 0.3) {
    let moved = false;
    for (const b of this.boxes) {
      // 屋上に立っている／飛び越えている高さなら壁は無い
      if (pos.y >= b.top - tolerance) continue;
      const nx = Math.max(b.minX, Math.min(pos.x, b.maxX));
      const nz = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
      const dx = pos.x - nx, dz = pos.z - nz;
      if (dx * dx + dz * dz >= r * r) continue;      // 触れていない

      if (dx !== 0 || dz !== 0) {
        // 面の外にいる: いちばん近い点から法線方向へ押す
        const len = Math.hypot(dx, dz) || 1;
        pos.x = nx + (dx / len) * r;
        pos.z = nz + (dz / len) * r;
      } else {
        // 完全に箱の内側: いちばん近い面へ抜く
        const dL = pos.x - b.minX, dR = b.maxX - pos.x;
        const dB = pos.z - b.minZ, dF = b.maxZ - pos.z;
        const m = Math.min(dL, dR, dB, dF);
        if (m === dL) pos.x = b.minX - r;
        else if (m === dR) pos.x = b.maxX + r;
        else if (m === dB) pos.z = b.minZ - r;
        else pos.z = b.maxZ + r;
      }
      moved = true;
    }
    return moved;
  }

  // 線分 a→b が箱に遮られるか。遮られるなら [0,1] の t、無ければ -1。
  // スラブ法。y は 0..top の範囲を壁とみなす。
  segmentHit(ax, ay, az, bx, by, bz) {
    let best = -1;
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    for (const b of this.boxes) {
      let t0 = 0, t1 = 1;
      // X
      if (Math.abs(dx) < 1e-8) { if (ax < b.minX || ax > b.maxX) continue; }
      else {
        let ta = (b.minX - ax) / dx, tb = (b.maxX - ax) / dx;
        if (ta > tb) { const s = ta; ta = tb; tb = s; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) continue;
      }
      // Z
      if (Math.abs(dz) < 1e-8) { if (az < b.minZ || az > b.maxZ) continue; }
      else {
        let ta = (b.minZ - az) / dz, tb = (b.maxZ - az) / dz;
        if (ta > tb) { const s = ta; ta = tb; tb = s; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) continue;
      }
      // Y (0 .. top)
      if (Math.abs(dy) < 1e-8) { if (ay < 0 || ay > b.top) continue; }
      else {
        let ta = (0 - ay) / dy, tb = (b.top - ay) / dy;
        if (ta > tb) { const s = ta; ta = tb; tb = s; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) continue;
      }
      if (t1 < 0 || t0 > 1) continue;
      const t = Math.max(t0, 0);
      if (best < 0 || t < best) best = t;
    }
    return best;
  }

  // 射線が通っているか
  clearLine(ax, ay, az, bx, by, bz) {
    return this.segmentHit(ax, ay, az, bx, by, bz) < 0;
  }

  // 遮られるまでの距離（遮られなければ maxLen）
  rayDistance(ox, oy, oz, dx, dy, dz, maxLen) {
    const t = this.segmentHit(ox, oy, oz, ox + dx * maxLen, oy + dy * maxLen, oz + dz * maxLen);
    return t < 0 ? maxLen : t * maxLen - EPS;
  }
}
