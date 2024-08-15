import React from "react";
import CurrLocation from "../components/CurrLocation";
import { Link } from "react-router-dom";
import STEP1 from "../assets/imgs/install1.jpg";
import STEP2 from "../assets/imgs/install2.jpg";
import STEP3 from "../assets/imgs/install3.jpg";
function Installation() {
  return (
    <div>
      <CurrLocation location="Installation Guide" />
      <h1 className="mb-5 text-mainColor text-6xl">Installation</h1>
      <p className="text-textColor text-xl mb-10">
        Ang pag-install or pag-download ng{" "}
        <span className="font-semibold">OsmAnd</span> ay madali lang. Para ka
        lang nagluto ng pritong itlog (
        <span className="font-semibold italic">Yung hindi po sunog ah</span>).
        <br />
        <br />
        Sundan lamang ang steps sa baba para makapag download nito or puwede
        mong i-click ang {""}
        <Link
          className="text-mainColor"
          to="https://play.google.com/store/apps/details?id=net.osmand&pli=1"
        >
          link
        </Link>{" "}
        na ito ( <span className="font-semibold">kung android</span> ) para
        ma-redirect kana agad sa playstore. Kung Apple user ka naman, i-click
        ang{" "}
        <Link
          to="https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257"
          className="text-mainColor"
        >
          link
        </Link>{" "}
        na ito para ma-redirect sa apple store ({" "}
        <span className="font-semibold">
          Im not sure with this one kasi wala po akong any apple devices
        </span>{" "}
        )
      </p>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 1: Buksan ang Playstore or AppleStore
        </h3>
        <p className="text-textColor text-lg mb-5">
          Hanapin lamang sa inyong mga gadget and Playstore ({" "}
          <span className="font-semibold">
            Samsung, Vivo, Xiaomi o kahit anong android devices
          </span>{" "}
          ). Hanapin naman ang Apple Store kung Ipad o Iphone ang gamit ninyo.
        </p>

        <img
          src={STEP1}
          alt="Installation Guide. Step 1"
          className="h-[600px]"
        />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 2: Hanapin ang OsmAnd App
        </h3>
        <p className="text-textColor text-lg mb-5">
          Hapanin ang Search Icon at i-type lamang ang OsmAnd. Mayroong icon na
          kulay orange ang lalabas at i-click lamang iyon. I-click ang install
          button at hayaang matapos. Kapag natapos na, i-click lamang ang Open
          button
        </p>

        <img
          src={STEP2}
          alt="Installation Guide. Step 2"
          className="h-[600px]"
        />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 3: I-download ang Maps
        </h3>
        <p className="text-textColor text-lg mb-5">
          Kapag binuksan ang application, ang larawan sa baba ang unang
          makikita. I-click lamang ang download button at hayaang matapos.{" "}
        </p>

        <img
          src={STEP3}
          alt="Installation Guide. Step 3"
          className="h-[600px] mb-5"
        />

        <p className="text-textColor text-lg mb-5">
          Taaadaaaa, tapos kana sa Step 1, ang pag i-install ng ating
          application. Ngayon kailangan na nating i-setup ang account na
          gagamitin din ng buong congregation. Katulad ng nakasanayan, just
          click the link below!
        </p>
      </div>

      <Link
        to="/setup"
        className="px-4 py-2 text-lg text-textColor bg-mainColor rounded-2xl hover:bg-mainColorDark"
      >
        Click Here: Account Setup
      </Link>
    </div>
  );
}

export default Installation;
