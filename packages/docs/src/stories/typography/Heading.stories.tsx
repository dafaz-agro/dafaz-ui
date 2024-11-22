import { Meta, StoryObj } from '@storybook/react'

import { Heading } from '@dafaz-ui/react'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system Heading',
  },
  tags: ['autodocs'],
  args: {
    as: 'h2',
    mode: 'default',
    size: 'lg',
    children: 'Heading',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: 'select',
      description: 'You can insert any html text element',
      table: {
        defaultValue: { summary: '<h2>' },
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: 'select',
      description: 'Heading size options',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    mode: {
      options: ['default', 'white'],
      control: 'select',
      description: 'Alter the color of Heading',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      description: 'Heading value',
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  parameters: {
    docs: {
      description: {
        story:
          'The Default Heading html tag is h2, but you can change it for h1, h3, h4...',
      },
    },
  },
}

export const White: StoryUI = {
  args: {
    mode: 'white',
  },
}
