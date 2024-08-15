import React, { useEffect } from "react";

import CurrLocation from "../components/CurrLocation";
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    document.title = "MHIC Territory | Greetings!";
  }, []);

  return (
    <React.Fragment>
      <CurrLocation location="Home" />
      <h1 className="mb-5 text-mainColor text-6xl">Welcome Kabsat!</h1>
      <p className="text-textColor text-xl mb-10">
        Malugod kami na kayo ay tulongan na gumawa ng pagbabago sa paglipat mula
        sa dati nating ginagamit na Maps.Me to OsmAnd. <br /> <br /> Huwag
        kayong mag-alala, ang pag migrate na gagawin natin ay madali lang dahil
        detalyado ang documentation na ito, at nakahanda rin ang mga territory
        servants na tumulong sa inyo.
      </p>{" "}
      <div className="mb-5">
        <img
          src="https://talkao.com/wp-content/uploads/2023/07/mapsme-1024x562.jpg"
          alt="Maps.Me Picture"
        />
        <p className="mt-2 font-semibold text-textColor">
          Maps.Me:{" "}
          <span className="font-medium">Ti us-usarentayo ita a Maps.Me</span>
        </p>
      </div>
      <div className="mb-5">
        <img
          src="https://cdn6.aptoide.com/imgs/d/8/f/d8f82d79071085d58d3deb1497a04729_fgraphic.jpg"
          alt="OsmAnd Logo"
        />
        <p className="mt-2 font-semibold text-textColor">
          OsmAnd:{" "}
          <span className="font-medium">Proposed a Kasukat ti Maps.Me</span>
        </p>
      </div>
      <p className="text-textColor text-xl mb-10">
        Pero bakit nga ba kailangan pa nating gawin ang pag-lipat na ito?
        Kailangan nga ba talaga itong gawin? Click the link below para malaman
        natin kung ano ang common na kinakaharap na problema ng bawat isa at ng
        mga territory servants.
      </p>
      <Link
        to="/problem"
        className="px-4 py-2 text-lg text-textColor bg-mainColor rounded-2xl hover:bg-mainColorDark"
      >
        Click Here: Common Problems
      </Link>
    </React.Fragment>
  );
}

export default Home;
