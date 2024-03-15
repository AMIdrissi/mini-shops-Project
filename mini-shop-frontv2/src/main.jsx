import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DropDownMenu from "./UI/dropDownMenu/DropDownMenu";
import NButton from "./UI/buttons/NavBarButton";
import MainPage from "./UI/MainPage/MainPage";
import ButtonForMenu from "./UI/buttons/ButtonForMenu";
import TopbgImg from "./UI/panel/HeaderImage";
import FirstLayer from "./UI/panel/FoodChoice";
import TagineIcon from "./UI/icons/TajineIcon";
import FastFoodIcon from "./UI/icons/FastFoodIcon";
import DessertIcon from "./UI/icons/DessertIcon";
import FoodChoiceContainer from "./UI/cardContainers/FoodChoiceContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
