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
    color: 'white',
    size: '2xl',
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
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: 'select',
      description: 'Heading size options',
      table: {
        defaultValue: { summary: '2xl' },
      },
    },
    color: {
      options: ['white', 'black', 'primary', 'lightGray', 'darkGray'],
      control: 'select',
      description: 'Alter the color of Heading',
      table: {
        defaultValue: { summary: 'white' },
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
    color: 'white',
  },
}
