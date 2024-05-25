import { useParams } from "react-router";
import FoodCard from "../MenuPage/FoodCard";
import NavbarGeneric from "../Navbar/NavbarGeneric";
import LoginThing from "../buttons/Login";
import NButton from "../buttons/NavBarButton";
import PicsGallery from "./PicsGallery/PicsGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import UserRating from "./UserRatings/UserRarings";
import GlobalRating from "./starRating/GlobalRating";
import StarRating from "./starRating/StarRating";

// not as single as i am , get it get it ? :) :| :( [that was an awful joke]

const cards = [
  {
    id: 1,
    name: "Pizza Family",
    category: "salty",
    price: 70,
    promotion: 20,
    desc: "A classic pizza with a variety of toppings",
    image:
      "https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg",
  },
  {
    id: 2,
    name: "Sushi Deluxe",
    category: "sweet",
    price: 40,
    promotion: 10,
    desc: "A premium sushi set with fresh fish and vegetables",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Vegan-Sushi-500x500.jpg",
  },
  {
    id: 3,
    name: "Tacos Fiesta",
    category: "salty",
    price: 50,
    promotion: 15,
    desc: "A flavorful taco set with a variety of toppings and sides",
    image:
      "https://www.allrecipes.com/thmb/4AbbUJe3vFzftNyAwCXW2nhDbjM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5281437-a5d6b201a7274183b1501b41c04e4b0f.jpg",
  },
  {
    id: 4,
    name: "Burgers Classic",
    category: "salty",
    price: 60,
    promotion: 25,
    desc: "A classic burger with a variety of toppings and condiments",
    image:
      "https://lacuisineensemble.fr/wp-content/uploads/2022/02/recette-burger-maison-500x500.jpg",
  },
  {
    id: 5,
    name: "Salad Fresh",
    category: "sweet",
    price: 30,
    promotion: 5,
    desc: "A fresh salad with a variety of toppings and dressings",
    image:
      "https://www.refreshmyhealth.com/wp-content/uploads/2020/07/how-to-make-a-simple-salad-recipe-vegan-gluten-free-lunch_260-main_img_6804-lrcc.jpg",
  },
  {
    id: 6,
    name: "Wings Spicy",
    category: "salty",
    price: 80,
    promotion: 35,
    desc: "A spicy set of chicken wings with a variety of sauces",
    image:
      "https://savorwithjennifer.com/wp-content/uploads/2022/06/Extra-Crispy-Sweet-and-Spicy-Wings-on-the-Grill-1-2.jpg",
  },
  {
    id: 7,
    name: "Sandwich Club",
    category: "salty",
    price: 45,
    promotion: 10,
    desc: "A club sandwich with turkey, ham, and cheese",
    image:
      "https://tornadoughalli.com/wp-content/uploads/2022/05/CLUB-SANDWICH-RECIPE-3-2.jpg",
  },
  {
    id: 8,
    name: "Fries Golden",
    category: "sweet",
    price: 20,
    promotion: 5,
    desc: "A set of crispy fries with a variety of toppings",
    image:
      "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800",
  },
  {
    id: 9,
    name: "Desserts Creamy",
    category: "sweet",
    price: 90,
    promotion: 45,
    desc: "A set of creamy desserts with a variety of flavors and toppings",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/0001/01/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms.jpg",
  },
  {
    id: 10,
    name: "Soup Hearty",
    category: "salty",
    price: 25,
    promotion: 5,
    desc: "A hearty set of soups with a variety of flavors and toppings",
    image:
      "https://res.cloudinary.com/hksqkdlah/image/upload/4811_sfs-wintervegetablesoup-316239.jpg",
  },
];

function SingleFoodPage() {
  const id = useParams().id;
  console.log(id);
  // this is where the fetch with the api should take place
  const idProd = cards.filter((prod) => Number(prod.id) === Number(id));
  window.scrollTo({ top: 0 });
  return (
    <div>
      <div className="flex h-20 font-customFont font-[500] text-[18px] justify-between items-center bg-[url('https://i.pinimg.com/originals/4a/63/52/4a6352ce2891b42518b8665532b33c70.gif')] bg-center bg-no-repeat bg-cover ">
        <div className="backdrop-blur-2xl bg-white/40 w-full h-full flex justify-end">
          <NavbarGeneric />
        </div>
      </div>
      <div className="grid grid-cols-2 my-10 ml-4 ">
        <div className="flex justify-center items-center">
          <PicsGallery />
        </div>
        <ProductInfo product={idProd[0]} />
      </div>
      <div className="flex justify-center ">
        <StarRating size={"50px"} />
      </div>
      <div className="mx-36 mb-16">
        <h1 className="text-4xl font-customFont font-semibold my-7">
          Recommeded for you
        </h1>
        <div className="flex overflow-y-auto py-4 px-2 mx-[26px] rounded-tr-3xl rounded-tl-3xl items-center">
          {cards.map((card) => (
            <FoodCard card={card} key={card.id} isCategoryVis={true} />
          ))}
        </div>
      </div>
      <UserRating />
    </div>
  );
}

export default SingleFoodPage;
