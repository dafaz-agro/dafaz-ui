import { forwardRef, ElementRef, type ReactNode } from 'react'
import { TextAreaUI, type TextAreaUIProps } from './styles'

interface TextAreaProps extends TextAreaUIProps {
  id: string
  placeholder?: string
  disabled?: boolean
  children?: ReactNode
}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaUI>,
  TextAreaProps
>(({ id, disabled, placeholder, children, ...props }: TextAreaProps, ref) => {
  return (
    <TextAreaUI
      ref={ref}
      rows={3}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    >
      {children}
    </TextAreaUI>
  )
})

TextArea.displayName = 'TextArea'
