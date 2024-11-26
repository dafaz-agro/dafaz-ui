import { Meta, StoryObj } from '@storybook/react'

import { Select } from '@dafaz-ui/react'

const meta = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system Select',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Selecione...',
    size: 'md',
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
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Select component',
      },
    },
  },
}