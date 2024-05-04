import React, { useState } from "react";
import NButton from "../buttons/NavBarButton";
import { delay, motion } from "framer-motion";
import FoodCard from "./FoodCard";
import LoginThing from "../buttons/Login";
import ButtonForMenu from "../buttons/ButtonForMenu";
import UserName from "../ProfilePage/userName/UserName";
import TopPart from "../ProfilePage/TopPart";

function FoodMenu() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
    {
      id: 3,
      name: "Sushi",
      price: "$100",
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 3,
      name: "Sushi",
      price: "$100",
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 3,
      name: "Sushi",
      price: "$100",
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 3,
      name: "Sushi",
      price: "$100",
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 3,
      name: "Sushi",
      price: "$100",
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
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
    <div className="bg-[url('./src/assets/ingredients.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className={"h-[600px] overflow-x-hidden"}>
        <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between items-center">
          <h1></h1>
          <div className="absolute top-0 left-0 bottom-0 w-full z-0 overflow-x-hidden ">
            <TopPart
              imageUrl={
                "https://i.pinimg.com/originals/4a/63/52/4a6352ce2891b42518b8665532b33c70.gif"
              }
              scaler={1.05}
            />
          </div>
          <div className="flex items-center mr-9 my-12 z-[1]">
            <LoginThing />
            <NButton name={"home"} />
            <ButtonForMenu name={"categories"} />
          </div>
        </div>
        <div className="mt-[18%]  scale-125 flex justify-center overflow-y-hidden">
          <UserName userName={"Our Delicacies"} />
        </div>
      </div>
      <div className="min-h-screen backdrop-blur-2xl bg-white/65">
        <div className="container mx-auto px-16 py-8">
          <h1 className="text-5xl font-semibold text-gray-800 font-customFont">
            Food Menu
          </h1>
          {/* Example card container */}
          <div className="grid grid-cols-3 gap-16 mt-8">
            {/* Example cards */}
            {cards.map((card) => (
              <FoodCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
