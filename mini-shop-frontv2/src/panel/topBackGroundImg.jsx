import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TopbgImg() {
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <div>
      <motion.img
        src="https://cdn.discordapp.com/attachments/1091841712445477018/1217936354026192906/75264431.png?ex=6605d69e&is=65f3619e&hm=188bd5056255d8d5325dd56b9f962b14a5c4810cb0262face5926b3fc0c0121a&"
        alt=""
        className="absolute top-0 w-full"
        style={{ scale: scale1, originY: 0, translateY: "-5%" }}
      />
      <p className="h-[3000px]">ddd</p>
    </div>
  );
}
export default TopbgImg;
