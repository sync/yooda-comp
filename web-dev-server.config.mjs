import { esbuildPlugin } from '@web/dev-server-esbuild';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import { fromRollup } from '@web/dev-server-rollup';
import rollupPostcss from 'rollup-plugin-postcss';

const postcss = fromRollup(rollupPostcss);

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/demo/',
  watch: !hmr,
  mimeTypes: {
    '**/*.css': 'js',
  },

  plugins: [
    esbuildPlugin({ ts: true }),
    postcss({ include: ['src/**/*.css'], inject: false }),
    hmr &&
      hmrPlugin({
        exclude: ['**/*/node_modules/**/*'],
        presets: [presets.litElement],
      }),
  ],
});
