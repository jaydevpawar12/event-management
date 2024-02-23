import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./api/adminApi";
import adminSlice from "./slices/adminSlice";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import authSlice from "./slices/authSlice";
import { publicApi } from "./api/publicApi";
import { orderApi } from "./api/orderApi";
import cartSlice from "./slices/cartSlice";
import { cmsApi } from "./api/cmsApi";
import { contactApi } from "./api/contactApi";


const reduxStore = configureStore({
    reducer: {
        [adminApi.reducerPath]: adminApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [cmsApi.reducerPath]: cmsApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,

        admin: adminSlice,
        auth: authSlice,
        cart: cartSlice,

    },
    middleware: defaultMiddleWare => [...defaultMiddleWare(),
    adminApi.middleware,
    authApi.middleware,
    userApi.middleware,
    publicApi.middleware,
    orderApi.middleware,
    cmsApi.middleware,
    contactApi.middleware],
})

export default reduxStore