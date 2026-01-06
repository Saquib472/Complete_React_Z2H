import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : 'chat',
    initialState : {
        messages : []
    },
    reducers : {
        addmessage : (state, action) => {
            state.messages.length > 25 ? state.messages.splice(25,1) : null
            state.messages.unshift(action.payload)
        }
    }
})

export const {addmessage} = chatSlice.actions
export default chatSlice.reducer