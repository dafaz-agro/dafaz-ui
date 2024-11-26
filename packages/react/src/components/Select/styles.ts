import type { ComponentProps } from 'react'
import { styled } from '../../styles'

export const SelectUI = styled('select', {
  gap: '$2',
  overflow: 'hidden',

  background: 'transparent',
  border: 'none',

  fontFamily: '$app',
  color: '$white',
  fontWeight: '$regular',
  cursor: 'pointer',

  boxSizing: 'border-box',
  borderRadius: '$md',
  borderBottom: '2px solid $dafaz600',
  transition: 'border 0.2s linear',

  width: '100%',
  margin: 0,
  padding: '$1 $1',

  '&:focus': {
    outline: 0,
    borderBottom: '2px solid $dafaz400',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      lg: {
        fontSize: '$xl',
      },
      md: {
        fontSize: '$lg',
      },
      sm: {
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface SelectUIProps extends ComponentProps<typeof SelectUI> {
  size?: 'sm' | 'md' | 'lg'
}

export const OptionUI = styled('option', {
  backgroundColor: '$gray800',

  '&.placeholder': {
    backgroundColor: '$gray400',
  },

  variants: {
    size: {
      lg: {
        fontSize: '$xl',
      },
      md: {
        fontSize: '$lg',
      },
      sm: {
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface OptionUIProps extends ComponentProps<typeof OptionUI> {}
