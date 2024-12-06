import type { ComponentProps, CSSProperties } from 'react'
import { styled } from '../../styles'

export const TextAreaUI = styled('textarea', {
  fontFamily: '$app',
  fontSize: '$lg',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',

  boxShadow: '0 3px 2px -2px $colors$gray400',
  border: '0.7px solid $gray400',

  margin: 0,
  backgroundColor: 'transparent',
  borderBottom: '2px solid $dafaz600',
  borderRadius: '$md',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',
  width: '100%',
  padding: '$1 $2',
  transition: 'border 0.2s linear',

  '&:focus': {
    outline: 0,
    borderBottom: '2px solid $dafaz400',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    fontSize: '$lg',
    fontWeight: '$regular',
    color: '$white',
    opacity: 0.75,
  },
})

export interface TextAreaUIProps extends ComponentProps<typeof TextAreaUI> {
  style?: CSSProperties
}
