// src/slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { login: false },
  reducers: {
    updateLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { updateLogin } = loginSlice.actions;

export default loginSlice.reducer;
