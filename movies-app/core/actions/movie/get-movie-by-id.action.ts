import { movieApi } from "@/core/api/movie-api"
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface"
import { MoviewDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie-response.interface"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const getMoviewByIdAction = async (id: number | string): Promise<CompleteMovie> => {

    try {
        const { data } = await movieApi.get<MoviewDBMovieResponse>(`/${id}`)
        return MovieMapper.fromTheMoviewDBToCompleteMovie(data)
    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }

}