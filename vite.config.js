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

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/assault-frame-vs/' : '/',
  server: { host: true, port: 5174 },
  resolve: { dedupe: ['three'] },
  plugins: [shotPlugin()],
}));
