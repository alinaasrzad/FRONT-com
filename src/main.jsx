import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Headers from "./components/header/Headers";
import Footer from "./components/footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import Body from "./COMPONENTS/BODY/Body.jsx";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Headers />
  <Body />
    <Footer />
  </React.StrictMode>
);
