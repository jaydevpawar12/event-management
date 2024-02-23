import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/packages`}),
    tagTypes: ["package"],
    endpoints: (builder) => {
        return {
            getPackages: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["package"]
            }),
            getPackageDetail: builder.query({
                query: id => {
                    return {
                        url: `/${id}`,
                        method: "GET"
                    }
                },
                providesTags: ["package"]
            }),


        }
    }
})

export const { useGetPackagesQuery, useGetPackageDetailQuery } = publicApi
