import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  colorTheme: string;
}

const initialState: UIState = {
  colorTheme: "",
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setColorTheme: (ui, action) => {
      ui.colorTheme = action.payload;
    },
  },
});

export const { setColorTheme } = slice.actions;

export default slice.reducer;
