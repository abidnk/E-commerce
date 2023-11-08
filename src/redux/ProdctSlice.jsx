import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
      products: [],

      token: localStorage.getItem('token') || null,
    },
    reducers: {
          setToken:(state, action) => {
            state.token = action.payload;
            localStorage.setItem('token' , action.payload)
            console.log(state.token);
          }
    }, 
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.products = [...state.products, newProduct];
      console.log(state.products);
    },
  });
  

export const { setToken} = productSlice.actions;
export const selectToken = (state) => state.product.token;
export default productSlice.reducer;
