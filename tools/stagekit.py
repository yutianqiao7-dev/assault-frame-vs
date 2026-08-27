# ASSAULT FRAME VS - ステージ生成の共通部品
#
# blender_ruins.py / blender_canyon.py から使う。
# （blender_colony.py は先に単体で書いたので、そちらは自前で持っている）
#
# どのステージでも守る決まりごと:
#   * プレイ範囲は y=0 の平面。地形の起伏は ARENA_R の外側だけで見せる。
#     こうしておけば物理も当たり判定も一切変えずに済む。
#   * 当たり判定は軸に沿った箱だけ。src/collision.js の
#     { minX, maxX, minZ, maxZ, top } の形で JSON に吐く。
#   * 開始位置 (ゲーム座標 0, ±42) とその後ろのカメラが入る空間は空ける。
#     塞ぐと開幕でカメラが機体にめり込んで何も見えない。
#
# 座標: Blender は Z 上。glTF 書き出しで
#   gameX = blenderX, gameY = blenderZ, gameZ = -blenderY

import bpy
import bmesh
import math
import json
import os
import random

ARENA_R = 95.0            # src/config.js と揃えること
SPAWN_Z = 42.0            # 開始位置（ゲーム座標）
KEEPOUT = [(-17.0, 17.0, 28.0, 70.0), (-17.0, 17.0, -70.0, -28.0)]   # Blender の XY


# ---------------------------------------------------------------- マテリアル
def _bsdf(mat):
    for n in mat.node_tree.nodes:
        if n.bl_idname == 'ShaderNodeBsdfPrincipled':
            return n
    raise RuntimeError('principled node not found')


def make_mat(name, base, rough=0.8, metal=0.0, emit=None, emit_str=0.0):
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


def ensure_mats(spec):
    """spec: { name: (rgb, rough, metal[, emit_rgb, emit_str]) }"""
    out = {}
    for n, v in spec.items():
        base, rough, metal = v[0], v[1], v[2]
        emit = v[3] if len(v) > 3 else None
        estr = v[4] if len(v) > 4 else 0.0
        out[n] = make_mat(n, base, rough, metal, emit, estr)
    return out


# ---------------------------------------------------------------- 形状
def loft(bm, sections, mi=0, cap_bottom=True, cap_top=True):
    """[(z, hx, hy, ox, oy)] を積む。断面が変わるので絞りや広がりが出せる"""
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
            bm.faces.new((a[k], a[j], b[j], b[k])).material_index = mi
    if cap_bottom:
        bm.faces.new(tuple(reversed(rings[0]))).material_index = mi
    if cap_top:
        bm.faces.new(tuple(rings[-1])).material_index = mi
    return rings


def ring_loft(bm, rings_xyz, mi=0, cap_bottom=True, cap_top=True, close=True):
    """任意の頂点数のリングを積む。岩のように断面が円形でないものはこちら。
    rings_xyz: [[(x,y,z), ...], ...]（各リングの頂点数は同じであること）"""
    rings = [[bm.verts.new(p) for p in r] for r in rings_xyz]
    n = len(rings_xyz[0])
    for i in range(len(rings) - 1):
        a, b = rings[i], rings[i + 1]
        for k in range(n if close else n - 1):
            j = (k + 1) % n
            bm.faces.new((a[k], a[j], b[j], b[k])).material_index = mi
    if cap_bottom:
        bm.faces.new(tuple(reversed(rings[0]))).material_index = mi
    if cap_top:
        bm.faces.new(tuple(rings[-1])).material_index = mi
    return rings


def boxs(bm, x0, x1, y0, y1, z0, z1, mi=0):
    verts = {}

    def V(x, y, z):
        k = (round(x, 4), round(y, 4), round(z, 4))
        if k not in verts:
            verts[k] = bm.verts.new((x, y, z))
        return verts[k]

    quads = [[(x0, y0, z0), (x1, y0, z0), (x1, y1, z0), (x0, y1, z0)][::-1],
             [(x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)],
             [(x0, y0, z0), (x0, y1, z0), (x0, y1, z1), (x0, y0, z1)],
             [(x1, y0, z0), (x1, y0, z1), (x1, y1, z1), (x1, y1, z0)],
             [(x0, y0, z0), (x0, y0, z1), (x1, y0, z1), (x1, y0, z0)],
             [(x0, y1, z0), (x1, y1, z0), (x1, y1, z1), (x0, y1, z1)]]
    for q in quads:
        bm.faces.new([V(*p) for p in q]).material_index = mi


def slab(bm, cx, cy, cz, hx, hy, hz, yaw=0.0, pitch=0.0, mi=0):
    """傾けられる板。瓦礫や折れた鉄骨に使う。
    当たり判定は別に持つので、これは見た目だけの存在でよい"""
    cs, sn = math.cos(yaw), math.sin(yaw)
    cp, sp = math.cos(pitch), math.sin(pitch)
    pts = []
    for sx in (-1, 1):
        for sy in (-1, 1):
            for sz in (-1, 1):
                x, y, z = sx * hx, sy * hy, sz * hz
                y, z = y * cp - z * sp, y * sp + z * cp        # X 軸まわり
                x, y = x * cs - y * sn, x * sn + y * cs        # Z 軸まわり
                pts.append((cx + x, cy + y, cz + z))
    # pts の並び: (sx,sy,sz) の順で 000,001,010,011,100,101,110,111
    idx = [(0, 2, 3, 1), (4, 5, 7, 6), (0, 1, 5, 4),
           (2, 6, 7, 3), (0, 4, 6, 2), (1, 3, 7, 5)]
    vs = [bm.verts.new(p) for p in pts]
    for q in idx:
        bm.faces.new([vs[i] for i in q]).material_index = mi


def cylz(bm, cx, cy, cz, r0, r1, h, seg=10, mi=0, axis='z'):
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


def to_object(bm, name, mats, mat_order, smooth=False):
    """bmesh を確定してオブジェクトにする。
    自前で面を張っているので、最後に必ず法線を計算し直す。
    これを忘れると three.js の背面カリングで内側が見えて真っ黒になる"""
    me = bpy.data.meshes.new(name)
    for n in mat_order:
        me.materials.append(mats[n])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    if smooth:
        for p in me.polygons:
            p.use_smooth = True
    ob = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(ob)
    return ob


# ---------------------------------------------------------------- 配置
def blocked(x0, x1, y0, y1):
    return any(x0 < kx1 and x1 > kx0 and y0 < ky1 and y1 > ky0
               for (kx0, kx1, ky0, ky1) in KEEPOUT)


class Placer:
    """アリーナ内に重ならないように物を置き、ゲーム座標の AABB を貯める"""

    def __init__(self, seed):
        self.rnd = random.Random(seed)
        self.placed = []
        self.boxes = []

    def free(self, cx, cy, hw, hd, gap):
        if blocked(cx - hw, cx + hw, cy - hd, cy + hd):
            return False
        return all(not (abs(cx - px) < hw + phw + gap and abs(cy - py) < hd + phd + gap)
                   for (px, py, phw, phd) in self.placed)

    def add(self, cx, cy, hw, hd, top, shrink=0.0):
        """shrink: 見た目より当たり判定を内側に寄せる量。
        岩のように輪郭がでこぼこな物は少し内側にしないと、
        見えている面より手前で弾かれて不自然になる"""
        self.placed.append((cx, cy, hw, hd))
        h2, d2 = hw - shrink, hd - shrink
        self.boxes.append({'minX': round(cx - h2, 2), 'maxX': round(cx + h2, 2),
                           'minZ': round(-cy - d2, 2), 'maxZ': round(-cy + d2, 2),
                           'top': round(top, 2)})

    def scatter(self, want, rmin, rmax, gap, tries=2000):
        """(cx, cy) を順に返す。呼び側で大きさを決めて add() する"""
        got, n = 0, 0
        while got < want and n < tries:
            n += 1
            a = self.rnd.random() * math.tau
            r = rmin + (rmax - rmin) * math.sqrt(self.rnd.random())
            yield math.cos(a) * r, math.sin(a) * r
            got = len(self.placed)


# ---------------------------------------------------------------- 書き出し
def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    for blk in (bpy.data.meshes, bpy.data.materials):
        for d in list(blk):
            if d.users == 0:
                blk.remove(d)


def verify(boxes):
    """開始位置・カメラ位置・中央が空いているかの検算（ゲーム座標）"""
    def hits(gx, gz, pad=3.0):
        return sum(1 for b in boxes if gx > b['minX'] - pad and gx < b['maxX'] + pad
                   and gz > b['minZ'] - pad and gz < b['maxZ'] + pad)
    return {
        'spawn_clear': hits(0, -SPAWN_Z) == 0 and hits(0, SPAWN_Z) == 0,
        'camera_clear': hits(0, -58) == 0 and hits(0, 58) == 0,
        'center_clear': hits(0, 0) == 0,
    }


def export(names, boxes, glb_path, json_path, active=None):
    glb_path, json_path = os.path.abspath(glb_path), os.path.abspath(json_path)
    os.makedirs(os.path.dirname(glb_path), exist_ok=True)

    bpy.ops.object.select_all(action='DESELECT')
    for n in names:
        bpy.data.objects[n].select_set(True)
    bpy.context.view_layer.objects.active = bpy.data.objects[active or names[0]]
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

    out = {'glb_kb': round(os.path.getsize(glb_path) / 1024, 1), 'boxes': len(boxes)}
    out.update(verify(boxes))
    return out


def out_paths(name):
    here = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd()
    models = os.path.join(here, '..', 'public', 'models')
    return (os.path.join(models, name + '.glb'),
            os.path.join(models, name + '_boxes.json'))
