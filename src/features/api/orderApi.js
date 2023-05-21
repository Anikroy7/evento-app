import apiSlice from "./apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "post",
        body: data,
      }),
    }),
    getOrders: builder.query({
      query: ()=> "/orders?populate=*",
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery} = orderApi;
