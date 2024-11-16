import type { Meta, StoryObj } from '@storybook/react'
import { FontSizes } from './FontSizes'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/FontSizes',
  component: FontSizes,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system font sizes',
    docs: {
      page: () => (
        <>
          <Title>Font Sizes</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof FontSizes>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
