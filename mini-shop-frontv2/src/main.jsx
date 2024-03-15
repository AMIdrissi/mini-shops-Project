import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DropDownMenu from "./dropDownMenu/DropDownMenu";
import NButton from "./buttons/NavBarButton";
import RootWebsite from "./websiteRoot/Root";
import ButtonForMenu from "./buttons/ButtonForMenu";
import TopbgImg from "./panel/topBackGroundImg";
import FirstLayer from "./layers/firstLayer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootWebsite />
  </React.StrictMode>
);
