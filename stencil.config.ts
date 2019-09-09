import { Config } from '@stencil/core';
import { stylus } from '@stencil/stylus';
export const config: Config = {
  namespace: 'nest-comps',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    stylus()
  ],
};
