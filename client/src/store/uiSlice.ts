import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  colorTheme: string;
  isSideNavToggled: boolean;
}

const initialState: UIState = {
  colorTheme: "",
  isSideNavToggled: false,
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setColorTheme: (ui, action) => {
      ui.colorTheme = action.payload;
    },
    setSideNavToggle: (ui, action) => {
      ui.isSideNavToggled = action.payload;
    },
  },
});

export const { setColorTheme, setSideNavToggle } = slice.actions;

export default slice.reducer;
