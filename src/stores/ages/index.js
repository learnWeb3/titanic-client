import { createSlice } from "@reduxjs/toolkit";

export const agesSlice = createSlice({
  name: "ages",
  initialState: {
    ages: null,
  },
  reducers: {
    setAges: (state, action) => {
      state.ages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAges } = agesSlice.actions;

export default agesSlice.reducer;
