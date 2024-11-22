import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const TextUI = styled('p', {
  fontFamily: '$web',
  lineHeight: '$base',
  margin: 0,
  color: '$white',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextUIProps extends ComponentProps<typeof TextUI> {
  as?: ElementType
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}
