import type { Meta, StoryObj } from '@storybook/react'

import { Colors } from './Colors'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/Colors',
  component: Colors,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system colors',
    docs: {
      page: () => (
        <>
          <Title>Colors</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof Colors>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
