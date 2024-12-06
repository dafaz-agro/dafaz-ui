import { styled } from '../../styles'
import type { ComponentProps, ElementType, CSSProperties } from 'react'

export const BoxUI = styled('div', {
  padding: '$4',

  variants: {
    withShadow: {
      true: {
        boxShadow: '1px 1px 2px $colors$gray800',
      },
    },
    stretch: {
      true: {
        width: '100%',
        '> div': {
          paddingLeft: 0,
        },
      },
      false: {
        width: '24.5rem',

        '> div': {
          paddingLeft: 0,
        },
      },
    },
    color: {
      dark: {
        background: '$gray800',
      },
      primary: {
        background: '$dafaz400',
      },
      secondary: {
        background: '$dafaz800',
      },
      light: {
        background: '$dafaz100',
      },
      transparent: {
        background: 'transparent',
      },
    },
    rounded: {
      px: {
        borderRadius: '$px',
      },
      sm: {
        borderRadius: '$sm',
      },
      md: {
        borderRadius: '$md',
      },
      full: {
        borderRadius: '$full',
      },
    },
    direction: {
      none: {},
      row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  defaultVariants: {
    stretch: true,
    color: 'dark',
    rounded: 'px',
    withShadow: false,
    direction: 'row',
  },
})

export interface BoxUIProps extends ComponentProps<typeof BoxUI> {
  as?: ElementType
  stretch?: boolean
  color?: 'dark' | 'primary' | 'secondary' | 'light' | 'transparent'
  rounded?: 'px' | 'sm' | 'md' | 'full'
  withShadow?: boolean
  style?: CSSProperties
  direction?: 'row' | 'column' | 'none'
}
