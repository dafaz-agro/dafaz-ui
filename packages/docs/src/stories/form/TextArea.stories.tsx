import { Meta, StoryObj } from '@storybook/react'

import { Box, TextArea } from '@dafaz-ui/react'

const meta = {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system text area',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Description...',
    disabled: false,
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <form>
        <Box>{Story()}</Box>
      </form>
    ),
  ],
} satisfies Meta<typeof TextArea>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'TextArea component',
      },
    },
  },
}
