import { forwardRef, useId, type ElementRef } from 'react'
import { CheckBoxIndicator, CheckBoxUI, Label, CheckboxIUProps } from './styles'
import { Check } from '@phosphor-icons/react'

interface CheckboxItemProps extends CheckboxIUProps {
  label: string
  handleOnChange?: (checked: boolean, id?: string) => void
}

export const CheckBox = forwardRef<
  ElementRef<typeof CheckBoxUI>,
  CheckboxItemProps
>(
  (
    {
      label,
      size,
      disabled = false,
      handleOnChange,
      ...props
    }: CheckboxItemProps,
    ref,
  ) => {
    const htmlId = useId()

    return (
      <Label htmlFor={htmlId} disabled={disabled} size={size}>
        <CheckBoxUI
          ref={ref}
          disabled={disabled}
          id={htmlId}
          size={size}
          onCheckedChange={handleOnChange}
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
