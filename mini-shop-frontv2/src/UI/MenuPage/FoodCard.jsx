import { motion } from "framer-motion";
import NButton from "../buttons/NavBarButton";

// animation variants
const foodCircleAn = {
  initS: { scale: 0 },
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.02,
    rotate: 5,
    transition: {
      delay: 0.1,
      duration: 1,
      type: "spring",
      damping: 5,
      velocity: 1,
    },
  },
};

const foodContainerAn = {
  initS: { scale: 0 },
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    borderColor: "rgb(185 ,28 ,28,0.7) ",
    transition: {
      duration: 0,
    },
  },
};

function FoodCard({ card, isCategoryVis }) {
  return (
    <motion.div
      key={card.id}
      className={`bg-white/80 relative p-4 py-6 rounded-2xl shadow-xl shadow-red-700/25 transition-all duration-300 border-2 border-white font-customFont min-w-[270px] mx-5 my-4`}
      initial="initS"
      whileHover="hover"
      animate="rest"
      variants={foodContainerAn}
    >
      <div className="flex justify-center items-center mb-4">
        <motion.img
          src={card.image}
          alt={card.name}
          className="h-48 w-48 rounded-full object-cover cursor-pointer"
          variants={foodCircleAn}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold mb-2 text-2xl">{card.name}</h2>
        <p className="text-gray-600 mb-2">Price: {card.price}DH</p>
        <p className="text-green-500 mb-4">Promotion: {card.promotion}</p>
        {isCategoryVis && (
          <p className="bg-slate-200/40 mb-4 px-4 text-lg rounded-xl py-1">
            Category: {card.category}
          </p>
        )}

        {/* <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Add to Cart
        </button> */}
        <NButton name={"Add to cart"} size={"xl"} />
      </div>
    </motion.div>
  );
}

export default FoodCard;
