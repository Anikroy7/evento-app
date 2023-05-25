import apiSlice from "./apiSlice";

const homeOrder = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postHomeOrder: builder.mutation({
      query: (data) => ({
        url: "/home-orders",
        body: data,
      }),
    }),
  }),
});


export const {usePostHomeOrderMutation}= homeOrder;