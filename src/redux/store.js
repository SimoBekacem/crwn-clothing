import { configureStore, combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import userReducer from './slices/user-slice';
import cardReducer from './slices/card-slice';
import directoryReducer from './slices/directory-slice';
import shopReducer from './slices/shop-slice';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const reducer = combineReducers({
	user: userReducer,
	card: cardReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export default configureStore({
	reducer: persistedReducer,
});
