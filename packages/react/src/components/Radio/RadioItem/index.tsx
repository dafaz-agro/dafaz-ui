import { Check } from '@phosphor-icons/react'
import {
  Label,
  RadioIndicator,
  RadioItemContainer,
  RadioItemUI,
  type RadioItemUIProps,
} from './styles'
import { useId } from 'react'

interface RadioItemProps {
  label: string
}

export function RadioItem({
  label,
  size,
  disabled = false,
  ...props
}: RadioItemProps & RadioItemUIProps) {
  const htmlId = useId()

  return (
    <RadioItemContainer>
      <RadioItemUI disabled={disabled} id={htmlId} {...props} size={size}>
        <RadioIndicator asChild size={size}>
          <Check weight="bold" />
        </RadioIndicator>
      </RadioItemUI>
      <Label disabled={disabled} htmlFor={htmlId} size={size}>
        {label}
      </Label>
    </RadioItemContainer>
  )
}

RadioItem.displayName = 'RadioItem'
