import React, { useState } from "react";
import NButton from "../buttons/NavBarButton";

function FoodMenu() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Define card data
  const cards = [
    {
      id: 1,
      name: "Pizza Family",
      price: "70dh",
      promotion: "20% off",
      image: "src/UI/icons/pizza.jpg", 
    },
    {
      id: 2,
      name: "Burger",
      price: "50dh",
      promotion: "10% off",
      image: "src/UI/icons/recette-burger-maison.jpg", 
    },
    {
      id: 3,
      name: "Sushi",
      price: "$100",
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif", 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800">Food Menu</h1>
        {/* Example card container */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Example cards */}
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative p-4 rounded-lg shadow-md transition-all duration-300 ${
                hoveredCard === card.id
                  ? "shadow-xl transform scale-105"
                  : "shadow-md transform scale-100"
              }`}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-48 w-48 rounded-full object-cover"
                  style={{
                    boxShadow: hoveredCard === card.id ? "0 0 20px rgba(0, 0, 0, 0.8)" : "none",
                  }}
                />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-2">{card.name}</h2>
                <p className="text-gray-600 mb-2">Price: {card.price}</p>
                <p className="text-green-500 mb-4">Promotion: {card.promotion}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                  Add to Cart
                </button> 
                {/* <NButton name={"Add to cart"}/> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
