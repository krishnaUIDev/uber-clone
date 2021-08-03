import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
  name: "KrishnaKanth Kondoju",
  email: "Krishna@google.com",
  phone: "510-320-8000",
  image:
    "https://mpng.subpng.com/20180802/su/kisspng-rowan-atkinson-mr-bean-s-holiday-film-720p-index-of-wp-content-uploads-2013-11-5b62ec2c17a857.0940305515332096440969.jpg",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setUserDetails: (state, action) => {
      state.name = "";
    },
  },
});

export const { setTheme } = userSlice.actions;

export const getTheme = (state) => state.user.theme;
export const getUserDetails = (state) => {
  return {
    name: state.user.name,
    email: state.user.email,
    phone: state.user.phone,
    image: state.user.image,
  };
};

export default userSlice.reducer;
