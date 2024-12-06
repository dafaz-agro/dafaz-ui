import type { ComponentProps, CSSProperties } from 'react'
import { styled } from '../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioUI = styled(RadioGroup.Root, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      lg: {},
      md: {},
      sm: {},
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

export interface RadioUIProps extends ComponentProps<typeof RadioUI> {
  size?: 'sm' | 'md' | 'lg'
  style?: CSSProperties
}
