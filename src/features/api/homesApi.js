import apiSlice from "./apiSlice";

const homesApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    getHomes: builder.query({
      query: () => "/homes?populate=*",
    }),

    // providesTags: ["home"],
    getHomeById: builder.query({
      query: (homeId) => `/homes/${homeId}?populate=*`,
      // providesTags:['home'],
    }),
    updateHomebyId: builder.mutation({
      query: (data) => ({
        url: `/homes/${data.id}`,
        body: { data: data.updatedData },
        method: "put",
      }),
      invalidatesTags: ["home"],
    }),
  }),
});

export const {
  useGetHomesQuery,
  useGetHomeByIdQuery,
  useUpdateHomebyIdMutation,
} = homesApi;
