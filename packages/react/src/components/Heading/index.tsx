import type { ReactNode } from 'react'
import { HeadingUI, HeadingUIProps } from './styles'

interface HeadingProps {
  children: ReactNode
}

export function Heading({ children, ...props }: HeadingUIProps & HeadingProps) {
  return <HeadingUI {...props}>{children}</HeadingUI>
}
