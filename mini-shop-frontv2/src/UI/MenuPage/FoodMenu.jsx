import React, { useEffect, useRef, useState } from "react";
import NButton from "../buttons/NavBarButton";
import { delay, filterProps, motion } from "framer-motion";
import FoodCard from "./FoodCard";
import LoginThing from "../buttons/Login";
import ButtonForMenu from "../buttons/ButtonForMenu";
import UserName from "../ProfilePage/userName/UserName";
import TopPart from "../ProfilePage/TopPart";
import InputField from "../Inputs/InputField";
import NavbarGeneric from "../Navbar/NavbarGeneric";

function FoodMenu() {
  // Define card data
  const cards = [
    {
      id: 1,
      name: "Pizza Family",
      category: "salty",
      price: 70,
      promotion: "20% off",
      image: "src/UI/icons/pizza.jpg",
    },
    {
      id: 2,
      name: "Burger",
      category: "salty",
      price: 50,
      promotion: "10% off",
      image: "src/UI/icons/recette-burger-maison.jpg",
    },
    {
      id: 3,
      name: "Sushi",
      category: "salty",
      price: 100,
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 4,
      name: "Sushi",
      category: "salty",
      price: 100,
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 5,
      name: "Sushi",
      category: "salty",
      price: 100,
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 6,
      name: "Sushi",
      category: "salty",
      price: 100,
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 7,
      name: "Sushi",
      category: "salty",
      price: 100,
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 8,
      name: "Sushi",
      category: "salty",
      price: 100,
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
    {
      id: 9,
      name: "Sushi",
      category: "salty",
      price: 100,
      promotion: "Free drink",
      image: "src/UI/icons/sushi.avif",
    },
  ];

  const [fCards, setFCards] = useState(cards);
  const searchRef = useRef();
  const maxPRef = useRef();
  const minPRef = useRef();
  const [priceVal, setPriceVal] = useState({
    min: -1,
    max: Number.MAX_SAFE_INTEGER,
  });
  const [searchQuery, setSearchQuery] = useState({
    query: "",
  });

  const handleSearch = (cardObj, queryObj, priceObj) => {
    if (
      cardObj.name.includes(queryObj.query) &&
      cardObj.price >= priceObj.min &&
      cardObj.price <= priceObj.max
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    searchRef.current.addEventListener("keyup", (e) => {
      const tempSearch = {
        query: e.currentTarget.value ? e.currentTarget.value : "",
      };
      setSearchQuery(tempSearch);
    });
  }, [priceVal]);

  useEffect(() => {
    const numRegEx = /^[0-9]*$/;
    minPRef.current.addEventListener("keyup", (e) => {
      if (numRegEx.test(e.target.value)) {
        setPriceVal({
          max: priceVal.max,
          min: e.currentTarget.value ? parseInt(e.currentTarget.value) : -1,
        });
      } else {
        e.target.value = "";
      }
    });

    maxPRef.current.addEventListener("keyup", (e) => {
      if (numRegEx.test(e.target.value)) {
        setPriceVal({
          min: priceVal.min,
          max: e.currentTarget.value
            ? parseInt(e.currentTarget.value)
            : Number.MAX_SAFE_INTEGER,
        });
      } else {
        e.target.value = "";
      }
    });
  }, []);

  useEffect(() => {
    const filteredCards = cards.filter((card) => {
      return handleSearch(card, searchQuery, priceVal);
    });
    setFCards(filteredCards);
  }, [searchQuery, priceVal]);

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
          <NavbarGeneric/>
        </div>
        <div className="mt-[18%]  scale-125 flex justify-center overflow-y-hidden">
          <UserName userName={"Our Delicacies"} />
        </div>
      </div>
      <div className="min-h-screen backdrop-blur-2xl bg-white/65">
        <div className="bg-white/30 p-6 flex justify-around overflow-x-clip">
          <InputField
            inRef={searchRef}
            placeHolder={"Search"}
            size={"2xl"}
            withLabel={false}
          />
          <InputField
            inRef={minPRef}
            placeHolder={"Min price (in DH)"}
            size={"2xl"}
            withLabel={false}
          />
          <InputField
            inRef={maxPRef}
            placeHolder={"Max price (in DH)"}
            size={"2xl"}
            withLabel={false}
          />
        </div>
        <div className="container mx-auto py-8">
          <h1 className="text-5xl font-semibold text-gray-800 font-customFont mx-4">
            Food Menu
          </h1>
          {/* Example card container */}
          <div className="grid grid-cols-3 gap-x-16 gap-y-4 mt-4">
            {/* Example cards */}
            {fCards.map((card) => (
              <FoodCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
