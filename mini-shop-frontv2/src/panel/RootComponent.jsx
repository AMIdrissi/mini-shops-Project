import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FoodChoiceContainer from "../cardContainers/foodChoiceContainer";

function TopbgImg() {
  const [h, setH] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  useEffect(() => {
    setH(document.getElementById("bgImg").offsetHeight * 0.95);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setH(document.getElementById("bgImg").offsetHeight * 0.95);
    });
    window.addEventListener("scroll", () => {
      setH(
        document.getElementById("bgImg").offsetHeight * 0.955 * scale1.current
      );
    });
  }, [h]);
  return (
    <div>
      <motion.img
        src="https://cdn.discordapp.com/attachments/1091841712445477018/1217936354026192906/75264431.png?ex=6605d69e&is=65f3619e&hm=188bd5056255d8d5325dd56b9f962b14a5c4810cb0262face5926b3fc0c0121a&"
        alt=""
        id="bgImg"
        className="absolute top-0 w-full max-h-[864px]"
        initial={{ scale: 1 }}
        style={{ scale: scale1, originY: 0, translateY: "-5%" }}
      />
      {/* THIS IS WHERE THE REST OF THE PAGE IS GONNA GO */}
      <div style={{ marginTop: h }}>
        <FoodChoiceContainer />
      </div>
      <div className="h-[2000px]">
        <p>d</p>
      </div>
    </div>
  );
}
export default TopbgImg;
