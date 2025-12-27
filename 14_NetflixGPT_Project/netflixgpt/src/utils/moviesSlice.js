import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMoviesList : null,
        popularMoviesList : null,
        topRatedMoviesList : null,
        upcomingMoviesList : null,
        movieTrailer : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMoviesList = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMoviesList = action.payload
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMoviesList = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMoviesList = action.payload
        },
        addMovieTrailer : (state, action) => {
            state.movieTrailer = action.payload
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieTrailer} = moviesSlice.actions
export default moviesSlice.reducer