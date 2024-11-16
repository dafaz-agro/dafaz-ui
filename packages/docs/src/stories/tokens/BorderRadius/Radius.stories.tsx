import type { Meta, StoryObj } from '@storybook/react'
import { BorderRadius } from './Radius'

// Description, Source, Canvas, Stories,
import { Title, Subtitle, Story } from '@storybook/blocks'

const meta = {
  title: 'tokens/BorderRadius',
  component: BorderRadius,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Dafaz design system border radius',
    docs: {
      page: () => (
        <>
          <Title>Border Radius</Title>
          <Subtitle />
          <Story />
        </>
      ),
    },
  },
} satisfies Meta<typeof BorderRadius>

export default meta

type Story = StoryObj<typeof meta>

export const DocsOnly: Story = {}
