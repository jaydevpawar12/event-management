import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cart: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            "jr payload._id  state.cart made nahiy"
            if (!state.cart.find(item=>item._id==payload._id)) {

                state.cart.push(payload);
                localStorage.setItem("cart", JSON.stringify(state.cart))
            }
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item._id != payload);
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        removeAllCart: (state, { payload }) => {
            state.cart = []
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    },
    extraReducers: builder => builder


})

export const { addToCart, removeFromCart, removeAllCart } = cartSlice.actions
export default cartSlice.reducer