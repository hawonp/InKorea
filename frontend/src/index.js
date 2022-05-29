import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Guide from "./pages/Guide";
import Landing from "./pages/Landing";
import AppCatalog from "./pages/Appcatalog";
import Error404page from "./pages/error/404";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route index path="/guide" element={<Guide />} />
      <Route exact path="/appcatalog" element={<AppCatalog />} />
      <Route path="*" element={<Error404page />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
