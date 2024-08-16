import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store/store";
import {
  setColorPalleteToggle,
  setColorTheme,
  setSideNavToggle,
} from "../store/uiSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosColorPalette } from "react-icons/io";
import colorPalletes from "../data/colorPalletes";
function Navbar() {
  const dispatch = useDispatch();

  const { colorTheme, colorPalleteToggled, isSideNavToggled } = useSelector(
    (state: State) => state.ui
  );

  const handleColorThemeClick = (theme: string) => {
    dispatch(setColorTheme(theme));
    localStorage.setItem("colorTheme", theme);
    dispatch(setColorPalleteToggle(false));
  };

  const handleColorPalleteToggle = () => {
    dispatch(setColorPalleteToggle(!colorPalleteToggled));
  };

  const handleHamburgerToggle = () => {
    if (!isSideNavToggled) {
      dispatch(setSideNavToggle(true));
      document.body.style.overflow = "hidden";
    } else {
      dispatch(setSideNavToggle(false));
      document.body.style.overflow = "auto";
    }
  };

  const renderColorPalletes = colorPalletes.map((item) => {
    return (
      <div
        className="flex items-center gap-3 mb-3 cursor-pointer"
        key={item.id}
        onClick={() => handleColorThemeClick(item.value)}
      >
        <div className={`bg-[rgba(${item.color})] h-9 rounded-full w-9`} />
        <p className="text-bgColor font-gelionReg">{item.name}</p>
      </div>
    );
  });
  const btnToggleClassName = "w-7 h-7 text-textColor cursor-pointer";
  return (
    <nav className="bg-navColor py-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <RxHamburgerMenu
              className="h-6 w-6 text-textColor cursor-pointer md:hidden"
              onClick={handleHamburgerToggle}
            />
            <Link to="/" className="text-mainColor text-2xl font-semibold">
              MHIC Territory
            </Link>
          </div>

          <div className="relative">
            {" "}
            <IoIosColorPalette
              className={btnToggleClassName}
              onClick={handleColorPalleteToggle}
            />
            {colorPalleteToggled && (
              <div className="absolute rounded-md w-[230px] bg-textColor py-2 px-4 -left-56 top-8">
                {renderColorPalletes}
              </div>
            )}
          </div>

          {/* {colorTheme === "dark" ? (
            <MdLightMode
              className={btnToggleClassName}
              onClick={handleToggleLightMode}
            />
          ) : (
            <MdDarkMode
              onClick={handleToggleDarkMode}
              className={btnToggleClassName}
            />
          )} */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
