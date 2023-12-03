import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: localStorage.getItem("usertoken") || null,
    token: localStorage.getItem("token") || null,
    isSignIn: true,
    userId: localStorage.getItem("userId") || null,
    isAdmin: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      localStorage.setItem("usertoken", action.payload);
    },
    setSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },
    setUserid: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setToken, setUserToken, setSignIn, setUserid, setAdmin } =
  AuthSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectUserToken = (state) => state.auth.userToken;
export const selectUserid = (state) => state.auth.userId;
export const selectAdminStatus = (state) => state.auth.isAdmin;
export default AuthSlice.reducer;
