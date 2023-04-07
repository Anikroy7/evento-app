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
      providesTags:['home']
    }),
  }),
});

export const { usePostHomeOwnerMutation , useGetHomeOnwerByIdQuery} = homeOwner;
