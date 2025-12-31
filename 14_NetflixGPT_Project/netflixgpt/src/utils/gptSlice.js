import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        toggleToGptPage : false,
        gptMovies : null,
        gptMovieNames : null
    },
    reducers : {
        toggleBetweenBrowseAndGpt : (state)=>{
            state.toggleToGptPage = !state.toggleToGptPage
        },
        addGptMovieResults : (state, action) => {
            state.gptMovies = action.payload.gptMovies
            state.gptMovieNames = action.payload.gptMovieNames
        },
        removeGptMovieResults : (state) => {
            state.gptMovies = null
            state.gptMovieNames = null
        }
    }
})

export const {toggleBetweenBrowseAndGpt, addGptMovieResults, removeGptMovieResults} = gptSlice.actions
export default gptSlice.reducer