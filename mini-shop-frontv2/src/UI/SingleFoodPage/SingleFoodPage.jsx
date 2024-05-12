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
    promotion: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
    image: "src/UI/icons/pizza.jpg",
  },
  {
    id: 4,
    name: "Pizza Family",
    category: "salty",
    price: 70,
    promotion: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
    image: "src/UI/icons/pizza.jpg",
  },
  {
    id: 2,
    name: "Burger",
    category: "salty",
    price: 50,
    promotion: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
    image: "src/UI/icons/recette-burger-maison.jpg",
  },
  {
    id: 3,
    name: "Sushi",
    category: "salty",
    price: 100,
    promotion: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
    image: "src/UI/icons/sushi.avif",
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
