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
      <Box color="primary" stretch={false}>
        <Text size="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptatum, consequatur inventore, iusto sunt quaerat voluptatibus
          mollitia voluptate voluptas ut hic odit rerum unde nemo tenetur dicta
          vitae quod! Laudantium.
        </Text>
      </Box>
    ),
    direction: 'row',
    color: 'dark',
    stretch: true,
    rounded: 'px',
    withShadow: false,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    direction: {
      control: 'radio',
      options: ['none', 'row', 'column'],
      table: {
        defaultValue: { summary: 'row' },
      },
    },
    color: {
      control: 'select',
      options: ['dark', 'primary', 'secondary', 'light', 'transparent'],
      table: {
        defaultValue: { summary: 'dark' },
      },
    },
    rounded: {
      control: 'select',
      options: ['px', 'sm', 'md', 'full'],
      table: {
        defaultValue: { summary: 'px' },
      },
    },
    stretch: {
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '5rem' }}>{Story(meta.args.children)}</div>
    ),
  ],
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
