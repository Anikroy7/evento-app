import apiSlice from "./apiSlice";

const homeOwner = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postHomeOwner: builder.mutation({
      query: (home) => ({
        url: "/home-owners",
        body: home,
        method: "post",
      }),
    }),
    getHomeOnwerById: builder.query({
      query: (homeOnwerId) => `/home-owners/${homeOnwerId}?populate=*`,
      providesTags: ["home"],
    }),
    updateHomeOwnerById: builder.mutation({
      query: (data) => ({
        url: `/home-owners/${data.homeOwnerId}`,
        method: "put",
        body: data.homeId,
      }),
      invalidatesTags:['home']
    }),
  }),
});

export const {
  usePostHomeOwnerMutation,
  useGetHomeOnwerByIdQuery,
  useUpdateHomeOwnerByIdMutation,
} = homeOwner;
