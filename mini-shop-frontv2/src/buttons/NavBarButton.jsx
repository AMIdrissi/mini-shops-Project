import { useState } from "react";
import { motion } from "framer-motion";

function NButton({ name }) {
  return (
    <div className="flex justify-center w-1/2 min-w-[168px]">
      <motion.button
        className="bg-[#eae7e7] text-red-700 px-6 py-2 font-customFont text-3xl rounded-3xl m-2 border-[3px] border-[#eae7e7]"
        // transition={{
        //   delay: 0.5,
        //   duration: 0.5,
        //   type: "spring",
        //   damping: 5,
        //   stiffness: 100,
        // }}
        whileHover={{
          border: "3px solid rgb(185 ,28 ,28)",
          boxShadow: "0px 0px 10px rgb(185 ,28 ,28)",
          backgroundColor: "#ffffffdd",
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        initial={{ translateY: -100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.2,
          type: "spring",
          damping: 10,
          ease: "easeInOut",
        }}
      >
        {name ? name : "AMIdrissi"}
      </motion.button>
    </div>
  );
}

export default NButton;
