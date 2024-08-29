import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import territoryApi from "./territoryApi";

const store = configureStore({
  reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(territoryApi.middleware),
});

export type State = ReturnType<typeof reducer>;

export default store;
