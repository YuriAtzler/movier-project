import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { GeneroProvider } from "./contexts/generoContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneroProvider>
      <AppRoutes />
    </GeneroProvider>
  </React.StrictMode>
);

reportWebVitals();
