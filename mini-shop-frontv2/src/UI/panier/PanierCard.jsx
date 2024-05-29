import React, { useState } from "react";
import { motion } from "framer-motion";

function PanierCard({ item }) {
  const foodProduct = item.produit;
  if (!foodProduct) {
    foodProduct = {
      name: "- - - -",
      description: "- - - -",
      price: 0,
      previousPrice: 0,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    };
  }

  // const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    quantity + 1;
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      quantity - 1;
    }
  };

  const handleDelete = () => {
    0;
  };

  const totalPrice = foodProduct.price * item.quantity;

  return (
    <div className="flex items-center justify-center my-4">
      <div
        className="bg-gray-100 bg-opacity-80 rounded-lg p-4 shadow-md mx-auto"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <div className="flex items-center">
          <img
            src={foodProduct.images[0].url}
            alt={foodProduct.name}
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div className="px-3">
            <motion.h2
              className="text-lg font-semibold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {foodProduct.name}
            </motion.h2>
            <p className="text-gray-600 mb-2">{foodProduct.description}</p>
          </div>
        </div>
        <div className="mt-4 font-customFont font-semibold text-xl">
          <p>{`Quantity : ${item.quantity}`}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          {foodProduct.discount && (
            <p className="text-gray-500 line-through">
              Previous Price: {foodProduct.previousPrice} dh
            </p>
          )}
        </div>
        <p className="text-2xl text-red-600 font-semibold mt-2">
          {totalPrice} dh
        </p>
        <div className="flex items-center justify-between mt-4">
          <motion.button
            onClick={handleDelete}
            className="font-bold bg-red-600 text-white hover:bg-red-700 px-3 py-1 rounded-md focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Delete
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default PanierCard;
