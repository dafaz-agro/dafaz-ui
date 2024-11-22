import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const HeadingUI = styled('h2', {
  fontFamily: '$web',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    mode: {
      default: {
        color: '$dafaz400',
      },
      white: {
        color: '$white',
      },
    },
    size: {
      sm: { fontSize: '$lg' },
      md: { fontSize: '$xl' },
      lg: { fontSize: '$2xl' },
      xl: { fontSize: '3rem' },
      '2xl': { fontSize: '4rem' },
    },
  },
  defaultVariants: {
    mode: 'default',
    size: 'lg',
  },
})

export interface HeadingUIProps extends ComponentProps<typeof HeadingUI> {
  as?: ElementType
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  mode?: 'default' | 'white'
}
