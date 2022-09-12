import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve, parse, basename } from 'path';
import makeManifest from './utils/plugins/make-manifest';
import customDynamicImport from './utils/plugins/custom-dynamic-import';

const root = resolve(__dirname, 'src');
const pagesDir = resolve(root, 'pages');
const constantsDir = resolve(root, 'constants');
const assetsDir = resolve(root, 'assets');
const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');

const isDev = process.env.__DEV__ === 'true';

export default defineConfig({
  resolve: {
    alias: {
      '@src': root,
      '@assets': assetsDir,
      '@pages': pagesDir,
      '@constants': constantsDir,
    },
  },
  plugins: [react(), svgr(), makeManifest(), customDynamicImport()],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    rollupOptions: {
      input: {
        website: resolve(pagesDir, 'content', 'panels', 'website', 'index.tsx'),
        iframe: resolve(pagesDir, 'content', 'index.html'),
        content: resolve(pagesDir, 'content', 'index.ts'),
        background: resolve(pagesDir, 'background', 'index.ts'),
      },
      output: {
        entryFileNames: ({ facadeModuleId }) => {
          let { type } =
            facadeModuleId.match(/\/src\/(?<type>.*?)\//).groups ?? {};
          type ??= 'pages';
          return `src/${type}/[name]/index.js`;
        },
        chunkFileNames: isDev
          ? 'assets/js/[name].js'
          : 'assets/js/[name].[hash].js',
        assetFileNames: ({ name: path }) => {
          const { dir, name } = parse(path);
          return `assets/[ext]/${basename(dir)}-${name}.chunk.[ext]`;
        },
      },
    },
  },
});
