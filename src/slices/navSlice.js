import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  desination: null,
  travelTimeInformation: null,
  nearBy: null,
  mapScreenHeight: null,
  selectedCar: null,
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
    setNearBy: (state, action) => {
      const near = action.payload.results.map((item) => item.geometry.location);
      const filterRes = near.slice(6, near.length);
      const updated = near.map((v, id) => ({ ...v, id, type: "UberX" }));
      state.nearBy = updated;
    },
    setMapScreen: (state, action) => {
      state.mapScreenHeight = action.payload;
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
});

export const {
  setOrigin,
  setNearBy,
  setDesination,
  setTravelTimeInformation,
  setMapScreen,
  setSelectedCar,
} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDesination = (state) => state.nav.desination;
export const selectTravelInfo = (state) => state.nav.travelTimeInformation;
export const getNearBy = (state) => state.nav.nearBy;
export const getMapScreenHeighit = (state) => state.nav.mapScreenHeight;
export const getSelectedCar = (state) => state.nav.selectedCar;

export default navSlice.reducer;
