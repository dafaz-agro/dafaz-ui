import type { ReactNode } from 'react'
import { TextUI, TextUIProps } from './styles'

interface TextProps {
  children: ReactNode
}

export function Text({
  children,
  size = 'md',
  ...props
}: TextUIProps & TextProps) {
  return (
    <TextUI size={size} {...props}>
      {children}
    </TextUI>
  )
}

Text.displayName = 'Text'
