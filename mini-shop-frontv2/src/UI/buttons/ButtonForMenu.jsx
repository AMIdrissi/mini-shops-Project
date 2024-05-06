/**
 * @param {string} name
 * @param {Map} categorieMap
 * @returns {Component}
 * @description
 * ? returns a button + icon with styling and a hidden dropDown menu triggered by click action
 * ? Takes a parameter name for the button name , and a Map of categories to pass down to the menu component
 */

import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function ButtonForMenu({ name, categories }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex justify-center"
    >
      <motion.button
        whileHover={{
          boxShadow: "0px 0px 10px rgb(185 ,28 ,28)",
          border: "3px solid rgb(185 ,28 ,28)",
          backgroundColor: "#ffffffdd",
          scale: 1.05,
        }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? "flex items-center border-[3px] border-red-700 justify-center bg-[#ffffffdd] text-red-700 px-6 py-2 font-customFont text-3xl rounded-3xl m-2 min-w-40"
            : "flex items-center border-[3px] border-[#eae7e7] justify-center bg-[#eae7e7] text-red-700 px-6 py-2 font-customFont text-3xl rounded-3xl m-2 min-w-40"
        }
        style={{
          backgroundColor: isOpen ? "#ffffffdd" : "#eae7e7",
          boxShadow: isOpen ? "0px 0px 10px rgb(185 ,28 ,28)" : "0",
          border: isOpen ? "3px solid rgb(185 ,28 ,28)" : "3px solid #eae7e7",
        }}
        initial={{ translateY: -100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          delay: 0,
          duration: 0.2,
          type: "tween",
          damping: 20,
        }}
      >
        {name ? name : "Categories"}
        <motion.div
          className={"ml-2 fill-red-700"}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "tween",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="absolute min-w-40 mt-[70px] bg-[#ffffffee] p-1 px-[6px] m-2 rounded-xl child:text-gray-700 child:text-xl child:p-1 child:rounded-[8px]"
      >
        <motion.li
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ededed",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          whileTap={{
            scale: 1,
            backgroundColor: "#efdfdf",
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Item 1
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ededed",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          whileTap={{
            scale: 1,
            backgroundColor: "#efdfdf",
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Item 2{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ededed",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          whileTap={{
            scale: 1,
            backgroundColor: "#efdfdf",
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Item 3{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ededed",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          whileTap={{
            scale: 1,
            backgroundColor: "#efdfdf",
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Item 4{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ededed",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          whileTap={{
            scale: 1,
            backgroundColor: "#efdfdf",
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Item 5{" "}
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
