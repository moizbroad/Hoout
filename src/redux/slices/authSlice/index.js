import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  isError: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.userRole = action.payload?.roleName;
    },
    setUserInfoLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserInfoError: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
      state.userRole = action.payload?.roleName;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = false;
      state.user = null;
      state.userRole = "";
    },
  },
});

export const {
  setUser,
  setUserInfoLoading,
  setUserInfoError,
  loginUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
