import { motion } from "framer-motion";
import NButton from "../buttons/NavBarButton";
import { Link } from "react-router-dom";

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
        <Link to={`/menu/product/${card.id}`}>
          {card.image ? (
            <motion.img
              src={card.image}
              alt={card.name}
              className="h-48 w-48 rounded-full object-cover cursor-pointer"
              variants={foodCircleAn}
            />
          ) : (
            <motion.svg
              width="800px"
              height="800px"
              viewBox="0 0 120.00 120.00"
              fill="none"
              className="h-48 w-48 rounded-full object-cover cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              variants={foodCircleAn}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect width="120" height="120" fill="#EFF1F3" />{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.2503 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z"
                  fill="#687787"
                />{" "}
              </g>
            </motion.svg>
          )}
        </Link>
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
