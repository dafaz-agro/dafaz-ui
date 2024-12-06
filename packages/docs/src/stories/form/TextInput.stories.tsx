import { Meta, StoryObj } from '@storybook/react'

import { Box, TextInput } from '@dafaz-ui/react'

const meta = {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system text input',
  },
  tags: ['autodocs'],
  args: {
    size: 'lg',
    withShadow: false,
    type: 'text',
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
  decorators: [
    (Story) => (
      <form>
        <Box color="transparent">{Story()}</Box>
      </form>
    ),
  ],
} satisfies Meta<typeof TextInput>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  args: {
    placeholder: 'username',
  },
  parameters: {
    docs: {
      description: {
        story: 'TextInput component',
      },
    },
  },
}

export const Optional: StoryUI = {
  args: {
    required: false,
    requiredText: 'Opcional',
    placeholder: 'profession',
  },
}

export const Password: StoryUI = {
  args: {
    type: 'password',
  },
}
