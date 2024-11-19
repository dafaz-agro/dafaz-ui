import { Button, ButtonProps } from '@dafaz-ui/react'

export function ButtonUI({
  label,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <Button type="button" variant={variant} size={size} {...props}>
      {label}
    </Button>
  )
}

ButtonUI.displayName = 'Button'
