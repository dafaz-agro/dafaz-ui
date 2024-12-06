import { RadioUI, RadioUIProps } from './styles'
import { RadioItem } from './RadioItem'
import { forwardRef, type ElementRef } from 'react'

interface Item {
  id: string
  label: string
  value: string
}

interface RadioGroupProps extends RadioUIProps {
  items: Item[]
  value?: string | undefined
  onValueChange?: ((value: string) => void) | undefined
}

export const Radio = forwardRef<ElementRef<typeof RadioUI>, RadioGroupProps>(
  (
    {
      items,
      size,
      disabled = false,
      onValueChange,
      value,
      ...props
    }: RadioGroupProps,
    ref,
  ) => {
    return (
      <RadioUI
        ref={ref}
        disabled={disabled}
        {...props}
        onValueChange={onValueChange}
        value={value}
      >
        {items.map((item) => {
          return (
            <RadioItem
              key={item.id}
              label={item.label}
              value={item.value}
              size={size}
              disabled={disabled}
            />
          )
        })}
      </RadioUI>
    )
  },
)

Radio.displayName = 'Radio'
