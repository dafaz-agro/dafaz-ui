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

export function Radio({ items, size, ...props }: RadioGroupProps) {
  return (
    <RadioUI {...props}>
      {items.map((item) => {
        return (
          <RadioItem
            id={item.id}
            label={item.label}
            value={item.value}
            size={size}
          />
        )
      })}
    </RadioUI>
  )
}

Radio.displayName = 'Radio'
