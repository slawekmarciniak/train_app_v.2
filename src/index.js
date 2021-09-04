import React from "react";
import ReactDOM from "react-dom";
import App from "./layoutes/App";
import reportWebVitals from "./reportWebVitals";
import "./sass/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
