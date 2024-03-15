import { motion } from "framer-motion";

function FoodChoice({ icon, title, desc }) {
  return (
    <motion.div
      className="flex flex-col items-center max-w-[296px] text-center py-2 px-[3px] border-[2px] border-[#00000000] rounded-2xl"
      initial={{ scale: 1.2 }}
      whileHover={{
        scale: 1.25,
        boxShadow: "0px 0px 20px black",
      }}
    >
      {icon}
      <motion.p
        className="text-black font-customFont font-extrabold text-5xl my-2 bg-blend-darken"
        // initial={{ scale: 0, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{
        //   delay: 1.1,
        //   duration: 10,
        //   type: "spring",
        //   damping: 10,
        //   bounce: 0.9,
        // }}
      >
        {title}
      </motion.p>
      <p className="font-customFont text-xl">{desc}</p>
    </motion.div>
  );
}

export default FoodChoice;
