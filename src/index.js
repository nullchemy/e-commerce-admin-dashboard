import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/css/globals.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <App tab="home" />
  </Router>
);