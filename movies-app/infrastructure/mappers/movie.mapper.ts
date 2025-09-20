import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MoviewDBMovieResponse } from "../interfaces/moviedb-movie-response.interface";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {

    public static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: movie.backdrop_path,
            rating: movie.vote_average
        }
    }

    public static fromTheMoviewDBToCompleteMovie = (movie: MoviewDBMovieResponse): CompleteMovie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: movie.backdrop_path,
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map( g => g.name ),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map( c => c.name )
        }
    }

}