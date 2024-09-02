import { Table } from "flowbite-react";
import React from "react";
import _ from "lodash";
import { useGetSearchHistoryQuery } from "../store/territoryApi";
import { ITerritory } from "../data/territoryInterface";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import ViewImg from "../components/ViewImg";
import { useSelector } from "react-redux";
import { State } from "../store/store";

export interface TableColumns {
  id: number;
  name: string;
  path?: string;
  xtraContent?(item: any): React.ReactNode;
}

function TerritoryHistory() {
  const { data } = useGetSearchHistoryQuery("");
  const territoryHistory: ITerritory[] = data;

  const showImage = useSelector((state: State) => state.ui.showImage);
  const imgUrl = useSelector((state: State) => state.ui.imgUrl);
  const columns: TableColumns[] = [
    {
      id: 0,
      name: "Group Number",
      path: "groupNum",
    },
    {
      id: 1,
      name: "Territory",
      path: "territoryNum",
    },
    {
      id: 2,
      name: "Servant",
      path: "servant",
    },
    {
      id: 3,
      name: "Search Date",
      path: "searchDate",
    },
    {
      id: 4,
      name: "Territory Ended",
      path: "terrNumEnded",
    },
    {
      id: 5,
      name: "Pinagpatinggaan",
      path: "searchEndedImg",
      // xtraContent: (item: ITerritory) => (
      //   <React.Fragment>
      //     <ViewImg imgUrl={item.searchEndedImg} />
      //   </React.Fragment>
      // ),
    },
    {
      id: 6,
      name: "Mangrugi",
      path: "toStartSearchImg",
      // xtraContent: (item: ITerritory) => (
      //   <React.Fragment>
      //     <ViewImg imgUrl={item.toStartSearchImg} />
      //   </React.Fragment>
      // ),
    },
  ];

  const renderTerritoryHistory = () => {
    if (!territoryHistory || territoryHistory.length === 0) {
      return (
        <div className="grid place-items-center h-[92dvh]">
          {" "}
          <h1 className="text-center text-3xl text-mainColor">
            No Search History at the moment. Please comeback later
          </h1>
        </div>
      );
    }
    return (
      <React.Fragment>
        {showImage && <ViewImg imgUrl={imgUrl} />}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader columns={columns} />
            <TableBody data={territoryHistory} columns={columns} />
          </Table>
        </div>
      </React.Fragment>
    );
  };

  return <div className="w-full min-h-[90dvh]">{renderTerritoryHistory()}</div>;
}

export default TerritoryHistory;
