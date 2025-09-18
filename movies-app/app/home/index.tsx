import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlidesShow from '@/presentation/components/movies/MainSlidesShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies()

    if ( nowPlayingQuery.isLoading ) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator size={80} color={'purple'} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

                {/* Carousel de imagenes */}
                <MainSlidesShow movies={nowPlayingQuery?.data ?? []} />

                {/* Popular */}
                <MovieHorizontalList className='mb-5' title='Populares' movies={popularQuery?.data ?? [] } />

                {/* Top Rated */}
                <MovieHorizontalList className='mb-5' title='Mejores Calificadas' movies={topRatedQuery?.data ?? []} />

                {/* Upcoming */}
                <MovieHorizontalList className='mb-5' title='Próximos Estrenos' movies={upcomingQuery?.data ?? []} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen