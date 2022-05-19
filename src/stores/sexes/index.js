import { createSlice } from "@reduxjs/toolkit";

export const sexesSlice = createSlice({
  name: "sexes",
  initialState: {
    sexes: null,
  },
  reducers: {
    setSexes: (state, action) => {
      state.sexes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSexes } = sexesSlice.actions;

export default sexesSlice.reducer;
