# ASSAULT FRAME VS - 「廃墟」ステージ生成
#
#   blender --background --python tools/blender_ruins.py
#
# 書き出し: public/models/ruins.glb / ruins_boxes.json
#
# 狙い: 市街が「無傷の高層ビル＝背の高い遮蔽が多い」のに対して、
# こちらは中〜低層の瓦礫が多く、高さがばらばらで屋上の取り合いが濃くなる。
#
# 崩れ方の作り方:
#   * 当たり判定を持つ本体は「歩ける平らな屋上まで」。
#     壊れた部分は屋上の“縁”にだけ生やして、中央は空けておく。
#     こうしないと着地点がガタガタで、乗れるのか乗れないのか読めない。
#   * 露出した床スラブ・鉄筋・傾いた鉄骨は見た目だけ。
#     乗れそうに見える高さの梁は置かない（すり抜けると嘘になる）。

import bpy
import bmesh
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd())
import stagekit as K   # noqa: E402

ARENA_R = K.ARENA_R
MAT_ORDER = ('ru_concrete', 'ru_concrete2', 'ru_rust', 'ru_rubble', 'ru_ember', 'ru_dark')
CONC, CONC2, RUST, RUBBLE, EMBER, DARK = range(6)

MATS = {
    'ru_concrete':  ((0.240, 0.220, 0.200), 0.92, 0.02),
    'ru_concrete2': ((0.175, 0.160, 0.150), 0.94, 0.02),
    'ru_rust':      ((0.190, 0.105, 0.062), 0.75, 0.45),
    'ru_rubble':    ((0.135, 0.122, 0.112), 0.96, 0.02),
    'ru_ember':     ((0.900, 0.330, 0.110), 0.60, 0.00, (1.0, 0.36, 0.10), 3.0),
    'ru_dark':      ((0.055, 0.050, 0.048), 0.95, 0.05),
}


# ---------------------------------------------------------------- 部品
def broken_crown(bm, rnd, x0, x1, y0, y1, h, mi=CONC2):
    """屋上の縁にだけ立てる、崩れかけの壁。中央は歩けるまま残す"""
    for (ax0, ax1, ay0, ay1) in ((x0, x1, y0, y0 + 0.9), (x0, x1, y1 - 0.9, y1),
                                 (x0, x0 + 0.9, y0, y1), (x1 - 0.9, x1, y0, y1)):
        span = max(ax1 - ax0, ay1 - ay0)
        n = max(2, int(span / 2.6))
        for i in range(n):
            t0, t1 = i / n, (i + 1) / n
            if rnd.random() < 0.45:
                continue                      # 抜け落ちた部分
            if ax1 - ax0 > ay1 - ay0:
                bx0, bx1 = ax0 + (ax1 - ax0) * t0, ax0 + (ax1 - ax0) * t1
                by0, by1 = ay0, ay1
            else:
                bx0, bx1 = ax0, ax1
                by0, by1 = ay0 + (ay1 - ay0) * t0, ay0 + (ay1 - ay0) * t1
            K.boxs(bm, bx0, bx1, by0, by1, h, h + rnd.uniform(0.8, 3.4), mi)


def rebar(bm, rnd, cx, cy, z, n=3):
    """折れた鉄筋。細く、少し傾ける"""
    for _ in range(n):
        ox, oy = cx + rnd.uniform(-0.8, 0.8), cy + rnd.uniform(-0.8, 0.8)
        ln = rnd.uniform(1.2, 2.8)
        K.slab(bm, ox, oy, z + ln / 2, 0.055, 0.055, ln / 2,
               yaw=rnd.uniform(0, 3.14), pitch=rnd.uniform(-0.30, 0.30), mi=RUST)


def floor_slab(bm, rnd, x0, x1, y0, y1, z):
    """壁が剥がれて露出した床。外へ少しはみ出させる"""
    side = rnd.randrange(4)
    ov = rnd.uniform(1.4, 3.6)
    if side == 0:
        K.boxs(bm, x0 + 0.5, x1 - 0.5, y0 - ov, y0 + 0.6, z, z + 0.5, CONC2)
    elif side == 1:
        K.boxs(bm, x0 + 0.5, x1 - 0.5, y1 - 0.6, y1 + ov, z, z + 0.5, CONC2)
    elif side == 2:
        K.boxs(bm, x0 - ov, x0 + 0.6, y0 + 0.5, y1 - 0.5, z, z + 0.5, CONC2)
    else:
        K.boxs(bm, x1 - 0.6, x1 + ov, y0 + 0.5, y1 - 0.5, z, z + 0.5, CONC2)


def rubble_pile(bm, rnd, cx, cy, r, hmax, n=7):
    """基部の瓦礫。当たり判定は持たせない（低いので通り抜けても気にならない）"""
    for _ in range(n):
        a = rnd.random() * math.tau
        d = rnd.uniform(0.3, 1.0) * r
        s = rnd.uniform(0.5, 1.5)
        K.slab(bm, cx + math.cos(a) * d, cy + math.sin(a) * d, rnd.uniform(0.2, hmax),
               s, s * rnd.uniform(0.6, 1.4), rnd.uniform(0.25, 0.7),
               yaw=rnd.uniform(0, 3.14), pitch=rnd.uniform(-0.5, 0.5), mi=RUBBLE)


# ---------------------------------------------------------------- 本体
def build_structures(mats):
    bm = bmesh.new()
    p = K.Placer(20260828)
    rnd = p.rnd

    def tower(cx, cy, w, d, h, kind):
        x0, x1, y0, y1 = cx - w / 2, cx + w / 2, cy - d / 2, cy + d / 2
        K.boxs(bm, x0, x1, y0, y1, 0.0, h, CONC if rnd.random() < 0.6 else CONC2)
        # 窓の抜け穴。埋めずに暗い面を落とすだけで「中が空」に見える
        ry = 3.2
        while ry < h - 2.2:
            for i in range(max(1, int(w / 3.4))):
                if rnd.random() < 0.4:
                    continue
                bx = x0 + 1.0 + i * 3.4
                if bx + 2.2 > x1 - 1.0:
                    break
                K.boxs(bm, bx, bx + 2.2, y0 - 0.12, y0 + 0.3, ry, ry + 1.7, DARK)
                K.boxs(bm, bx, bx + 2.2, y1 - 0.3, y1 + 0.12, ry, ry + 1.7, DARK)
            ry += rnd.uniform(4.4, 6.2)
        broken_crown(bm, rnd, x0, x1, y0, y1, h)
        for _ in range(rnd.randrange(1, 3)):
            floor_slab(bm, rnd, x0, x1, y0, y1, rnd.uniform(4.0, max(5.0, h - 3.0)))
        rebar(bm, rnd, cx + rnd.uniform(-w / 3, w / 3), cy + rnd.uniform(-d / 3, d / 3), h + 1.0,
              rnd.randrange(2, 5))
        rubble_pile(bm, rnd, cx, cy, max(w, d) * 0.75, 1.1, rnd.randrange(5, 10))
        if kind == 'tall' and rnd.random() < 0.5:
            # 崩れ残った角柱。屋上の隅に一本だけ立たせると廃墟らしくなる
            sx = rnd.choice((-1, 1)) * (w / 2 - 1.2)
            sy = rnd.choice((-1, 1)) * (d / 2 - 1.2)
            K.boxs(bm, cx + sx - 0.8, cx + sx + 0.8, cy + sy - 0.8, cy + sy + 0.8,
                   h, h + rnd.uniform(4.0, 9.0), CONC2)
        p.add(cx, cy, w / 2, d / 2, h)

    def mound(cx, cy, w, d, h):
        """完全に潰れた建物。低くて広い、乗れる瓦礫の山"""
        x0, x1, y0, y1 = cx - w / 2, cx + w / 2, cy - d / 2, cy + d / 2
        K.boxs(bm, x0, x1, y0, y1, 0.0, h, RUBBLE)
        K.boxs(bm, x0 + 0.8, x1 - 0.8, y0 + 0.8, y1 - 0.8, h, h + 0.4, CONC2)
        for _ in range(6):
            a = rnd.random() * math.tau
            K.slab(bm, cx + math.cos(a) * w * 0.42, cy + math.sin(a) * d * 0.42,
                   h * rnd.uniform(0.5, 0.95), rnd.uniform(1.0, 2.4), rnd.uniform(0.8, 2.0),
                   rnd.uniform(0.3, 0.9), yaw=rnd.uniform(0, 3.14),
                   pitch=rnd.uniform(-0.45, 0.45), mi=CONC2)
        rebar(bm, rnd, cx, cy, h, 3)
        if rnd.random() < 0.35:                      # くすぶっている火
            K.boxs(bm, cx - 0.5, cx + 0.5, cy - 0.5, cy + 0.5, h + 0.2, h + 0.6, EMBER)
        p.add(cx, cy, w / 2, d / 2, h + 0.4)

    plan = [('tall', 8, (12, 17), (22, 36), 10.0, 33.0, ARENA_R - 12),
            ('mid', 12, (10, 15), (11, 19), 8.5, 27.0, ARENA_R - 10),
            ('mound', 13, (13, 21), (4.5, 9.0), 7.0, 21.0, ARENA_R - 9)]
    for kind, want, wr, hr, gap, rmin, rmax in plan:
        target = len(p.placed) + want
        n = 0
        while len(p.placed) < target and n < 2500:
            n += 1
            a = rnd.random() * math.tau
            r = rmin + (rmax - rmin) * math.sqrt(rnd.random())
            cx, cy = math.cos(a) * r, math.sin(a) * r
            w, d = rnd.uniform(*wr), rnd.uniform(wr[0], wr[1])
            if not p.free(cx, cy, w / 2, d / 2, gap):
                continue
            h = rnd.uniform(*hr)
            if kind == 'mound':
                mound(cx, cy, w, d, h)
            else:
                tower(cx, cy, w, d, h, kind)

    K.to_object(bm, 'RuinBlocks', mats, MAT_ORDER)
    return p.boxes, rnd


# ---------------------------------------------------------------- 遠景
def build_far(mats, rnd):
    bm = bmesh.new()

    # アリーナの外に続く廃墟。近いものほど作り込み、遠くはシルエットだけ
    n = 0
    while n < 190:
        a = rnd.random() * math.tau
        r = (ARENA_R + 14) + (620 - ARENA_R) * (rnd.random() ** 1.7)
        cx, cy = math.cos(a) * r, math.sin(a) * r
        w = rnd.uniform(9, 30) * (1 + r / 420)
        d = rnd.uniform(9, 30) * (1 + r / 420)
        h = rnd.uniform(8, 46) * (1 + r / 500)
        K.boxs(bm, cx - w / 2, cx + w / 2, cy - d / 2, cy + d / 2, 0.0, h,
               CONC if rnd.random() < 0.5 else CONC2)
        if r < 260:
            K.boxs(bm, cx - w / 2 + 0.6, cx + w / 2 - 0.6, cy - d / 2, cy - d / 2 + 0.5,
                   h, h + rnd.uniform(1.0, 4.0), CONC2)
        n += 1

    # 倒れた大型構造物。廃墟の目印になる
    for (a, r, ln) in ((0.7, 165, 58), (3.5, 200, 74), (5.1, 150, 46)):
        cx, cy = math.cos(a) * r, math.sin(a) * r
        K.slab(bm, cx, cy, 7.0, ln / 2, 7.5, 7.0, yaw=a + 1.2, pitch=0.06, mi=CONC)
        K.slab(bm, cx + math.cos(a + 1.2) * ln * 0.55, cy + math.sin(a + 1.2) * ln * 0.55,
               3.0, 9.0, 8.0, 3.0, yaw=a + 1.2, pitch=0.5, mi=CONC2)

    # 崩れた格納庫のアーチ
    for (a, r) in ((2.2, 175), (4.4, 190)):
        cx, cy = math.cos(a) * r, math.sin(a) * r
        for i in range(7):
            t = i / 6
            ang = math.pi * (0.12 + t * 0.62)
            K.slab(bm, cx + math.cos(ang) * 26 * math.cos(a), cy + math.cos(ang) * 26 * math.sin(a),
                   math.sin(ang) * 26, 2.0, 12.0, 2.0, yaw=a, pitch=0.0, mi=RUST)

    K.to_object(bm, 'RuinFar', mats, MAT_ORDER)


def build_ground(mats):
    """外周の地面。プレイ範囲の床は JS 側が出すので、その外側だけ"""
    bm = bmesh.new()
    seg = 72
    inner, outer = ARENA_R + 18, 900.0
    ring0, ring1 = [], []
    for i in range(seg):
        a = 2 * math.pi * i / seg
        ring0.append((math.cos(a) * inner, math.sin(a) * inner, -0.05))
        ring1.append((math.cos(a) * outer, math.sin(a) * outer, -0.05))
    K.ring_loft(bm, [ring0, ring1], RUBBLE, cap_bottom=False, cap_top=False)
    K.to_object(bm, 'RuinGround', mats, MAT_ORDER)


# ---------------------------------------------------------------- 実行
def main(glb=None, js=None, clear=True):
    if clear:
        K.clear_scene()
    mats = K.ensure_mats(MATS)
    boxes, rnd = build_structures(mats)
    build_far(mats, rnd)
    build_ground(mats)
    if glb is None or js is None:
        glb, js = K.out_paths('ruins')
    return K.export(('RuinBlocks', 'RuinFar', 'RuinGround'), boxes, glb, js,
                    active='RuinBlocks')

if __name__ == '__main__':
    print(main())
