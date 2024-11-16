import { Button, ButtonProps } from '@dafaz-ui/react'

//** Primary UI component for user interaction */
export function ButtonUI({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {label}
    </Button>
  )
}

ButtonUI.displayName = 'Button'
