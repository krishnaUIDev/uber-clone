import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    user: userReducer,
  },
});
