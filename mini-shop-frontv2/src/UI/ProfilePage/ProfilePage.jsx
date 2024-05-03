import { useContext, useEffect, useState } from "react";
import NavBar_ from "../MainPage/NavBar/NavBar";
import TopbgImg from "../panel/HeaderImage";
import LoginThing from "../buttons/Login";
import NButton from "../buttons/NavBarButton";
import ButtonForMenu from "../buttons/ButtonForMenu";
import UserName from "./userName/UserName";
import ProfileCard from "./ProfileCard/ProfileCard";
import { useScroll, useTransform, motion } from "framer-motion";
import Cart from "../icons/Cart";
import OrderContainer from "./Orders/OrderContainer";

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
        className="absolute top-0 w-full h-[620px] object-cover max-h-[864px]"
        initial={{ scale: 1 }}
        style={{ scale: scale1, translateY: "-3%" }}
      />
    </div>
  );
}

function ProfilPage() {
  return (
    <>
      <div className={"h-[600px] overflow-x-hidden"}>
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
      <div className="bg-[url('./src/assets/75264431.png')] bg-cover bg-no-repeat grid">
        <div className="flex backdrop-blur-2xl bg-white/40">
          <ProfileCard />
          <div className="border-l-4 mt-14 mb-10 flex-grow px-10">
            <div className="text-5xl flex items-center p-4 ml-4">
              <h2 className="text-[#f6f6f6] font-customFont">Your Orders</h2>
              <div className="mt-1 scale-125">
                <svg
                  width="45px"
                  height="45px"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={"cart"}
                  className="p-[3px] rounded-[50%] mx-2 flex justify-center"
                >
                  <path
                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#f6f6f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <motion.div
              className="h-1 w-full bg-[#f6f6f6] rounded-sm min-w-[450px] ml-4"
              initial={{ width: "0%", scaleX: 0, opacity: 0 }}
              animate={{ width: "39%", scaleX: 1, opacity: 1 }}
              style={{ originX: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                type: "spring",
                damping: 50,
              }}
            />

            <div className="my-4 max-h-[525px] overflow-y-auto">
              <OrderContainer />
              <OrderContainer />
              <OrderContainer />
              <OrderContainer />
              <OrderContainer />
              <OrderContainer />
              <OrderContainer />
              <OrderContainer />
              <OrderContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilPage;
