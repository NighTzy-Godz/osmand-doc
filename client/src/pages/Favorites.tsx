import React from "react";
import CurrLocation from "../components/CurrLocation";
import OLD_BM from "../assets/imgs/old_bm.jpg";

import BM1 from "../assets/imgs/bm1.jpg";
import BM2 from "../assets/imgs/bm2.jpg";
import BM3 from "../assets/imgs/bm3.jpg";
import BM4 from "../assets/imgs/bm4.jpg";
function Favorites() {
  return (
    <div className="pb-5">
      {" "}
      <CurrLocation location="Finding Bookmark" />
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
        <p className="text-textColor text-lg mb-5">Lalabas na dito ang mga</p>
        <img src={BM3} className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 4: I-Click ang Hamburger Menu Ulit
        </h3>

        <img src={BM4} className="h-[600px]" />
      </div>
    </div>
  );
}

export default Favorites;
