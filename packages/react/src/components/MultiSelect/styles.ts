import { styled } from '../../styles'
import type { ComponentProps, CSSProperties } from 'react'

export const SelectUI = styled('div', {
  width: '100%',
  maxWidth: '24.5rem',

  position: 'relative',
  display: 'inline-block',

  fontFamily: '$app',
  color: '$white',
  fontWeight: '$regular',
  cursor: 'pointer',

  margin: 0,
  backgroundColor: 'transparent',
  borderBottom: '2px solid $dafaz600',
  borderRadius: '$md',
  boxSizing: 'border-box',
  transition: 'border 0.2s linear',

  padding: '$1 $2',

  boxShadow: '0 3px 2px -2px $colors$gray400',

  '&:hover': {
    borderBottom: '2px solid $dafaz400',
  },

  '&.clicked': {
    borderBottom: '2px solid $dafaz400',

    '&:hover': {
      '> div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '$3',
      },
    },
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
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
        fontSize: '$md',
        svg: {
          width: '$3',
          height: '$3',
        },
      },
    },
  },
  defaultVariants: {
    disabled: false,
    size: 'lg',
  },
})

export interface SelectUIProps extends ComponentProps<typeof SelectUI> {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  style?: CSSProperties
}

export const SelectContainerUI = styled('div', {
  marginTop: '0.4rem',
  marginLeft: '-0.5rem',
  padding: '$3 $2',

  border: '1px solid $gray400',
  boxSizing: 'border-box',
  borderRadius: '$md',

  display: 'none',

  position: 'absolute',
  zIndex: 999,
  minWidth: '100%',
  maxWidth: '24.5rem',

  background: '$gray800',

  fontFamily: '$app',
  color: '$white',
  fontWeight: '$regular',
  cursor: 'pointer',

  '&:hover': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '$3',
  },
})
