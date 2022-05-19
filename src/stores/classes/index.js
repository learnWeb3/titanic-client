import { createSlice } from "@reduxjs/toolkit";

export const classesSlice = createSlice({
  name: "classes",
  initialState: {
    classes: null,
  },
  reducers: {
    setClasses: (state, action) => {
      state.classes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClasses } = classesSlice.actions;

export default classesSlice.reducer;
