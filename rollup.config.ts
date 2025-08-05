import { defineConfig } from 'rollup';
import clear from 'rollup-plugin-clear';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'es',
        format: 'esm',
        preserveModules: true,
        entryFileNames: '[name].mjs',
      },
    ],
    plugins: [
      clear({
        targets: ['./es'],
        watch: true,
      }),
      typescript({
        tsconfig: './tsconfig.es.json',
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        preserveModules: true,
        entryFileNames: '[name].cjs',
      },
    ],
    plugins: [
      clear({
        targets: ['./lib'],
        watch: true,
      }),
      typescript({
        tsconfig: './tsconfig.lib.json',
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'auto',
        entryFileNames: 'index.cjs',
        sourcemap: false,
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: 'index.mjs',
        sourcemap: false,
      },
      {
        dir: 'dist',
        format: 'umd',
        name: 'Typejs',
        entryFileNames: 'index.umd.js',
        sourcemap: false,
      },
    ],
    plugins: [
      clear({
        targets: ['./dist'],
        watch: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser({
        mangle: true,
      }),
    ],
  },
]);
