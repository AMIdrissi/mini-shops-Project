import { motion } from "framer-motion";
import NavBar from "../websiteRoot/Root";

function FirstLayer() {
  return (
    <div>
      <motion.p
        className="text-white bg-black font-customFont font-bold text-2xl my-4 bg-blend-darken"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 10,
          type: "spring",
          damping: 10,
          bounce: 0.9,
        }}
      >
        high quality homemade food
      </motion.p>
    </div>
  );
}

export default FirstLayer;
