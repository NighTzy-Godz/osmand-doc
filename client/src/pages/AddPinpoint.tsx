import React from "react";
import CurrLocation from "../components/CurrLocation";
import PP1 from "../assets/imgs/pp1.jpg";
import PP2 from "../assets/imgs/pp2.jpg";
import PP3 from "../assets/imgs/pp3.jpg";
import PP4 from "../assets/imgs/pp4.jpg";
import PP5 from "../assets/imgs/pp5.jpg";
import { Link } from "react-router-dom";
function AddPinpoint() {
  return (
    <div className="pb-5">
      <CurrLocation location="Add Pinpoint" />
      <h1 className="mb-5 text-mainColor text-6xl">Add Pinpoint</h1>
      <p className="text-textColor text-xl mb-10">
        Ituturo sa artikulo na ito ang isa sa mga mahahalagang features ng
        OsmAnd, ito ay ang pag-dadagdag ng pinpoint. Sundan lamang ang mga steps
        sa baba kung paano ito gagawin.
      </p>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 1: Device Location
        </h3>
        <p className="text-textColor text-lg mb-5">
          Kailangan mo munang buksan ang location ng inyong device para malaman
          ng OsmAnd kung nasaan ka.
        </p>
        <img src={PP1} className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 2: Location Button
        </h3>
        <p className="text-textColor text-lg mb-5">
          Kapag nabuksan na ang device location, i-click lamang ang{" "}
          <span className="italic">Location</span> button para mapunta ang maps
          sa iyong kinaroroonan.
        </p>
        <img src={PP2} className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 3: Mag-Test
        </h3>
        <p className="text-textColor text-lg mb-5">
          Kapag nagawa mo na ang naunang dalawang steps, mapupunta ang iyong map
          sa iyong kinaroroonan. Dapat maging kulay{" "}
          <span className="italic">blue</span> rin ang{" "}
          <span className="italic">location button</span>.
        </p>
        <img src={PP3} className="h-[600px]" />
      </div>
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 4: Double Tap or Long Press
        </h3>
        <p className="text-textColor text-lg mb-5">
          Puwede mo nang i-double tap o i-long press (
          <span className="italic">recommended</span>) ang bahay kung saan
          nakatira ang Ilokano na nahanap ninyo. Pagkatapos, lalabas yung nasa
          larawan, i-click lang ang{" "}
          <span className="italic">add na may star button</span> para malagay mo
          ang information ng nakausap mo.
        </p>
        <img src={PP4} className="h-[600px]" />
      </div>{" "}
      <div className="mb-10">
        <h3 className="text-textColor text-2xl font-semibold">
          Step 5: Fill Up
        </h3>
        <p className="text-textColor text-lg mb-5">
          Katulad lang din sa ginagawa natin sa Maps.Me, fill-upan ang
          impormasyon na kailangan. Katulad ng pangalan, address niya,
          probinsya, at mga necessary notes. Pagkatapos, i-click ang{" "}
          <span className="italic">group</span> na{" "}
          <span className="italic">MHIC Territory Database</span> para maidagdag
          ito sa database natin. Kapag nagawa na ito, just click the{" "}
          <span className="italic">save</span> button.
        </p>
        <img src={PP5} className="h-[600px]" />
      </div>
      <div className="mb-5">
        <p className="text-textColor text-lg mb-5">
          Ngayon ay alam mo na kung paano mag pinpoint sa Ilokano na nahanap mo.
          Ngayon ay pag-aaralan naman natin kung paano ito mag sy-sync sa lahat
          ng devices natin. Madali lang ito, kaya i-click mo lang ang button sa
          baba .
        </p>
      </div>
      <Link
        to="/saving_syncing"
        className="px-4 py-2 text-lg text-textColor bg-mainColor rounded-2xl hover:bg-mainColorDark"
      >
        Click Here: Save and Sync
      </Link>
    </div>
  );
}

export default AddPinpoint;
