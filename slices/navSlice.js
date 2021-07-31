import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  desination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDesination: (state, action) => {
      state.desination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDesination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDesination = (state) => state.nav.desination;
export const selectTravelInfo = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
