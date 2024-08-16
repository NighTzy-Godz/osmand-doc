import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  colorTheme: string;
  isSideNavToggled: boolean;
  colorPalleteToggled: boolean;
}

const initialState: UIState = {
  colorTheme: "",
  colorPalleteToggled: false,
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
    setColorPalleteToggle: (ui, action) => {
      ui.colorPalleteToggled = action.payload;
    },
  },
});

export const { setColorTheme, setSideNavToggle, setColorPalleteToggle } =
  slice.actions;

export default slice.reducer;
