# ASSAULT FRAME VS - 機体パーツライブラリ生成
#
# Blender で実行すると public/models/mechparts.glb を書き出す。
#   blender --background --python tools/blender_mech_parts.py
# もしくは Blender の Python コンソールから exec(open(...).read())
#
# 方針: 機体の骨組み（可動ピボット）は three.js 側 (src/mechmodel.js) のまま。
# ここで作るのはそこにぶら下がる「見た目」のパーツだけ。
# 取り付け位置は mechmodel.js の従来のボックスと同じにしてあるので、
# JS 側は pivot.add(part) するだけで済む。
#
# 座標: +Z が上、-Y が前。glTF 書き出しでゲームの +Y 上 / +Z 前になる。
# 全高およそ 3.0 ユニット。
#
# プリミティブとの差は主に 3 つ:
#   1. loft() で断面を変えながら積む → 絞り／広がりのある輪郭
#   2. ベベルモディファイア → エッジに光が乗る
#   3. 装甲板を本体から浮かせて重ねる → 板の重なりが見える

import bpy
import bmesh
import math
import os

# ---------------------------------------------------------------- マテリアル
# 名前だけが重要。実際の色は機体ごとに three.js 側で差し替える
MATNAMES = ('m_main', 'm_accent', 'm_trim', 'm_joint', 'm_frame',
            'm_eye', 'm_gold', 'm_gun', 'm_glow')
MAIN, ACC, TRIM, JOINT, FRAME, EYE, GOLD, GUN, GLOW = range(9)


def _bsdf(mat):
    for n in mat.node_tree.nodes:
        if n.bl_idname == 'ShaderNodeBsdfPrincipled':
            return n
    raise RuntimeError('principled node not found')


def ensure_mats():
    spec = {
        'm_main':   ((0.55, 0.58, 0.62), 0.40, 0.35),
        'm_accent': ((0.40, 0.43, 0.48), 0.40, 0.35),
        'm_trim':   ((0.30, 0.32, 0.36), 0.40, 0.35),
        'm_joint':  ((0.22, 0.24, 0.28), 0.28, 0.85),
        'm_frame':  ((0.055, 0.065, 0.085), 0.35, 0.80),
        'm_eye':    ((0.30, 0.80, 1.00), 0.30, 0.00),
        'm_gold':   ((0.85, 0.65, 0.16), 0.30, 0.60),
        'm_gun':    ((0.09, 0.11, 0.14), 0.28, 0.85),
        'm_glow':   ((0.40, 0.75, 1.00), 0.30, 0.00),
    }
    out = {}
    for n, (c, r, mt) in spec.items():
        m = bpy.data.materials.get(n)
        if m is None:
            m = bpy.data.materials.new(n)
            m.use_nodes = True
        b = _bsdf(m)
        b.inputs['Base Color'].default_value = (*c, 1.0)
        b.inputs['Roughness'].default_value = r
        b.inputs['Metallic'].default_value = mt
        out[n] = m
    return out


# ---------------------------------------------------------------- 形状ヘルパー
def new_bm():
    return bmesh.new()


def loft(bm, sections, mi=0, cap_bottom=True, cap_top=True):
    """sections: [(z, hx, hy, ox, oy)] を下から順に積む。
    hx/hy を変えることで絞りや広がりが出る。単なる箱と違って輪郭が生きる。"""
    rings = []
    for (z, hx, hy, ox, oy) in sections:
        rings.append([bm.verts.new((ox - hx, oy - hy, z)),
                      bm.verts.new((ox + hx, oy - hy, z)),
                      bm.verts.new((ox + hx, oy + hy, z)),
                      bm.verts.new((ox - hx, oy + hy, z))])
    for i in range(len(rings) - 1):
        a, b = rings[i], rings[i + 1]
        for k in range(4):
            j = (k + 1) % 4
            f = bm.faces.new((a[k], a[j], b[j], b[k]))
            f.material_index = mi
    if cap_bottom:
        bm.faces.new(tuple(reversed(rings[0]))).material_index = mi
    if cap_top:
        bm.faces.new(tuple(rings[-1])).material_index = mi
    return rings


def lofty(bm, sections, mi=0, cap_a=True, cap_b=True):
    """loft() の Y 方向版。断面は XZ 平面。
    銃身のように前後へ伸びる物は、こちらで積まないと断面が重なって潰れる。"""
    rings = []
    for (y, hx, hz, ox, oz) in sections:
        rings.append([bm.verts.new((ox - hx, y, oz - hz)),
                      bm.verts.new((ox + hx, y, oz - hz)),
                      bm.verts.new((ox + hx, y, oz + hz)),
                      bm.verts.new((ox - hx, y, oz + hz))])
    for i in range(len(rings) - 1):
        a, b = rings[i], rings[i + 1]
        for k in range(4):
            j = (k + 1) % 4
            f = bm.faces.new((a[k], a[j], b[j], b[k]))
            f.material_index = mi
    if cap_a:
        bm.faces.new(tuple(rings[0])).material_index = mi
    if cap_b:
        bm.faces.new(tuple(reversed(rings[-1]))).material_index = mi
    return rings


def boxs(bm, cx, cy, cz, hx, hy, hz, mi=0):
    loft(bm, [(cz - hz, hx, hy, cx, cy), (cz + hz, hx, hy, cx, cy)], mi)


def cylz(bm, cx, cy, cz, r0, r1, h, seg=12, mi=0, axis='z'):
    ring0, ring1 = [], []
    for i in range(seg):
        a = 2 * math.pi * i / seg
        c, s = math.cos(a), math.sin(a)
        if axis == 'z':
            ring0.append((cx + c * r0, cy + s * r0, cz - h / 2))
            ring1.append((cx + c * r1, cy + s * r1, cz + h / 2))
        elif axis == 'y':
            ring0.append((cx + c * r0, cy - h / 2, cz + s * r0))
            ring1.append((cx + c * r1, cy + h / 2, cz + s * r1))
        else:
            ring0.append((cx - h / 2, cy + c * r0, cz + s * r0))
            ring1.append((cx + h / 2, cy + c * r1, cz + s * r1))
    a = [bm.verts.new(p) for p in ring0]
    b = [bm.verts.new(p) for p in ring1]
    for i in range(seg):
        j = (i + 1) % seg
        bm.faces.new((a[i], a[j], b[j], b[i])).material_index = mi
    bm.faces.new(tuple(reversed(a))).material_index = mi
    bm.faces.new(tuple(b)).material_index = mi


def finish(bm, name, mats, bevel=0.012, segments=1, angle=32.0):
    """bmesh を確定してオブジェクト化し、面取りを掛ける。
    この面取りがエッジに光を乗せる。プリミティブとの一番の差はここ。"""
    me = bpy.data.meshes.new(name)
    for n in MATNAMES:
        me.materials.append(mats[n])
    # 面の向きを計算し直す。loft() は「z が増える向きに積む」前提の巻き方なので、
    # 上から下へ積んだパーツ（腕・脚）はそのままだと法線が裏返り、
    # three.js の背面カリングで内側が見えて真っ黒になる
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(ob)
    if bevel > 0:
        b = ob.modifiers.new('bev', 'BEVEL')
        b.width = bevel
        b.segments = segments
        b.limit_method = 'ANGLE'
        b.angle_limit = math.radians(angle)
        b.miter_outer = 'MITER_ARC'
    return ob


# ---------------------------------------------------------------- 胴 / 腰
def build_torso(mats):
    L, B, C = loft, boxs, cylz
    bm = new_bm()
    # 腹: 細く絞る。ここが太いと胸との段差が消えて寸胴になる
    L(bm, [(-0.16, 0.205, 0.145, 0, 0.000),
           (0.02, 0.228, 0.162, 0, -0.004),
           (0.16, 0.250, 0.172, 0, -0.004)], TRIM)
    L(bm, [(-0.14, 0.170, 0.115, 0, 0), (0.16, 0.195, 0.135, 0, 0)], FRAME)
    # 胸: 下から肩へ向けて広がる
    L(bm, [(0.15, 0.262, 0.188, 0, -0.004),
           (0.27, 0.358, 0.238, 0, -0.012),
           (0.40, 0.418, 0.252, 0, -0.016),
           (0.52, 0.402, 0.232, 0, -0.010),
           (0.60, 0.320, 0.186, 0, -0.002),
           (0.65, 0.235, 0.145, 0, 0.000)], MAIN)
    L(bm, [(0.18, 0.275, 0.205, 0, 0), (0.58, 0.375, 0.240, 0, 0)], FRAME)
    # 胸の中央ブロック（コクピット）: 前へせり出す
    L(bm, [(0.19, 0.115, 0.060, 0, -0.238),
           (0.33, 0.140, 0.068, 0, -0.258),
           (0.47, 0.128, 0.062, 0, -0.250),
           (0.57, 0.095, 0.048, 0, -0.226)], ACC)
    for i in range(3):
        B(bm, 0, -0.272, 0.235 + i * 0.052, 0.098, 0.014, 0.012, FRAME)
    # 胸の左右装甲。本体と同色にして、中央ブロックとの間の溝だけを見せる。
    # ここを差し色にすると胸の面積を食われて主色が読めなくなる
    for sx in (-1, 1):
        L(bm, [(0.20, 0.112, 0.046, sx * 0.264, -0.210),
               (0.34, 0.128, 0.050, sx * 0.280, -0.220),
               (0.50, 0.108, 0.044, sx * 0.264, -0.206)], MAIN)
    # 肩の受け
    for sx in (-1, 1):
        C(bm, sx * 0.448, 0, 0.42, 0.118, 0.118, 0.15, 12, JOINT, 'x')
        L(bm, [(0.34, 0.055, 0.150, sx * 0.415, -0.010),
               (0.52, 0.050, 0.135, sx * 0.408, -0.006)], TRIM)
    L(bm, [(0.58, 0.150, 0.135, 0, -0.024), (0.68, 0.115, 0.105, 0, -0.012)], TRIM)  # 襟
    B(bm, 0, 0.238, 0.36, 0.215, 0.028, 0.145, TRIM)   # 背中のバックパック取り付け座
    finish(bm, 'torso', mats, bevel=0.011)

    # 胸ダクト: 中央ブロックの左右に入れる
    bm = new_bm()
    for sx in (-1, 1):
        L(bm, [(0.22, 0.072, 0.040, sx * 0.180, -0.242),
               (0.33, 0.082, 0.044, sx * 0.196, -0.252),
               (0.44, 0.062, 0.036, sx * 0.184, -0.238)], GOLD)
    finish(bm, 'torso_duct', mats, bevel=0.006)

    # 首まわりの動力パイプ
    bm = new_bm()
    for i in range(4):
        C(bm, -0.30 + i * 0.20, -0.180, 0.615, 0.048, 0.048, 0.10, 8, JOINT, 'z')
    finish(bm, 'torso_pipes', mats, bevel=0.005)


def build_pelvis(mats):
    L, B = loft, boxs
    bm = new_bm()
    L(bm, [(-0.18, 0.255, 0.195, 0, 0),
           (-0.04, 0.292, 0.215, 0, -0.004),
           (0.10, 0.268, 0.195, 0, 0)], MAIN)
    L(bm, [(-0.16, 0.215, 0.160, 0, 0), (0.08, 0.228, 0.168, 0, 0)], FRAME)
    for sx in (-1, 1):    # 前スカート（左右に割れている）
        L(bm, [(-0.34, 0.108, 0.052, sx * 0.118, -0.205),
               (-0.14, 0.122, 0.060, sx * 0.126, -0.220),
               (0.02, 0.098, 0.048, sx * 0.112, -0.198)], MAIN)
    for sx in (-1, 1):    # サイドスカート
        L(bm, [(-0.36, 0.055, 0.140, sx * 0.312, -0.010),
               (-0.14, 0.064, 0.168, sx * 0.326, -0.014),
               (0.04, 0.050, 0.128, sx * 0.308, -0.008)], ACC)
        B(bm, sx * 0.334, -0.060, -0.215, 0.010, 0.052, 0.058, TRIM)
    L(bm, [(-0.32, 0.205, 0.058, 0, 0.212),   # 後ろスカート
           (-0.10, 0.225, 0.066, 0, 0.226),
           (0.04, 0.180, 0.052, 0, 0.204)], ACC)
    finish(bm, 'pelvis', mats, bevel=0.010)


# ---------------------------------------------------------------- 腕 / 脚
def build_arm(mats):
    L, B, C = loft, boxs, cylz
    bm = new_bm()
    L(bm, [(-0.18, 0.085, 0.090, 0, 0), (-1.10, 0.080, 0.085, 0, 0)], FRAME)  # 芯
    C(bm, 0, 0, -0.155, 0.125, 0.125, 0.16, 12, JOINT, 'z')                   # 肩ボール
    L(bm, [(-0.20, 0.115, 0.120, 0, 0.000),                                   # 上腕
           (-0.30, 0.132, 0.140, 0, -0.004),
           (-0.46, 0.124, 0.132, 0, -0.004),
           (-0.58, 0.104, 0.112, 0, 0.000)], MAIN)
    C(bm, 0, 0, -0.625, 0.098, 0.098, 0.17, 10, JOINT, 'x')                   # 肘
    L(bm, [(-0.66, 0.108, 0.116, 0, 0.000),                                   # 前腕
           (-0.78, 0.142, 0.155, 0, -0.010),
           (-0.94, 0.150, 0.166, 0, -0.012),
           (-1.05, 0.130, 0.140, 0, -0.006)], MAIN)
    for sx in (-1, 1):
        L(bm, [(-0.76, 0.028, 0.110, sx * 0.160, -0.010),
               (-0.92, 0.032, 0.126, sx * 0.170, -0.012),
               (-1.03, 0.026, 0.098, sx * 0.158, -0.006)], ACC)
        B(bm, sx * 0.185, -0.120, -0.905, 0.010, 0.048, 0.042, TRIM)
    C(bm, 0, 0, -1.10, 0.085, 0.085, 0.06, 10, JOINT, 'z')                    # 手首
    L(bm, [(-1.13, 0.088, 0.095, 0, -0.010),
           (-1.20, 0.098, 0.110, 0, -0.014),
           (-1.26, 0.082, 0.092, 0, -0.010)], JOINT)
    finish(bm, 'arm', mats, bevel=0.009)

    bm = new_bm()
    L(bm, [(-0.80, 0.155, 0.048, 0, -0.145),
           (-0.72, 0.170, 0.055, 0, -0.160),
           (-0.64, 0.140, 0.044, 0, -0.140)], ACC)
    finish(bm, 'arm_fin', mats, bevel=0.007)


def build_leg(mats):
    # 脚は 1 本の剛体として扱う（膝は見た目だけ）。
    # 足の底は z = -1.50、腰の基準高さ HIP_Y=1.62・股関節オフセット -0.12 と合わせて
    # ちょうどワールド y=0 に接地する。ここがずれると足が地面に埋まる
    L, B, C = loft, boxs, cylz
    bm = new_bm()
    L(bm, [(-0.08, 0.135, 0.145, 0, 0), (-0.68, 0.115, 0.125, 0, 0)], FRAME)
    L(bm, [(-0.72, 0.115, 0.125, 0, 0), (-1.34, 0.115, 0.13, 0, 0)], FRAME)
    L(bm, [(-0.07, 0.150, 0.160, 0, 0.000),                       # 腿
           (-0.19, 0.185, 0.200, 0, -0.005),
           (-0.38, 0.180, 0.195, 0, -0.008),
           (-0.57, 0.152, 0.166, 0, -0.004),
           (-0.68, 0.130, 0.142, 0, 0.000)], MAIN)
    L(bm, [(-0.15, 0.118, 0.030, 0, -0.192),
           (-0.34, 0.126, 0.032, 0, -0.198),
           (-0.52, 0.102, 0.028, 0, -0.178)], ACC)
    C(bm, 0, 0, -0.045, 0.145, 0.145, 0.13, 12, JOINT, 'z')       # 股関節
    C(bm, 0, 0, -0.720, 0.112, 0.112, 0.21, 12, JOINT, 'x')       # 膝
    L(bm, [(-0.76, 0.148, 0.164, 0, -0.010),                      # 脛
           (-0.87, 0.192, 0.224, 0, -0.030),
           (-1.03, 0.206, 0.242, 0, -0.032),
           (-1.19, 0.188, 0.216, 0, -0.020),
           (-1.28, 0.142, 0.150, 0, -0.004)], MAIN)
    for sx in (-1, 1):
        L(bm, [(-0.89, 0.036, 0.150, sx * 0.210, -0.032),
               (-1.05, 0.040, 0.172, sx * 0.224, -0.034),
               (-1.19, 0.034, 0.140, sx * 0.212, -0.024)], ACC)
        B(bm, sx * 0.240, -0.058, -1.030, 0.012, 0.070, 0.055, TRIM)
    L(bm, [(-0.89, 0.048, 0.026, 0, -0.250),                      # 脛の前面ライン
           (-1.05, 0.056, 0.028, 0, -0.266),
           (-1.19, 0.046, 0.022, 0, -0.240)], TRIM)
    C(bm, 0, 0, -1.320, 0.100, 0.100, 0.17, 10, JOINT, 'x')       # 足首
    L(bm, [(-1.50, 0.195, 0.330, 0, -0.110),                      # 足
           (-1.42, 0.222, 0.360, 0, -0.120),
           (-1.32, 0.205, 0.300, 0, -0.090),
           (-1.25, 0.165, 0.215, 0, -0.055)], MAIN)
    L(bm, [(-1.50, 0.180, 0.058, 0, -0.398),                      # つま先
           (-1.41, 0.192, 0.064, 0, -0.408)], TRIM)
    L(bm, [(-1.48, 0.150, 0.078, 0, 0.238),                       # かかと
           (-1.34, 0.158, 0.084, 0, 0.226)], ACC)
    finish(bm, 'leg', mats, bevel=0.010)

    bm = new_bm()
    L(bm, [(-0.80, 0.100, 0.038, 0, -0.192),
           (-0.72, 0.120, 0.046, 0, -0.206),
           (-0.64, 0.096, 0.036, 0, -0.186)], ACC)
    finish(bm, 'leg_knee', mats, bevel=0.008)

    bm = new_bm()
    L(bm, [(-1.26, 0.145, 0.085, 0, 0.245),
           (-1.12, 0.160, 0.095, 0, 0.255),
           (-1.02, 0.130, 0.075, 0, 0.240)], ACC)
    for sx in (-1, 1):
        C(bm, sx * 0.075, 0.300, -1.22, 0.052, 0.062, 0.10, 10, JOINT, 'y')
    finish(bm, 'leg_calf', mats, bevel=0.008)


# ---------------------------------------------------------------- 肩
# 「左」用に +X 側へ伸ばして作る。右は three.js 側で scale.x = -1 する
# （three.js は行列式が負なら法線と面の向きを自動で反転させる）
def build_shoulders(mats):
    L, B, C = loft, boxs, cylz

    bm = new_bm()                                      # pad
    L(bm, [(-0.26, 0.185, 0.215, 0.13, 0.000),
           (-0.06, 0.225, 0.268, 0.17, -0.010),
           (0.12, 0.212, 0.250, 0.20, -0.006),
           (0.24, 0.150, 0.180, 0.21, 0.000)], MAIN)
    L(bm, [(-0.22, 0.028, 0.190, 0.395, -0.008),
           (0.04, 0.032, 0.226, 0.415, -0.012),
           (0.20, 0.024, 0.160, 0.400, -0.004)], TRIM)
    B(bm, 0.20, -0.262, -0.02, 0.105, 0.014, 0.048, FRAME)
    B(bm, 0.20, -0.262, 0.08, 0.105, 0.014, 0.030, FRAME)
    finish(bm, 'sh_pad', mats, bevel=0.010)

    bm = new_bm()                                      # spike
    C(bm, 0.17, 0, 0.00, 0.235, 0.255, 0.34, 14, ACC, 'x')
    C(bm, 0.36, 0, 0.00, 0.255, 0.150, 0.06, 14, TRIM, 'x')
    # 棘は外向きの円錐。ロフトで作ると Z 方向に潰れて棘に見えない
    for i in range(4):
        a = 2 * math.pi * i / 4 + math.pi / 4
        C(bm, 0.30, math.cos(a) * 0.195, math.sin(a) * 0.195,
          0.050, 0.004, 0.28, 8, TRIM, 'x')
    finish(bm, 'sh_spike', mats, bevel=0.008)

    bm = new_bm()                                      # shield（丸い肩）
    C(bm, 0.15, 0, 0.00, 0.215, 0.240, 0.30, 14, ACC, 'x')
    C(bm, 0.32, 0, 0.00, 0.240, 0.130, 0.06, 14, TRIM, 'x')
    finish(bm, 'sh_shield', mats, bevel=0.008)

    bm = new_bm()                                      # 盾本体（片腕だけ）
    L(bm, [(-0.62, 0.062, 0.300, 0.31, 0.000),
           (-0.20, 0.070, 0.385, 0.33, -0.010),
           (0.16, 0.066, 0.360, 0.33, -0.008),
           (0.36, 0.048, 0.250, 0.32, 0.000)], ACC)
    L(bm, [(-0.34, 0.026, 0.150, 0.395, -0.012),
           (0.14, 0.028, 0.165, 0.400, -0.012)], TRIM)
    finish(bm, 'sh_shieldplate', mats, bevel=0.009)

    bm = new_bm()                                      # cannon
    L(bm, [(-0.22, 0.200, 0.240, 0.18, 0.000),
           (0.02, 0.222, 0.262, 0.21, -0.006),
           (0.18, 0.190, 0.225, 0.22, 0.000)], MAIN)
    C(bm, 0.24, -0.10, 0.30, 0.062, 0.070, 0.92, 12, GUN, 'y')
    B(bm, 0.24, 0.20, 0.30, 0.085, 0.075, 0.090, JOINT)
    finish(bm, 'sh_cannon', mats, bevel=0.009)

    bm = new_bm()                                      # binder
    C(bm, 0.13, 0, 0.00, 0.185, 0.205, 0.28, 12, MAIN, 'x')
    L(bm, [(-0.52, 0.075, 0.290, 0.30, 0.048),
           (-0.10, 0.085, 0.340, 0.345, 0.056),
           (0.30, 0.078, 0.310, 0.375, 0.048),
           (0.56, 0.055, 0.190, 0.395, 0.030)], ACC)
    L(bm, [(-0.30, 0.030, 0.100, 0.435, -0.070),
           (0.24, 0.032, 0.110, 0.455, -0.070)], TRIM)
    finish(bm, 'sh_binder', mats, bevel=0.009)

    bm = new_bm()                                      # drum
    C(bm, 0.22, 0, 0.00, 0.215, 0.215, 0.42, 16, ACC, 'x')
    C(bm, 0.44, 0, 0.00, 0.225, 0.150, 0.05, 16, TRIM, 'x')
    C(bm, 0.02, 0, 0.00, 0.170, 0.170, 0.10, 12, JOINT, 'x')
    for i in range(6):
        a = 2 * math.pi * i / 6
        B(bm, 0.22, math.cos(a) * 0.185, math.sin(a) * 0.185, 0.190, 0.028, 0.028, TRIM)
    finish(bm, 'sh_drum', mats, bevel=0.007)

    bm = new_bm()                                      # wing
    L(bm, [(-0.20, 0.180, 0.215, 0.15, 0.000),
           (0.02, 0.198, 0.235, 0.18, -0.006),
           (0.16, 0.170, 0.200, 0.19, 0.000)], MAIN)
    L(bm, [(-0.10, 0.048, 0.180, 0.30, 0.060),
           (0.22, 0.052, 0.210, 0.40, 0.075),
           (0.58, 0.038, 0.150, 0.52, 0.055),
           (0.78, 0.020, 0.070, 0.60, 0.030)], ACC)
    finish(bm, 'sh_wing', mats, bevel=0.008)

    bm = new_bm()                                      # blade
    L(bm, [(-0.22, 0.190, 0.225, 0.17, 0.000),
           (0.02, 0.210, 0.248, 0.20, -0.006),
           (0.18, 0.180, 0.212, 0.21, 0.000)], MAIN)
    L(bm, [(-0.16, 0.038, 0.120, 0.31, 0.130),
           (0.10, 0.042, 0.135, 0.35, 0.180),
           (0.34, 0.034, 0.110, 0.38, 0.400),
           (0.48, 0.016, 0.055, 0.40, 0.560)], TRIM)
    L(bm, [(-0.10, 0.024, 0.090, 0.415, -0.110),
           (0.16, 0.026, 0.100, 0.425, -0.120)], ACC)
    finish(bm, 'sh_blade', mats, bevel=0.008)


# ---------------------------------------------------------------- 頭
def build_heads(mats):
    L, B, C = loft, boxs, cylz

    def neck(bm):
        C(bm, 0, 0, -0.055, 0.085, 0.095, 0.12, 10, JOINT, 'z')

    def helmet(bm, mi=MAIN):
        """兜。前へ向かって傾く面と頬の張り出しで顔らしさを出す"""
        L(bm, [(-0.02, 0.130, 0.135, 0, 0.000),
               (0.06, 0.158, 0.162, 0, -0.008),
               (0.18, 0.165, 0.168, 0, -0.010),
               (0.28, 0.140, 0.140, 0, -0.004),
               (0.34, 0.092, 0.095, 0, 0.000)], mi)

    def faceplate(bm):
        L(bm, [(0.02, 0.105, 0.030, 0, -0.150),
               (0.13, 0.122, 0.034, 0, -0.168),
               (0.22, 0.108, 0.030, 0, -0.156)], FRAME)

    bm = new_bm(); neck(bm); helmet(bm); faceplate(bm)         # visor
    B(bm, 0, -0.175, 0.155, 0.108, 0.016, 0.020, EYE)
    B(bm, 0, -0.168, 0.055, 0.058, 0.014, 0.032, TRIM)
    for sx in (-1, 1):
        L(bm, [(0.02, 0.022, 0.075, sx * 0.168, -0.020),
               (0.20, 0.024, 0.082, sx * 0.176, -0.026)], TRIM)
    B(bm, 0, -0.090, 0.290, 0.115, 0.028, 0.022, GOLD)         # V字アンテナ
    for sx in (-1, 1):
        L(bm, [(0.290, 0.030, 0.026, sx * 0.090, -0.085),
               (0.420, 0.012, 0.014, sx * 0.215, -0.055)], GOLD)
    B(bm, 0, -0.105, 0.300, 0.030, 0.030, 0.045, TRIM)
    finish(bm, 'hd_visor', mats, bevel=0.006)

    bm = new_bm(); neck(bm)                                    # mono
    L(bm, [(-0.02, 0.145, 0.150, 0, 0.000),
           (0.08, 0.175, 0.180, 0, -0.006),
           (0.20, 0.160, 0.165, 0, -0.006),
           (0.30, 0.100, 0.105, 0, 0.000)], MAIN)
    L(bm, [(0.06, 0.185, 0.038, 0, -0.150), (0.16, 0.190, 0.040, 0, -0.158)], FRAME)
    C(bm, 0, -0.190, 0.112, 0.038, 0.038, 0.05, 10, EYE, 'y')
    for i in range(3):
        C(bm, 0, 0.150 + i * 0.012, 0.24 - i * 0.06, 0.036, 0.036, 0.055, 8, JOINT, 'z')
    B(bm, 0, 0.150, 0.06, 0.070, 0.055, 0.055, JOINT)
    finish(bm, 'hd_mono', mats, bevel=0.006)

    bm = new_bm(); neck(bm); helmet(bm); faceplate(bm)         # crest
    B(bm, 0, -0.175, 0.155, 0.100, 0.016, 0.020, EYE)
    B(bm, 0, -0.168, 0.055, 0.055, 0.014, 0.030, TRIM)
    L(bm, [(0.26, 0.048, 0.185, 0, -0.010), (0.46, 0.026, 0.135, 0, -0.030)], GOLD)
    B(bm, 0, -0.098, 0.268, 0.140, 0.032, 0.020, GOLD)
    for sx in (-1, 1):
        L(bm, [(0.250, 0.026, 0.030, sx * 0.140, -0.020),
               (0.340, 0.012, 0.016, sx * 0.240, -0.010)], GOLD)
    finish(bm, 'hd_crest', mats, bevel=0.006)

    bm = new_bm(); neck(bm); helmet(bm); faceplate(bm)         # horn
    B(bm, 0, -0.175, 0.150, 0.098, 0.016, 0.018, EYE)
    L(bm, [(0.250, 0.036, 0.036, 0, -0.070), (0.460, 0.010, 0.010, 0, -0.175)], TRIM)
    B(bm, 0, -0.130, 0.240, 0.110, 0.030, 0.020, TRIM)
    finish(bm, 'hd_horn', mats, bevel=0.006)

    bm = new_bm(); neck(bm)                                    # dome
    L(bm, [(-0.02, 0.140, 0.145, 0, 0.000),
           (0.08, 0.180, 0.185, 0, -0.004),
           (0.20, 0.168, 0.172, 0, -0.004),
           (0.30, 0.105, 0.108, 0, 0.000)], MAIN)
    L(bm, [(0.06, 0.150, 0.035, 0, -0.160), (0.18, 0.150, 0.035, 0, -0.168)], FRAME)
    B(bm, 0, -0.192, 0.120, 0.128, 0.014, 0.016, EYE)
    L(bm, [(0.190, 0.190, 0.115, 0, -0.010), (0.265, 0.170, 0.100, 0, -0.006)], ACC)
    finish(bm, 'hd_dome', mats, bevel=0.006)

    bm = new_bm(); neck(bm)                                    # twin
    L(bm, [(-0.02, 0.155, 0.135, 0, 0.000),
           (0.08, 0.185, 0.160, 0, -0.008),
           (0.20, 0.170, 0.148, 0, -0.006),
           (0.28, 0.115, 0.100, 0, 0.000)], MAIN)
    L(bm, [(0.06, 0.180, 0.032, 0, -0.145), (0.18, 0.182, 0.034, 0, -0.150)], FRAME)
    for sx in (-1, 1):
        B(bm, sx * 0.078, -0.180, 0.120, 0.034, 0.014, 0.020, EYE)
    B(bm, 0, -0.020, 0.262, 0.215, 0.075, 0.028, ACC)
    for sx in (-1, 1):
        L(bm, [(0.02, 0.026, 0.062, sx * 0.196, -0.006),
               (0.20, 0.028, 0.068, sx * 0.202, -0.010)], TRIM)
    finish(bm, 'hd_twin', mats, bevel=0.006)

    bm = new_bm(); neck(bm); helmet(bm)                        # mask
    L(bm, [(-0.01, 0.112, 0.048, 0, -0.145),
           (0.10, 0.128, 0.054, 0, -0.162),
           (0.18, 0.112, 0.046, 0, -0.150)], ACC)
    B(bm, 0, -0.185, 0.185, 0.115, 0.016, 0.014, EYE)
    L(bm, [(0.24, 0.040, 0.048, 0, -0.020), (0.40, 0.024, 0.030, 0, -0.010)], TRIM)
    for sx in (-1, 1):
        L(bm, [(0.240, 0.024, 0.026, sx * 0.075, 0.010),
               (0.400, 0.012, 0.014, sx * 0.145, 0.030)], TRIM)
    finish(bm, 'hd_mask', mats, bevel=0.006)


# ---------------------------------------------------------------- バックパック
# 原点 = torso グループ。背中は Blender の +Y 側。
# 噴射炎は加算合成なので three.js 側のまま。ここでは固い部分だけ作る
def build_backs(mats):
    L, B, C = loft, boxs, cylz

    def core(bm, w=0.30, h=0.26, d=0.13, z=0.34, y=0.34, mi=MAIN):
        L(bm, [(z - h, w * 0.92, d, 0, y),
               (z + h * 0.3, w, d * 1.08, 0, y + 0.008),
               (z + h, w * 0.78, d * 0.9, 0, y)], mi)
        B(bm, 0, y - d - 0.02, z, w * 0.80, 0.022, h * 0.72, FRAME)
        for sx in (-1, 1):
            C(bm, sx * 0.155, y + d * 0.55, z - h - 0.06, 0.078, 0.092, 0.14, 10, JOINT, 'y')

    bm = new_bm(); core(bm)                                    # pack
    B(bm, 0, 0.455, 0.50, 0.215, 0.035, 0.045, TRIM)
    for sx in (-1, 1):
        L(bm, [(0.16, 0.048, 0.075, sx * 0.235, 0.360),
               (0.46, 0.052, 0.082, sx * 0.245, 0.370)], ACC)
    finish(bm, 'bk_pack', mats, bevel=0.009)

    bm = new_bm(); core(bm, mi=ACC)                            # wings
    for sx in (-1, 1):
        L(bm, [(0.10, 0.055, 0.135, sx * 0.300, 0.400),
               (0.42, 0.062, 0.165, sx * 0.400, 0.430),
               (0.78, 0.048, 0.125, sx * 0.520, 0.400),
               (1.00, 0.024, 0.060, sx * 0.600, 0.370)], ACC)
        L(bm, [(0.52, 0.026, 0.070, sx * 0.470, 0.480),
               (0.86, 0.022, 0.055, sx * 0.560, 0.450)], TRIM)
    finish(bm, 'bk_wings', mats, bevel=0.008)

    bm = new_bm(); core(bm)                                    # cannon
    for sx in (-1, 1):
        C(bm, sx * 0.150, 0.34, 0.62, 0.058, 0.070, 1.05, 12, GUN, 'z')
        B(bm, sx * 0.150, 0.34, 0.16, 0.085, 0.090, 0.085, JOINT)
    B(bm, 0, 0.400, 0.62, 0.180, 0.095, 0.055, ACC)
    finish(bm, 'bk_cannon', mats, bevel=0.008)

    bm = new_bm(); core(bm, mi=ACC)                            # funnels
    for i in range(4):
        sx = -1 if i < 2 else 1
        x = sx * (0.155 + (i % 2) * 0.115)
        z = 0.28 + (i % 2) * 0.24
        L(bm, [(z - 0.115, 0.052, 0.058, x, 0.420),
               (z, 0.062, 0.070, x, 0.435),
               (z + 0.115, 0.040, 0.046, x, 0.420)], TRIM)
        B(bm, x, 0.492, z, 0.030, 0.020, 0.034, GLOW)
    finish(bm, 'bk_funnels', mats, bevel=0.007)

    bm = new_bm(); core(bm, w=0.26)                            # booster
    for sx in (-1, 1):
        C(bm, sx * 0.215, 0.40, 0.34, 0.088, 0.115, 0.72, 12, ACC, 'z')
        C(bm, sx * 0.215, 0.40, -0.05, 0.118, 0.135, 0.10, 12, JOINT, 'z')
    finish(bm, 'bk_booster', mats, bevel=0.008)

    bm = new_bm(); core(bm)                                    # tank
    for sx in (-1, 1):
        C(bm, sx * 0.235, 0.42, 0.32, 0.115, 0.115, 0.62, 14, ACC, 'y')
        C(bm, sx * 0.235, 0.74, 0.32, 0.125, 0.075, 0.05, 14, TRIM, 'y')
    B(bm, 0, 0.400, 0.62, 0.195, 0.090, 0.048, TRIM)
    finish(bm, 'bk_tank', mats, bevel=0.008)

    bm = new_bm(); core(bm)                                    # blades
    for sx in (-1, 1):
        L(bm, [(-0.02, 0.042, 0.115, sx * 0.150, 0.420),
               (0.34, 0.046, 0.130, sx * 0.200, 0.440),
               (0.76, 0.034, 0.095, sx * 0.250, 0.420),
               (0.98, 0.014, 0.042, sx * 0.275, 0.400)], TRIM)
    B(bm, 0, 0.420, 0.16, 0.170, 0.070, 0.055, ACC)
    finish(bm, 'bk_blades', mats, bevel=0.008)


# ---------------------------------------------------------------- 銃
# 原点 = gun グループ。銃身は Blender の -Y（＝ゲームの +Z）へ伸びる。
# 銃口の位置は mechmodel.js の reach と合わせること
def build_guns(mats):
    LY, B, C = lofty, boxs, cylz

    def grip(bm):
        """握りと機関部。銃身と直交するのでこちらは Z 方向に積む"""
        loft(bm, [(-0.150, 0.040, 0.046, 0, 0.030),
                  (-0.070, 0.048, 0.054, 0, 0.014),
                  (0.005, 0.044, 0.050, 0, 0.004)], GUN)

    bm = new_bm(); grip(bm)                                    # rifle
    LY(bm, [(0.120, 0.052, 0.050, 0, 0.000),
            (-0.060, 0.064, 0.064, 0, 0.006),
            (-0.300, 0.052, 0.052, 0, 0.002),
            (-0.480, 0.040, 0.040, 0, 0.000)], GUN)
    LY(bm, [(-0.480, 0.028, 0.028, 0, 0.000),
            (-0.840, 0.024, 0.024, 0, 0.000)], GUN)            # 銃身
    B(bm, 0, -0.120, 0.078, 0.030, 0.090, 0.026, TRIM)         # スコープ
    C(bm, 0, -0.885, 0.000, 0.026, 0.026, 0.09, 8, GLOW, 'y')  # 発光口
    finish(bm, 'gun_rifle', mats, bevel=0.006)

    bm = new_bm(); grip(bm)                                    # machinegun
    LY(bm, [(0.140, 0.056, 0.052, 0, 0.000),
            (-0.040, 0.066, 0.062, 0, 0.004),
            (-0.260, 0.052, 0.050, 0, 0.000),
            (-0.400, 0.040, 0.038, 0, 0.000)], GUN)
    LY(bm, [(-0.400, 0.026, 0.026, 0, 0.000),
            (-0.740, 0.022, 0.022, 0, 0.000)], GUN)
    C(bm, 0, -0.120, -0.030, 0.078, 0.078, 0.05, 12, GUN, 'x')  # ドラムマガジン
    finish(bm, 'gun_machinegun', mats, bevel=0.006)

    bm = new_bm(); grip(bm)                                    # cannon
    LY(bm, [(0.180, 0.078, 0.074, 0, 0.000),
            (-0.080, 0.096, 0.092, 0, 0.006),
            (-0.420, 0.084, 0.080, 0, 0.002),
            (-0.640, 0.070, 0.068, 0, 0.000)], GUN)
    LY(bm, [(-0.640, 0.058, 0.058, 0, 0.000),
            (-1.060, 0.052, 0.052, 0, 0.000)], GUN)
    C(bm, 0, -1.140, 0.000, 0.072, 0.064, 0.12, 12, TRIM, 'y')  # マズルブレーキ
    finish(bm, 'gun_cannon', mats, bevel=0.007)

    bm = new_bm(); grip(bm)                                    # twin
    LY(bm, [(0.120, 0.070, 0.048, 0, 0.000),
            (-0.080, 0.086, 0.058, 0, 0.004),
            (-0.240, 0.072, 0.050, 0, 0.000)], GUN)
    for sx in (-1, 1):
        C(bm, sx * 0.044, -0.500, 0.000, 0.026, 0.024, 0.54, 8, GUN, 'y')
    finish(bm, 'gun_twin', mats, bevel=0.006)

    bm = new_bm(); grip(bm)                                    # bow（長銃身の狙撃型）
    LY(bm, [(0.140, 0.046, 0.044, 0, 0.000),
            (-0.060, 0.072, 0.086, 0, 0.014),
            (-0.340, 0.058, 0.062, 0, 0.006),
            (-0.560, 0.040, 0.040, 0, 0.000)], GUN)
    LY(bm, [(-0.560, 0.024, 0.024, 0, 0.000),
            (-1.220, 0.020, 0.020, 0, 0.000)], GUN)
    B(bm, 0, -0.200, 0.100, 0.026, 0.130, 0.030, TRIM)         # 長いスコープ
    C(bm, 0, -1.280, 0.000, 0.024, 0.024, 0.11, 8, GLOW, 'y')
    finish(bm, 'gun_bow', mats, bevel=0.006)

    bm = new_bm(); grip(bm)                                    # gatling
    C(bm, 0, -0.420, 0.000, 0.092, 0.092, 0.60, 12, GUN, 'y')
    for i in range(5):
        a = 2 * math.pi * i / 5
        C(bm, math.cos(a) * 0.058, -0.480, math.sin(a) * 0.058,
          0.021, 0.021, 0.68, 6, GUN, 'y')
    C(bm, 0, -0.070, 0.000, 0.080, 0.096, 0.14, 12, JOINT, 'y')
    finish(bm, 'gun_gatling', mats, bevel=0.005)

    bm = new_bm()                                              # サーベルの柄
    C(bm, 0, -0.060, 0, 0.030, 0.026, 0.20, 10, JOINT, 'y')
    C(bm, 0, -0.175, 0, 0.038, 0.038, 0.05, 10, TRIM, 'y')
    finish(bm, 'saber_grip', mats, bevel=0.004)


# ---------------------------------------------------------------- 実行
def main(out_path=None, clear=True):
    if clear:
        bpy.ops.object.select_all(action='SELECT')
        bpy.ops.object.delete(use_global=False)
        for blk in (bpy.data.meshes, bpy.data.materials):
            for d in list(blk):
                if d.users == 0:
                    blk.remove(d)

    mats = ensure_mats()
    build_torso(mats)
    build_pelvis(mats)
    build_arm(mats)
    build_leg(mats)
    build_shoulders(mats)
    build_heads(mats)
    build_backs(mats)
    build_guns(mats)

    if out_path is None:
        here = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd()
        out_path = os.path.join(here, '..', 'public', 'models', 'mechparts.glb')
    out_path = os.path.abspath(out_path)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    bpy.ops.object.select_all(action='SELECT')
    bpy.context.view_layer.objects.active = bpy.data.objects['torso']
    kw = dict(filepath=out_path, export_format='GLB', use_selection=True,
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

    return {
        'out': out_path,
        'kb': round(os.path.getsize(out_path) / 1024, 1),
        'parts': sorted(o.name for o in bpy.data.objects),
    }


if __name__ == '__main__':
    print(main())
