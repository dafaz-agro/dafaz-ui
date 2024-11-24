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
  ...props
}: CheckboxIUProps & CheckboxProps) {
  return (
    <Label htmlFor={id} size={size}>
      <CheckBoxUI id={id} {...props} size={size}>
        <CheckBoxIndicator asChild size={size}>
          <Check weight="bold" />
        </CheckBoxIndicator>
      </CheckBoxUI>
      {label}
    </Label>
  )
}
