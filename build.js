import { argv } from "process";
import { build } from "esbuild";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// __dirnameと__filenameを定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IS_DEV = argv[2] === "development";

// サーバー側のビルド設定
const serverOptions = {
  entryPoints: [path.resolve(__dirname, "src/index.ts")],
  minify: !IS_DEV,
  bundle: true,
  target: "es2020",
  platform: "node",
  outdir: path.resolve(__dirname, "dist"),
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  format: "esm", // この行を追加
  external: fs.readdirSync(path.resolve(__dirname, "node_modules")),
};

build(serverOptions).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});

// クライアント側のビルド
const clientOptions = {
  define: { "process.env.NODE_ENV": IS_DEV ? '"production"' : '"development"' },
  entryPoints: [path.resolve(__dirname, "src/view/client.tsx")],
  minify: !IS_DEV,
  bundle: true,
  target: "es6",
  platform: "browser",
  outdir: path.resolve(__dirname, "dist/static"),
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
};
build(clientOptions).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
