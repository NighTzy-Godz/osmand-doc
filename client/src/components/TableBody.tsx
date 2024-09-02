import React from "react";
import { ITerritory } from "../data/territoryInterface";
import { TableColumns } from "../pages/TerritoryHistory";
import { Table } from "flowbite-react";
import _ from "lodash";
import { renderTerritoryBrgy } from "../utils";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setImgUrl, setShowImage } from "../store/uiSlice";

interface TableBodyProps {
  data: ITerritory[];
  columns: TableColumns[];
}

function TableBody({ data, columns }: TableBodyProps) {
  const dispatch = useDispatch();

  const handleViewImg = (imgUrl: string) => {
    dispatch(setShowImage(true));
    dispatch(setImgUrl(imgUrl));
  };

  const renderCellContent = (data: ITerritory, column: TableColumns) => {
    const cellValue = _.get(data, column.path as string);

    switch (column.path) {
      case "terrNumEnded":
        if (!cellValue) return <p>Not Finished</p>;
        break;

      case "territoryNum":
        return <p>{renderTerritoryBrgy(data.territoryNum)}</p>;

      case "searchDate":
        return <p>{moment(data.searchDate).format("MMM Do YYYY")}</p>;

      case "searchEndedImg":
        return (
          <p
            onClick={() => handleViewImg(data.searchEndedImg)}
            className="text-mainColor hover:underline cursor-pointer"
          >
            View Image
          </p>
        );

      case "toStartSearchImg":
        return (
          <p
            onClick={() => handleViewImg(data.toStartSearchImg)}
            className="text-mainColor hover:underline cursor-pointer"
          >
            View Image
          </p>
        );
    }

    return <p>{cellValue}</p>;
  };

  const renderColumns = (item: ITerritory) =>
    columns.map((column, index) => {
      return (
        <Table.Cell
          className={`min-w-[150px] px-2 text-center `}
          key={column.id}
        >
          {column.xtraContent
            ? column.xtraContent(item)
            : renderCellContent(item, column)}
        </Table.Cell>
      );
    });

  const renderRows = data.map((item, index) => {
    return (
      <Table.Row
        key={item._id}
        className={`${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}`}
      >
        {renderColumns(item)}
      </Table.Row>
    );
  });

  return <Table.Body>{renderRows}</Table.Body>;
}

export default TableBody;
