import type { Meta, StoryObj } from '@storybook/react'
import { Opacities } from './Opacities'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/Opacities',
  component: Opacities,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system opacities',
    docs: {
      page: () => (
        <>
          <Title>Opacities</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof Opacities>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
