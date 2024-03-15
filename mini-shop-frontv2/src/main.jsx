import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DropDownMenu from "./dropDownMenu/DropDownMenu";
import NButton from "./buttons/NavBarButton";
import MainPage from "./MainPage/MainPage";
import ButtonForMenu from "./buttons/ButtonForMenu";
import TopbgImg from "./panel/HeaderImage";
import FirstLayer from "./panel/FoodChoice";
import TagineIcon from "./icons/TajineIcon";
import FastFoodIcon from "./icons/FastFoodIcon";
import DessertIcon from "./icons/DessertIcon";
import FoodChoiceContainer from "./cardContainers/FoodChoiceContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
