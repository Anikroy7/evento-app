import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_LOCAL_URL
    }),
    endpoints: (builder) => ({})

})

export default apiSlice;