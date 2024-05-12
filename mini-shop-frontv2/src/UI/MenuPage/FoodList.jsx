import FoodCard from "./FoodCard";

function FoodList({ Foodcategory , fCards}) {
  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-4 mt-4">
      {/* Example cards */}
      {fCards.map((card) =>
        Foodcategory !== undefined ? (
          card.category === Foodcategory && (
            <FoodCard card={card} key={card.id} />
          )
        ) : (
          <FoodCard card={card} key={card.id} />
        )
      )}
    </div>
  );
}

export default FoodList;
