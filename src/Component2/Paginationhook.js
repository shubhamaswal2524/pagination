import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const Paginationhook = () => {
  const columns = usememo(() => COLUMNS, []);
  const data = usememo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    date,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRows } =
    tableInstance;
  return (
    <table {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroups) => {
          <tr {...headerGroups.getHeaderGroupProps()}>
            <th></th>
          </tr>;
        })}
      </thead>
      <tbody {...getTableBodyProps}>
        <tr>
          <th></th>
        </tr>
      </tbody>
    </table>
  );
};

export default Paginationhook;
