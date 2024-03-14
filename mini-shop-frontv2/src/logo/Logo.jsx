import { useEffect } from "react";
import ForkIcon from "../icons/ForkIcon";
import { motion } from "framer-motion";

function Logo() {
  const logoHover = {
    hover: {
      fill: "rgb(185 ,28 ,28)",
      // padding: "0px 2px",
      rotate: "360deg",
      scale: 1.05,
    },
  };

  return (
    <motion.div
      className="m-1 ml-3 flex items-center z-[1] flex-col"
      whileHover="hover"
    >
      <motion.h1
        className="text-9xl font-sans font-bold text-[#ffffff] flex items-center z-[1] mr-16 mb-4"
        initial={{ translateX: -100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          type: "spring",
          damping: 10,
        }}
      >
        AM
        <span className="flex w-9 justify-center p-px fill-black">
          <ForkIcon hoverVariant={logoHover} />
        </span>
      </motion.h1>
      <motion.h1
        className="text-9xl font-sans font-bold text-[#ffffff] flex items-center z-[1] ml-16"
        initial={{ translateX: 100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.3,
          type: "spring",
          damping: 10,
        }}
      >
        Delicacies
      </motion.h1>
    </motion.div>
  );
}

export default Logo;
