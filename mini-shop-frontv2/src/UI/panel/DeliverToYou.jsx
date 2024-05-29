import { Link } from "react-router-dom";
import NButton from "../buttons/NavBarButton";
import ScooterIcon from "../icons/ScooterIcon";
import { motion } from "framer-motion";

function DeliverToYou({ whenInView }) {
  return (
    <div
      style={{ zIndex: 1, boxShadow: "0px 0px 5px 0px black" }}
      className="bg-white grid grid-rows-2"
    >
      <motion.div
        className="flex justify-center items-end"
        // style={{
        //   transition: "all 0.8s ease " + (0.7 + 0.3) + "s",
        //   transform: whenInView ? "translateX(0px)" : "translateX(-1000px)",
        // }}
        initial={{ translateX: -1000 }}
        animate={
          !whenInView
            ? {}
            : {
                translateX: 0,
                rotate: ["4deg", "0deg"],
              }
        }
        transition={{
          delay: 1,
          duration: 1.5,
          ease: "easeInOut",
          type: "spring",
        }}
      >
        <ScooterIcon size={"360px"} />
      </motion.div>
      <div className="flex items-center flex-col">
        <h1 className="font-customFont font-bold text-6xl">Order now</h1>
        <p className="font-customFont font-medium text-2xl my-2">
          Get all our fresh dishes delivered right to your home
        </p>
        <NButton name={<Link to={"/menu"}>Order</Link>} />
      </div>
    </div>
  );
}

export default DeliverToYou;
