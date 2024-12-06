import { ComponentProps, ElementType, type CSSProperties } from 'react'
import { styled } from '../../styles'

export const TextUI = styled('p', {
  fontFamily: '$web',
  lineHeight: '$base',
  margin: 0,

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
    },
    color: {
      white: {
        color: '$white',
      },
      black: {
        color: 'black',
      },
      primary: {
        color: '$dafaz400',
      },
      lightGray: {
        color: '$gray400',
      },
      darkGray: {
        color: '$gray800',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'white',
  },
})

export interface TextUIProps extends ComponentProps<typeof TextUI> {
  as?: ElementType
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  color?: 'white' | 'black' | 'primary' | 'lightGray' | 'darkGray'
  style?: CSSProperties
}
