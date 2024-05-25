// src/components/navbars/NavbarGeneric.jsx

import React from "react";
import { Link } from "react-router-dom";
import ButtonForMenu from "../buttons/ButtonForMenu";
import NButton from "../buttons/NavBarButton";
import PanierButton from "../buttons/PanierButton";  
import LoginThing from "../buttons/Login";

function NavbarGeneric({ isMenuPage }) {
  return (
    <div className="flex items-center mr-9 z-[1]">
      <LoginThing />
      <NButton
        name={
          !isMenuPage ? (
            <Link to={"/menu"}>menu</Link>
          ) : (
            <Link to={"/"}>home</Link>
          )
        }
      />
      <ButtonForMenu name={"categories"} />
      <PanierButton />  
    </div>
  );
}

export default NavbarGeneric;
