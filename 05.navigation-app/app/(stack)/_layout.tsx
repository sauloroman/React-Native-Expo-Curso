import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white'
        },
      }}
    >
      <Stack.Screen 
        name='home/index'
        options={{
          title: 'Home Screen'
        }}
      />
      <Stack.Screen 
        name='products/index'
        options={{
          title: 'Products Screen',
          animation: 'fade_from_bottom'
        }}
      />
      <Stack.Screen 
        name='products/[id]'
        options={{
          title: 'Products Screen',
          animation: 'ios_from_right'
        }}
      />
      <Stack.Screen 
        name='settings/index'
        options={{
          title: 'Settings Screen',
          animation: 'simple_push'
        }}
      />
      <Stack.Screen 
        name='profile/index'
        options={{
          title: 'Profile Screen'
        }}
      />
    </Stack>
  )
}

export default StackLayout