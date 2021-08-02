import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = userSlice.actions;

export const getTheme = (state) => state.user.theme;

export default userSlice.reducer;
