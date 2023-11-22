import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    userToken:localStorage.getItem('usertoken')|| null,
    token: localStorage.getItem('token') || null,
    isSignIn: true,
    userId:localStorage.getItem('userId')||null,

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
      localStorage.setItem('usertoken', action.payload); 
    },
    setSignIn: (state, action) => {
      state.isSignIn = action.payload; 
    },
    setUserid: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem('userId',action.payload)
    },
  },
});

export const { setToken, addProduct, setProducts , setUserToken, setSignIn , setUserid} = productSlice.actions;
export const selectToken = (state) => state.product.token;
export const selectProduct = (state) => state.product.products;
export const selectUserToken = (state) => state.product.userToken;
export const selectUserid = (state) => state.product.userId;


export default productSlice.reducer;
