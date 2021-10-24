import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Toolbar = (props) => {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} />
    </div>
  );
};

const escapeRegExp = (value) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const CustomDataGrid = (props) => {
  const [rows, setRows] = useState(props.rows);
  const [searchText, setSearchText] = React.useState("");

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = props.rows.filter((row) => {
      return Object.keys(row).some((field) => {
        const isValid =
          typeof row[field] === "string" || typeof row[field] === "number"
            ? true
            : false;
        // console.log(row[field]);
        return isValid ? searchRegex.test(row[field].toString()) : true;
      });
    });
    setRows(filteredRows);
  };
  return (
    <div className="container_table">
      <DataGrid
        components={{ Toolbar: Toolbar }}
        rows={rows}
        columns={props.columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        //   checkboxSelection
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
    </div>
  );
};
export default CustomDataGrid;
