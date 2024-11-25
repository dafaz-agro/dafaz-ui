import type { ComponentProps } from 'react'
import { styled } from '../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioUI = styled(RadioGroup.Root, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  variants: {
    size: {
      lg: {},
      md: {},
      sm: {},
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface RadioUIProps extends ComponentProps<typeof RadioUI> {
  size?: 'sm' | 'md' | 'lg'
}