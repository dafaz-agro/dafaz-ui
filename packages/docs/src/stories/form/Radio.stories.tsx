import { Meta, StoryObj } from '@storybook/react'

import { Radio } from '@dafaz-ui/react'

const meta = {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system Radio',
  },
  tags: ['autodocs'],
  args: {
    size: 'lg',
    items: [
      { id: '0', label: 'Default', value: 'default' },
      { id: '1', label: 'Confortable', value: 'confortable' },
      { id: '2', label: 'Compact', value: 'Compact' },
    ],
  },
  argTypes: {
    items: {
      control: {
        disable: true,
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
  },
} satisfies Meta<typeof Radio>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Radio component',
      },
    },
  },
}
