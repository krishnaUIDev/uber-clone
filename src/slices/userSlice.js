import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
  user: {},
  favorites: [],
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
      const updatedVal = state.favorites.filter(
        (f) => f.routeParam !== action.payload.routeParam
      );
      state.favorites = [...updatedVal, action.payload];
    },
  },
});

export const { setTheme, setUser, setFavorites } = userSlice.actions;

export const getTheme = (state) => state.user.theme;

export const getUserDetails = (state) => state.user.user;

export const getFavorites = (state) => state.user.favorites;

export default userSlice.reducer;
