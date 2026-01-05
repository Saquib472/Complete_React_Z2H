import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
    name: 'app',
    initialState : {
        showSideBar : true
    },
    reducers: {
        toggleMenu: (state)=>{
            state.showSideBar = !state.showSideBar
        },
        closeMenu: (state)=>{
            state.showSideBar = false
        }
    }
})

export const {toggleMenu, closeMenu} = app.actions
export default app.reducer