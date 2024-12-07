import { Meta, StoryObj } from '@storybook/react'

import { Separator } from '@dafaz-ui/react'

const meta = {
  title: 'Surfaces/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system Separator',
  },
  tags: ['autodocs'],
  args: {
    size: 'lg',
    color: 'primary',
  },
  argTypes: {
    color: {
      options: ['primary', 'lightGray', 'darkGray', 'white', 'black'],
      control: 'select',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: 'select',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '14.5rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Separator>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  args: {
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Separator component',
      },
    },
  },
}
