import { styled } from '../../styles'

export const InputContainer = styled('div', {
  margin: 0,
  backgroundColor: 'transparent',
  borderBottom: '2px solid $dafaz600',
  borderRadius: '$md',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',
  width: '100%',

  transition: 'border 0.2s linear',

  '&:has(input:focus)': {
    borderBottom: '2px solid $dafaz400',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    withShadow: {
      true: {
        boxShadow: 'inset 0 3rem #444',
      },
    },
  },
  defaultVariants: {
    withShadow: false,
  },
})

export const InputUI = styled('input', {
  margin: 0,
  fontFamily: '$app',
  fontSize: '$xl',
  color: '$white',
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  padding: '$1 $2',

  '&::-ms-reveal': {
    filter: 'invert(100%)',
  },

  '&::placeholder': {
    fontWeight: '$regular',
    color: '$white',
    opacity: 0.75,
  },

  '&:focus': {
    outline: 0,
  },
})

export const Sufix = styled('span', {
  fontFamily: '$app',
  fontSize: '$sm',
  color: '$white',
  fontStyle: 'italic',
  marginRight: '$2',

  '&:has(input:focus)': {
    visibility: 'hidden',
  },
})
