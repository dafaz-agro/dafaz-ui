import type { Meta, StoryObj } from '@storybook/react'
import { FontWeights } from './FontWeights'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/FontWeights',
  component: FontWeights,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system font weights',
    docs: {
      page: () => (
        <>
          <Title>Font Weights</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof FontWeights>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
