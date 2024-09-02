import { Table } from "flowbite-react";
import React from "react";
import { TableColumns } from "../pages/TerritoryHistory";

interface TableHeaderProps {
  columns: TableColumns[];
}

function TableHeader({ columns }: TableHeaderProps) {
  const renderTableHeader = columns.map((column) => {
    return <Table.HeadCell key={column.id}>{column.name}</Table.HeadCell>;
  });

  return <Table.Head className="bg-gray-700">{renderTableHeader}</Table.Head>;
}

export default TableHeader;
