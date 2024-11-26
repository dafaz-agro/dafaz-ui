import { CheckBoxIndicator, CheckBoxUI, Label, CheckboxIUProps } from './styles'
import { Check } from '@phosphor-icons/react'

interface CheckboxProps {
  id: string
  label: string
}

export function CheckBox({
  id,
  label,
  size,
  disabled = false,
  ...props
}: CheckboxIUProps & CheckboxProps) {
  return (
    <Label disabled={disabled} htmlFor={id} size={size}>
      <CheckBoxUI disabled={disabled} id={id} {...props} size={size}>
        <CheckBoxIndicator asChild size={size}>
          <Check weight="bold" />
        </CheckBoxIndicator>
      </CheckBoxUI>
      {label}
    </Label>
  )
}

CheckBox.displayName = 'CheckBox'
