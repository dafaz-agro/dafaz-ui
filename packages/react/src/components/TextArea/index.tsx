import type { ReactNode } from 'react'
import { TextAreaUI, type TextAreaUIProps } from './styles'

interface TextAreaProps {
  children?: ReactNode
  placeholder?: string
  disabled?: boolean
}

export function TextArea({
  children,
  ...props
}: TextAreaUIProps & TextAreaProps) {
  return (
    <TextAreaUI rows={3} {...props}>
      {children}
    </TextAreaUI>
  )
}
