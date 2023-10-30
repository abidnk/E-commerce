import { createSlice } from "@reduxjs/toolkit";
import { CardProduct } from "../User/DemyProducts";

const productSlice = createSlice({
    name:"product",
    initialState:[CardProduct],
    reducers:{
        
    }
})
export default productSlice.reducer
