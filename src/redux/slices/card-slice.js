import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "card",
    initialState:{
        value:{
            isOpen: false,
            carditems: []
        }   
    },
    reducers: {
        togglewindow: (state) => {
            state.value.isOpen = !state.value.isOpen;
        },
        addtocard: (state, action) => {
            const newitem = action.payload;
            const existingItem = state.value.carditems.find(item => item.id === newitem.id);
            if (existingItem) {
                state.value.carditems = state.value.carditems.map(item => 
                    item.id === newitem.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                state.value.carditems.push(newitem);
            }
        }
    }
});

export const { togglewindow, addtocard } = cardSlice.actions;
export default cardSlice.reducer;
