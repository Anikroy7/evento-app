import apiSlice from "./apiSlice";

const homesApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getHomes: builder.query({
            query: () => '/homes?populate=*'
        }),

        getHomeById: builder.query({
            query:(homeId)=>`/homes/${homeId}?populate=*`
        })
    })

})

export const { useGetHomesQuery,useGetHomeByIdQuery } = homesApi