import React from "react";
import { Link } from "react-router-dom";

function AccountSetup() {
  return (
    <div className="pb-5">
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
    </div>
  );
}

export default AccountSetup;
