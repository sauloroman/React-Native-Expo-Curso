import axios from 'axios'

export const movieApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
    params: {
        language: 'es-MX',
        apiKey: process.env.EXPO_PUBLIC_MOVIE_DB_KEY
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzM2YTQzYjc4NTBjMDM5ZjcxMjdiYTE0YmYwZjU4MiIsIm5iZiI6MTczMTk2MTU3My43NjgsInN1YiI6IjY3M2JhMmU1NGVjYmIxZjRkMjU3ZjgxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3KsCjNs-HnERMB9ilc5r7m47t883nGj4c3s8FKqX3oc'
    }
})