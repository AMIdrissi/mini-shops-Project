import { useEffect } from "react";
import CoffeeBean from "../icons/CoffeeBean";
import { motion } from "framer-motion";

function Logo() {
  const logoHover = {
    hover: {
      fill: "#b5927b",
      // padding: "0px 2px",
      rotate: "360deg",
      scale: 1.1,
    },
  };

  return (
    <div className="m-1 ml-3 flex items-center">
      <motion.h1
        className="text-6xl font-sans font-bold text-[#432d27] flex items-center "
        whileHover="hover"
      >
        C
        <span className="flex w-9 justify-center p-px fill-black">
          <CoffeeBean hoverVariant={logoHover} />
        </span>
        ffee & chill
      </motion.h1>
    </div>
  );
}

export default Logo;
