import type { ReactNode } from 'react'
import { ButtonUI, ButtonUIProps } from './styles'

interface ButtonProps {
  children: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonUIProps & ButtonProps) {
  return (
    <ButtonUI variant={variant} size={size} {...props}>
      {children}
    </ButtonUI>
  )
}

ButtonUI.displayName = 'Button'
