import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/user`, credentials: "include" }),
    tagTypes: ["useraccount"],
    endpoints: (builder) => {
        return {
            getBooking: builder.query({
                query: () => {
                    return {
                        url: "/booking",
                        method: "GET"
                    }
                },
                providesTags: ["useraccount"]
            }),

            getHistory: builder.query({
                query: () => {
                    return {
                        url: "/history",
                        method: "GET"
                    }
                },
                providesTags: ["useraccount"]
            }),


        }
    }
})

export const { useGetBookingQuery, useGetHistoryQuery } = userApi
