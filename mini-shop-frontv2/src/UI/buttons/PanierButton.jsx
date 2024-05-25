import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import panierIcon from "../../assets/panier.png"; // Import the panier icon

function PanierButton() {
  return (
    <div className="flex justify-center min-w-[168px]">
      <motion.button
        className="bg-[#eae7e7] px-6 py-2 rounded-3xl m-2 border-[3px] border-[#eae7e7]"
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
          delay: 0,
          duration: 0.2,
          type: "tween",
          damping: 20,
        }}
      >
        <Link to="/panier"> {/* Update to navigate to /panier */}
          <img src={panierIcon} alt="Panier" className="h-8 w-8" /> {/* Panier icon */}
        </Link>
      </motion.button>
    </div>
  );
}

export default PanierButton;
