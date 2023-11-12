import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Products.slice";
import CartSlice from "./Cart.slice";
import CategoriesSlice from "./Categories.slice";

const reducer = combineReducers({
    products: ProductsSlice,
    cart: CartSlice,
    categories: CategoriesSlice,
})

const store = configureStore({ reducer });

export default store;