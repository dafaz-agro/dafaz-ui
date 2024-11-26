import { Check } from '@phosphor-icons/react'
import {
  Label,
  RadioIndicator,
  RadioItemContainer,
  RadioItemUI,
  type RadioItemUIProps,
} from './styles'

interface RadioItemProps {
  label: string
}

export function RadioItem({
  label,
  id,
  size,
  disabled = false,
  ...props
}: RadioItemProps & RadioItemUIProps) {
  return (
    <RadioItemContainer key={id}>
      <RadioItemUI disabled={disabled} id={id} {...props} size={size}>
        <RadioIndicator asChild size={size}>
          <Check weight="bold" />
        </RadioIndicator>
      </RadioItemUI>
      <Label disabled={disabled} htmlFor={id} size={size}>
        {label}
      </Label>
    </RadioItemContainer>
  )
}

RadioItem.displayName = 'RadioItem'
