import FoodChoice from "../cards/foodChoice";
import DessertIcon from "../icons/DessertIcon";
import FastFoodIcon from "../icons/fastFoodIcon";
import TagineIcon from "../icons/tajineIcon";

function FoodChoiceContainer() {
  return (
    <div className="flex justify-around py-24">
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
  );
}

export default FoodChoiceContainer;
