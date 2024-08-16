import React, { useEffect } from "react";
import CurrLocation from "../components/CurrLocation";
import OLD_BM from "../assets/imgs/old_bm.jpg";

import BM1 from "../assets/imgs/bm1.jpg";
import BM2 from "../assets/imgs/bm2.jpg";
import BM3 from "../assets/imgs/bm3.jpg";
import BM4 from "../assets/imgs/bm4.jpg";
import { Link } from "react-router-dom";
function Favorites() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MHIC Territory | Favorites";
  }, []);
  return (
    <div className="pb-5">
      {" "}
      <CurrLocation location="Favorites" />
      <h1 className="mb-5 text-mainColor text-6xl">Favorites</h1>
      <p className="text-textColor text-xl mb-10">
        <span className="italic">Favorites</span> din ang tawag sa Maps.Me dati.
        Dito naka-store lahat ng data ng mga natagpuan nating mga Ilokano, kung
        saang probinsya sila galing, at may mga kaunting notes tungkol sa
        kanila.
      </p>
      <img
        src={OLD_BM}
        alt="OLD Maps.ME favourites"
        className="h-[600px] mb-2"
      />
      <p className="text-textColor font-semibold mb-10">
        Dating hitsura ng Favorites sa Maps.Me
      </p>
      <p className="text-textColor text-xl mb-10">
        Pero dahil OsmAnd na ang ating gamit sa ngayon, ang favorites na ni
        OsmAnd ang gagamitin natin ngayon. Narito ang mga steps para kung paano
        mahahanp ang <span className="italic font-semibold">Favorites</span> sa
        OsmAnd.
      </p>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 1: I-Click ang Hamburger Menu Ulit
        </h3>

        <img src={BM1} className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 2: I-Click ang My Places
        </h3>

        <img src={BM2} className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 3: Mag-Test
        </h3>
        <p className="text-textColor text-lg mb-5">
          Lalabas na dito ang mga na bookmark natin na mga Ilokano. Puwede mo
          rin gamitin ang search feature para mas mapadali ang paghanap sa isang
          bookmark .
        </p>
        <img src={BM3} className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 4: I-Edit ang Pin Point
        </h3>
        <p className="text-textColor text-xl mb-5">
          Puwede mo nang i-edit ang mga pagbabago sa notes or address ng napili
          mong pin point.
        </p>
        <img src={BM4} className="h-[600px] mb-5" />
        <p className="text-textColor text-lg mb-5">
          Ngayon ay alam mo na kung paano makita ang mga pin points sa{" "}
          <span className="italic">Bookmark</span>. Sa susunod na artikulo,
          pag-aaralan naman natin kung paano magdagdag ng pinpoint para sa
          nahanap nating bagong Ilokano.
        </p>
      </div>
      <Link
        to="/addToBookmark"
        className="px-4 py-2 text-lg text-textColor bg-mainColor rounded-2xl hover:bg-mainColorDark"
      >
        Click Here: Add Pinpoint
      </Link>
    </div>
  );
}

export default Favorites;
