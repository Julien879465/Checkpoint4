import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import CurrentUserContextProvider from "./contexts/CurrentUserContext";
import "./index.css";
import App from "./App";
import ExercicesContextProvider from "./contexts/ExercicesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <ExercicesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExercicesContextProvider>
    </CurrentUserContextProvider>
  </React.StrictMode>
);
