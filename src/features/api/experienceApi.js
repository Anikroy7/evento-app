import apiSlice from './apiSlice';


const experienceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getExperience: builder.query({
            query: () => '/experiences?populate=*'
        })
    })

})



export const { useGetExperienceQuery } = experienceApi