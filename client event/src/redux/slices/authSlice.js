import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("auth"))
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state, { payload }) => {
            state.user = null
        })


})

export default authSlice.reducer