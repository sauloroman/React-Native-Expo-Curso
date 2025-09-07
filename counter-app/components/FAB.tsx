import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';

interface FABProps {
  label: string,
  position?: 'left' | 'right'

  onPress?: () => void,
  onLongPress?: () => void
}

export default function FAB({ label, onLongPress, onPress,  position = 'right' }: FABProps) {
  
  const positionButton = useMemo(() => {
    return position === 'right' ? styles.positionRight : styles.positionLeft
  }, [position])
  
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? { opacity: 0.7 } :  {opacity: 1 }, 
        styles.floatingButton, 
        positionButton
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },

  positionRight: {
    right: 20,
  },

  positionLeft: {
    left: 20
  }
});
