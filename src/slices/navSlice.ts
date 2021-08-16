import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
}
const initialState: InitialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.origin = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//Selectors
export const selectOrigin = (state: { nav: InitialState }) => state.nav.origin;
export const selectDestination = (state: { nav: InitialState }) =>
  state.nav.destination;
export const selectTravelTimeInformation = (state: { nav: InitialState }) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
