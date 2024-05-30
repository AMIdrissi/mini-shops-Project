import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import produitService from "../../../services/ProduitService";

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

function AdminMangerFoodCard({ card, setCard, creatorMod, setCreatorMod }) {
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
        <Link to={``}>
          {card.images[0].url ? (
            <motion.img
              src={card.images[0].url}
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
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect width="120" height="120" fill="#EFF1F3" />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
        <p className="text-gray-600 mb-2">
          Brand : {card.brand ? card.brand : "----"}
        </p>

        <p className="bg-slate-200/40 mb-4 px-4 text-lg rounded-xl py-1">
          Category: {card.category}
        </p>

        <p className="bg-slate-200/40 mb-4 px-4 text-lg rounded-xl py-1">
          {card.quantity
            ? card.quantity === 0
              ? "Out of stock"
              : "Quantity : " + card.quantity
            : "----"}
        </p>

        <p className="bg-slate-200/40 mb-4 px-4 text-lg rounded-xl py-1">
          Discount : {card.discount ? card.discount : "----"}
        </p>

        <div className="flex">
          <motion.button
            className={`bg-blue-900 text-white px-6 py-2 font-customFont text-2xl rounded-3xl m-2 flex items-center `}
            whileHover={{
              boxShadow: "0px 0px 10px rgb(37 ,99, 235)",
              backgroundColor: "rgb(37 ,99, 235)",
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
            onClick={() => {
              setCard(card);
              creatorMod && setCreatorMod(false);
            }}
          >
            Modify{" "}
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 20 24"
              fill="none"
              className="mx-[2px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3282 8.32837L15.8939 5.89405C14.7058 4.706 14.1118 4.11198 13.4268 3.88941C12.8243 3.69364 12.1752 3.69364 11.5727 3.88941C10.8877 4.11198 10.2937 4.706 9.10564 5.89405L7.49975 7.49994M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button
            className={`bg-red-800 text-white px-6 py-2 font-customFont text-2xl rounded-3xl m-2 flex items-center `}
            whileHover={{
              boxShadow: "0px 0px 10px rgb(185 ,28 ,28)",
              backgroundColor: "rgb(220 ,38 ,38)",
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
            onClick={() => {
              produitService
                .deleteProduct(card.id)
                .then((response) => {
                  console.log(response.status);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Delete{" "}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 22 29"
              className="translate-y-[1px] mx-1"
            >
              <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
            </motion.svg>
          </motion.button>
        </div>

        {/* <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Add to Cart
        </button> */}
      </div>
    </motion.div>
  );
}

export default AdminMangerFoodCard;
