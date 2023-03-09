import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authSlice from '../features/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiSlice.middleware),
})

export default store;