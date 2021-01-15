import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import rollupPostcss from 'rollup-plugin-postcss';

const postcss = fromRollup(rollupPostcss);

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: 'test/**/*.test.ts',
  nodeResolve: true,
  mimeTypes: {
    '**/*.css': 'js',
  },

  plugins: [
    esbuildPlugin({ ts: true }),
    postcss({ include: ['src/**/*.css'], inject: false }),
  ],
});
