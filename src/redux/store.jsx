import { configureStore } from "@reduxjs/toolkit";
import ProdctSlice from "./ProdctSlice";

export const store = configureStore({
    reducer:{
        product: ProdctSlice
    }
})




// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [], // Initialize your product data here
//     token: null,  // Initialize token as null
//   },
//   reducers: {
//     display: (state, action) => {
//       return {
//         ...state,
//         products: action.payload,
//       };
//     },
//     isLoggedIn: (state, action) => {
//       return {
//         ...state,
//         token: action.payload, 
        
//       };
//     },
//   },
// });

// export const { display, isLoggedIn } = productSlice.actions;
// export default productSlice.reducer;

