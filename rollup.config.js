import pkg from './package.json';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import {terser} from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';
const extensions = ['.js'];
const input = 'src/index.js';

const plugins = [
  nodeResolve({
    extensions: ['.js', '.jsx', 'mjs'],
    browser: true
  }),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    extensions,
  }),
  commonjs({
    include: ['node_modules/**']
  }),
  replace({
    preventAssignment: false,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  postcss({
    extract: true,
  }),
  (isProd && terser())
];

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'XeactUI',
      sourcemap: true,
    },
    plugins,
  },
];
