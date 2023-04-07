import apiSlice from "./apiSlice";

const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (home) => ({
        url:'/orders',
        body:home,
        method:'post',    
      }),
    }),
  }),
});

export const {usePostOrderMutation} = paymentApi