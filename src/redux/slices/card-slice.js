import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "card",
    initialState:{
        value:{
            isOpen: false
        }   
    },
    reducers: {
        togglewindow:(state) => {
            state.value.isOpen = !state.value.isOpen
        }
    }
})
export const { togglewindow } = cardSlice.actions;
export default cardSlice.reducer;