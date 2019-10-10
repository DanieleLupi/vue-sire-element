// rollup.config.js
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
import scss from 'rollup-plugin-scss'
import tildeImporter from 'node-sass-tilde-importer';
//import css from 'rollup-plugin-css-only'

const argv = minimist(process.argv.slice(2));

const baseConfig = {
  input: 'src/index.js',
  plugins: {
    preVue: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      commonjs(),
      //css()
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
      },
    },
    postVue: [
      buble({
        objectAssign: 'Object.assign'
      }),
    ],
  },
};

// UMD/IIFE shared settings: externals and output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
  'element-ui',
  '@sidline/vue-flex-box',
  '@sidline/vue-flex-box/dist/vue-flex-box.css',
  'element-ui/lib/theme-chalk/index.css',
  '@fortawesome/fontawesome',
  '@fortawesome/fontawesome-free',
  "@fortawesome/fontawesome-free/scss/fontawesome.scss",
  "@fortawesome/fontawesome-free/scss/regular.scss",
  "@fortawesome/fontawesome-free/scss/brands.scss",
  "@fortawesome/fontawesome-free/scss/solid.scss",
  "@fortawesome/fontawesome-free/scss/v4-shims.scss"
];
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    external,
    output: {
      file: 'dist/vue-sire-element.esm.js',
      format: 'esm',
    //   exports: 'named',
    },
    plugins: [
      scss({
        outputStyle: "compressed",
        includePaths: ["node_modules/"]
      }),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 6,
        },
      }),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/vue-sire-element.js',
      format: 'cjs',
      globals,
    },
    plugins: [
        scss({
            outputStyle: "compressed"
          }),
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      ...baseConfig.plugins.postVue,
    ],
  };
  buildFormats.push(umdConfig);
}

// Export config
export default buildFormats;