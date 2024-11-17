import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ButtonUI } from './ButtonUI'
import { Story } from '@storybook/blocks'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Button',
  component: ButtonUI,
  decorators: [
    (Story) => (
      <>
        <p>Decorator</p>
        <Story />
      </>
    ),
  ],
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system buttons',
  },
  tags: ['autodocs'],
  args: {
    label: 'Fazer cadastro',
    variant: 'primary',
    size: 'md',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },
  },
} satisfies Meta<typeof ButtonUI>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Primary: StoryUI = {}

export const Secondary: StoryUI = {
  args: {
    variant: 'secondary',
    label: 'Compartilhar',
  },
}

export const Tertiary: StoryUI = {
  args: {
    variant: 'tertiary',
    label: 'Limpar',
  },
}
