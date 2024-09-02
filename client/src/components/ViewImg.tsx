import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store/store";
import { setImgUrl, setShowImage } from "../store/uiSlice";
import { ImCancelCircle } from "react-icons/im";

interface ViewImgProps {
  imgUrl: string;
}

function ViewImg({ imgUrl }: ViewImgProps) {
  const dispatch = useDispatch();
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (imgRef.current && !imgRef.current.contains(e.target as Node)) {
        handleHideViewIMg();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [imgRef]);

  const handleHideViewIMg = () => {
    dispatch(setShowImage(false));
    dispatch(setImgUrl(""));
  };

  return (
    <React.Fragment>
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-65 z-50">
        <div
          className="absolute top-6 left-6 cursor-pointer"
          onClick={handleHideViewIMg}
        >
          <ImCancelCircle className="h-6 w-6 text-white" />
        </div>

        <div className="" ref={imgRef}>
          {" "}
          <img
            src={imgUrl}
            alt="Profile Picture"
            className="max-w-screen max-h-screen mx-auto"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ViewImg;
