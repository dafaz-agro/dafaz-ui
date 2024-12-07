import type { ComponentProps, CSSProperties } from 'react'
import { styled } from '../../styles'

export const SeparatorUI = styled('hr', {
  width: '100%',

  variants: {
    color: {
      primary: {
        borderColor: '$dafaz400',
      },
      lightGray: {
        borderColor: '$gray100',
      },
      darkGray: {
        borderColor: '$gray800',
      },
      white: {
        borderColor: '$white',
      },
      black: {
        borderColor: '$black',
      },
    },
    size: {
      lg: {
        borderStyle: 'solid',
        borderWidth: '2px',
      },
      md: {
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      sm: {
        borderStyle: 'solid',
        borderWidth: '0.5px',
        opacity: 0.3,
      },
      xs: {
        borderStyle: 'solid',
        borderWidth: '0.5px',
        opacity: 0.1,
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'lg',
  },
})

export interface SeparatorUIProps extends ComponentProps<typeof SeparatorUI> {
  size?: 'xs' | 'md' | 'sm' | 'lg'
  color?: 'primary' | 'lightGray' | 'darkGray' | 'white' | 'black'
  style?: CSSProperties
}
