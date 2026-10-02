import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// 開発時のみ: ブラウザから POST /__shot で受け取った base64 画像を .shots/ に保存する。
// (プレビューパネルが非表示でもレンダリング結果を目視確認するため)
function shotPlugin() {
  return {
    name: 'shot-sink',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__shot', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; return res.end(); }
        let body = '';
        req.on('data', (c) => { body += c; });
        req.on('end', () => {
          const dir = path.resolve(process.cwd(), '.shots');
          fs.mkdirSync(dir, { recursive: true });
          const name = (req.url || '/shot').replace(/[^a-zA-Z0-9_-]/g, '') || 'shot';
          const file = path.join(dir, `${name}.jpg`);
          fs.writeFileSync(file, Buffer.from(body, 'base64'));
          res.setHeader('content-type', 'text/plain');
          res.end(file);
        });
      });
    },
  };
}

// 開発時のみ: local/ 以下を /__local/ で配る（個人用の機体モデル置き場）。
// public/ に置くと本番ビルドへ丸ごとコピーされて公開されてしまうので、
// わざと public の外に置いて、開発サーバだけが読めるようにしている
const LOCAL_TYPES = {
  '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json', '.bin': 'application/octet-stream',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
};
function localAssetPlugin() {
  return {
    name: 'local-assets',
    apply: 'serve',
    configureServer(server) {
      const root = path.resolve(process.cwd(), 'local');
      server.middlewares.use('/__local', (req, res) => {
        const rel = decodeURIComponent((req.url || '/').split('?')[0]);
        const file = path.resolve(root, '.' + rel);
        // local/ の外は読ませない
        if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
          res.statusCode = 404; return res.end();
        }
        res.setHeader('content-type', LOCAL_TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream');
        res.setHeader('cache-control', 'no-store');
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/assault-frame-vs/' : '/',
  server: { host: true, port: 5174 },
  resolve: { dedupe: ['three'] },
  plugins: [shotPlugin(), localAssetPlugin()],
}));
