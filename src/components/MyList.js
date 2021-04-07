import React, { useEffect, useState, useMemo } from "react";
import { database } from "../firebase";
import { useTable, useGlobalFilter } from "react-table";
import Form from "./Form";
import { COLUMNS } from "./columns";
import "./table.css";

function MyList() {
  let [users, setUsers] = useState([]);
  const columns = useMemo(() => COLUMNS, []);

  const tableInstence = useTable(
    {
      columns: columns,
      data: users,
    },
    useGlobalFilter
  );

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = tableInstence;

  const { globalFilter } = state;

  useEffect(() => {
    database
      .ref("User")
      .orderByChild("id")
      .on("value", (snap) => {
        console.log(snap.val());
        let users = snap.val();
        let fetchedList = [];

        for (let id in users) {
          fetchedList.push({ id: id, ...users[id] });
        }

        setUsers(fetchedList);
      });
  }, []);

  return (
    <div>
      <Form />
      <h1>My List</h1>
      <hr />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyList;
