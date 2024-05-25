import { Link } from "react-router-dom";
import ButtonForMenu from "../buttons/ButtonForMenu";
import LoginThing from "../buttons/Login";
import NButton from "../buttons/NavBarButton";

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
    </div>
  );
}

export default NavbarGeneric;
