import { createSlice } from "@reduxjs/toolkit";

export const passengersSlice = createSlice({
  name: "passengers",
  initialState: {
    passengers: [],
  },
  reducers: {
    setPassengers: (passengers) => {
      return passengers;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
    setPassengers
} = passengersSlice.actions;

export default passengersSlice.reducer;
