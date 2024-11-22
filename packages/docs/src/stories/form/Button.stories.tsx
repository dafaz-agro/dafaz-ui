import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ShareNetwork } from '@phosphor-icons/react'

import { Button } from '@dafaz-ui/react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system buttons',
  },
  tags: ['autodocs'],
  args: {
    children: 'Fazer cadastro',
    variant: 'primary',
    size: 'md',
    disabled: false,
    flat: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'select',
      description: 'UI Button mode variants',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Primary: StoryUI = {}

export const Secondary: StoryUI = {
  args: {
    variant: 'secondary',
    children: 'Compartilhar',
  },
}

export const Tertiary: StoryUI = {
  args: {
    variant: 'tertiary',
    children: 'Limpar',
  },
}

export const WithIcon: StoryUI = {
  parameters: {
    docs: {
      description: {
        story: 'You can set icons in buttons.',
      },
    },
  },
  args: {
    variant: 'secondary',
    children: (
      <>
        Compartilhar
        <ShareNetwork size={20} />
      </>
    ),
  },
}
