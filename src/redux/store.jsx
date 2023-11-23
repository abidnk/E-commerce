import { configureStore } from "@reduxjs/toolkit";
import ProdctSlice from "./ProdctSlice";

export const store = configureStore({
    reducer:{
        product: ProdctSlice
    }
})



