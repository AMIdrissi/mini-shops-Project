import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DropDownMenu from "./dropDownMenu/DropDownMenu";
import NButton from "./buttons/NavBarButton";
import NavBar from "./nav-bar/NavBar";
import ButtonForMenu from "./buttons/ButtonForMenu";
import TopbgImg from "./panel/topBackGroundImg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
