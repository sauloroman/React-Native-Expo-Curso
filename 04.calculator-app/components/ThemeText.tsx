import { globalStyles } from "@/styles/global-styles"
import React from "react"
import { Text, type TextProps, View } from "react-native"

interface Props extends TextProps {
  variant?: 'h1' | 'h2'
}

export const ThemeText = ({children, variant = 'h1', ...rest}: Props) => {
  return (
    <Text 
      {...rest} 
      style={[
        {color: 'white', fontFamily: 'SpaceMono'},
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult
      ]}
      numberOfLines={1} 
      adjustsFontSizeToFit
    >{children}</Text>
  )
}
