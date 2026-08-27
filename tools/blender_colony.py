# ASSAULT FRAME VS - 「コロニー内部」ステージ生成
#
# Blender で実行すると次の 2 つを書き出す:
#   public/models/colony.glb        … 見た目（GLB / Draco 圧縮）
#   public/models/colony_boxes.json … 当たり判定の AABB（ゲーム座標）
#
#   blender --background --python tools/blender_colony.py
#
# 設計の要点:
#   * プレイ範囲は今までのステージと同じ「y=0 の平面」のまま。
#     コロニーの湾曲は ARENA_R の外側だけで見せる。地上目線ではそれが実際の見え方でもある。
#   * 当たり判定は軸に沿った箱だけ。src/collision.js の
#     { minX, maxX, minZ, maxZ, top } をそのまま JSON で吐く。
#   * 円筒の軸は「機体同士が向き合う方向」（ゲームの Z 軸）に通す。
#     軸と視線が直交していると、開幕の正面がただの壁に見えてしまう。
#   * 開始位置とその後ろのカメラが入る空間には建物を置かない。
#     塞ぐと開幕でカメラがビルにめり込んで何も見えなくなる。
#
# 座標: Blender は Z 上。glTF 書き出しで
#   gameX = blenderX, gameY = blenderZ, gameZ = -blenderY

import bpy
import bmesh
import math
import json
import os
import random
from mathutils import Vector

R = 320.0        # コロニー半径
HALFL = 500.0    # 軸方向の半長
PLAIN = 118.0    # 平地（プレイ範囲）の半幅
BLEND = 46.0     # 平地から曲面へのなじませ幅
LANDW = math.radians(31.0)          # 陸地セクターの半角
CENTERS = [0.0, math.radians(120.0), math.radians(-120.0)]
WINDOWS = [(CENTERS[0] + LANDW, CENTERS[1] - LANDW),
           (CENTERS[1] + LANDW, math.radians(240.0) - LANDW),
           (math.radians(240.0) + LANDW, math.radians(360.0) - LANDW)]
ARENA_R = 95.0   # src/config.js と揃えること

OBJECTS = ('ColonyLand', 'ColonyPanes', 'ColonyFrames', 'ColonyCaps', 'CityBlocks', 'FarCity')


# ---------------------------------------------------------------- 下ごしらえ
def _bsdf(mat):
    for n in mat.node_tree.nodes:
        if n.bl_idname == 'ShaderNodeBsdfPrincipled':
            return n
    raise RuntimeError('principled node not found')


def make_mat(name, base, rough=0.75, metal=0.0, emit=None, emit_str=0.0):
    m = bpy.data.materials.get(name)
    if m is None:
        m = bpy.data.materials.new(name)
        m.use_nodes = True
    b = _bsdf(m)
    b.inputs['Base Color'].default_value = (*base, 1.0)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    if emit:
        b.inputs['Emission Color'].default_value = (*emit, 1.0)
        b.inputs['Emission Strength'].default_value = emit_str
    return m


def ensure_mats():
    # 実際の明るさ・発光強度はゲーム側 (src/stages.js の COLONY_MAT) で詰める。
    # ここは名前と大まかな色だけ決めておく
    return {
        'col_ground':   make_mat('col_ground',   (0.115, 0.145, 0.190), 0.95, 0.05),
        'col_land':     make_mat('col_land',     (0.095, 0.130, 0.165), 0.95, 0.05),
        'col_frame':    make_mat('col_frame',    (0.210, 0.240, 0.300), 0.55, 0.65),
        'col_pane':     make_mat('col_pane',     (0.500, 0.680, 0.950), 0.20, 0.0,
                                 emit=(0.55, 0.72, 1.0), emit_str=2.6),
        'col_building': make_mat('col_building', (0.175, 0.205, 0.270), 0.80, 0.18),
        'col_window':   make_mat('col_window',   (0.300, 0.520, 0.800), 0.30, 0.0,
                                 emit=(0.40, 0.62, 0.95), emit_str=1.5),
        'col_lamp':     make_mat('col_lamp',     (0.900, 0.300, 0.250), 0.40, 0.0,
                                 emit=(1.0, 0.28, 0.22), emit_str=3.0),
    }


def ss(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3.0 - 2.0 * t)


def wrap(a):
    while a > math.pi:
        a -= 2 * math.pi
    while a < -math.pi:
        a += 2 * math.pi
    return a


# 起伏。正弦の重ね合わせで足りる程度のもの
_r = random.Random(4771)
WAVES = [(_r.uniform(0.004, 0.02), _r.uniform(0.9, 5.0),
          _r.uniform(0, 6.28), _r.uniform(2.5, 11.0)) for _ in range(7)]


def hills(theta, x):
    a = abs(wrap(theta)) * R
    if a < PLAIN + 8.0:
        return 0.0
    k = ss((a - PLAIN - 8.0) / 60.0)
    return sum(math.sin(x * fx + theta * ft + ph) * amp for fx, ft, ph, amp in WAVES) * k


def surf(theta, x):
    """陸地の表面。|弧長| < PLAIN では平ら、その外で円筒へなじませる"""
    s = wrap(theta) * R
    a = abs(s)
    w = ss((a - PLAIN) / BLEND) if a > PLAIN else 0.0
    yc, zc = R * math.sin(theta), R * (1.0 - math.cos(theta))
    y = s + (yc - s) * w
    z = zc * w
    n = Vector((0.0, -math.sin(theta), math.cos(theta)))   # 軸へ向かう法線
    return Vector((x, y, z)) + n * hills(theta, x), n


def P(theta, x, r):
    return (x, r * math.sin(theta), R - r * math.cos(theta))


# ---------------------------------------------------------------- 陸地
def build_land(mats):
    def strip(bm, t0, t1, nt, x0, x1, nx, mi):
        vs = []
        for i in range(nt + 1):
            th = t0 + (t1 - t0) * i / nt
            vs.append([bm.verts.new(surf(th, x0 + (x1 - x0) * j / nx)[0]) for j in range(nx + 1)])
        for i in range(nt):
            for j in range(nx):
                f = bm.faces.new((vs[i][j], vs[i][j + 1], vs[i + 1][j + 1], vs[i + 1][j]))
                f.material_index = mi

    me = bpy.data.meshes.new('ColonyLand')
    for n in ('col_ground', 'col_land'):
        me.materials.append(mats[n])
    bm = bmesh.new()
    strip(bm, -LANDW, LANDW, 54, -HALFL, HALFL, 46, 0)      # プレイヤーのいる地帯
    for c in CENTERS[1:]:                                   # 頭上へ回り込む 2 本
        strip(bm, c - LANDW, c + LANDW, 26, -HALFL, HALFL, 26, 1)
    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    bpy.context.collection.objects.link(bpy.data.objects.new('ColonyLand', me))


# ---------------------------------------------------------------- 採光窓 / フレーム
def build_panes_and_frames(mats):
    RP = R + 2.0
    me = bpy.data.meshes.new('ColonyPanes')
    me.materials.append(mats['col_pane'])
    bm = bmesh.new()
    for (t0, t1) in WINDOWS:
        nt, nx = 22, 18
        vs = [[bm.verts.new(P(t0 + (t1 - t0) * i / nt, -HALFL + 2 * HALFL * j / nx, RP))
               for j in range(nx + 1)] for i in range(nt + 1)]
        for i in range(nt):
            for j in range(nx):
                bm.faces.new((vs[i][j], vs[i][j + 1], vs[i + 1][j + 1], vs[i + 1][j]))
    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    bpy.context.collection.objects.link(bpy.data.objects.new('ColonyPanes', me))

    me2 = bpy.data.meshes.new('ColonyFrames')
    me2.materials.append(mats['col_frame'])
    bm = bmesh.new()

    def beam(t, x0, x1, w_ang, thick, r):
        a0, a1 = t - w_ang, t + w_ang
        ro, ri = r + thick, r - thick
        pts = [(a0, ri), (a1, ri), (a1, ro), (a0, ro)]
        vs0 = [bm.verts.new(P(a, x0, rr)) for (a, rr) in pts]
        vs1 = [bm.verts.new(P(a, x1, rr)) for (a, rr) in pts]
        for k in range(4):
            n = (k + 1) % 4
            bm.faces.new((vs0[k], vs0[n], vs1[n], vs1[k]))
        bm.faces.new(tuple(reversed(vs0)))
        bm.faces.new(tuple(vs1))

    def ribarc(x, t0, t1, w_x, thick, r, seg=26):
        ro, ri = r + thick, r - thick
        prev = None
        for i in range(seg + 1):
            a = t0 + (t1 - t0) * i / seg
            cur = [bm.verts.new(q) for q in
                   (P(a, x - w_x, ri), P(a, x + w_x, ri), P(a, x + w_x, ro), P(a, x - w_x, ro))]
            if prev:
                for k in range(4):
                    n = (k + 1) % 4
                    bm.faces.new((prev[k], prev[n], cur[n], cur[k]))
            else:
                bm.faces.new(tuple(reversed(cur)))
            prev = cur
        bm.faces.new(tuple(prev))

    for c in CENTERS:                       # 陸地と窓の境目に走る大桁 6 本
        for s in (-1, 1):
            beam(c + s * LANDW, -HALFL, HALFL, math.radians(1.6), 5.0, RP)
    for (t0, t1) in WINDOWS:                # 窓を横切る細い桟
        for i in range(1, 4):
            beam(t0 + (t1 - t0) * i / 4, -HALFL, HALFL, math.radians(0.6), 2.2, RP)
    for i in range(9):                      # 輪状のリブ
        x = -HALFL + 2 * HALFL * i / 8
        for (t0, t1) in WINDOWS:
            ribarc(x, t0, t1, 3.0, 2.6, RP)
    bm.normal_update()
    bm.to_mesh(me2)
    bm.free()
    bpy.context.collection.objects.link(bpy.data.objects.new('ColonyFrames', me2))


# ---------------------------------------------------------------- 端部
def build_caps(mats):
    me = bpy.data.meshes.new('ColonyCaps')
    for n in ('col_frame', 'col_pane', 'col_window'):
        me.materials.append(mats[n])
    bm = bmesh.new()

    def ring(x, r0, r1, seg, midx):
        a = [bm.verts.new((x, r0 * math.sin(2 * math.pi * i / seg),
                           R - r0 * math.cos(2 * math.pi * i / seg))) for i in range(seg)]
        b = [bm.verts.new((x, r1 * math.sin(2 * math.pi * i / seg),
                           R - r1 * math.cos(2 * math.pi * i / seg))) for i in range(seg)]
        for i in range(seg):
            j = (i + 1) % seg
            bm.faces.new((a[i], a[j], b[j], b[i])).material_index = midx

    for sgn in (-1, 1):
        x = sgn * HALFL
        ring(x, 250.0, R + 6.0, 64, 0)
        ring(x, 168.0, 250.0, 64, 0)
        ring(x, 96.0, 168.0, 64, 0)
        ring(x, 52.0, 96.0, 48, 2)          # 光る居住リング
        ring(x, 14.0, 52.0, 32, 0)
        # 中心の軸港（内側へ伸びる筒）
        seg, inner = 24, -sgn * 120.0
        a = [bm.verts.new((x, 14 * math.sin(2 * math.pi * i / seg),
                           R - 14 * math.cos(2 * math.pi * i / seg))) for i in range(seg)]
        b = [bm.verts.new((x + inner, 9 * math.sin(2 * math.pi * i / seg),
                           R - 9 * math.cos(2 * math.pi * i / seg))) for i in range(seg)]
        for i in range(seg):
            j = (i + 1) % seg
            bm.faces.new((a[i], a[j], b[j], b[i])).material_index = 0
        bm.faces.new(tuple(b)).material_index = 1
        for k in range(12):                 # 放射状のスポーク
            ang = 2 * math.pi * k / 12
            w = math.radians(1.1)

            def pt(rr, off):
                aa = ang + off
                return (x, rr * math.sin(aa), R - rr * math.cos(aa))

            quad = [pt(20, -w), pt(20, w), pt(300, w), pt(300, -w)]
            d = -sgn * 7.0
            v0 = [bm.verts.new(p) for p in quad]
            v1 = [bm.verts.new((p[0] + d, p[1], p[2])) for p in quad]
            for t in range(4):
                n = (t + 1) % 4
                bm.faces.new((v0[t], v0[n], v1[n], v1[t])).material_index = 0
            bm.faces.new(tuple(v1)).material_index = 0

    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    bpy.context.collection.objects.link(bpy.data.objects.new('ColonyCaps', me))


# ---------------------------------------------------------------- プレイ範囲の建物
def build_blocks(mats):
    me = bpy.data.meshes.new('CityBlocks')
    for n in ('col_building', 'col_window', 'col_frame', 'col_lamp'):
        me.materials.append(mats[n])
    bm = bmesh.new()

    def addbox(x0, x1, y0, y1, z0, z1, mi):
        vs = {}

        def V(x, y, z):
            k = (round(x, 4), round(y, 4), round(z, 4))
            if k not in vs:
                vs[k] = bm.verts.new((x, y, z))
            return vs[k]

        quads = [[(x0, y0, z0), (x1, y0, z0), (x1, y1, z0), (x0, y1, z0)][::-1],
                 [(x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)],
                 [(x0, y0, z0), (x0, y1, z0), (x0, y1, z1), (x0, y0, z1)],
                 [(x1, y0, z0), (x1, y0, z1), (x1, y1, z1), (x1, y1, z0)],
                 [(x0, y0, z0), (x0, y0, z1), (x1, y0, z1), (x1, y0, z0)],
                 [(x0, y1, z0), (x1, y1, z0), (x1, y1, z1), (x0, y1, z1)]]
        for q in quads:
            bm.faces.new([V(*p) for p in q]).material_index = mi

    rnd = random.Random(20260826)
    placed, boxes = [], []

    # 開始位置 (ゲーム座標 0,±42) と、その後ろのカメラが入る空間は空けておく
    KEEPOUT = [(-17.0, 17.0, 28.0, 70.0), (-17.0, 17.0, -70.0, -28.0)]

    def blocked(x0, x1, y0, y1):
        return any(x0 < kx1 and x1 > kx0 and y0 < ky1 and y1 > ky0
                   for (kx0, kx1, ky0, ky1) in KEEPOUT)

    def free(cx, cy, hw, hd, gap):
        if blocked(cx - hw, cx + hw, cy - hd, cy + hd):
            return False
        return all(not (abs(cx - px) < hw + phw + gap and abs(cy - py) < hd + phd + gap)
                   for (px, py, phw, phd) in placed)

    def tower(cx, cy, w, dp, h, kind):
        x0, x1, y0, y1 = cx - w / 2, cx + w / 2, cy - dp / 2, cy + dp / 2
        addbox(x0, x1, y0, y1, 0.0, h, 0)
        top = h
        if kind == 'tall':
            ins = rnd.uniform(1.4, 2.8)
            h2 = h + rnd.uniform(5.0, 12.0)
            addbox(x0 + ins, x1 - ins, y0 + ins, y1 - ins, h, h2, 0)
            top = h2
        addbox(cx - 2.2, cx + 2.2, cy - 2.2, cy + 2.2, top, top + rnd.uniform(1.0, 2.4), 2)
        if kind == 'tall' and rnd.random() < 0.6:
            addbox(cx - 0.3, cx + 0.3, cy - 0.3, cy + 0.3, top + 1.6, top + 9.0, 2)
            addbox(cx - 0.6, cx + 0.6, cy - 0.6, cy + 0.6, top + 7.6, top + 8.4, 3)
        ry, t = 3.0, 0.2
        while ry < h - 2.0:
            addbox(x0 + 0.6, x1 - 0.6, y0 - t, y0 + t, ry, ry + 0.9, 1)
            addbox(x0 + 0.6, x1 - 0.6, y1 - t, y1 + t, ry, ry + 0.9, 1)
            addbox(x0 - t, x0 + t, y0 + 0.6, y1 - 0.6, ry, ry + 0.9, 1)
            addbox(x1 - t, x1 + t, y0 + 0.6, y1 - 0.6, ry, ry + 0.9, 1)
            ry += rnd.uniform(4.2, 6.0)
        boxes.append({'minX': round(x0, 2), 'maxX': round(x1, 2),
                      'minZ': round(-y1, 2), 'maxZ': round(-y0, 2), 'top': round(h, 2)})
        placed.append((cx, cy, w / 2, dp / 2))

    def deck(cx, cy, w, dp, h):
        x0, x1, y0, y1 = cx - w / 2, cx + w / 2, cy - dp / 2, cy + dp / 2
        addbox(x0, x1, y0, y1, 0.0, h, 0)
        addbox(x0 - 0.6, x1 + 0.6, y0 - 0.6, y1 + 0.6, h, h + 0.7, 2)
        addbox(x0 + 1.2, x1 - 1.2, y0 - 0.25, y0 + 0.25, h * 0.5, h * 0.5 + 0.8, 1)
        addbox(x0 + 1.2, x1 - 1.2, y1 - 0.25, y1 + 0.25, h * 0.5, h * 0.5 + 0.8, 1)
        boxes.append({'minX': round(x0 - 0.6, 2), 'maxX': round(x1 + 0.6, 2),
                      'minZ': round(-y1 - 0.6, 2), 'maxZ': round(-y0 + 0.6, 2),
                      'top': round(h + 0.7, 2)})
        placed.append((cx, cy, w / 2 + 0.6, dp / 2 + 0.6))

    # 高層（射線を切る）→ 中層 → 低い台座（屋上を取り合う）の順に置く
    plan = [('tall', 10, (13, 18), (24, 38), 9.0, 32.0, ARENA_R - 12),
            ('mid', 13, (10, 15), (12, 21), 8.0, 28.0, ARENA_R - 10),
            ('low', 12, (10, 16), (5.0, 9.5), 7.0, 20.0, ARENA_R - 9)]
    for kind, want, wr, hr, gap, rmin, rmax in plan:
        got, tries = 0, 0
        while got < want and tries < 1500:
            tries += 1
            a = rnd.random() * math.tau
            r = rmin + (rmax - rmin) * math.sqrt(rnd.random())
            cx, cy = math.cos(a) * r, math.sin(a) * r
            w, dp = rnd.uniform(*wr), rnd.uniform(wr[0], wr[1])
            if not free(cx, cy, w / 2, dp / 2, gap):
                continue
            h = rnd.uniform(*hr)
            if kind == 'low':
                deck(cx, cy, w, dp, h)
            else:
                tower(cx, cy, w, dp, h, kind)
            got += 1

    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    bpy.context.collection.objects.link(bpy.data.objects.new('CityBlocks', me))
    return boxes


# ---------------------------------------------------------------- 遠景の街
def build_farcity(mats):
    me = bpy.data.meshes.new('FarCity')
    for n in ('col_building', 'col_window'):
        me.materials.append(mats[n])
    bm = bmesh.new()
    rnd = random.Random(51735)

    def slab(theta, x, w, d, h, mi):
        o, n = surf(theta, x)
        ax = Vector((1.0, 0.0, 0.0))
        side = n.cross(ax).normalized()
        b = [o + ax * sx + side * sy for sx, sy in
             ((-d / 2, -w / 2), (d / 2, -w / 2), (d / 2, w / 2), (-d / 2, w / 2))]
        vb = [bm.verts.new(p) for p in b]
        vt = [bm.verts.new(p + n * h) for p in b]
        for k in range(4):
            j = (k + 1) % 4
            bm.faces.new((vb[k], vb[j], vt[j], vt[k])).material_index = mi
        bm.faces.new(tuple(vt)).material_index = mi

    def place(theta, x, hmax):
        o, _ = surf(theta, x)
        if o.length < 132.0:
            return                        # アリーナのすぐ外だけ空ける
        w, d = rnd.uniform(8, 22), rnd.uniform(8, 22)
        h = rnd.uniform(7, hmax)
        slab(theta, x, w, d, h, 0)
        if rnd.random() < 0.5:
            slab(theta, x, w * 0.7, d * 0.7, h + rnd.uniform(0.4, 1.2), 1)   # 灯り

    for c in CENTERS[1:]:                 # 頭上へ回り込む 2 本の陸地
        for _ in range(150):
            place(c + rnd.uniform(-LANDW * 0.9, LANDW * 0.9),
                  rnd.uniform(-HALFL + 40, HALFL - 40), 34)
    for _ in range(230):                  # 自分の陸地、平地の外周
        s = rnd.choice((-1, 1)) * rnd.uniform(PLAIN * 0.55, LANDW * R - 6)
        place(s / R, rnd.uniform(-HALFL + 40, HALFL - 40), 42)

    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    bpy.context.collection.objects.link(bpy.data.objects.new('FarCity', me))


# ---------------------------------------------------------------- 実行
def main(glb_path=None, json_path=None, clear=True):
    if clear:
        bpy.ops.object.select_all(action='SELECT')
        bpy.ops.object.delete(use_global=False)
        for blk in (bpy.data.meshes, bpy.data.materials):
            for d in list(blk):
                if d.users == 0:
                    blk.remove(d)

    mats = ensure_mats()
    build_land(mats)
    build_panes_and_frames(mats)
    build_caps(mats)
    boxes = build_blocks(mats)
    build_farcity(mats)

    # 円筒の軸を、機体同士が向き合う方向（ゲームの Z 軸）へ回す。
    # CityBlocks は円形に配置してあるので回さない
    spin = ('ColonyLand', 'ColonyPanes', 'ColonyFrames', 'ColonyCaps', 'FarCity')
    bpy.ops.object.select_all(action='DESELECT')
    for n in spin:
        ob = bpy.data.objects[n]
        ob.rotation_euler = (0.0, 0.0, math.radians(90.0))
        ob.select_set(True)
    bpy.context.view_layer.objects.active = bpy.data.objects['ColonyLand']
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=False)

    here = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd()
    if glb_path is None:
        glb_path = os.path.join(here, '..', 'public', 'models', 'colony.glb')
    if json_path is None:
        json_path = os.path.join(here, '..', 'public', 'models', 'colony_boxes.json')
    glb_path, json_path = os.path.abspath(glb_path), os.path.abspath(json_path)
    os.makedirs(os.path.dirname(glb_path), exist_ok=True)

    bpy.ops.object.select_all(action='DESELECT')
    for n in OBJECTS:
        bpy.data.objects[n].select_set(True)
    bpy.context.view_layer.objects.active = bpy.data.objects['ColonyLand']
    kw = dict(filepath=glb_path, export_format='GLB', use_selection=True,
              export_apply=True, export_yup=True, export_cameras=False,
              export_lights=False, export_animations=False,
              export_skins=False, export_morph=False,
              export_draco_mesh_compression_enable=True,
              export_draco_mesh_compression_level=6)
    try:
        bpy.ops.export_scene.gltf(**kw)
    except TypeError:
        kw.pop('export_draco_mesh_compression_enable', None)
        kw.pop('export_draco_mesh_compression_level', None)
        bpy.ops.export_scene.gltf(**kw)

    with open(json_path, 'w') as f:
        json.dump(boxes, f)

    def hits(gx, gz, pad):
        return sum(1 for b in boxes if gx > b['minX'] - pad and gx < b['maxX'] + pad
                   and gz > b['minZ'] - pad and gz < b['maxZ'] + pad)

    return {
        'glb_kb': round(os.path.getsize(glb_path) / 1024, 1),
        'boxes': len(boxes),
        # 開始位置とカメラ位置が空いているかの検算
        'spawn_clear': hits(0, -42, 3) == 0 and hits(0, 42, 3) == 0,
        'camera_clear': hits(0, -58, 3) == 0 and hits(0, 58, 3) == 0,
        'center_clear': hits(0, 0, 3) == 0,
    }


if __name__ == '__main__':
    print(main())
