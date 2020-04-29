import React from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const AgGridTable = (props) => {
  let {
    columnDefs,
    defaultColDef,
    rowData,
    onGridReady,
    onCellKeyPress,
    onCellKeyDown,
    onCellValueChanged,
  } = props;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        id="myGrid"
        style={{
          height: "100vh",
          width: "100vw",
        }}
        className="ag-theme-balham"
      >
        <AgGridReact
          modules={AllModules}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          onGridReady={onGridReady}
          onCellKeyPress={onCellKeyPress}
          onCellValueChanged={onCellValueChanged}
          onCellKeyDown={onCellKeyDown}
        />
      </div>
    </div>
  );
};

export default AgGridTable;
