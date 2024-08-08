import React from "react";
import ReactDOM from "react-dom/client";

import "@patternfly/react-core/dist/styles/base.css";
import "./fonts.module.css";

import { App } from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
