import apiSlice from "./apiSlice";

const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (products) => ({
        url:'/orders',
        body:products,
        method:'post',    
      }),
    }),
  }),
});

export const {usePostOrderMutation} = paymentApi