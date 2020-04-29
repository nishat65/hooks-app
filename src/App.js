import React, { Suspense } from "react";
import AgGridContainer from "./Components/AgGridContainer";
import Routes from "./App/Router/Routes";
import Main from "./App/Main";
import "./App.scss";
import "./App.css";

export default function App() {
  return (
    <div className="d-flex">
      <Main />
      {/* <Routes /> */}
    </div>
  );
}
