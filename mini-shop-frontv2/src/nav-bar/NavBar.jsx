import ButtonForMenu from "../buttons/ButtonForMenu";
import NavBarButton from "../buttons/NavBarButton";
import UserIcon from "../icons/UserIcon";
import Cart from "../icons/Cart";
import Logo from "../logo/Logo";

function NavBar() {
  return (
    <div className="flex h-20 bg-[#d4d3cf] font-exo2 font-[500] text-[18px] justify-between">
      <Logo />
      <div className="flex absolute self-center align-middle left-0 right-0 ml-[30%] mr-[30%] h-20">
        <ButtonForMenu />
        <NavBarButton />
        <ButtonForMenu />
      </div>
      <div className="flex items-center mr-5">
        {/* <div className="flex items-center"> */}
        <UserIcon />
        {/* </div> */}
        {/* <div className="flex items-center"> */}
        <Cart />
        {/* </div> */}
      </div>
    </div>
  );
}

export default NavBar;
