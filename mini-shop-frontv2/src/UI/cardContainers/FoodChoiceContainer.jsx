import { useInView } from "framer-motion";
import FoodChoice from "../panel/FoodChoice";
import DessertIcon from "../icons/DessertIcon";
import FastFoodIcon from "../icons/FastFoodIcon";

function FoodChoiceContainer({ reference, whenInView }) {
  return (
    <div className="py-40 mt-[160px] bg-white">
      <div
        ref={reference}
        className="flex justify-around "
        style={{
          opacity: whenInView ? 1 : 0,
          transition: "all 0.9s ease",
          transform: whenInView ? "none" : "translateY(400px)",
        }}
      >
        <FoodChoice
          icon={<TagineIcon />}
          title={"Traditional"}
          desc={"Delecious traditional moroccan cuisine"}
        />
        <FoodChoice
          icon={<FastFoodIcon />}
          title={"Fast Food"}
          desc={"Burgers, Tacos, Pizzas, Sandwitchs "}
        />
        <FoodChoice
          icon={<DessertIcon />}
          title={"Deserts"}
          desc={"A refreshing selction of desserts"}
        />
      </div>
    </div>
  );
}

export default FoodChoiceContainer;
