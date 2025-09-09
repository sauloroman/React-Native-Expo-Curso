import { Pressable, Text } from "react-native"
import * as Haptics from 'expo-haptics';
import { Colors } from "@/constants/Colors"
import { globalStyles } from "@/styles/global-styles"

interface Props {
  label: string,
  color?: string,
  blackText?: boolean,
  doubleSize?: boolean
  onPress: () => void
}

export const CalculatorButton = ({ 
  label, 
  onPress, 
  blackText = false,
  doubleSize = false,
  color = Colors.darkGray, 
}: Props) => {
  return (
    <Pressable 
      onPress={() => {
        // TODO: Haptics
        Haptics.impactAsync(
          Haptics.ImpactFeedbackStyle.Heavy
        )
        onPress()
      }}
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80
      })}
    >
      <Text style={{
        ...globalStyles.buttonText,
        color: blackText ? 'black' : 'white'
      }}>{label}</Text>
    </Pressable>
  )
}
