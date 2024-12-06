import { styled } from '../../styles'

export const InputContainer = styled('div', {
  margin: 0,
  backgroundColor: 'transparent',
  borderBottom: '2px solid $dafaz600',
  borderRadius: '$md',
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',

  boxShadow: '0 3px 2px -2px $colors$gray400',

  transition: 'border 0.2s linear',

  '&:has(input:focus)': {
    borderBottom: '2px solid $dafaz400',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  button: {
    border: 0,
    background: 'none',
    marginRight: '0.5rem',
    cursor: 'pointer',

    svg: {
      opacity: 0.75,
      color: '$white',
      marginBottom: '-0.3rem',
    },
  },
  variants: {
    size: {
      lg: {
        fontSize: '$xl',
      },
      md: {
        fontSize: '$lg',
      },
      sm: {
        fontSize: '$md',
      },
    },
    withShadow: {
      true: {
        boxShadow: 'inset 0 3rem #444',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    withShadow: false,
  },
})

export const InputUI = styled('input', {
  margin: 0,
  fontFamily: '$app',
  color: '$white',
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  padding: '$1 $2',

  '&::-ms-reveal': {
    display: 'none',
  },

  '&::-ms-clear': {
    display: 'none',
  },

  '&::placeholder': {
    fontWeight: '$regular',
    color: '$white',
    opacity: 0.75,
  },

  '&:focus': {
    outline: 0,
  },

  variants: {
    size: {
      lg: {
        fontSize: '$xl',
      },
      md: {
        fontSize: '$lg',
      },
      sm: {
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
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
