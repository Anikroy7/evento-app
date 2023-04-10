import apiSlice from "./apiSlice";

const homesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomes: builder.query({
      query: () => "/homes?populate=*",
    }),
    
    createHome: builder.mutation({
      query: (home) => ({
        url: "/homes",
        method: "post",
        body: home,
      }),
    }),

    // providesTags: ["home"],
    getHomeById: builder.query({
      query: (homeId) => `/homes/${homeId}?populate=*`,

    }),
    updateHomebyId: builder.mutation({
      query: (data) => ({
        url: `/homes/${data.id}`,
        body: { data: data.updatedData },
        method: "put",
      }),
      invalidatesTags: ["home"],
    }),
    deleteHomeById: builder.mutation({
      query: (homeId) => ({
        url: `/homes/${homeId}`,
        method: "delete",
      }),
      invalidatesTags: ["home"],
    }),
  }),
});

export const {
  useGetHomesQuery,
  useGetHomeByIdQuery,
  useUpdateHomebyIdMutation,
  useDeleteHomeByIdMutation,
  useCreateHomeMutation,
} = homesApi;
