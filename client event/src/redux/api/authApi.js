import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/auth`, credentials: "include" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {

            registerUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/register",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
            loginUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("auth", JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["user"]
            }),
            logoutUser: builder.mutation({
                query: () => {
                    return {
                        url: "/logout",
                        method: "POST",

                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("auth")
                    localStorage.removeItem("cart")
                    return data
                },
                invalidatesTags: ["user"]
            }),

        }
    }
})

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi
