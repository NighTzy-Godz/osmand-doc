import React, { useEffect } from "react";
import CurrLocation from "../components/CurrLocation";
import UPDATED from "../assets/imgs/updated.png";
import NoSpaces from "../assets/imgs/noSpaces.gif";
import { Link } from "react-router-dom";
function Solution() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MHIC Territory | Solution";
  }, []);
  return (
    <div className="pb-5">
      <CurrLocation location="Solution" />

      <h1 className="mb-5 text-mainColor text-6xl">Solution</h1>

      <p className="text-textColor text-xl mb-10">
        May nahanap ang mga territory servants na magandang pamalit sa Maps.Me
        at ito ay ang <span className="font-semibold">OsmAnd</span>. Madami
        itong features na hindi nagagawa ng Maps.Me, at mas mapapadali ang
        paglalagay at pag e-edit ng mga pin points. <br /> <br />
        Narito ang mga rason kung bakit maganda itong gamitin.
      </p>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Reason 1: Updated
        </h3>
        <p className="text-textColor text-lg mb-5">
          Ang <span className="font-semibold">OsmAnd</span> ay palaging na
          uupdate. Kung makikita niyo sa larawan sa baba, may mga nakalagay na{" "}
          <span className="font-semibold">2 Hours, 3 Hours, 1 Minute</span>.
          Patunay na name-maintain ito palagi. Hindi katulad sa Maps.Me na 3
          years ago pa ang huling update.
        </p>

        <img src={UPDATED} alt="" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Reason 2: Easier to Edit
        </h3>
        <p className="text-textColor text-lg mb-5">
          Ang <span className="font-semibold">OsmAnd</span> ay may feautre na
          kung saan hindi mo na kailangan na mag spam ng maraming{" "}
          <span className="font-semibold">spaces</span> para lang mapunta sa
          next line. Just hit "<span className="font-semibold">Enter</span>" at
          nasa next line kana!{" "}
          <span className="font-semibold italic">
            Check GIF video for demo purposes
          </span>
        </p>

        <img src={NoSpaces} alt="" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Reason 3: Synchronized Data
        </h3>
        <p className="text-textColor text-lg mb-5">
          Ang <span className="font-semibold">OsmAnd</span> ay may feautre na
          kung saan puwede mag synchronized ang mga data. Pero kailangang
          gumamit ng isang account lang dahil wala itong feature na puwedeng
          gumamit ng maraming account at parang magiging contributor nalang. For
          further details sa syncing data, maari i-click ang{" "}
          <Link to="/saving_syncing" className="text-mainColor hover:underline">
            Link
          </Link>{" "}
          na ito.
          <br /> <br />
          Ibig sabihin, ang mga na-edit na mga pin-points natin, ay mag
          sy-synchronize na rin sa ibang devices na hindi na kinakailangang mag
          download ng mga KMZ files!
          <br /> <br />
          Marami pang mga rason kung bakit maganda gamitin ang OsmAnd kaysa sa
          Maps.Me, so ano pa inaantay ninyo? Download niyo na! <br /> <br />
          Aaaah kaso hindi mo alam idownload or mag install? Sige click mo lang
          yung link sa baba :D
        </p>
      </div>

      <Link
        to="/installation"
        className="px-4 py-2 text-lg text-textColor bg-mainColor rounded-2xl hover:bg-mainColorDark"
      >
        Click Here: Installation
      </Link>
    </div>
  );
}

export default Solution;
