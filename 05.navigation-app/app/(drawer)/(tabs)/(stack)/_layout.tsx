import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import { Text } from 'react-native'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const StackLayout = () => {

  const navigation = useNavigation()

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if ( canGoBack ) {
      router.back()
      // navigation.dispatch(StackActions.pop())
      return
    }
    navigation.dispatch( DrawerActions.toggleDrawer )
  }

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white'
        },
        headerLeft: ({ tintColor, canGoBack }) => <Ionicons 
          onPress={() => onHeaderLeftClick(canGoBack!)}
          name={canGoBack ? 'arrow-back-outline' : 'grid-outline'} 
          size={20} 
          className='mr-4' 
        />
      }}
    >
      <Stack.Screen 
        name='home/index'
        options={{
          title: 'Inicio'
        }}
      />
      <Stack.Screen 
        name='products/index'
        options={{
          title: 'Productos',
          animation: 'fade_from_bottom'
        }}
      />
      <Stack.Screen 
        name='products/[id]'
        options={{
          title: 'Producto',
          animation: 'ios_from_right'
        }}
      />
      <Stack.Screen 
        name='settings/index'
        options={{
          title: 'Ajustes',
          animation: 'simple_push'
        }}
      />
      <Stack.Screen 
        name='profile/index'
        options={{
          title: 'Perfil'
        }}
      />
    </Stack>
  )
}

export default StackLayout