import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import LoaderSlice from "./slices/LoaderSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        loader: LoaderSlice
    }
})