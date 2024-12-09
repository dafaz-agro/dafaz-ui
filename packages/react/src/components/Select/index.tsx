import { CaretDown } from '@phosphor-icons/react'
import { SelectUI, SelectUIProps, OptionUI, SelectContainer } from './styles'

import { forwardRef, ChangeEvent, useState, type ElementRef } from 'react'

interface Item {
  id: string
  label: string
  value: string
}

interface SelectProps extends SelectUIProps {
  id: string
  items: Item[]
  placeholder?: string
}

export const Select = forwardRef<ElementRef<typeof SelectUI>, SelectProps>(
  ({ id, size, placeholder, items, ...props }: SelectProps, ref) => {
    const [value, setValue] = useState('')

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
      setValue(() => {
        return event.target.value
      })
    }

    return (
      <SelectContainer size={size}>
        <SelectUI
          id={id}
          ref={ref}
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
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '1rem',
            marginRight: '0.7rem',
            marginLeft: '-3rem',
          }}
        >
          <CaretDown size={24} weight="bold" />
        </span>
      </SelectContainer>
    )
  },
)

Select.displayName = 'Select'
