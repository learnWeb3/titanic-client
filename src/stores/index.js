import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./user";
import classes from "./classes";
import sexes from "./sexes";
import ages from "./ages";

const rootReducer = combineReducers({
  ages: ages,
  sexes: sexes,
  classes: classes,
  user: user,
});

export default configureStore({
  reducer: rootReducer,
});
