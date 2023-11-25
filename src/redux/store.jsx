import { configureStore } from "@reduxjs/toolkit";
import ProdctSlice from "./ProdctSlice";
import AuthSlice from "./AuthSlice";

export const store = configureStore({
    reducer:{
        product: ProdctSlice,
        auth: AuthSlice,
    }
})



