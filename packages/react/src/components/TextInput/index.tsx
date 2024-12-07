import {
  forwardRef,
  useState,
  ComponentProps,
  ElementRef,
  type ChangeEvent,
  type CSSProperties,
} from 'react'
import { InputContainer, InputUI, Sufix } from './styles'
import { Eye, EyeSlash } from '@phosphor-icons/react'

export interface TextInputProps extends ComponentProps<typeof InputUI> {
  size?: 'lg' | 'md' | 'sm'
  required?: boolean
  requiredText?: string
  withShadow?: boolean
  placeholder?: string
  type?: React.HTMLInputTypeAttribute | undefined
  style?: CSSProperties
  id?: string
}

export const TextInput = forwardRef<ElementRef<typeof InputUI>, TextInputProps>(
  (
    {
      withShadow = false,
      required = true,
      requiredText = 'Opcional',
      id,
      type = 'text',
      size,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const [hiddenOptional, setHiddenOptional] = useState(required)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

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
      <InputContainer size={size} withShadow={withShadow}>
        <InputUI
          id={id}
          ref={ref}
          size={size}
          onChange={handleOnChange}
          type={!isPasswordVisible ? type : 'text'}
          {...props}
        />
        {!hiddenOptional && (
          <Sufix style={{ marginLeft: `-${requiredText.length / 2}rem` }}>
            {requiredText}
          </Sufix>
        )}
        {type === 'password' && isPasswordVisible && (
          <button
            type="button"
            onClick={() => {
              setIsPasswordVisible(false)
            }}
          >
            <EyeSlash size={24} />
          </button>
        )}
        {type === 'password' && !isPasswordVisible && (
          <button
            type="button"
            onClick={() => {
              setIsPasswordVisible(true)
            }}
          >
            <Eye size={24} />
          </button>
        )}
      </InputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
