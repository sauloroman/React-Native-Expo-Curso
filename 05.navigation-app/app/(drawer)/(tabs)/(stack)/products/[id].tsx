import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store'

const ProductScreen = () => {

  const navigation = useNavigation()
  const { id } = useLocalSearchParams()
  const product = products.find( p => p.id === id )

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'producto'
    })
  }, [product])

  if ( !product ) {
    return <Redirect href={'/'} />
  }

  return (
    <View className='px-5 mt-3'>
      <Text className='font-work-black text-2xl'>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className='font-work-black'>{product.price}</Text>
    </View>
  )
}

export default ProductScreen