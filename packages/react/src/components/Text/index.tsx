import type { ReactNode } from 'react'
import { TextUI, TextUIProps } from './styles'

interface TextProps {
  children: ReactNode
}

export function Text({
  children,
  size,
  color,
  ...props
}: TextUIProps & TextProps) {
  return (
    <TextUI size={size} color={color} {...props}>
      {children}
    </TextUI>
  )
}

Text.displayName = 'Text'
