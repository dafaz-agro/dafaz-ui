import { RadioUI, RadioUIProps } from './styles'
import { RadioItem } from './RadioItem'

interface Item {
  id: string
  label: string
  value: string
}

interface RadioGroupProps extends RadioUIProps {
  items: Item[]
}

export function Radio({
  items,
  size,
  disabled = false,
  ...props
}: RadioGroupProps) {
  return (
    <RadioUI disabled={disabled} {...props}>
      {items.map((item) => {
        return (
          <RadioItem
            id={item.id}
            label={item.label}
            value={item.value}
            size={size}
            disabled={disabled}
          />
        )
      })}
    </RadioUI>
  )
}

Radio.displayName = 'Radio'
