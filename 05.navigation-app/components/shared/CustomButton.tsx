import React from 'react'
import { Pressable, type PressableProps, Text, View } from 'react-native'

interface Props extends PressableProps {
  children: string
  className?: string,
  color?: 'primary' | 'secondary' | 'tertiary',
  variant?: 'contained' | 'text-only'
}

// El forwardRef ya no es necesario a partir de React Version 19
export const CustomButton = React.forwardRef(
  ({ children, className, variant = 'contained', color = 'primary', onPress, onLongPress }: Props, ref: React.Ref<View> ) => {
  
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color]

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color]
  
  if ( variant === 'text-only' ) {
    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 ${className}`}
      >
        <Text className={`${textColor} text-center font-work-black`}>{children}</Text>
      </Pressable>
    )
  }

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
    >
      <Text className='text-white text-center font-work-black'>{children}</Text>
    </Pressable>
  )
})
