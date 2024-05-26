import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cart from "../icons/Cart";
import LoadedCart from "../icons/LoadedCart";
import cartService from "../../services/CartService";

function PanierButton() {
  console.log(cartService.getCart());
  return (
    <div className="flex justify-center ">
      <motion.button
        className="bg-[#eae7e700] px-3 py-2 rounded-3xl m-2 flex justify-center items-center"
        whileHover={{
          fill: "#eeeeeebb",
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        initial={{ translateY: -100, opacity: 0, fill: "#ffffff" }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          delay: 0,
          duration: 0.2,
          type: "tween",
          damping: 20,
        }}
        onClick={() => {
          console.log("here");
        }}
      >
        <Link to="/panier">
          {" "}
          {/* Update to navigate to /panier */}
          <LoadedCart />
          {/* Panier icon */}
        </Link>
      </motion.button>
    </div>
  );
}

export default PanierButton;
