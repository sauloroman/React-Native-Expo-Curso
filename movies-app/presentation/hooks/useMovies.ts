import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'], 
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 hrs
    })

    const popularQuery = useQuery({ 
        queryKey: ['movies', 'popular'], 
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 hrs
    })
    
    const topRatedQuery = useQuery({
        queryKey: ['movies', 'topRated'],
        queryFn: topRatedAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 hrs
    })
    
    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 hrs
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }
}