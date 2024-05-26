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
import { useLoaderData, useParams } from "react-router";
import produitService from "../../services/ProduitService";

function FoodMenu() {
  // Define card data
  // const cards = [
  //   {
  //     id: 1,
  //     name: "Pizza Family",
  //     image:
  //       "https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Sushi Deluxe",
  //     image:
  //       "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Vegan-Sushi-500x500.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Tacos Fiesta",
  //     image:
  //       "https://www.allrecipes.com/thmb/4AbbUJe3vFzftNyAwCXW2nhDbjM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5281437-a5d6b201a7274183b1501b41c04e4b0f.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Burgers Classic",
  //     image:
  //       "https://lacuisineensemble.fr/wp-content/uploads/2022/02/recette-burger-maison-500x500.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Salad Fresh",
  //     image:
  //       "https://www.refreshmyhealth.com/wp-content/uploads/2020/07/how-to-make-a-simple-salad-recipe-vegan-gluten-free-lunch_260-main_img_6804-lrcc.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Wings Spicy",
  //     image:
  //       "https://savorwithjennifer.com/wp-content/uploads/2022/06/Extra-Crispy-Sweet-and-Spicy-Wings-on-the-Grill-1-2.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Sandwich Club",
  //     image:
  //       "https://tornadoughalli.com/wp-content/uploads/2022/05/CLUB-SANDWICH-RECIPE-3-2.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "Fries Golden",
  //     image:
  //       "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800",
  //   },
  //   {
  //     id: 9,
  //     name: "Desserts Creamy",
  //     image:
  //       "https://www.tasteofhome.com/wp-content/uploads/0001/01/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms.jpg",
  //   },
  //   {
  //     id: 10,
  //     name: "Soup Hearty",
  //     image:
  //       "https://res.cloudinary.com/hksqkdlah/image/upload/4811_sfs-wintervegetablesoup-316239.jpg",
  //   },
  // ];

  const cards = useLoaderData();

  console.log(
    cards.forEach((e) => {
      console.log(e);
    })
  );

  const category = useParams().category;
  const categoryList = [
    /* list of categories for url */
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

  // const fetchFood = async () => {
  //   try {
  //     const produits = await produitService.getAllProduits()
  //     console.log(produits)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchFood()
  // }, [])

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
          <NavbarGeneric isMenuPage />
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
            {fCards.map((card) =>
              category ? (
                card.category === category && (
                  <FoodCard card={card} key={card.id} />
                )
              ) : (
                <FoodCard card={card} key={card.id} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
