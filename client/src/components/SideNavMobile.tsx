import sideNavLinks from "../data/sideNavLinks";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store/store";
import { setSideNavToggle } from "../store/uiSlice";

function SideNavMobile() {
  const dispatch = useDispatch();
  const currTheme = useSelector((state: State) => state.ui.colorTheme);
  const borderColor =
    currTheme === "light" ? "border-black/30" : "border-white/50";
  const activeClass =
    "font-semibold text-xl text-mainColor px-4 py-2 bg-white/10 rounded-md mb-3";

  const handleLinkClick = () => {
    dispatch(setSideNavToggle(false));
    document.body.style.overflow = "auto";
  };

  const renderSideNavLinks = sideNavLinks.map((link) => {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive
            ? activeClass
            : "font-semibold text-xl text-textColor px-4 py-2 mb-3"
        }
        key={link.id}
        onClick={handleLinkClick}
        to={link.path}
      >
        {link.name}
      </NavLink>
    );
  });

  return (
    <div
      className={`sticky sm:w-full w-3/4 top-16 h-[92dvh]  bg-bgColor border-r-[1px] ${borderColor}`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col py-5 pr-2">{renderSideNavLinks}</div>
      </div>
    </div>
  );
}

export default SideNavMobile;
