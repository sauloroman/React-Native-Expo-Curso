import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, useNavigation } from 'expo-router';
import { CustomButton } from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = () => {
  
  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer )
  }

  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>

        <CustomButton 
          className='mb-2'
          onPress={() => router.push('/products')} 
          color='primary'
        >Productos</CustomButton>

        <CustomButton
          className='mb-2' 
          onPress={() => router.push('/profile')} 
          color='secondary'
        >Perfíl</CustomButton>

        <CustomButton
          className='mb-2' 
          onPress={() => router.push('/settings')} 
          color='tertiary'
        >Ajustes</CustomButton>

        <Link href='/products' asChild >
          <CustomButton variant='text-only' className='mb-10' color='secondary'>Productos</CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir Menú</CustomButton>
        
        {/* <Link className='mb-5' href='/products'>Productos</Link>
        <Link className='mb-5' href='/profile'>Perfíl</Link>
        <Link className='mb-5' href='/settings'>Ajustes</Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen