import { useContext, useEffect, useState } from "react";
import NavBar_ from "../MainPage/NavBar/NavBar";
import TopbgImg from "../panel/HeaderImage";
import LoginThing from "../buttons/Login";
import NButton from "../buttons/NavBarButton";
import ButtonForMenu from "../buttons/ButtonForMenu";
import UserName from "./userName/UserName";
import ProfileCard from "./ProfileCard/ProfileCard";
import { useScroll, useTransform, motion } from "framer-motion";

function TopPart({ imageUrl }) {
  const [h, setH] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  return (
    <div className="h-[600px] overflow-y-hidden">
      <motion.img
        src={imageUrl ? imageUrl : mainImage}
        alt=""
        id="bgImg"
        className="absolute top-0 w-full h-[600px] object-cover max-h-[864px]"
        initial={{ scale: 1 }}
        style={{ scale: scale1, translateY: "-3%" }}
      />
    </div>
  );
}

function ProfilPage() {
  return (
    <>
      <div className={"h-[600px] bg-white overflow-x-hidden"}>
        <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between items-center">
          <h1></h1>
          <div className="absolute top-0 left-0 bottom-0 w-full z-0 overflow-x-hidden ">
            <TopPart
              imageUrl={
                "https://i.pinimg.com/originals/4a/63/52/4a6352ce2891b42518b8665532b33c70.gif"
              }
            />
          </div>
          <div className="flex items-center mr-9 my-12 z-[1]">
            <LoginThing />
            <NButton name={"home"} />
            <ButtonForMenu name={"categories"} />
          </div>
        </div>
        <div className="mt-[18%]  scale-125 flex justify-center overflow-y-hidden">
          <UserName userName={"Your Profil"} />
        </div>
      </div>
      <div className="flex">
        <ProfileCard />
        <div className="border-l-4 mt-20 mb-10">
              <h1 className="text-4xl">hello</h1>
        </div>
      </div>
    </>
  );
}

export default ProfilPage;
