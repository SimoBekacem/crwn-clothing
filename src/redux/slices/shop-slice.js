import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";


export const fetchData = createAsyncThunk('fetchData', async () => {
    try{
        const datacollection = collection(firestore,'collections');
        const data = await getDocs(datacollection);
        const filtreddata = data.docs[0].data().data
        return filtreddata;
    }catch{
        console.error();
    }
})


const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value:{
            shop_data : [],
            errormessage: undefined
        }
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            const fetchedData = action.payload;
            state.value = { ...state.value, shop_data: fetchedData }; 
        })
    },
})

export const { setSHOP_DATA } = shopSlice.actions;
export default shopSlice.reducer;


