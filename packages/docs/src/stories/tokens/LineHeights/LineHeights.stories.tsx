import type { Meta, StoryObj } from '@storybook/react'
import { LineHeights } from './LineHeights'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/LineHeights',
  component: LineHeights,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system line heights',
    docs: {
      page: () => (
        <>
          <Title>Line Heights</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof LineHeights>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
