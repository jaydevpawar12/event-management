import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {
        show: true,
        // cart: []
    },
    reducers: {
        toggle: (state, { payload }) => {
            state.show = !state.show
            // state.cart.push(payload)
        }
    },
    extraReducers: builder => builder

})

export const { toggle } = adminSlice.actions
export default adminSlice.reducer