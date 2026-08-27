# ASSAULT FRAME VS - 「渓谷」ステージ生成
#
#   blender --background --python tools/blender_canyon.py
#
# 書き出し: public/models/canyon.glb / canyon_boxes.json
#
# 狙い: 建物ステージと違って、遮蔽が「岩の塊」になる。数は少なく一つ一つが大きいので、
# 回り込みと高度差の勝負になり、市街の細かい撃ち合いとは別の間合いになる。
#
# 岩を軸沿いの箱で受けるための工夫:
#   * 岩はメサ（頂上が平らな台地）型にする。頂上が平らなら、
#     当たり判定の「屋上」と見た目が食い違わない。
#   * 当たり判定の箱は見た目より一回り内側に置く (Placer.add の shrink)。
#     でこぼこした輪郭より手前で弾かれると、見えている面と合わなくて嘘に見える。
#   * 崖はプレイ範囲 (ARENA_R) の外だけ。中の床は平らなまま。

import bpy
import bmesh
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd())
import stagekit as K   # noqa: E402

ARENA_R = K.ARENA_R
MAT_ORDER = ('cy_rock', 'cy_rock2', 'cy_rock3', 'cy_sand', 'cy_dark')
ROCK, ROCK2, ROCK3, SAND, DARK = range(5)

MATS = {
    'cy_rock':  ((0.310, 0.175, 0.110), 0.94, 0.0),
    'cy_rock2': ((0.215, 0.115, 0.075), 0.95, 0.0),   # 暗い地層
    'cy_rock3': ((0.400, 0.255, 0.165), 0.92, 0.0),   # 明るい地層
    'cy_sand':  ((0.430, 0.310, 0.195), 0.97, 0.0),
    'cy_dark':  ((0.090, 0.055, 0.040), 0.96, 0.0),
}

# 地層の並び。上へ向かって繰り返す
STRATA = (ROCK, ROCK, ROCK3, ROCK, ROCK2, ROCK, ROCK3, ROCK, ROCK, ROCK2)


def rock_column(bm, rnd, cx, cy, rx, ry, h, n=11, levels=9, mat_off=0):
    """メサ型の岩。頂上は平ら。
    頂点ごとの半径の癖を上まで通すことで、縦の稜線が出て岩らしくなる"""
    # 半径の癖を強めにし、角度も不均等にする。
    # ここが弱いと円柱を積んだだけの樽になって岩に見えない
    wob = [rnd.uniform(0.66, 1.30) for _ in range(n)]
    ang = [2 * math.pi * i / n + rnd.uniform(-0.22, 0.22) for i in range(n)]
    rings = []
    for L in range(levels + 1):
        t = L / levels
        # 裾は広がり、上に向かって少し絞る。頂上直下でわずかに張り出させる
        s = 1.0 + 0.20 * (1 - t) ** 2.2 - 0.16 * t + 0.05 * math.sin(t * 3.1)
        ring = []
        for i in range(n):
            w = wob[i] * (1.0 + 0.13 * math.sin(t * 5.3 + i * 2.1)
                          + 0.07 * math.sin(t * 11.0 + i * 0.9))
            ring.append((cx + math.cos(ang[i]) * rx * s * w,
                         cy + math.sin(ang[i]) * ry * s * w,
                         h * t))
        rings.append(ring)
    # 地層ごとに帯を張る（段を分けて材質を変える）
    for L in range(levels):
        K.ring_loft(bm, [rings[L], rings[L + 1]],
                    STRATA[(L + mat_off) % len(STRATA)],
                    cap_bottom=False, cap_top=False)
    # 底と頂上の蓋
    K.ring_loft(bm, [rings[0], [(x, y, z - 0.4) for (x, y, z) in rings[0]]],
                DARK, cap_bottom=False, cap_top=True)
    top = rings[-1]
    ctr = (sum(p[0] for p in top) / n, sum(p[1] for p in top) / n, h)
    vs = [bm.verts.new(p) for p in top]
    c = bm.verts.new(ctr)
    for i in range(n):
        bm.faces.new((vs[i], vs[(i + 1) % n], c)).material_index = ROCK3


def boulder(bm, rnd, cx, cy, r, h, n=8):
    """転石。低くて丸い。当たり判定は持たせない"""
    wob = [rnd.uniform(0.7, 1.25) for _ in range(n)]
    rings = []
    for L, (t, s) in enumerate(((0.0, 1.0), (0.45, 1.06), (0.8, 0.78), (1.0, 0.30))):
        rings.append([(cx + math.cos(2 * math.pi * i / n) * r * s * wob[i],
                       cy + math.sin(2 * math.pi * i / n) * r * s * wob[i],
                       h * t) for i in range(n)])
    K.ring_loft(bm, rings, ROCK2 if rnd.random() < 0.4 else ROCK)


# ---------------------------------------------------------------- 岩（アリーナ内）
def build_rocks(mats):
    bm = bmesh.new()
    p = K.Placer(770231)
    rnd = p.rnd

    # 大メサ（射線を切る）→ 中メサ → 低い岩棚
    plan = [('big', 7, (10.0, 14.0), (26.0, 40.0), 9.0, 33.0, ARENA_R - 14),
            ('mid', 11, (7.0, 11.0), (13.0, 22.0), 8.0, 27.0, ARENA_R - 11),
            ('low', 14, (8.0, 13.0), (5.0, 9.5), 6.5, 18.0, ARENA_R - 9)]
    for kind, want, rr, hr, gap, rmin, rmax in plan:
        target = len(p.placed) + want
        tries = 0
        while len(p.placed) < target and tries < 2500:
            tries += 1
            a = rnd.random() * math.tau
            r = rmin + (rmax - rmin) * math.sqrt(rnd.random())
            cx, cy = math.cos(a) * r, math.sin(a) * r
            rx = rnd.uniform(*rr)
            ry = rx * rnd.uniform(0.72, 1.35)
            if not p.free(cx, cy, rx, ry, gap):
                continue
            h = rnd.uniform(*hr)
            lv = 11 if kind == 'big' else (8 if kind == 'mid' else 5)
            rock_column(bm, rnd, cx, cy, rx, ry, h, n=rnd.choice((10, 11, 12)),
                        levels=lv, mat_off=rnd.randrange(len(STRATA)))
            for _ in range(rnd.randrange(2, 6)):     # 裾の転石
                ba = rnd.random() * math.tau
                bd = rnd.uniform(1.05, 1.45)
                boulder(bm, rnd, cx + math.cos(ba) * rx * bd, cy + math.sin(ba) * ry * bd,
                        rnd.uniform(1.2, 2.8), rnd.uniform(1.0, 2.6))
            # 見た目より一回り内側で受ける
            p.add(cx, cy, rx, ry, h, shrink=min(rx, ry) * 0.13)

    # どこにも属さない転石を散らす（低いので当たり判定なし）。
    # 小さすぎると遠目に消えて、谷底がただの砂原に見える
    for _ in range(130):
        a = rnd.random() * math.tau
        r = 14 + (ARENA_R - 6 - 14) * math.sqrt(rnd.random())
        cx, cy = math.cos(a) * r, math.sin(a) * r
        if K.blocked(cx - 4, cx + 4, cy - 4, cy + 4):
            continue
        boulder(bm, rnd, cx, cy, rnd.uniform(1.4, 4.2), rnd.uniform(1.0, 3.4))

    K.to_object(bm, 'CanyonRocks', mats, MAT_ORDER)
    return p.boxes, rnd


# ---------------------------------------------------------------- 崖
def build_walls(mats, rnd):
    """プレイ範囲の外に立ち上がる崖。
    上端は反り返らせない。外へ寝かせると、内側から見たときに天井になって
    渓谷ではなく洞窟に見えてしまう。空が見えていることが渓谷の条件。"""
    bm = bmesh.new()
    n = 120
    # 段は細かく刻む。1 段が厚いと地層ではなくバウムクーヘンに見える
    profile = [(ARENA_R + 24, 0.0), (ARENA_R + 28, 8.0), (ARENA_R + 31, 19.0),
               (ARENA_R + 33, 31.0), (ARENA_R + 35, 44.0), (ARENA_R + 36, 57.0),
               (ARENA_R + 38, 70.0), (ARENA_R + 39, 83.0), (ARENA_R + 41, 96.0),
               (ARENA_R + 43, 109.0), (ARENA_R + 45, 121.0), (ARENA_R + 48, 133.0),
               (ARENA_R + 51, 144.0), (ARENA_R + 55, 154.0)]
    TOP = profile[-1][1]

    waves = [(rnd.uniform(1, 3), rnd.uniform(0, 6.28), rnd.uniform(7, 17)),
             (rnd.uniform(3, 6), rnd.uniform(0, 6.28), rnd.uniform(4, 11)),
             (rnd.uniform(7, 12), rnd.uniform(0, 6.28), rnd.uniform(2, 6))]

    def dr(a, t):
        # 上へ行くほど起伏を強める（下は切り立たせて、上をぼろぼろに）
        return sum(math.sin(a * f + ph) * amp for f, ph, amp in waves) * (0.35 + t)

    # 横谷（切れ込み）。ここだけ崖を低くして、外の遠景と空を覗かせる。
    # 2 本は開始位置の正面（ゲームの ±Z ＝ Blender の ∓Y）に固定する。
    # 開幕でいちばん長く見る方向に空が無いと、渓谷ではなく穴の底に見える
    passes = [(-math.pi / 2, 0.36), (math.pi / 2, 0.32),
              (rnd.random() * math.tau, rnd.uniform(0.26, 0.38))]

    def zscale(a):
        k = 1.0 + 0.10 * math.sin(a * 2 + waves[0][1]) + 0.07 * math.sin(a * 5 + waves[1][1])
        for (pa, wid) in passes:
            d = abs(math.atan2(math.sin(a - pa), math.cos(a - pa)))
            if d < wid:
                k *= 0.30 + 0.70 * (d / wid) ** 1.6
        return k

    rings = []
    for (r0, z0) in profile:
        t = z0 / TOP
        ring = []
        for i in range(n):
            a = 2 * math.pi * i / n
            ring.append((math.cos(a) * (r0 + dr(a, t)),
                         math.sin(a) * (r0 + dr(a, t)),
                         z0 * zscale(a)))
        rings.append(ring)
    for L in range(len(rings) - 1):
        K.ring_loft(bm, [rings[L], rings[L + 1]],
                    STRATA[L % len(STRATA)], cap_bottom=False, cap_top=False)
    # 上端に薄い笠を付けて、空との境をはっきりさせる
    K.ring_loft(bm, [rings[-1], [(x * 1.015, y * 1.015, z + 3.0) for (x, y, z) in rings[-1]]],
                ROCK3, cap_bottom=False, cap_top=False)
    # 裾を地面へつなぐ帯
    K.ring_loft(bm, [[(x, y, -1.0) for (x, y, _z) in rings[0]], rings[0]],
                SAND, cap_bottom=False, cap_top=False)

    K.to_object(bm, 'CanyonWalls', mats, MAT_ORDER)


def build_far(mats, rnd):
    """崖の向こうに見える遠景のメサと尖峰"""
    bm = bmesh.new()
    for _ in range(26):
        a = rnd.random() * math.tau
        r = 420 + rnd.random() * 620
        cx, cy = math.cos(a) * r, math.sin(a) * r
        rx = rnd.uniform(38, 110)
        rock_column(bm, rnd, cx, cy, rx, rx * rnd.uniform(0.6, 1.5),
                    rnd.uniform(120, 300), n=9, levels=6,
                    mat_off=rnd.randrange(len(STRATA)))
    for _ in range(12):                        # 尖峰
        a = rnd.random() * math.tau
        r = 330 + rnd.random() * 420
        cx, cy = math.cos(a) * r, math.sin(a) * r
        K.cylz(bm, cx, cy, 90.0, rnd.uniform(9, 22), rnd.uniform(1, 5), 180.0, 7, ROCK)
    # 谷底の外周（砂）
    seg = 72
    inner, outer = ARENA_R + 16, 1400.0
    K.ring_loft(bm, [[(math.cos(2 * math.pi * i / seg) * inner,
                       math.sin(2 * math.pi * i / seg) * inner, -0.6) for i in range(seg)],
                     [(math.cos(2 * math.pi * i / seg) * outer,
                       math.sin(2 * math.pi * i / seg) * outer, -0.6) for i in range(seg)]],
                 SAND, cap_bottom=False, cap_top=False)
    K.to_object(bm, 'CanyonFar', mats, MAT_ORDER)


# ---------------------------------------------------------------- 実行
def main(glb=None, js=None, clear=True):
    if clear:
        K.clear_scene()
    mats = K.ensure_mats(MATS)
    boxes, rnd = build_rocks(mats)
    build_walls(mats, rnd)
    build_far(mats, rnd)
    if glb is None or js is None:
        glb, js = K.out_paths('canyon')
    return K.export(('CanyonRocks', 'CanyonWalls', 'CanyonFar'), boxes, glb, js,
                    active='CanyonRocks')


if __name__ == '__main__':
    print(main())
