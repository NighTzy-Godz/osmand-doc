import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";

const reducers = combineReducers({
  ui: uiReducer,
});

export default reducers;
