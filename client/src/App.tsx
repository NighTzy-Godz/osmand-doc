import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./store/store";
import { useEffect } from "react";
import { setColorTheme } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();
  const storeTheme = useSelector((state: State) => state.ui.colorTheme);
  const storageTheme = localStorage.getItem("colorTheme");
  const colorTheme = storeTheme || storageTheme;

  useEffect(() => {
    if (!colorTheme) {
      dispatch(setColorTheme("light"));
    } else {
      dispatch(setColorTheme(colorTheme));
    }
  }, [dispatch, colorTheme]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
