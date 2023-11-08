
import { createSlice } from "@reduxjs/toolkit";
// import { CardProduct } from "../User/DemyProducts";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{
        display:(state,action)=>{

            return action.payload;

        }
        ,
        isLoggedIn:(state,action) => {
             console.log(action);
            return true
        }
    }
})

export const {display}=productSlice.actions
export default productSlice.reducer