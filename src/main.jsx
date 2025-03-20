import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
// import Consoles from "./pages/Consoles.jsx";
// import Games from "./pages/Games.jsx";
// import Play from "./pages/Play.jsx";

import DynavisionProvider from "./contexts/Dynavision";
import Dynavision from "./pages/Dynavision/Dynavision.jsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} bef>
          <Route
            path="/"
            element={
              <DynavisionProvider>
                <Dynavision />
              </DynavisionProvider>
            }
          />
          {/* <Route path="/" element={<Consoles />} />
          <Route path="/dynavision" element={<Dynavision />} />
          <Route path="/games/:id" element={<Games />} />
          <Route path="/play/:id" element={<Play />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
