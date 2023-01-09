import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { StarknetConfig, InjectedConnector } from "@starknet-react/core";

const connectors = [
  new InjectedConnector({ options: { id: "argentX" } }),
  new InjectedConnector({ options: { id: "braavos" } }),
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StarknetConfig connectors={connectors}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StarknetConfig>
);
