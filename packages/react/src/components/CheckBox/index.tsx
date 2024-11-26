import { forwardRef, type ElementRef } from 'react'
import { CheckBoxIndicator, CheckBoxUI, Label, CheckboxIUProps } from './styles'
import { Check } from '@phosphor-icons/react'

interface CheckboxProps extends CheckboxIUProps {
  id: string
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export const CheckBox = forwardRef<
  ElementRef<typeof CheckBoxUI>,
  CheckboxProps
>(
  (
    {
      id,
      label,
      size,
      disabled = false,
      checked,
      onCheckedChange,
      ...props
    }: CheckboxProps,
    ref,
  ) => {
    return (
      <Label htmlFor={id} disabled={disabled} size={size}>
        <CheckBoxUI
          ref={ref}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          id={id}
          size={size}
          {...props}
        >
          <CheckBoxIndicator asChild size={size}>
            <Check weight="bold" />
          </CheckBoxIndicator>
        </CheckBoxUI>
        {label}
      </Label>
    )
  },
)

CheckBox.displayName = 'CheckBox'
