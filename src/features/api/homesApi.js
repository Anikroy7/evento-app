import apiSlice from "./apiSlice";

const homesApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getHomes: builder.query({
            query: () => '/homes?populate=*'
        })
    })

})

export const { useGetHomesQuery } = homesApi