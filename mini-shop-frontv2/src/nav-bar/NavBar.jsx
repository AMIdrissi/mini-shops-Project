import ButtonForMenu from "../buttons/ButtonForMenu";
import NavBarButton from "../buttons/NavBarButton";
import UserIcon from "../icons/UserIcon";
import Cart from "../icons/Cart";
import Logo from "../logo/Logo";
import LoginThing from "../buttons/Login";
import Cappuccino from "../panel/CappuccinoPanel";

function NavBar() {
  return (
    <div>
      <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between items-center">
        <Logo />
        <div className="flex items-center mr-9 my-12">
          <LoginThing />
          <NavBarButton name={"home"} />
          <ButtonForMenu name={"categories"} />

          {/* <div className="flex items-center"> */}
          {/* </div> */}
          {/* <div className="flex items-center"> */}
          {/* <Cart /> */}
          {/* </div> */}
        </div>
      </div>
      <div>
        <Cappuccino timeDiff={0} />
      </div>
    </div>
  );
}

export default NavBar;
