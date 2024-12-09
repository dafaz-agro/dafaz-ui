import type { ComponentProps } from 'react'
import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontFamily: '$app',
  color: '$white',

  cursor: 'pointer',

  width: '100%',
  maxWidth: '24.5rem',

  boxSizing: 'border-box',
  borderRadius: '$md',
  borderBottom: '2px solid $dafaz600',
  boxShadow: '0 3px 2px -2px $colors$gray400',

  transition: 'border 0.2s linear',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:active': {
    borderBottom: '2px solid $dafaz400',
  },

  '&:hover': {
    borderBottom: '2px solid $dafaz400',
  },

  variants: {
    size: {
      lg: {
        fontSize: '$xl',
        svg: {
          width: '$5',
          height: '$5',
        },
      },
      md: {
        fontSize: '$lg',
        svg: {
          width: '$4',
          height: '$4',
        },
      },
      sm: {
        fontSize: '$sm',
        svg: {
          width: '$3',
          height: '$3',
        },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

interface SelectContainer extends ComponentProps<typeof SelectContainer> {
  size?: 'sm' | 'md' | 'lg'
}

export const SelectUI = styled('select', {
  zIndex: 1,
  '-moz-appearance': 'none',
  '-webkit-appearance': 'none',
  appearance: 'none',

  overflow: 'hidden',
  background: 'transparent',
  border: 'none',

  fontFamily: '$app',
  color: '$white',
  fontWeight: '$regular',
  cursor: 'pointer',

  width: '100%',
  maxWidth: '24.5rem',

  margin: 0,
  padding: '$1 $1',

  marginLeft: '$1',

  '&:disabled': {
    opacity: 0.5,
  },

  '&:focus': {
    outline: 0,
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
    size: 'lg',
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
    size: 'lg',
  },
})

export interface OptionUIProps extends ComponentProps<typeof OptionUI> {}
