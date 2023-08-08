import { configureStore } from "@reduxjs/toolkit";

import  userReducer  from "./slices/user-slice";
import cardReducer from './slices/card-slice';

export default configureStore ({
    reducer:{
        user: userReducer,
        card: cardReducer
    }
})