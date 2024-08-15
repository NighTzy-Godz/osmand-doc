import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store/store";
import { setColorTheme, setSideNavToggle } from "../store/uiSlice";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const dispatch = useDispatch();

  const { colorTheme, isSideNavToggled } = useSelector(
    (state: State) => state.ui
  );

  const handleToggleLightMode = () => {
    dispatch(setColorTheme("light"));
    localStorage.setItem("colorTheme", "light");
  };

  const handleToggleDarkMode = () => {
    dispatch(setColorTheme("dark"));
    localStorage.setItem("colorTheme", "dark");
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
    </nav>
  );
}

export default Navbar;
