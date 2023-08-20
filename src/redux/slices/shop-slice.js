import { createSlice } from "@reduxjs/toolkit";
const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value:{
            shop_data : []
        }
    },
    reducers: {
        setSHOP_DATA(state, action) {
            const firebaseData = action.payload;
            state.value.shop_data = firebaseData;
        },
    },
})

export const { setSHOP_DATA } = shopSlice.actions;
export default shopSlice.reducer;


