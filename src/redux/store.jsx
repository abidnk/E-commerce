import { configureStore } from "@reduxjs/toolkit";
import ProdctSlice from "./ProdctSlice";

export const store = configureStore({
    reducer:{
        product: ProdctSlice
    }
})




// export const { display, isLoggedIn } = productSlice.actions;
// export default productSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// // import { CardProduct } from "../User/DemyProducts";

// const productSlice = createSlice({
//     name:"product",
//     initialState:[],
//     reducers:{
//         display:(state,action)=>{

//             return action.payload;

//         }
//         ,
//         isLoggedIn:(state,action) => {

//             return true
//         }
//     }
// })

// export const {display}=productSlice.actions
// export default productSlice.reducer
