import React, { useState } from "react";
import { motion } from "framer-motion";

const foodProduct = {
  name: "Pizza",
  description:
    "Savor the exquisite taste of our artisanal pizza, crafted with the finest ingredients and bursting with flavor. Each bite offers a mouthwatering combination of crispy crust, tangy sauce, gooey cheese, and savory toppings.",
  price: 75,
  previousPrice: 90,
  image: "https://img.cuisineaz.com/1024x768/2018/02/28/i136025-pizza-legere.jpeg",
};

function PanierCard() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    setQuantity(0);
  };

  const totalPrice = foodProduct.price * quantity;

  return (
    <div className="flex items-center justify-center my-4">
      <div
        className="bg-gray-100 bg-opacity-80 rounded-lg p-4 shadow-md mx-auto"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <div className="flex items-center justify-between">
          <img
            src={foodProduct.image}
            alt={foodProduct.name}
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
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
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500 line-through">Previous Price: {foodProduct.previousPrice} dh</p>
        </div>
        <p className="text-2xl text-red-600 font-semibold mt-2">{totalPrice} dh</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg"
            >
              -
            </button>
            <span className="bg-gray-200 px-3 py-1">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg"
            >
              +
            </button>
          </div>
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
