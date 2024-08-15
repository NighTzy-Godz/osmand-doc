import React, { useEffect } from "react";
import CurrLocation from "../components/CurrLocation";
import OUTDATED from "../assets/imgs/outdated.png";
import SPACES from "../assets/imgs/spaces.gif";
import { Link } from "react-router-dom";
function Problem() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MHIC Territory | Problems";
  }, []);
  return (
    <div className="pb-5">
      <CurrLocation location="The Problem" />

      <h1 className="mb-5 text-mainColor text-6xl">The Problem</h1>

      <p className="text-textColor text-xl mb-10">
        Importante na maintindihan muna natin ang mga limitasyon at mga problema
        na kinakaharap ng karamihan sa atin at ng mga territory servants kung
        bakit{" "}
        <span className="font-semibold italic">parang kinakailangang</span> na
        lumipat mula Maps.Me to OsmAnd.
      </p>

      <p className="text-textColor text-xl mb-10">
        Narito sa baba ang mga problema na ating kinokonsidera kung bakit mas
        magandang lumipat.
      </p>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Reason 1: Outdated
        </h3>
        <p className="text-textColor text-lg mb-5">
          Ang pinaka malaking rason ay ang Maps.Me ay{" "}
          <span className="italic font-semibold">super outdated</span> na at ang
          huling update nito ay 3 Years ago pa (makikita sa larawan) na
          humahantong sa mga maraming problema (bugs) na makikita sa mga susunod
          na mga rason.
        </p>

        <img src={OUTDATED} alt="" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Reason 2: Mahirap Mag Type
        </h3>
        <p className="text-textColor text-lg mb-5">
          Isa sa mga kinakaharap na problema ng karamihan ay mahirap mag edit.
          Bakit? Dahil kailangan mo pa mag spam ng maraming{" "}
          <span className="font-semibold italic">spaces</span> (makikita sa GIF)
          para lamang mapunta sa susunod na linya, at hamon ito kung marami kang
          dapat palitan tulad ng{" "}
          <span className="font-semibold">
            address, mga pagbabagong notes, atbp.{" "}
          </span>
          tapos gagawin mo pa ito sa maraming bookmarks
        </p>

        <img src={SPACES} alt="" className="h-[600px]" />
      </div>

      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Reason 3: Hindi Synchronized ang mga data
        </h3>
        <p className="text-textColor text-lg mb-5">
          Ito ang pinaka pangunahing rason kung bakit kinokonsidera natin ang
          paglipat - hindi synchronized ang mga data! Naging hamon sa atin ito
          noong RC Invitation Campaign natin, kung saan kailangan pa nating
          i-download ang bagong update na KMZ file para lang maging synchronized
          ang data ng lahat. <br /> <br /> Pero paano kung ang isa ay hindi
          nagdownload ng bagong updated na KMZ file? Magiging mali ang data na
          makikita niya. Inconsistent din kapag gumawa ng isang changes sa
          bookmarks ang isa pero hindi ito nakikita ng lahat. Non-sense ang
          pag-gamit ng bookmark feature kung kailangan lang ding i-download ang
          bawat changes. <br /> <br /> Kaya may naisip na solusyon ang mga
          territory servants para maiwasan ang mga ganitong scenarios. I-Click
          ang link sa baba para mag patuloy.
        </p>
      </div>

      <Link
        to="/solution"
        className="px-4 py-2 text-lg text-textColor bg-mainColor rounded-2xl hover:bg-mainColorDark"
      >
        Click Here: Solution
      </Link>
    </div>
  );
}

export default Problem;
