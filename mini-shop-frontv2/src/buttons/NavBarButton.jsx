import { useState } from "react";
import { motion } from "framer-motion";

function NButton({ name }) {
  return (
    <div className="flex justify-center w-1/2 min-w-[168px]">
      <motion.button
        className="bg-[#D7B7A3] text-white px-6 py-2 font-customFont text-3xl rounded-3xl m-2"
        // transition={{
        //   delay: 0.5,
        //   duration: 0.5,
        //   type: "spring",
        //   damping: 5,
        //   stiffness: 100,
        // }}
        whileHover={{
          backgroundColor: "#b5927b",
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        {name ? name : "AMIdrissi"}
      </motion.button>
    </div>
  );
}

export default NButton;
