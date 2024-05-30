import { useEffect, useState } from "react";
import { useRef } from "react";
import { useLoaderData, useParams } from "react-router";
import InputField from "../Inputs/InputField";
import UserName from "../ProfilePage/userName/UserName";
import TopPart from "../ProfilePage/TopPart";
import FoodCard from "../MenuPage/FoodCard";
import AdminMangerFoodCard from "./AdminFoodCard/AdminMangerFoodCard";
import SideBarModCard from "./AdminFoodCard/SideBarModCard";
import { motion } from "framer-motion";

function ProductManagerPage() {
  // animation
  const foodContainerAn = {
    initS: { scale: 0 },
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      borderColor: "rgb(34 ,197 ,94) ",
      transition: {
        duration: 0,
      },
    },
  };

  // Define card data
  const cards = useLoaderData();
  const category = useParams().category;
  const [fCards, setFCards] = useState(cards);
  const [creatorMod, setCreatorMod] = useState(false);
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
  const [singleCard, setSingleCard] = useState(null);
  const handleSearch = (cardObj, queryObj, priceObj) => {
    if (
      cardObj.name
        .toLocaleLowerCase()
        .includes(queryObj.query.toLocaleLowerCase()) &&
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
            <div className="translate-y-[-100px]">
              <TopPart imageUrl={"../src/assets/managerBG.png"} scaler={1.05} />
            </div>
          </div>
        </div>
        <div className="mt-[16%]  scale-125 flex justify-center overflow-y-hidden">
          <UserName userName={"Products"} color={"#af0500"} />
        </div>
      </div>
      <div className="min-h-screen backdrop-blur-2xl bg-white/65">
        <div className="">
          <h1 className="text-5xl font-semibold text-gray-800 font-customFont mx-4 text-center my-6 pt-5">
            Product Manager
          </h1>
          <div className="bg-white/30 p-10 flex justify-around overflow-x-clip">
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
          {/* Example card container */}
          <div className="flex">
            <div className="px-1 w-[34%]">
              <div className="bg-white/30 p-6 sticky left-0 top-0 rounded-xl">
                <SideBarModCard
                  product={singleCard}
                  creatorMod={creatorMod}
                  setCreatorMod={setCreatorMod}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-4 flex-grow">
              <motion.div
                className={`bg-white/80 relative p-2  rounded-2xl shadow-xl shadow-red-700/25 transition-all duration-300 border-2 border-white font-customFont min-w-[270px] mx-5 my-4`}
                initial="initS"
                whileHover="hover"
                animate="rest"
                variants={foodContainerAn}
                style={
                  creatorMod && {
                    fontSize: "100px",
                    borderColor: "rgb(34 ,197 ,94)",
                  }
                }
              >
                <button
                  className="bg-green-500 w-full h-full rounded-xl text-6xl text-white flex items-center justify-center  flex-col"
                  onClick={() => {
                    setSingleCard(null);
                    setCreatorMod(true);
                  }}
                >
                  new product <span className="text-9xl">+</span>
                </button>
              </motion.div>

              {fCards.map((card) =>
                category ? (
                  card.category === category && (
                    <AdminMangerFoodCard
                      card={card}
                      key={card.id}
                      setCard={setSingleCard}
                      creatorMod={creatorMod}
                      setCreatorMod={setCreatorMod}
                    />
                  )
                ) : (
                  <AdminMangerFoodCard
                    card={card}
                    key={card.id}
                    setCard={setSingleCard}
                    creatorMod={creatorMod}
                    setCreatorMod={setCreatorMod}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManagerPage;
