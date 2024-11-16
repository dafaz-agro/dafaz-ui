import type { Meta, StoryObj } from '@storybook/react'
import { Space } from './Space'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/Spaces',
  component: Space,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system spaces',
    docs: {
      page: () => (
        <>
          <Title>Spaces</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof Space>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
