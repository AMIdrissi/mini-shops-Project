import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NButton from "./UI/buttons/NavBarButton";
import MainPage from "./UI/MainPage/MainPage";
import ButtonForMenu from "./UI/buttons/ButtonForMenu";
import TopbgImg from "./UI/panel/HeaderImage";
import FirstLayer from "./UI/panel/FoodChoice";
import TagineIcon from "./UI/icons/TajineIcon";
import FastFoodIcon from "./UI/icons/FastFoodIcon";
import DessertIcon from "./UI/icons/DessertIcon";
import FoodChoiceContainer from "./UI/cardContainers/FoodChoiceContainer";
import ProfilPage from "./UI/ProfilePage/ProfilePage";
import { UserContext } from "./UserContext";
import FoodMenu from "./UI/MenuPage/FoodMenu";
import SingleFoodPage from "./UI/SingleFoodPage/SingleFoodPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodCard from "./UI/MenuPage/FoodCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/profil",
    element: <ProfilPage />,
  },
  {
    path: "/menu",
    element: <FoodMenu />,
  },
  {
    path: "/menu/:category",
    element: <FoodMenu />,
  },
  // categories cause i could not figure out how to do it with outlets
  {
    path: "/menu/product/:id",
    element: <SingleFoodPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider value={{ isConnected: true }}>
      {/* <ProfilPage /> */}
      {/* <FoodMenu /> */}
      {/* <MainPage/> */}
      {/* <SingleFoodPage /> */}
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);
