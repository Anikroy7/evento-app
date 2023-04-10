import apiSlice from "./apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (data) => ({
        url: `/my-users`,
        body: data,
        method: "post",
      }),
    }),
    getUserById: builder.query({
      query: (userId) => `/my-users/${userId}?populate=*`,
      providesTags:['user']
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/my-users/${data.id}`,
        body: {
          data: {
            home_owner: data.home_owner,
            email: data.email,
          },
        },
        method: "put",
      }),
      invalidatesTags:['user']
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  usePostUserMutation,
  useUpdateUserMutation,
} = userApi;
