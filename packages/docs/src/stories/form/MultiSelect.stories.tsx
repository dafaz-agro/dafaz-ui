import { Meta, StoryObj } from '@storybook/react'

import { MultiSelect } from '@dafaz-ui/react'

const meta = {
  title: 'Form/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system Select',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Selecione...',
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
  decorators: [
    (Story) => (
      <div style={{ width: '14.5rem', height: '15rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MultiSelect>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  args: {
    id: 'select_id',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select component',
      },
    },
  },
}
