import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/admin`,
        credentials: "include"
    },),
    tagTypes: ["user", "coupon", "package", "order", "review", "contact", "cms", "carousel"],
    endpoints: (builder) => {
        return {
            //user
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/user",
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            deactivateUser: builder.mutation({
                query: id => {
                    return {
                        url: `/user/deactivate/${id}`,
                        method: "PUT",
                    }
                },
                invalidatesTags: ["user"]
            }),
            activateUser: builder.mutation({
                query: id => {
                    return {
                        url: `/user/activate/${id}`,
                        method: "PUT",
                    }
                },
                invalidatesTags: ["user"]
            }),

            // package
            getPackages: builder.query({
                query: id => {
                    return {
                        url: `/packages`,
                        method: "GET",
                    }
                },
                providesTags: ["package"]
            }),
            addPackage: builder.mutation({
                query: packageData => {
                    return {
                        url: `/packages/add`,
                        method: "POST",
                        body: packageData
                    }
                },
                invalidatesTags: ["package"]
            }),
            updatePackage: builder.mutation({
                query: packageData => {
                    return {
                        url: `/packages/update/${packageData._id}`,
                        method: "PUT",
                        body: packageData
                    }
                },
                invalidatesTags: ["package"]
            }),


            // coupon
            addCoupon: builder.mutation({
                query: couponData => {
                    return {
                        url: `/coupon/add`,
                        method: "POST",
                        body: couponData
                    }
                },
                invalidatesTags: ["coupon"]
            }),
            getCoupons: builder.query({
                query: couponData => {
                    return {
                        url: `/coupon`,
                        method: "GET",
                        body: couponData
                    }
                },
                providesTags: ["coupon"]
            }),
            updateCoupons: builder.mutation({
                query: couponData => {
                    return {
                        url: `/coupon/update/${couponData._id}`,
                        method: "PUT",
                        body: couponData
                    }
                },
                invalidatesTags: ["coupon"]
            }),

            // orders
            getOrders: builder.query({
                query: orderData => {
                    return {
                        url: `/order`,
                        method: "GET",
                    }
                },
                providesTags: ["order"]
            }),
            updateOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: `/order/update/${orderData._id}`,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),

            // reviews
            getReviews: builder.query({
                query: reviewData => {
                    return {
                        url: `/review`,
                        method: "GET",
                        body: reviewData
                    }
                },
                providesTags: ["review"]
            }),
            addReview: builder.mutation({
                query: reviewData => {
                    return {
                        url: `/review/add`,
                        method: "POST",
                        body: reviewData
                    }
                },
                invalidatesTags: ["review"]
            }),
            updateReview: builder.mutation({
                query: reviewData => {
                    return {
                        url: `/review/update/${reviewData._id}`,
                        method: "PUT",
                        body: reviewData
                    }
                },
                invalidatesTags: ["review"]
            }),
            deleteReview: builder.mutation({
                query: id => {
                    return {
                        url: `/review/delete/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["review"]
            }),

            // contact
            getContact: builder.query({
                query: reviewData => {
                    return {
                        url: `/contact`,
                        method: "GET",
                    }
                },
                providesTags: ["contact"]
            }),

            //cms
            getCms: builder.query({
                query: cmsData => {
                    return {
                        url: `/cms`,
                        method: "GET",
                    }
                },
                providesTags: ["cms"]
            }),
            addCms: builder.mutation({
                query: cmsData => {
                    return {
                        url: `/cms/add`,
                        method: "POST",
                        body: cmsData
                    }
                },
                invalidatesTags: ["cms"]
            }),
            deleteCms: builder.mutation({
                query: id => {
                    return {
                        url: `/cms/delete/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["cms"]
            }),

            //carousel
            getCarousel: builder.query({
                query: carouselData => {
                    return {
                        url: `/carousel`,
                        method: "GET",

                    }
                },
                providesTags: ["carousel"]
            }),
            addCarousel: builder.mutation({
                query: carouselData => {
                    return {
                        url: `/carousel/add`,
                        method: "POST",
                        body: carouselData
                    }
                },
                invalidatesTags: ["carousel"]
            }),
            deleteCarousel: builder.mutation({
                query: id => {
                    return {
                        url: `/carousel/delete/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["carousel"]
            })
        }
    }
})

export const {
    useGetUsersQuery,
    useDeactivateUserMutation,
    useActivateUserMutation,
    useGetPackagesQuery,
    useAddPackageMutation,
    useUpdatePackageMutation,
    useGetCouponsQuery,
    useAddCouponMutation,
    useUpdateCouponsMutation,
    useGetOrdersQuery,
    useUpdateOrderMutation,
    useGetReviewsQuery,
    useAddReviewMutation,
    useUpdateReviewMutation,
    useDeleteReviewMutation,
    useGetContactQuery,
    useGetCmsQuery,
    useAddCmsMutation,
    useDeleteCmsMutation,
    useGetCarouselQuery,
    useAddCarouselMutation,
    useDeleteCarouselMutation

} = adminApi
