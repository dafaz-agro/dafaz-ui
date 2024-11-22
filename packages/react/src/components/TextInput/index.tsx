import {
  forwardRef,
  useState,
  ComponentProps,
  ElementRef,
  type ChangeEvent,
} from 'react'
import { InputContainer, InputUI, Sufix } from './styles'

export interface TextInputProps extends ComponentProps<typeof InputUI> {
  required?: boolean
  requiredText?: string
  withShadow?: boolean
  placeholder?: string
  type?: string
}

export const TextInput = forwardRef<ElementRef<typeof InputUI>, TextInputProps>(
  (
    {
      withShadow = false,
      required = true,
      requiredText = 'Opcional',
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const [hiddenOptional, setHiddenOptional] = useState(required)

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
      if (!required) {
        if (event.target.value === '') {
          setHiddenOptional(false)
        } else {
          setHiddenOptional(true)
        }
      }
    }

    return (
      <InputContainer withShadow={withShadow}>
        <InputUI ref={ref} onChange={handleOnChange} {...props} />
        {!hiddenOptional && (
          <Sufix style={{ marginLeft: `-${requiredText.length / 2}rem` }}>
            {requiredText}
          </Sufix>
        )}
      </InputContainer>
    )
  },
)

TextInput.displayName = 'Input'
