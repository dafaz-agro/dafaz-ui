import { Meta, StoryObj } from '@storybook/react'

import { Box, Text } from '@dafaz-ui/react'

const meta = {
  title: 'Surfaces/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'Dafaz design system Box',
  },
  tags: ['autodocs'],
  args: {
    children: (
      <Text size="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        voluptatum, consequatur inventore, iusto sunt quaerat voluptatibus
        mollitia voluptate voluptas ut hic odit rerum unde nemo tenetur dicta
        vitae quod! Laudantium.
      </Text>
    ),
    dark: false,
    stretch: false,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    dark: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    stretch: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Box>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {
  parameters: {
    docs: {
      description: {
        story: 'The Default Box',
      },
    },
  },
}
