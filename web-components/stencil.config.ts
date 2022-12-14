import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'gradient',
  outputTargets: [
    react({
      componentCorePackage: '@gradient/web-components',
      proxiesFile: '../react-bindings/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist-hydrate-script',
      dir: './dist/hydrate',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  hydratedFlag: {
    selector: 'attribute',
  },
};
