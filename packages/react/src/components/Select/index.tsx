import { SelectUI, SelectUIProps, OptionUI } from './styles'

interface Item {
  id: string
  label: string
  value: string
}

interface SelectProps {
  items: Item[]
  placeholder?: string
}

export function Select({
  size,
  placeholder,
  items,
  ...props
}: SelectUIProps & SelectProps) {
  return (
    <SelectUI size={size} {...props} defaultValue="">
      <OptionUI className="placeholder" value="">
        {placeholder}
      </OptionUI>
      {items.map((item) => {
        return (
          <OptionUI key={item.id} value={item.value}>
            {item.label}
          </OptionUI>
        )
      })}
    </SelectUI>
  )
}

Select.displayName = 'Select'
