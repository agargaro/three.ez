import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps'

export default defineConfig(({ command }) => ({
  publicDir: command === 'build' ? false : 'public',
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Main',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
  },
  rollupOptions: {
    external: ['three'],
    output: {
      globals: {
        three: 'three'
      }
    }
  },
  plugins: [
    externalizeDeps(),
    dts({ tsconfigPath: 'tsconfig.build.json' }),
    viteStaticCopy({
      targets: [{
        src: ['LICENSE', 'package.json', 'README.md'],
        dest: './'
      }]
    })
  ]
}));
