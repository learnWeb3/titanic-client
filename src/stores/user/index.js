import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: Cookies.get(process.env.REACT_APP_CURRENT_USER_COOKIE_NAME) || null,
  },
  reducers: {
    setUser: (state, action) => {
      Cookies.set(
        process.env.REACT_APP_CURRENT_USER_COOKIE_NAME,
        action.payload
      );
      state.user = action.payload;
    },
    unsetUser: (state) => {
      Cookies.remove(process.env.REACT_APP_CURRENT_USER_COOKIE_NAME);
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
