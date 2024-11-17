import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark },
      //Override the default light theme
      light: { ...themes.normal },
      current: 'dark',
      darkClass: 'lights-out',
      lightClass: 'lights-on',
      classTarget: 'html',
      stylePreview: true,
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [(Story) => <Story />],
}

export default preview
