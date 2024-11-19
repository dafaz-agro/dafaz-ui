import { Text, TextProps } from '@dafaz-ui/react'

export function TextUI({ size = 'md', content, ...props }: TextProps) {
  return (
    <Text size={size} {...props}>
      {content}
    </Text>
  )
}

TextUI.displayName = 'Text'
