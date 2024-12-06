import type { ComponentProps, CSSProperties, ElementType } from 'react'
import { styled } from '../../styles'

/** Primary UI component for user interaction */
export const ButtonUI = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$md',
  fontWeight: '$regular',
  fontFamily: '$app',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  boxShadow: '3px 3px 2px -2px $colors$gray400',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '$2 $5',

  cursor: 'pointer',

  transition: 'background 0.2s linear',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$dafaz600',

        '&:not(:disabled):hover': {
          background: '$dafaz400',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },
      secondary: {
        transition: 'border, color 0.2s linear',

        fontWeight: '$medium',
        color: '$dafaz600',
        border: '2px solid $dafaz600',

        '&:not(:disabled):hover': {
          color: '$dafaz400',
          border: '2px solid $dafaz400',
        },

        '&:disabled': {
          color: '$gray200',
          border: '2px solid $gray200',
        },
      },
      tertiary: {
        transition: 'color 0.2s linear',
        boxShadow: 'none',
        fontWeight: '$medium',
        color: '$gray100',

        '&:not(:disabled):hover': {
          opacity: 0.9,
        },

        '&:disabled': {
          color: '$gray200',
        },
      },
    },
    size: {
      sm: {
        height: 38,
        fontSize: '$sm',
      },
      md: {
        height: 46,
        fontSize: '$lg',
      },
      lg: {
        height: 54,
        fontSize: '$xl',
      },
    },
    flat: {
      true: {
        border: 0,
        background: 'transparent',

        '&:disabled': {
          color: '$gray200',
          background: 'transparent',
          border: 'none',
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
    flat: false,
  },
})

export interface ButtonUIProps extends ComponentProps<typeof ButtonUI> {
  as?: ElementType
  /** How large should the button be? */
  size?: 'sm' | 'md' | 'lg'
  /** Optional click handler */
  onClick?: () => void
  /** Button is disable? */
  disabled?: boolean
  //** Button UI mode */
  variant?: 'primary' | 'secondary' | 'tertiary'
  //** Flat mode */
  flat?: boolean
  style?: CSSProperties
}
