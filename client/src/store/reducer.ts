import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import territoryApi from "./territoryApi";

const reducers = combineReducers({
  ui: uiReducer,
  [territoryApi.reducerPath]: territoryApi.reducer,
});

export default reducers;
