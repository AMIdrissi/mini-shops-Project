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
import LoginCard from "./UI/LoginPage/LoginCard";
import SingleFoodPage from "./UI/SingleFoodPage/SingleFoodPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodCard from "./UI/MenuPage/FoodCard";
import PanierCard from "./UI/panier/PanierCard";
import PanierPage from "./UI/panier/panierpage";
import produitService from "./services/ProduitService";

// this is basically the root path tree for the whole website
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/profil",
    element: <ProfilPage />,
    loader: async () => {
      return await fetch("URL");
    },
  },
  {
    path: "/menu",
    element: <FoodMenu />,
    loader: async ({}) => {
      return await produitService.getAllProduits();
    },
  },
  {
    path: "/menu/:category",
    element: <FoodMenu />,
    loader: async ({}) => {
      return await produitService.getAllProduits();
    },
  },
  {
    path: "/menu/product/:id",
    element: <SingleFoodPage />,
    loader: async ({}) => {
      return await produitService.getAllProduits();
    },
  },
  {
    path: "/login",
    element: <LoginCard />,
  },
  {
    path: "/panier",
    element: <PanierPage />,
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
