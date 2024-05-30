import { motion } from "framer-motion";

function UserName({ userName, color }) {
  return (
    <motion.div
      className="m-1 ml-3 flex items-center z-[1] flex-col overflow-y-hidden"
      whileHover="hover"
    >
      <motion.h1
        className={`text-9xl font-sans font-bold flex items-center z-[1] `}
        style={{color:color ? color : "#ffffff"}}
        initial={{ translateX: -100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          type: "spring",
          damping: 10,
        }}
      >
        {userName ? userName : "--"}
      </motion.h1>
    </motion.div>
  );
}

export default UserName;
