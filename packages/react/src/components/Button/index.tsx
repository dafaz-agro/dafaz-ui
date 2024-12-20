import type { ReactNode } from 'react'
import { ButtonUI, ButtonUIProps } from './styles'

interface ButtonProps {
  children: ReactNode
  type?: string
  form?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  type = 'button',
  form,
  ...props
}: ButtonUIProps & ButtonProps) {
  return (
    <ButtonUI form={form} type={type} variant={variant} size={size} {...props}>
      {children}
    </ButtonUI>
  )
}

Button.displayName = 'Button'
