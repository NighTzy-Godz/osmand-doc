import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CurrLocation from "../components/CurrLocation";
import SETUP1 from "../assets/imgs/setup1.jpg";
import SETUP2 from "../assets/imgs/setup2.jpg";
import SETUP3 from "../assets/imgs/setup3.jpg";
import SETUP4 from "../assets/imgs/setup4.jpg";
import SETUP5 from "../assets/imgs/setup5.jpg";
import SETUP6 from "../assets/imgs/setup6.jpg";
import SETUP7 from "../assets/imgs/setup7.jpg";
import SETUP8 from "../assets/imgs/setup8.jpg";

function AccountSetup() {
  useEffect(() => {
    // window.scrollTo(0, 0);
    document.title = "MHIC Territory | Account Setup";
  }, []);
  return (
    <div className="pb-5">
      <CurrLocation location="Account Setup" />
      <h1 className="mb-5 text-mainColor text-6xl">Account Setup</h1>
      <p className="text-textColor text-xl mb-10">
        Ang pag se-setup ng account ang pinaka mabusising proseso ({" "}
        <span className="font-semibold italic">sa tingin ko hehe</span> ) para
        tuluyan itong magamit nang wasto. Pakisuyo, sundan lamang ang mga
        larawan at mga steps kung paano ise-setup ang account natin.
        <br /> <br />
        Pero kung mas maari, gawin ito na kasama ng isang territory servant{" "}
        <span className="font-semibold"></span> para mas mapadali ang pag
        se-setup. Pagyamanan kadakayo!
      </p>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 1: Click ang Hamburger Menu
        </h3>
        <p className="text-textColor text-lg mb-5">
          I-click lamang ang hamburger menu para lumabas ang settings
        </p>

        <img src={SETUP1} alt="Account Setup. Step 1" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 2: I-Click ang Settings
        </h3>

        <img src={SETUP2} alt="Account Setup. Step 2" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 3: I-Click ang OsmAnd Cloud
        </h3>

        <img src={SETUP3} alt="Account Setup. Step 3" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 4: I-Click ang{" "}
          <span className="font-semibold">i already have an account</span>
        </h3>
        <p className="text-textColor text-lg mb-5">
          Mayroon na tayong account na nakalaan para dito kaya hindi na natin
          kailangang gumawa ng account.
        </p>

        <img src={SETUP4} alt="Account Setup. Step 4" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 4: I-Type ang Email
        </h3>
        <p className="text-textColor text-lg mb-5">
          I-type lamang ang mhicterritory@gmail.com sa input textbox at i-click
          ang continue
        </p>

        <img src={SETUP5} alt="Account Setup. Step 5" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 5: Lumapit sa Territory Servants
        </h3>
        <p className="text-textColor text-lg mb-5">
          Lumapit sa territory servant ({" "}
          <span className="font-semibold">Bro. Aser Hubero</span> ) para makuha
          ang code, at kapag nakuha na, i-type sa input box at i click ang
          continue
        </p>

        <img src={SETUP6} alt="Account Setup. Step 6" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 7: I-Sync ang mga Data
        </h3>
        <p className="text-textColor text-lg mb-5">
          I-click lamang ang button na "<span className="italic">Sync Now</span>{" "}
          "
        </p>

        <img src={SETUP7} alt="Account Setup. Step 7" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 8: FINAL RESULT
        </h3>
        <p className="text-textColor text-lg mb-5">
          Maraming salamat sa inyong pagkamatiisin. Ito ang huli ninyong
          makikita at ready na ang account na ito para sa pag sync ng mga data
          natin!
        </p>
        <img src={SETUP8} alt="Account Setup. Step 8" className="h-[600px]" />
      </div>

      <p className="text-textColor text-lg mb-10">
        Ngayon ay kailangan na nating pag-aralan kung paano gumamit ng bookmark
        at kung paano mag-add sa bookmark kung mayroon tayong bagong natagpuan.
        Pero bago yung, dito muna tayo sa mga BookMarks
      </p>

      <Link
        to="/bookmarks"
        className="px-4 py-2 text-lg text-textColor bg-mainColor rounded-2xl hover:bg-mainColorDark"
      >
        Link Here: Bookmarks
      </Link>
    </div>
  );
}

export default AccountSetup;
