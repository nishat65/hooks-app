import React, { Component } from "react";

import AgGridTable from "./AgGridTable";
import axios from "axios";
import { axiosHandler, API_URL, UNDERWORKS_URL } from "../Axios/Axios";

export default class AgGridContainer extends Component {
  state = {
    colDefs: [],
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

  // componentDidMount() {
  //     const data = {
  //       email : 'wayne@underworks.com.au',
  //       password: 'Und3rw0rk$159!'
  //     }
  //     const headers = {CONTENT_TYPE: 'application/json'}

  //     axiosHandler('post', `${UNDERWORKS_URL}auth/login`, headers, data)
  //     .then(data => {
  //       return data.data.info
  //     })
  //     .catch(err => {
  //       return err
  //     })
  // }

  componentDidUpdate(prevProps, prevState) {}

  setAgGridData() {
    const colDefs = [
      {
        field: "athlete",
        sort: "desc",
      },
      {
        field: "age",
        width: 90,
      },
      {
        headerName: "Country",
        field: "country",
      },
      {
        field: "year",
        width: 90,
      },
      {
        field: "date",
      },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
    ];
    const defaultColDef = {
      width: 170,
      sortable: true,
    };
    return { colDefs, defaultColDef };
  }

  render() {
    let { colDefs, rowData, defaultColDef } = this.state;
    return (
      <div>
        <AgGridTable
          onGridReady={this.onGridReady}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
        />
      </div>
    );
  }
}
