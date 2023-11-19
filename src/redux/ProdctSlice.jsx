import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    userToken:null,
    token: localStorage.getItem('token') || null,
    isSignIn: true,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setSignIn: (state, action) => {
      state.isSignIn = action.payload; 
    },
  },
});

export const { setToken, addProduct, setProducts , setUserToken, setSignIn} = productSlice.actions;
export const selectToken = (state) => state.product.token;
export const selectProduct = (state) => state.product.products;
export const selectUserToken = (state) => state.product.userToken;

export default productSlice.reducer;
