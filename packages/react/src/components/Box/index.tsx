import { ReactNode } from 'react'
import { BoxUI, BoxUIProps } from './styles'

interface BoxProps {
  children: ReactNode
}

export function Box({ children, ...props }: BoxUIProps & BoxProps) {
  return <BoxUI {...props}>{children}</BoxUI>
}
