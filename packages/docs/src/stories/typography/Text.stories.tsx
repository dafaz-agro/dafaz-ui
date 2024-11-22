import { Meta, StoryObj } from '@storybook/react'

import { Text } from '@dafaz-ui/react'

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Dafaz design system text',
  },
  tags: ['autodocs'],
  args: {
    as: 'p',
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repudiandae non laborum perspiciatis consequuntur sunt soluta quos oditaccusamus pariatur quis, similique commodi eum architecto, at adipisci maxime voluptatem corrupti!',
  },
  argTypes: {
    as: {
      options: ['p', 'strong', 'span'],
      control: 'select',
      description: 'You can insert any html text element',
      table: {
        defaultValue: { summary: '<p>' },
      },
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: 'select',
      description: 'Text size options',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      description: 'Text content',
    },
  },
} satisfies Meta<typeof Text>

export default meta

type StoryUI = StoryObj<typeof meta>

export const Default: StoryUI = {}

export const Strong: StoryUI = {
  args: {
    as: 'strong',
    children: 'Lorem ipsum dolor.',
  },
}
