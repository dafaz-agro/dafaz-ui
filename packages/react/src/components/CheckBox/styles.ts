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
  borderBottom: '2px solid $dafaz600',
  transition: 'border 0.1s linear',

  '&:focus,&[data-state="checked"]': {
    backgroundColor: '$dafaz600',
    borderColor: '$dafaz600',
  },

  '&[data-state="unchecked"]': {
    backgroundColor: '$gray800',
  },

  '&:hover': {
    borderColor: '$dafaz600',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      lg: {
        width: '$7',
        height: '$7',
        borderBottom: '2px solid $dafaz600',
      },
      md: {
        width: '$5',
        height: '$5',
        borderBottom: '1px solid $dafaz600',
      },
      sm: {
        width: '$5',
        height: '$5',
        borderBottom: '0.5px solid $dafaz600',
      },
    },
  },
  defaultVariants: {
    size: 'md',
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
    size: 'md',
  },
})

export const Label = styled('label', {
  fontFamily: '$app',
  lineHeight: 0,
  color: '$white',
  fontWeight: '$regular',
  cursor: 'pointer',

  display: 'flex',
  gap: '$2',
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
    size: 'md',
  },
})

export interface CheckboxIUProps extends ComponentProps<typeof CheckBoxUI> {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}
