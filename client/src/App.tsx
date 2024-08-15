import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./store/store";
import { useEffect } from "react";
import { setColorTheme } from "./store/uiSlice";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Installation from "./pages/Installation";
import AccountSetup from "./pages/AccountSetup";
import BookMark from "./pages/BookMark";
import AddPinpoint from "./pages/AddPinpoint";
import SaveSync from "./pages/SaveSync";

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
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/setup" element={<AccountSetup />} />
          <Route path="/bookmarks" element={<BookMark />} />
          <Route path="/addToBookmark" element={<AddPinpoint />} />
          <Route path="/saving_syncing" element={<SaveSync />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
