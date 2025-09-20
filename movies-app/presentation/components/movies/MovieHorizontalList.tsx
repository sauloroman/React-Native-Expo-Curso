import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
    title?: string,
    className?: string,
    movies: Movie[],

    loadNextPage?: () => {}
}

const MovieHorizontalList = ({ movies, className, title, loadNextPage }: Props) => {

  const isLoading = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false
    }, 200)
  }, [movies])

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if ( isLoading.current ) return;

    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

    if ( !isEndReached ) return;

    isLoading.current = true
    
    // TODO: Cargar siguientes peliculas
    console.log('Cargar siguientes películas')
    loadNextPage && loadNextPage()
  } 

  return (
    <View className={`${className}`}>
      { title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}

      <FlatList
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={ movies }
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({item}) => (<MoviePoster id={item.id} poster={item.poster} smallPoster />)}
        onScroll={ onScroll }
      />
    </View>
  )
}

export default MovieHorizontalList