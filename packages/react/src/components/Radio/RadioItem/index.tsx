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
  ...props
}: RadioItemProps & RadioItemUIProps) {
  return (
    <RadioItemContainer key={id}>
      <RadioItemUI id={id} {...props} size={size}>
        <RadioIndicator asChild size={size}>
          <Check weight="bold" />
        </RadioIndicator>
      </RadioItemUI>
      <Label htmlFor={id} size={size}>
        {label}
      </Label>
    </RadioItemContainer>
  )
}
