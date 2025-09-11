import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const App = () => {
  return (
    <Redirect href='/(stack)/home' />


    // <SafeAreaView>
    //   <View className='mt-6 mx-2.5'>
        
    //     <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-5xl'>Hola Mundo</Text>

    //     <Text className='text-4xl font-work-black text-primary'>Hola Mundo</Text>
    //     <Text className='text-3xl text-secondary-100 font-work-light'>Hola Mundo</Text>
    //     <Text className='text-2xl text-secondary-200 font-work-medium'>Hola Mundo</Text>
    //     <Text className='text-xl text-tertiary'>Hola Mundo</Text>
      
    //     <Link href='/products'>Productos</Link>
    //   </View>
    // </SafeAreaView>
  )
}

export default App