import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/orders`, credentials: "include" }),
    tagTypes: ["orders"],
    endpoints: (builder) => {
        return {
            getOrder: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["orders"]
            }),
            addOrder: builder.mutation({
                query: userData => {
                    return {
                        url: "/add",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["orders"]
            }),

        }
    }
})

export const { useGetOrderQuery, useAddOrderMutation } = orderApi
