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
import BookMark from "./pages/Favorites";
import AddPinpoint from "./pages/AddPinpoint";
import SaveSync from "./pages/SaveSync";
import NotFound from "./components/NotFound";
import TerritoryForm from "./pages/TerritoryForm";
import { Toaster } from "sonner";
import TerritoryHistory from "./pages/TerritoryHistory";

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
      <Toaster
        duration={2000}
        richColors
        position="top-center"
        toastOptions={{
          className: "font-gelionReg text-lg transition-all duration-500",
        }}
      />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/setup" element={<AccountSetup />} />
          <Route path="/favorites" element={<BookMark />} />
          <Route path="/addToBookmark" element={<AddPinpoint />} />
          <Route path="/saving_syncing" element={<SaveSync />} />
          <Route path="/territoryForm" element={<TerritoryForm />} />
          <Route path="/territoryHistory" element={<TerritoryHistory />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
