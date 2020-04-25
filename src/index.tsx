import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

const rootElement = document.getElementById("root");
const render =
  rootElement && rootElement.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
