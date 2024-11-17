import type { StorybookConfig } from '@storybook/react-vite'

import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  managerHead: (head) => `
  ${head}
  <style>a[id$="--docs-only"] { display: none; }</style>
`,
  viteFinal: async (config, { configType }) => {
    const { mergeConfig } = await import('vite')

    if (configType === 'PRODUCTION') {
      config.base = '/dafaz-ui/'
    } // Your environment configuration here

    return mergeConfig(config, {})
  },
}
export default config
