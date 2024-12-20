import type { ReactNode } from 'react'
import { HeadingUI, HeadingUIProps } from './styles'

export interface HeadingProps {
  children: ReactNode
}

export function Heading({ children, ...props }: HeadingUIProps & HeadingProps) {
  return <HeadingUI {...props}>{children}</HeadingUI>
}

Heading.displayName = 'Heading'
