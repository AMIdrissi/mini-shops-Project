import ButtonForMenu from "../buttons/ButtonForMenu";
import LoginThing from "../buttons/Login";
import NButton from "../buttons/NavBarButton";

function NavbarGeneric() {
  return (
      <div className="flex items-center mr-9 z-[1]">
        <LoginThing />
        <NButton name={"menu"}  />
        <ButtonForMenu name={"categories"} />
      </div>
  );
}

export default NavbarGeneric;
