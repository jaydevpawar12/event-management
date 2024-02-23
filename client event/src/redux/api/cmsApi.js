import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const cmsApi = createApi({
    reducerPath: "cmsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/cms` }),
    tagTypes: ["Cms"],
    endpoints: (builder) => {
        return {
            getCms: builder.query({
                query: () => {
                    return {
                        url: "/cms",
                        method: "GET"
                    }
                },
                providesTags: ["Cms"]
            }),
            getCarousel: builder.query({
                query: () => {
                    return {
                        url: "/carousel",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["Cms"]
            }),



        }
    }
})

export const { useGetCmsQuery, useGetCarouselQuery } = cmsApi
