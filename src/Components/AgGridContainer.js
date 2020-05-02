import React, { Component } from "react";

import AgGridTable from "./AgGridTable";
import axios from "axios";
import { axiosHandler, API_URL, UNDERWORKS_URL } from "../Axios/Axios";

export default class AgGridContainer extends Component {
  state = {
    colDefs: [],
    gridOptions: {
      // rowStyle: {
      //   background: "#2b2b2b",
      //   color: "white",
      // },
    },
    rowData: [],
    defaultColDef: {},
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.columnApi.autoSizeColumns();

    const { colDefs, defaultColDef } = this.setAgGridData();

    this.gridApi.showLoadingOverlay();

    axios
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .then((response) => {
        console.log(response);
        this.setState({ colDefs, defaultColDef, rowData: response.data });
      })
      .catch((err) => {
        this.gridApi.showNoRowsOverlay();
      });
  };

  componentDidUpdate(prevProps, prevState) {}

  setAgGridData() {
    const colDefs = [
      {
        field: "athlete",
        sort: "desc",
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
        editable: true,
      },
      {
        field: "age",
        width: 90,
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
      {
        headerName: "Country",
        field: "country",
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
      {
        field: "year",
        width: 90,
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
      {
        field: "date",
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
      {
        field: "sport",
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
      {
        field: "gold",
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
      {
        field: "silver",
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
      {
        field: "bronze",
        cellClass: "my-cell-class",
        cellStyle: { border: "1px solid #8e8e8e" },
      },
    ];
    const defaultColDef = {
      width: 170,
      sortable: true,
    };
    return { colDefs, defaultColDef };
  }

  render() {
    let { colDefs, rowData, defaultColDef, gridOptions } = this.state;
    return (
      <div>
        <AgGridTable
          onGridReady={this.onGridReady}
          columnDefs={colDefs}
          gridOptions={gridOptions}
          defaultColDef={defaultColDef}
          rowData={rowData}
        />
      </div>
    );
  }
}
