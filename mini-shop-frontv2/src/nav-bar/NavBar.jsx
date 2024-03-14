import ButtonForMenu from "../buttons/ButtonForMenu";
import NavBarButton from "../buttons/NavBarButton";
import UserIcon from "../icons/UserIcon";
import Cart from "../icons/Cart";
import Logo from "../logo/Logo";
import LoginThing from "../buttons/Login";
import Cappuccino from "../panel/CappuccinoPanel";
import TopbgImg from "../panel/topBackGroundImg";

function NavBar() {
  return (
    <div>
      <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between items-center">
        <h1></h1>
        <div className="absolute top-0 left-0 w-full z-0">
          <TopbgImg />
        </div>
        <div className="flex items-center mr-9 my-12 z-[1]">
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
      <div className="mt-[7%] scale-125 flex justify-center">
        {/* <Cappuccino timeDiff={0} /> */}
        <Logo />
      </div>
    </div>
  );
}

export default NavBar;
