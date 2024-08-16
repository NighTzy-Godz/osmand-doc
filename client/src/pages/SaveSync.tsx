import React from "react";
import CurrLocation from "../components/CurrLocation";

import SP1 from "../assets/imgs/setup1.jpg";
import SP2 from "../assets/imgs/setup2.jpg";

import SS1 from "../assets/imgs/ss1.jpg";
import SS2 from "../assets/imgs/ss2.jpg";
import SS3 from "../assets/imgs/ss3.jpg";
import SS4 from "../assets/imgs/ss4.jpg";
import SS5 from "../assets/imgs/ss5.jpg";
import { Link } from "react-router-dom";

function SaveSync() {
  return (
    <div className="pb-5">
      {" "}
      <CurrLocation location="The Problem" />
      <h1 className="mb-5 text-mainColor text-6xl">Save and Sync</h1>
      <p className="text-textColor text-xl mb-10">
        Ito ang huli at pinaka-importanteng step sa lahat, ang pag save at pag
        sync. Dahil kapag hindi nasunod ang step na ito, hindi rin magsy-sync
        ang data sa iba. <br />
        <br />
        Kaya narito ang mga steps kung paano mag save at i-sync ang na pinpoint
        na Ilokano.
      </p>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 1: I-Click ang Hamburger Menu
        </h3>

        <img src={SP1} alt="" className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 2: I-Click ang settings
        </h3>

        <img src={SP2} alt="" className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 3: I-Click ang OsmAnd Cloud
        </h3>

        <img src={SS1} alt="" className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 4: I-Click ang <span className="italic">Sync Now</span>
        </h3>

        <img src={SS2} alt="" className="h-[600px]" />
      </div>
      <div className="mb-20">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 5: I-Click ang OsmAnd Cloud
        </h3>
        <p className="text-textColor text-lg mb-5">
          Taaaddaaa! Ito ang makikita mo kapag na i-sync mo na ang data across
          devices. Maraming salamat sa iyo kung nakarating ka sa pinaka huling
          step na ito. Pagpalain nawa ni Jehova ang pagiging masunurin mo
          &#128519; ({" "}
          <Link
            className="text-mainColorDark hover:underline"
            target="_blank"
            to="https://wol.jw.org/ilo/wol/b/r115/lp-il/nwt/58/13#s=17&study=discover"
          >
            Hebreo 13:17
          </Link>{" "}
          ).
        </p>
        <img src={SS3} alt="" className="h-[600px]" />
      </div>
      <h1 className="mb-5 text-mainColor text-5xl">Example Scenarios</h1>
      <div className="mb-5">
        <img src={SS4} alt="" className="h-[600px] mb-2" />
        <p className="text-textColor text-lg">
          Changes na ginawa ni Bro. Arnel
        </p>
      </div>
      <div className="mb-5">
        <img src={SS5} alt="" className="h-[600px] mb-2" />
        <p className="text-textColor text-lg">
          Changes na nakita sa device ni Bro. Hubero
        </p>
      </div>
    </div>
  );
}

export default SaveSync;
