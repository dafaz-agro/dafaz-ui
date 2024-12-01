import type { ComponentProps, ElementType } from 'react'
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

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '$2 $5',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$dafaz600',
        opacity: 0.8,

        '&:not(:disabled):hover': {
          opacity: 1,
        },

        '&:disabled': {
          background: '$gray200',
        },
      },
      secondary: {
        fontWeight: '$medium',
        color: '$dafaz600',
        border: '2px solid $dafaz600',
        opacity: 0.8,

        '&:not(:disabled):hover': {
          opacity: 1,
        },

        '&:disabled': {
          color: '$gray200',
          border: '2px solid $gray200',
        },
      },
      tertiary: {
        fontWeight: '$medium',
        color: '$gray400',

        '&:not(:disabled):hover': {
          color: '$gray800',
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
}
