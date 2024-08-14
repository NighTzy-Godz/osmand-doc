import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { State } from "../store/store";
import { useSelector } from "react-redux";

function HomeLayout() {
  const colorTheme = useSelector((state: State) => state.ui.colorTheme);
  return (
    <div className={colorTheme}>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default HomeLayout;
