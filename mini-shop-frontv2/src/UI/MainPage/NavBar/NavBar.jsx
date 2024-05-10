import ButtonForMenu from "../../buttons/ButtonForMenu.jsx";
import LoginThing from "../../buttons/Login.jsx";
import NButton from "../../buttons/NavBarButton.jsx";
import TopbgImg from "../../panel/HeaderImage.jsx";
import Logo from "../../logo/Logo.jsx";

function NavBar_({ bannerImg }) {
  return (
    <div className={"h-[864px] bg-white"}>
      <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between items-center">
        <h1></h1>
        <div className="absolute top-0 left-0 bottom-0 w-full z-0">
          <TopbgImg imageUrl={bannerImg} />
        </div>
        <div className="flex items-center mr-9 my-12 z-[1]">
          <LoginThing />
          <NButton name={"home"} />
          <ButtonForMenu name={"categories"} />
        </div>
      </div>
      <div className="mt-[7%] scale-125 flex justify-center">
        <Logo />
      </div>
    </div>
  );
}

export default NavBar_;
