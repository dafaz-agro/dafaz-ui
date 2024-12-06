import { ComponentProps, ElementType, type CSSProperties } from 'react'
import { styled } from '../../styles'

export const HeadingUI = styled('h2', {
  fontFamily: '$web',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$2xl' },
      md: { fontSize: '$3xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$5xl' },
      '2xl': { fontSize: '$6xl' },
      '3xl': { fontSize: '$7xl' },
      '4xl': { fontSize: '$8xl' },
      '5xl': { fontSize: '$9xl' },
      '6xl': { fontSize: '$10xl' },
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
    color: 'white',
    size: 'lg',
  },
})

export interface HeadingUIProps extends ComponentProps<typeof HeadingUI> {
  as?: ElementType
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  color: 'white' | 'black' | 'primary' | 'lightGray' | 'darkGray'
  style?: CSSProperties
}
