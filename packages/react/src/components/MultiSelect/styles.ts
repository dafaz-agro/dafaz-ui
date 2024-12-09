import { styled } from '../../styles'
import type { ComponentProps, CSSProperties } from 'react'

export const Button = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  marginBottom: '-3px',

  cursor: 'pointer',

  zIndex: 5,

  variants: {
    size: {
      lg: {
        height: '$10',
        width: '$10',
      },
      md: {
        height: '$8',
        width: '$8',
      },
      sm: {
        height: '$6',
        width: '$6',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

export const SelectUI = styled('div', {
  zIndex: 3,
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

  boxShadow: '0 3px 2px -2px $colors$gray400',

  '&:hover': {
    borderBottom: '2px solid $dafaz400',
  },

  '&.clicked': {
    borderBottom: '2px solid $dafaz400',
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
  padding: '$3 $2',
  marginTop: '2px',

  border: '1px solid $gray400',
  boxSizing: 'border-box',
  borderRadius: '$md',

  position: 'absolute',
  zIndex: 2,
  minWidth: '100%',
  maxWidth: '24.5rem',

  background: '$gray800',

  fontFamily: '$app',
  color: '$white',
  fontWeight: '$regular',
  cursor: 'pointer',

  '&.closed': {
    display: 'none',
  },

  '&.opened': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export interface SelectContainerUIProps
  extends ComponentProps<typeof SelectContainerUI> {
  className?: string
  style?: CSSProperties
}
