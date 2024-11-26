import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'
import type { ComponentProps } from 'react'

export const CheckBoxUI = styled(Checkbox.Root, {
  all: 'unset',
  borderRadius: '$md',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'border 0.2s linear',
  border: '2px solid $gray400',

  '&:focus,&[data-state="checked"]': {
    backgroundColor: '$dafaz600',
    borderColor: '$dafaz600',
  },

  '&[data-state="unchecked"]': {
    backgroundColor: '$gray400',
    opacity: 0.9,
  },

  '&:hover': {
    border: '2px solid $dafaz600',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      lg: {
        width: '$6',
        height: '$6',
      },
      md: {
        width: '$5',
        height: '$5',
      },
      sm: {
        width: '$5',
        height: '$5',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(100%)' },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },

  variants: {
    size: {
      lg: {
        width: '$5',
        height: '$5',
      },
      md: {
        width: '$4',
        height: '$4',
      },
      sm: {
        width: '$3',
        height: '$3',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

export const Label = styled('label', {
  fontFamily: '$app',
  lineHeight: 0,
  color: '$white',
  fontWeight: '$regular',
  cursor: 'pointer',

  display: 'flex',
  gap: '$3',
  alignItems: 'center',

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
    disabled: false,
    size: 'lg',
  },
})

export interface CheckboxIUProps extends ComponentProps<typeof CheckBoxUI> {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}
