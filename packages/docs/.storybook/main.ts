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
    builder: getAbsolutePath('@storybook/builder-vite'),
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
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  managerHead: (head) => `
  ${head}
  <style>a[id$="--docs-only"] { display: none; }</style>
`,
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      setDisplayName: false,
      propFilter: (prop) => {
        if (prop.name === 'children') {
          return true
        }

        if (prop.parent) {
          return (
            !/@types\/react/.test(prop.parent.fileName) &&
            !/@emotion/.test(prop.parent.fileName)
          )
        }
        return true
      },
    },
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/dafaz-ui/'
    }

    return config
  },
}
export default config
