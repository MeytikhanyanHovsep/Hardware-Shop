import Data from "@/app/Data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || []

const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            let prodInd = state.findIndex(el => +el.id === +payload.id)
            if (prodInd === -1) {
                state.push({
                    id: +payload.id,
                    qty: 1,
                })
            } else state[prodInd].qty += 1

            localStorage.setItem("cart", JSON.stringify(state))
            return state
        },
        removeFromCart: (state, { payload }) => {
            state = state.filter(elm => +elm.id !== +payload)
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        },
        clearCart: () => {
            localStorage.setItem("cart", JSON.stringify([]))
            return []
        },
        changeProdQty: (state, { payload }) => {
            state.find(elm => +elm.id === +payload.id).qty = +payload.qty
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        }
    }
})
export const { addToCart, removeFromCart, clearCart, changeProdQty } = CartSlice.actions;
export default CartSlice.reducer;