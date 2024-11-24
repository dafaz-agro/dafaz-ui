import type { CSS } from '@stitches/react'
import { styled } from '../../styles'
import type { ComponentProps, ElementType } from 'react'

export const BoxUI = styled('div', {
  padding: '$4',

  variants: {
    stretch: {
      true: {
        width: '100%',
      },
      false: {
        width: '18.4375rem',
      },
    },
    dark: {
      true: {
        background: '$gray800',
      },
      false: {
        background: 'transparent',
      },
    },
  },
  defaultVariants: {
    stretch: false,
    dark: false,
  },
})

export interface BoxUIProps extends ComponentProps<typeof BoxUI> {
  as?: ElementType
  stretch?: boolean
  dark?: boolean
  css?: CSS
}
