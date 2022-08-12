import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: null,
    email: null,
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    username: (state, action) => {
      state.value.name = action.payload;
    },
    useremail: (state, action) => {
      state.value.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { username, useremail } = authSlice.actions;

export default authSlice.reducer;
