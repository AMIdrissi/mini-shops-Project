import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import mainImage from "../../assets/75264431.png";

function TopbgImg({imageUrl}) {
  const [h, setH] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
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
    <div className="h-[864px] overflow-y-hidden">
      <motion.img
        src={imageUrl ? imageUrl : mainImage }
        alt=""
        id="bgImg"
        className="absolute top-0 w-full h-[864px] object-cover max-h-[864px]"
        initial={{ scale: 1 }}
        style={{ scale: scale1, translateY: "-3%" }}
      />
    </div>
  );
}
export default TopbgImg;
