import { CaretDown, X } from '@phosphor-icons/react'
import { CheckBox } from '../CheckBox'
import { SelectUI, SelectContainerUI, SelectUIProps, Button } from './styles'

import {
  forwardRef,
  useEffect,
  useState,
  type ChangeEvent,
  type ElementRef,
  type MouseEvent,
} from 'react'

interface Item {
  id: string
  label: string
  value: string
}

interface SelectContainerProps extends SelectUIProps {
  id: string
  items: Item[]
  placeholder?: string
  name?: string
  value?: string[]
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const MultiSelect = forwardRef<
  ElementRef<typeof SelectUI>,
  SelectContainerProps
>(
  (
    { id, size, items, placeholder, onChange, ...props }: SelectContainerProps,
    ref,
  ) => {
    const [values, setValues] = useState([
      { id: '', label: '', value: '', isChecked: false },
    ])
    const [selectedValue, setSelectedValue] = useState([''])
    const [clickClass, setClickClass] = useState(false)
    const [isClose, setIsClosed] = useState(true)

    useEffect(() => {
      items.map((item) =>
        setValues((state) => {
          const values = state.filter((item) => item.id !== '')
          return [
            ...values,
            {
              id: item.id,
              label: item.label,
              value: item.value,
              isChecked: false,
            },
          ].sort((a, b) => (a.label > b.label ? 1 : -1))
        }),
      )
    }, [items])

    useEffect(() => {
      setClickClass(false)
      values.map((item) => {
        if (item.isChecked) {
          setSelectedValue((state) => {
            const alreadyChecked = state.find((obj) => obj === item.value)
            if (alreadyChecked) {
              return state
            } else {
              return [...state, item.value]
            }
          })
        } else {
          setSelectedValue((state) => {
            const itemsChecked = state.filter((obj) => obj !== item.value)
            return itemsChecked
          })
        }
      })
    }, [values, items, setValues])

    function handleOnValueChange(id: string) {
      setValues((state) => {
        const items = state.filter((item) => item.id !== id)
        const item = state.find((item) => item.id === id)

        if (item) {
          return [
            {
              id: item.id,
              label: item.label,
              value: item.value,
              isChecked: !item.isChecked,
            },
            ...items,
          ].sort((a, b) => (a.label > b.label ? 1 : -1))
        }
        return state
      })

      values.map((item) => {
        if (item.isChecked) {
          setSelectedValue((state) => {
            const alreadyChecked = state.find((obj) => obj === item.value)
            if (alreadyChecked) {
              return state
            } else {
              return [...state, item.value]
            }
          })
        } else {
          setSelectedValue((state) => {
            const itemsChecked = state.filter((obj) => obj !== item.value)
            return itemsChecked
          })
        }
      })
    }

    function handleOnClick() {
      setClickClass((state) => !state)
      setIsClosed((state) => !state)
    }

    function handleRemoveItem(e: MouseEvent<HTMLElement>, id: string) {
      setIsClosed(true)
      handleOnValueChange(id)
    }

    function updateSelectComponent(item: string) {
      const checkedItem = selectedValue.find((obj) => obj === item)

      if (checkedItem) {
        return selectedValue.filter((obj) => obj !== item)
      } else {
        return [...selectedValue.filter((obj) => obj !== ''), item].sort(
          (a, b) => (a > b ? 1 : -1),
        )
      }
    }

    const itemsChecked = values
      .filter((item) => item.isChecked === true)
      .sort((a, b) => (a.label > b.label ? 1 : -1))

    return (
      <SelectUI
        ref={ref}
        id={id}
        size={size}
        onClick={handleOnClick}
        value={selectedValue}
        onChange={onChange}
        className={clickClass ? 'clicked' : ''}
        {...props}
      >
        {(isClose &&
          itemsChecked.length > 0 &&
          itemsChecked.map((item) => {
            return (
              <div key={`opt:${item.id}`}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ marginLeft: '0.5rem' }}>{item.label}</span>
                  <Button
                    type="button"
                    size={size}
                    onClick={(e) => handleRemoveItem(e, item.id)}
                  >
                    <X size={24} weight="bold" />
                  </Button>
                </div>
              </div>
            )
          })) ||
          ((itemsChecked.length === 0 || !isClose) && (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <span style={{ opacity: 0.75, marginLeft: '0.5rem' }}>
                  {placeholder}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '0.7rem',
                  }}
                >
                  <CaretDown size={24} weight="bold" />
                </span>
              </div>
            </div>
          ))}

        <SelectContainerUI
          className={isClose ? 'closed' : 'opened'}
          onMouseLeave={() => {
            setIsClosed(true)
          }}
        >
          {values.map((item) => {
            return (
              <CheckBox
                name={`chk${item.id}`}
                size={size}
                key={item.id}
                label={item.label}
                checked={item.isChecked}
                value={updateSelectComponent(item.value)}
                handleOnChange={() => {
                  handleOnValueChange(item.id)
                }}
              />
            )
          })}
        </SelectContainerUI>
      </SelectUI>
    )
  },
)

MultiSelect.displayName = 'MultiSelect'
