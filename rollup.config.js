import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

const filesizeConfig = {
  showGzippedSize: true,
  showBrotliSize: true,
  showMinifiedSize: false,
};

const postCssConfig = {
  inject: false,
};

const copyConfig = {
  targets: [{ src: 'public/fonts', dest: 'dist' }],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const filename = require('./package.json').main.replace(/\.js$/, '');

/** @type {(format: 'es' | 'cjs' | 'dts') => string} */
const ext = format => {
  switch (format) {
    case 'dts':
      return 'd.ts';
    case 'es':
      return 'module.js';
    default:
      return 'js';
  }
};

/** @type {(format: 'es' | 'cjs' | 'dts') => import('rollup').ModuleFormat} */
const outputFormat = format => {
  switch (format) {
    case 'cjs':
      return 'cjs';
    default:
      return 'es';
  }
};

/** @type {(format: 'es' | 'cjs' | 'dts') => import('rollup').Plugin[]} */
const plugins = format => {
  if (format === 'dts') {
    return [dts()];
  }

  const allPlugins = [
    esbuild(),
    postcss(postCssConfig),
    commonjs(),
    resolve(),
    copy(copyConfig),
  ];

  if (process.env.NODE_ENV === 'production') {
    allPlugins.push(terser());
    allPlugins.push(filesize(filesizeConfig));
  }

  return allPlugins;
};

/** @type {(format: 'es' | 'cjs' | 'dts') => import('rollup').RollupOptions} */
const bundle = format => ({
  input: 'src/index.ts',
  output: {
    file: `${filename}.${ext(format)}`,
    format: outputFormat(format),
    sourcemap: format !== 'dts',
    name: 'YodaComp',
  },
  plugins: plugins(format),
  external: [
    '@open-wc/lit-helpers',
    'lit-element',
    'lit-html',
    'static-params',
    'style-inject',
  ],
});

export default [
  bundle('es'), //
  bundle('cjs'),
  bundle('dts'),
];
