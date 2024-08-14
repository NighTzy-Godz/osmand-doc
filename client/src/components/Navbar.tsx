import React from "react";
import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store/store";
import { setColorTheme } from "../store/uiSlice";
function Navbar() {
  const dispatch = useDispatch();

  const colorTheme = useSelector((state: State) => state.ui.colorTheme);

  const handleToggleLightMode = () => {
    dispatch(setColorTheme("light"));
    localStorage.setItem("colorTheme", "light");
  };

  const handleToggleDarkMode = () => {
    dispatch(setColorTheme("dark"));
    localStorage.setItem("colorTheme", "dark");
  };
  const btnToggleClassName = "w-7 h-7 text-textColor cursor-pointer";
  return (
    <div className="bg-navColor py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-mainColor text-2xl font-semibold">
            OsmAnd
          </Link>

          {colorTheme === "dark" ? (
            <MdLightMode
              className={btnToggleClassName}
              onClick={handleToggleLightMode}
            />
          ) : (
            <MdDarkMode
              onClick={handleToggleDarkMode}
              className={btnToggleClassName}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
