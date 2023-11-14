import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    token: localStorage.getItem('token') || null,
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
  },
});

export const { setToken, addProduct, setProducts } = productSlice.actions;
export const selectToken = (state) => state.product.token;
export const selectProduct = (state) => state.product.products;

export default productSlice.reducer;
