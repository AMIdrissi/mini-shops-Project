import ButtonForMenu from "../buttons/ButtonForMenu";
import NavBarButton from "../buttons/NavBarButton";
import UserIcon from "../icons/UserIcon";
import Cart from "../icons/Cart";
import Logo from "../logo/Logo";
import LoginThing from "../buttons/Login";
import Cappuccino from "../panel/CappuccinoPanel";
import TopbgImg from "../panel/topBackGroundImg";
import { motion, useScroll, useTransform } from "framer-motion";
import FirstLayer from "../layers/firstLayer";

function RootWebsite() {
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <div className="h-full">
      <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between items-center">
        <h1></h1>
        <div className="flex items-center mr-9 my-12 z-[1]">
          <LoginThing />
          <NavBarButton name={"home"} />
          <ButtonForMenu name={"categories"} />
        </div>
      </div>

      <div className="absolute top-0 left-0 bottom-0 w-full z-0">
        <div className="">
          <motion.img
            src="https://cdn.discordapp.com/attachments/1091841712445477018/1217936354026192906/75264431.png?ex=6605d69e&is=65f3619e&hm=188bd5056255d8d5325dd56b9f962b14a5c4810cb0262face5926b3fc0c0121a&"
            alt=""
            className="top-0 w-full"
            style={{ scale: scale1, originY: 0, translateY: "-5%" }}
          />
          {/* <<<< HERE'S WHERE ALL THE OTHER COMPONENTS IN LAYERS SHOULD GO >>>>*/}
          <FirstLayer />
          {/* <<<< HERE'S WHERE ALL THE OTHER COMPONENTS IN LAYERS SHOULD GO >>>>*/}
        </div>
      </div>

      <div className="mt-[7%] scale-125 flex justify-center">
        <Logo />
      </div>
    </div>
  );
}

export default RootWebsite;
