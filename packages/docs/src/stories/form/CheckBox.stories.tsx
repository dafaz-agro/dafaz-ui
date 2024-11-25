import { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from '@dafaz-ui/react'

const meta = {
  title: 'Form/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system CheckBox',
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    id: '0',
    label: 'Accept terms of use',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
  },
} satisfies Meta<typeof CheckBox>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'CheckBox component',
      },
    },
  },
}
