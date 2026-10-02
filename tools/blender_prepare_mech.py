# 機体モデルを丸ごとゲームへ持ち込むための下ごしらえ（個人用）
#
# ゲームの機体は「腰・胴・頭・左右の腕・左右の脚」の 7 つの関節で動く。
# 手に入れたモデルをこの 7 部位に切り分けて GLB に書き出すのがこのスクリプトの仕事。
#
# 使い方:
#   1. Blender で機体モデルを開く / 読み込む（File > Import で .fbx / .obj / .glb / .pmx など）
#   2. Scripting タブでこのファイルを開き、下の設定を確認して STEP = 'sort' のまま実行（Alt+P）
#        → AF_pelvis / AF_torso / AF_head / AF_armL / AF_armR / AF_legL / AF_legR に振り分けられる
#          ボーン入りのモデルはボーンの名前で、ボーンが無ければ部品の位置で振り分ける
#   3. アウトライナーで振り分けを確認する。間違っている部品は選んで M キーで正しいコレクションへ
#        AF_gun    … 右手に持たせる武器（無ければゲーム側の銃を持つ）
#        AF_ignore … 書き出さない物（台座・エフェクト・左手の盾以外の小物など）
#      腕は「機体から見て」左が armL。正面から見ると画面の右側にある腕が armL
#   4. STEP = 'export' にして実行 → プロジェクトの local/models/<NAME>.glb ができる
#   5. src/mechs.local.js で、使いたい機体に model: '<NAME>.glb' を足して npm run dev
#
# 関節の位置は、ボーンがあればそこから空オブジェクト j_armL などとして作る。無ければゲーム側が
# 部位の外形から推定する。肩や股の回る位置がおかしいときは、AF_joints に空オブジェクトを
# 置いて名前を j_torso / j_head / j_armL / j_armR / j_legL / j_legR / j_handL / j_handR にする。
# 銃口は muzzle、背中の噴射口は thruster1, thruster2 … という名前の空オブジェクトで指定できる。
#
# 元のモデルは AF_source コレクションに移して隠すだけで、消したり書き換えたりはしない。
# sort はやり直しても元のモデルから作り直す（手で直した振り分けは消えるので注意）。
#
# local/ は .gitignore 済み、しかも本番ビルドには入らない場所なので、公開版には出ない。

import os
import re
from collections import deque

import bpy
import bmesh
from mathutils import Matrix, Vector

# ------------------------------------------------------------------ 設定
STEP = 'sort'          # 'sort'（振り分け）か 'export'（書き出し）
NAME = 'mymech'        # 書き出すファイル名（local/models/<NAME>.glb）
FACING = '-Y'          # 機体の正面。テンキー 1 のフロントビューで顔が見えるなら '-Y'、背中なら '+Y'
OUT_DIR = None         # None ならこのスクリプトから見た ../local/models
# ------------------------------------------------------------------

CATS = ['pelvis', 'torso', 'head', 'armL', 'armR', 'legL', 'legR', 'gun', 'ignore']
RESERVED = set(CATS) | {'muzzle'}
SRC = 'AF_source'
JOINTS = 'AF_joints'


def col_name(cat):
    return 'AF_' + cat


def ensure_collection(name, parent=None):
    col = bpy.data.collections.get(name)
    if col is None:
        col = bpy.data.collections.new(name)
    parent = parent or bpy.context.scene.collection
    if col.name not in parent.children:
        parent.children.link(col)
    return col


def layer_collection(name, lc=None):
    lc = lc or bpy.context.view_layer.layer_collection
    if lc.name == name:
        return lc
    for ch in lc.children:
        r = layer_collection(name, ch)
        if r:
            return r
    return None


def move_to(obj, col):
    for c in list(obj.users_collection):
        c.objects.unlink(obj)
    col.objects.link(obj)


# ---------------------------------------------------------- ボーン名 → 部位
# 英語（Mixamo / Unreal / Unity / Rigify）と MMD の日本語ボーン名に対応
ARM_WORDS = ['shoulder', 'clavicle', 'arm', 'elbow', 'hand', 'wrist', 'finger', 'thumb',
             'index', 'middle', 'ring', 'pinky', 'palm', '肩', '腕', 'ひじ', '肘', '手', '指']
LEG_WORDS = ['thigh', 'leg', 'knee', 'calf', 'shin', 'foot', 'toe', 'ankle', 'heel',
             '足', '脚', 'ひざ', '膝', 'つま先']
HEAD_WORDS = ['head', '頭', 'eye', '目']
PELVIS_WORDS = ['hip', 'pelvis', 'root', 'waist', '下半身', 'センター', '腰']
TORSO_WORDS = ['spine', 'chest', 'neck', 'torso', 'body', '上半身', '首']


def bone_part(name):
    n = name.lower()
    n = n.split(':')[-1]                       # mixamorig:LeftArm → leftarm
    n = n.replace('armour', '').replace('armor', '')   # 「装甲」の arm で腕と誤認しない
    if any(w in n for w in HEAD_WORDS) and 'fore' not in n:
        return 'head'
    if any(w in n for w in ARM_WORDS):
        return 'arm'
    if any(w in n for w in LEG_WORDS):
        return 'leg'
    if any(w in n for w in PELVIS_WORDS):
        return 'pelvis'
    if any(w in n for w in TORSO_WORDS):
        return 'torso'
    return None


def bone_side(name):
    n = name.lower().split(':')[-1]
    if 'left' in n or '左' in n or re.search(r'(^|[._\-\s])l($|[._\-\s\d])', n):
        return 'L'
    if 'right' in n or '右' in n or re.search(r'(^|[._\-\s])r($|[._\-\s\d])', n):
        return 'R'
    return None


# ---------------------------------------------------------- 位置による振り分け
# 全高を 1 にしたときの比率。標準の機体（全高 3.0）で肩は 0.76、腰は 0.54、
# 腕の付け根は中心から 0.17、脚は 0.07 くらい
def spatial_part(c, box):
    lo, hi = box
    h = max(hi.z - lo.z, 1e-6)
    zr = (c.z - lo.z) / h
    xr = (c.x - (lo.x + hi.x) / 2) / h
    if zr > 0.84 and abs(xr) < 0.09:
        return 'head', xr
    if abs(xr) >= 0.12 and zr > 0.3:
        return 'arm', xr
    if zr < 0.5:
        if abs(xr) < 0.03 and zr > 0.4:
            return 'pelvis', xr
        return 'leg', xr
    if zr < 0.58:
        return 'pelvis', xr
    return 'torso', xr


def side_from_x(xr):
    # 正面が -Y なら、機体から見た左は +X
    left = xr > 0 if FACING == '-Y' else xr < 0
    return 'L' if left else 'R'


# ---------------------------------------------------------- sort
def find_armature(obj):
    for m in obj.modifiers:
        if m.type == 'ARMATURE' and m.object:
            return m.object
    if obj.parent and obj.parent.type == 'ARMATURE':
        return obj.parent
    return None


def evaluated_copy(obj):
    """モディファイア（ミラー・ベベル等）は適用、アーマチュアだけ外したレストポーズの形を取る"""
    arm_mods = [m for m in obj.modifiers if m.type == 'ARMATURE']
    saved = [m.show_viewport for m in arm_mods]
    for m in arm_mods:
        m.show_viewport = False
    dg = bpy.context.evaluated_depsgraph_get()
    dg.update()
    ev = obj.evaluated_get(dg)
    me = bpy.data.meshes.new_from_object(ev, preserve_all_data_layers=True, depsgraph=dg)
    for m, v in zip(arm_mods, saved):
        m.show_viewport = v
    return me


def islands(bm):
    seen = set()
    out = []
    for f in bm.faces:
        if f.index in seen:
            continue
        group = []
        q = deque([f])
        seen.add(f.index)
        while q:
            cur = q.popleft()
            group.append(cur)
            for v in cur.verts:
                for nf in v.link_faces:
                    if nf.index not in seen:
                        seen.add(nf.index)
                        q.append(nf)
        out.append(group)
    return out


def world_box(objs):
    lo = Vector((1e18, 1e18, 1e18))
    hi = Vector((-1e18, -1e18, -1e18))
    for o in objs:
        for corner in o.bound_box:
            p = o.matrix_world @ Vector(corner)
            lo = Vector(map(min, lo, p))
            hi = Vector(map(max, hi, p))
    return lo, hi


def make_joints(arm, joints_col):
    """ボーンの付け根から関節位置の空オブジェクトを作る"""
    for o in list(joints_col.objects):
        bpy.data.objects.remove(o)
    found = {}
    mw = arm.matrix_world
    # 親から順に見て、各部位で最初に出てきたボーンを使う
    order = []
    q = deque([b for b in arm.data.bones if b.parent is None])
    while q:
        b = q.popleft()
        order.append(b)
        q.extend(b.children)
    for b in order:
        n = b.name.lower()
        # IK や操作用のボーン（変形しない）は関節の位置ではない
        if not b.use_deform or 'ik' in n or 'ＩＫ' in b.name:
            continue
        part = bone_part(b.name)
        side = bone_side(b.name) or side_from_x((mw @ b.head_local).x)
        key = None
        if part == 'torso' and 'neck' not in n and '首' not in n:
            key = 'torso'
        elif part == 'head':
            key = 'head'
        elif part == 'arm':
            if any(w in n for w in ['shoulder', 'clavicle', '肩']):
                continue                      # 鎖骨ではなく上腕の付け根で回す
            if any(w in n for w in ['hand', 'wrist', '手首']) and ('hand' + side) not in found:
                found['hand' + side] = mw @ b.head_local
            key = 'arm' + side
        elif part == 'leg':
            key = 'leg' + side
        if key and key not in found:
            found[key] = mw @ b.head_local
    for key, p in found.items():
        e = bpy.data.objects.new('j_' + key, None)
        e.empty_display_type = 'SPHERE'
        e.empty_display_size = 0.05 * max(arm.dimensions)
        e.location = p
        joints_col.objects.link(e)
    return sorted(found)


def sort_model():
    scene = bpy.context.scene
    src_col = bpy.data.collections.get(SRC)
    if src_col is None:
        sources = [o for o in scene.objects
                   if o.type == 'MESH' and o.visible_get() and not any(c.name.startswith('AF_') for c in o.users_collection)]
        if not sources:
            raise RuntimeError('メッシュが見つかりません。先にモデルを読み込んでください')
        src_col = ensure_collection(SRC)
        for o in sources:
            move_to(o, src_col)
    else:
        sources = [o for o in src_col.objects if o.type == 'MESH']
        layer_collection(SRC).exclude = False

    root = ensure_collection('AF_parts')
    cols = {c: ensure_collection(col_name(c), root) for c in CATS}
    joints_col = ensure_collection(JOINTS, root)
    for c in cols.values():
        for o in list(c.objects):
            bpy.data.objects.remove(o)

    box = world_box(sources)
    arm = None
    counts = {c: 0 for c in CATS}

    for obj in sources:
        rig = find_armature(obj)
        if rig:
            arm = rig
        bones = set(rig.data.bones.keys()) if rig else set()
        groups = [g.name for g in obj.vertex_groups]
        me = evaluated_copy(obj)
        bm = bmesh.new()
        bm.from_mesh(me)
        bm.transform(obj.matrix_world)
        bm.faces.ensure_lookup_table()
        deform = bm.verts.layers.deform.active

        by_cat = {}
        for isl in islands(bm):
            verts = {v for f in isl for v in f.verts}
            c = sum((v.co for v in verts), Vector()) / len(verts)
            part = None
            side = None
            if deform is not None and bones:
                score = {}
                for v in verts:
                    for gi, w in v[deform].items():
                        if gi < len(groups) and groups[gi] in bones:
                            score[groups[gi]] = score.get(groups[gi], 0.0) + w
                if score:
                    bone = max(score, key=score.get)
                    part = bone_part(bone)
                    side = bone_side(bone)
            sp, xr = spatial_part(c, box)
            part = part or sp
            if part in ('arm', 'leg'):
                cat = part + (side or side_from_x(xr))
            else:
                cat = part
            by_cat.setdefault(cat, set()).update(f.index for f in isl)

        # ウェイトは振り分けにしか使わない。残すと持ち主のいない頂点グループになって
        # glTF の書き出しが「不正なメッシュ」と警告する
        if deform is not None:
            bm.verts.layers.deform.remove(deform)

        for cat, faces in by_cat.items():
            if len(by_cat) == 1:
                me2 = bpy.data.meshes.new(me.name)
                bm.to_mesh(me2)
            else:
                b2 = bm.copy()
                b2.faces.index_update()
                b2.faces.ensure_lookup_table()
                kill = [f for f in b2.faces if f.index not in faces]
                bmesh.ops.delete(b2, geom=kill, context='FACES')
                me2 = bpy.data.meshes.new(me.name)
                b2.to_mesh(me2)
                b2.free()
            for mat in me.materials:
                me2.materials.append(mat)
            # オブジェクト側に付いたマテリアルも引き継ぐ
            nobj = bpy.data.objects.new(f'{obj.name}_{cat}', me2)
            for i, slot in enumerate(obj.material_slots):
                if slot.link == 'OBJECT' and i < len(nobj.material_slots):
                    nobj.material_slots[i].link = 'OBJECT'
                    nobj.material_slots[i].material = slot.material
            cols[cat].objects.link(nobj)
            counts[cat] += 1
        bm.free()
        bpy.data.meshes.remove(me)

    joints = make_joints(arm, joints_col) if arm else []
    layer_collection(SRC).exclude = True
    if arm:
        arm.hide_set(True)
    return {'parts': counts, 'joints': joints, 'rigged': bool(arm)}


# ---------------------------------------------------------- export
def out_dir():
    if OUT_DIR:
        return bpy.path.abspath(OUT_DIR)
    here = None
    try:
        here = os.path.dirname(os.path.abspath(__file__))
    except NameError:
        pass
    if not here or not os.path.isdir(here):
        txt = getattr(bpy.context.space_data, 'text', None)
        if txt and txt.filepath:
            here = os.path.dirname(bpy.path.abspath(txt.filepath))
    if not here or not os.path.isdir(here):
        raise RuntimeError('書き出し先が分かりません。OUT_DIR にプロジェクトの local/models を指定してください')
    return os.path.normpath(os.path.join(here, '..', 'local', 'models'))


def export_model():
    root_col = bpy.data.collections.get('AF_parts')
    if root_col is None:
        raise RuntimeError("先に STEP = 'sort' を実行してください")

    def empty(name):
        e = bpy.data.objects.get(name)
        if e is not None and e.type != 'EMPTY':
            # 元モデルに同じ名前の部品（"head" など）があると、Blender が新しい方を head.001 に
            # してしまい、ゲーム側が部位を見つけられない。元の方に退いてもらう
            e.name = name + '_mesh'
            e = None
        if e is None:
            e = bpy.data.objects.new(name, None)
        if root_col not in e.users_collection:
            move_to(e, root_col)
        e.parent = None
        e.location = (0, 0, 0)
        e.rotation_euler = (0, 0, 0)
        e.scale = (1, 1, 1)
        return e

    # 作ったばかりのオブジェクトや、位置を書き換えたオブジェクトの matrix_world は、
    # ビューレイヤーを更新するまで古いまま。読む前に必ず更新する
    def refresh():
        bpy.context.view_layer.update()

    def parent_keep(o, p):
        refresh()
        mw = o.matrix_world.copy()
        o.parent = p
        o.matrix_parent_inverse = p.matrix_world.inverted() if p else Matrix.Identity(4)
        o.matrix_world = mw

    # 前回の書き出しで付けた親子関係はいったん解く（見た目の位置はそのまま）
    refresh()
    for o in list(root_col.all_objects):
        if o.parent and o.parent.name in set(CATS) | {'AF_root'}:
            parent_keep(o, None)

    top = empty('AF_root')
    top.rotation_euler = (0, 0, 0)
    refresh()

    selected = [top]
    counts = {}
    for cat in CATS:
        if cat == 'ignore':
            continue
        col = bpy.data.collections.get(col_name(cat))
        objs = [o for o in col.objects if o.type == 'MESH'] if col else []
        counts[cat] = len(objs)
        if not objs:
            continue
        holder = empty(cat)
        parent_keep(holder, top)
        selected.append(holder)
        for o in objs:
            if o.name in RESERVED or o.name.startswith('j_') or o.name.lower().startswith('thruster'):
                o.name = 'mesh_' + o.name
            parent_keep(o, holder)
            selected.append(o)
    jcol = bpy.data.collections.get(JOINTS)
    for o in (jcol.objects if jcol else []):
        if o.type == 'EMPTY':
            parent_keep(o, top)
            selected.append(o)

    if not counts.get('torso') and not any(counts.values()):
        raise RuntimeError('書き出す部品がありません')

    for o in bpy.context.view_layer.objects:
        o.select_set(False)
    for o in selected:
        o.hide_set(False)
        o.select_set(True)
    bpy.context.view_layer.objects.active = top

    # ゲームの正面は +Z（Blender の -Y）。逆向きのモデルは書き出す間だけ 180° 回す
    if FACING == '+Y':
        top.rotation_euler = (0, 0, 3.14159265)
    refresh()

    d = out_dir()
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, NAME + '.glb')
    bpy.ops.export_scene.gltf(
        filepath=path, export_format='GLB', use_selection=True,
        export_apply=True, export_yup=True,
        export_animations=False, export_skins=False,
        export_cameras=False, export_lights=False,
    )
    top.rotation_euler = (0, 0, 0)
    refresh()
    return {'file': path, 'parts': counts, 'size_kb': round(os.path.getsize(path) / 1024)}


if __name__ == '__main__':
    r = sort_model() if STEP == 'sort' else export_model()
    print('AF:', r)
    msg = str(r)
    def draw(self, _ctx):
        self.layout.label(text=msg)
    try:
        bpy.context.window_manager.popup_menu(draw, title='機体の下ごしらえ: ' + STEP)
    except Exception:
        pass
