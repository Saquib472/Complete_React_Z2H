import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: 'config',
    initialState: {
        language: 'en'
    },
    reducers : {
        selecLanguage : (state, action) => {
            state.language = action.payload
        }
    }
})

export const {selecLanguage} = appConfigSlice.actions
export default appConfigSlice.reducer