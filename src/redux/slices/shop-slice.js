import { createSlice } from "@reduxjs/toolkit";
const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value:{
            SHOP_DATA : []
        }
    },
    reducers: {
        setSHOP_DATA(state, action) {
            const firebaseData = action.payload;
            state.value.SHOP_DATA = firebaseData;
        },
    },
})

export const { setSHOP_DATA } = shopSlice.actions;
export default shopSlice.reducer;


