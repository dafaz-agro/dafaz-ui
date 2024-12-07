import { SeparatorUI, SeparatorUIProps } from './styles'

export function Separator({ size, color, style, ...props }: SeparatorUIProps) {
  return <SeparatorUI size={size} color={color} style={style} {...props} />
}

Separator.displayName = 'Separator'
