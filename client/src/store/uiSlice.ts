import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  colorTheme: string;
  isSideNavToggled: boolean;
  colorPalleteToggled: boolean;
  showImage: boolean;
  imgUrl: string;
}

const initialState: UIState = {
  colorTheme: "",
  colorPalleteToggled: false,
  isSideNavToggled: false,
  showImage: false,
  imgUrl: "",
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
    setShowImage: (ui, action) => {
      ui.showImage = action.payload;
    },
    setImgUrl: (ui, action) => {
      ui.imgUrl = action.payload;
    },
  },
});

export const {
  setColorTheme,
  setSideNavToggle,
  setColorPalleteToggle,
  setShowImage,
  setImgUrl,
} = slice.actions;

export default slice.reducer;
