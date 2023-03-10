import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authSlice from '../features/auth/authSlice';
import filterSlice from '../features/filter/filterSlice';


const store = configureStore({
    reducer: {
        filter: filterSlice,
        auth: authSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiSlice.middleware),
})

export default store;