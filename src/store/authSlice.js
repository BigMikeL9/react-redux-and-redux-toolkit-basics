import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    onLogin(state) {
      state.isAuthenticated = true;
    },

    onLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

// -- Make the 'actions' available to be imported in other components and used to dispatch 'actions' to the store.
export const authActions = authSlice.actions;

export default authSlice;
