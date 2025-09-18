import React, { useRef } from 'react'
import { Dimensions, Text, useWindowDimensions, View } from 'react-native'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[]
}

// Dimensions.get('screen').width

const MainSlidesShow = ({ movies }: Props) => {

    const ref = useRef<ICarouselInstance>(null)
    const width = useWindowDimensions().width

    return (
        <View className='h-[250px] w-full'>
            <Carousel 
                data={movies}
                renderItem={ ({item}) => (<MoviePoster 
                    id={item.id} 
                    poster={item.poster} 
                />)}
                ref={ref}
                width={ 150 + 50 }
                height={ 300 + 50 }
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlidesShow