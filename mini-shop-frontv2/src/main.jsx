import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DropDownMenu from "./dropDownMenu/DropDownMenu";
import NButton from "./buttons/NavBarButton";
import MainPage from "./MainPage/MainPage";
import ButtonForMenu from "./buttons/ButtonForMenu";
import TopbgImg from "./panel/HeaderImage";
import FirstLayer from "./panel/foodChoice";
import TagineIcon from "./icons/tajineIcon";
import FastFoodIcon from "./icons/fastFoodIcon";
import DessertIcon from "./icons/DessertIcon";
import FoodChoiceContainer from "./cardContainers/foodChoiceContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
