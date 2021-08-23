import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Place, TravelTimeInformation } from "../constants";

interface NavState {
  origin: Place | null;
  destination: Place | null;
  travelTimeInformation: TravelTimeInformation | null;
}
const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state: NavState, action: PayloadAction<Place | null>) => {
      state.origin = action.payload;
    },
    setDestination: (state: NavState, action: PayloadAction<Place | null>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (
      state: NavState,
      action: PayloadAction<TravelTimeInformation | null>
    ) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//Selectors
export const selectOrigin = (state: NavState) => state.origin;
export const selectDestination = (state: NavState) => state.destination;
export const selectTravelTimeInformation = (state: NavState) =>
  state.travelTimeInformation;

export default navSlice.reducer;
