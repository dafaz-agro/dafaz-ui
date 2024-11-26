import { SelectUI, SelectUIProps, OptionUI } from './styles'

import { ChangeEvent, useState } from 'react'

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
  const [value, setValue] = useState('')

  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    setValue(() => {
      return event.target.value
    })
  }

  return (
    <SelectUI
      size={size}
      {...props}
      value={value}
      onChange={handleSelect}
      style={{ opacity: value != '' ? 1 : 0.75 }}
    >
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
