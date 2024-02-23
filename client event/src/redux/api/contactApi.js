import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactApi = createApi({
    reducerPath: "contactapi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/contact` }),
    tagTypes: ["contact"],
    endpoints: (builder) => {
        return {
            addContact: builder.mutation({
                query: userData => {
                    return {
                        url: "/enquery",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["contact"]
            }),

        }
    }
})

export const { useAddContactMutation } = contactApi




// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const contactApi = createApi({
//     reducerPath: "contactapi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/contact" }),
//     tagTypes: ["contact"],
//     endpoints: (builder) => {
//         return {
//             getContact: builder.query({
//                 query: () => {
//                     return {
//                         url: "/enquery",
//                         method: "GET"
//                     }
//                 },
//                 providesTags: ["contact"]
//             }),


//         }
//     }
// })

// export const { useGetContactQuery } = contactApi
