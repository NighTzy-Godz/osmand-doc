import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { State } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import SideNavMobile from "../components/SideNavMobile";
import { setSideNavToggle } from "../store/uiSlice";

function HomeLayout() {
  const dispatch = useDispatch();
  const { colorTheme, isSideNavToggled } = useSelector(
    (state: State) => state.ui
  );

  const [currWidth, setCurrWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (currWidth > 768) {
      dispatch(setSideNavToggle(false));
    }
    const resizeFn = () => {
      setCurrWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeFn);

    return () => {
      window.removeEventListener("resize", resizeFn);
    };
  }, []);
  return (
    <div className={colorTheme}>
      <Navbar />
      <div
        className={`fixed w-full   z-40  transition-all delay-150 ${
          isSideNavToggled && currWidth <= 768
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <SideNavMobile />
      </div>

      <div className={`bg-bgColor `}>
        <div className="container mx-auto">
          <div className="md:flex gap-5 relative">
            <div className={`md:block hidden md:w-1/3 `}>
              <SideNav />
            </div>
            <div className="md:w-2/3 w-full py-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
