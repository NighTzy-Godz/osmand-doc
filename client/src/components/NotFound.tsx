import React from "react";
import { useSelector } from "react-redux";
import { State } from "../store/store";
import { Link } from "react-router-dom";

function NotFound() {
  const colorTheme = useSelector((state: State) => state.ui.colorTheme);
  return (
    <div
      className={`${colorTheme} px-5 bg-bgColor h-dvh grid place-items-center w-full`}
    >
      <div className="text-center">
        {" "}
        <h1 className="md:text-8xl sm:text-7xl text-6xl text-mainColor mb-5">
          404 - Page Not Found
        </h1>
        <p className="md:text-2xl text-xl text-textColor">
          Mapukpukaw ka ngay kabsat? Diak ammo no sadino ti papanam.
        </p>
        <Link
          className="mt-10 block md:w-1/2 sm:w-3/4 w-full mx-auto bg-textColor text-bgColor py-2 rounded-lg md:text-xl text-lg"
          to="/"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
