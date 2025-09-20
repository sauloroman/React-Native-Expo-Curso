import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie'
import MovieHeader from '@/presentation/components/movies/MovieHeader'
import MovieDescription from '@/presentation/components/movies/MovieDescription'

const MovieScreen = () => {

  const { id } = useLocalSearchParams()
  const { movieQuery } = useMovie(+id)

  if ( movieQuery.isLoading || !movieQuery.data ) {
    return (
      <View  className='flex flex-1 justify-center items-center'>
        <Text className='mb-4 font-bold'>Espere por favor</Text>
        <ActivityIndicator color={'purple'} size={50} />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader 
        originalTitle={movieQuery.data.title}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      <MovieDescription 
        movie={movieQuery.data}
      />
    </ScrollView>
  )
}

export default MovieScreen