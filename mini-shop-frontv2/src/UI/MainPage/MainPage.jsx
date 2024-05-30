import { useEffect, useRef, useState } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import CertifiedTajine from "../icons/CertifiedTajine";
import DishDescription from "../cardContainers/DishDescription";
import FoodChoiceContainer from "../cardContainers/FoodChoiceContainer";
import FID from "../cardContainers/FeshIngredientsDesc";
import NavBar_ from "./NavBar/NavBar";
import RegisterPanel from "../panel/RegisterPanel";
import DeliverToYou from "../panel/DeliverToYou";

function MainPage() {
  useEffect(() => {
    document.querySelector("#root").style.height = "auto";
    document.querySelector("body").style.height = "auto";
  }, []);

  const ref = useRef(null);
  const whenInViewF = useInView(ref, {
    amount: 0.2,
    once: true,
  });
  const dishDesxRef = useRef(null);
  const whenInViewDishDesc = useInView(dishDesxRef, {
    amount: 0.5,
    once: true,
  });
  const RegRef = useRef(null);
  const whenInViewReg = useInView(RegRef, {
    amount: 0.33,
    once: true,
  });
  // const [h, setH] = useState(0);
  // useEffect(() => {
  //   setH(document.getElementById("bgImg").offsetHeight * 0.95);
  // }, []);
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setH(document.getElementById("bgImg").offsetHeight * 0.95);
  //   });
  //   window.addEventListener("scroll", () => {
  //     setH(
  //       document.getElementById("bgImg").offsetHeight * 0.955 * scale1.current
  //     );
  //   });
  // }, [h]);
  //test

  return (
    <div className="grid grid-rows-4 bg-[url('./src/assets/ingredients.jpg')] h-full overflow-x-hidden bg-no-repeat bg-center bg-fixed bg-cover">
      <NavBar_ />
      <div className="h-[864px] mt-0 bg-white">
        <FoodChoiceContainer reference={ref} whenInView={whenInViewF} />
      </div>
      <div
        className="h-[864px] bg-[#00000075] border-t-4 border-b-4 border-red-700 grid grid-cols-2"
        ref={dishDesxRef}
      >
        <div className="flex justify-center overflow-y-auto overflow-x-hidden">
          <DishDescription whenInView={whenInViewDishDesc} />
        </div>
        <div className="grid grid-rows-2">
          <div
            className="flex justify-end mt-12"
            style={{
              transition: "all 0.6s ease",
              transform: whenInViewDishDesc ? "scale(1)" : "scale(1.5)",
              opacity: whenInViewDishDesc ? 1 : 0,
            }}
          >
            <CertifiedTajine />
          </div>
          <FID whenInView={whenInViewDishDesc} />
        </div>
      </div>
      <div className="bg-white h-[864px] grid grid-cols-2" ref={RegRef}>
        <DeliverToYou whenInView={whenInViewReg} />
        <RegisterPanel whenInViewReg={whenInViewReg} />
      </div>
    </div>
  );
}

export default MainPage;
