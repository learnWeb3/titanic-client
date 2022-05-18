import { combineReducers, configureStore } from "@reduxjs/toolkit";
import passengers from "./passengers";
import user from "./user";

const rootReducer = combineReducers({
  passengers: passengers,
  user: user,
});

export default configureStore({
  reducer: rootReducer,
});
