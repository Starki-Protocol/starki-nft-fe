import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { StarknetConfig, InjectedConnector } from "@starknet-react/core";

const connector = [new InjectedConnector({ options: { id: "argentX" } })];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StarknetConfig connectors={connector}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StarknetConfig>
);
