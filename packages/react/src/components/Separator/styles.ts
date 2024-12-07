import type { ComponentProps, CSSProperties } from 'react'
import { styled } from '../../styles'

export const SeparatorUI = styled('hr', {
  width: '100%',
  borderStyle: 'solid',

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
        borderWidth: '2px',
      },
      md: {
        borderWidth: '1px',
      },
      sm: {
        borderWidth: '0.75px',
      },
      xs: {
        borderWidth: '0.5px',
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
