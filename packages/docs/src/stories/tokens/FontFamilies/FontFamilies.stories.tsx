import type { Meta, StoryObj } from '@storybook/react'
import { FontFamilies } from './FontFamilies'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/FontFamilies',
  component: FontFamilies,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system font families',
    docs: {
      page: () => (
        <>
          <Title>Font Families</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof FontFamilies>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
