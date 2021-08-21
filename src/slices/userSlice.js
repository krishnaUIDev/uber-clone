import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
  user: {},
  favorites: [
    {
      title: "Home",
      location: "9727 touchton road",
      icon: "home",
    },
    {
      title: "Work",
      location: "9727 touchton road",
      icon: "briefcase",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = { ...action.payload };
    },
  },
});

export const { setTheme, setUser } = userSlice.actions;

export const getTheme = (state) => state.user.theme;

export const getUserDetails = (state) => state.user.user;

export const getFavorites = (state) => state.user.favorites;

export default userSlice.reducer;
