import { useState } from "react";
import NButton from "../../buttons/NavBarButton";
import GlobalRating from "../starRating/GlobalRating";
import cartService from "../../../services/CartService";

function ProductInfo({ addToCartRef, product, numOfRatings, rating }) {
  const [quantity, setQuantity] = useState(1);
  console.log(product);
  const handleIncrease = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="mr-[15%] flex flex-col">
      <h1 className="font-customFont text-6xl font-semibold mb-8 mt-6">
        {product.name ? product.name : "PRODUCT NAME"}
      </h1>
      <div>
        <p className="bg-slate-200/40 mr-2 mb-4 px-4 text-[22px] rounded-xl p-2 inline font-customFont">
          Category : {product.category ? product.category : "----"}
        </p>
        <p className="bg-slate-200/40 ml-2 px-4 text-[22px] rounded-xl p-2 inline font-customFont">
          Brand : {product.brand ? product.brand : "----"}
        </p>
      </div>
      <div className="my-4 ">
        <GlobalRating
          rating={rating ? rating : 0}
          numReviewVis={true}
          numReviews={product.notations.length}
        />
      </div>
      <div className=" mb-4 font-customFont text-3xl font-bold ml-[6px] rounded-lg ">
        {product.promotion ? (
          <div className="flex items-baseline">
            <span className="text-black mr-1">Price : </span>
            <p className="text-slate-300/80 line-through decoration-4 decoration-slate-300 mx-1">
              {product.price}DH
            </p>
            <p className="text-green-500 mx-1">
              {product.price * (1 - product.promotion / 100)}DH
            </p>
            <p className="text-slate-300/80 mx-1 text-xs">
              ({product.promotion}%off)
            </p>
          </div>
        ) : (
          <p className="text-green-500">
            <span className="text-black">Price : </span>
            {product.price}DH
          </p>
        )}
      </div>
      <div className="flex items-center">
        <div className="ml-[6px] flex items-center">
          <h1 className="text-3xl font-customFont mr-4 font-semibold">
            Quantity :
          </h1>
        </div>
        <div className="flex items-center mt-[5px]">
          <button
            onClick={handleDecrease}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg"
          >
            -
          </button>
          <span className="bg-gray-200 px-3 py-1">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg"
          >
            +
          </button>
        </div>
      </div>
      <div className="ml-[6px] mt-5">
        <h1 className="text-3xl font-customFont mr-4 font-semibold">
          Description
        </h1>
        <p className="text-2xl text-center my-6 font-customFont mr-10">
          {product.description}
        </p>
      </div>
      <div className="my-10">
        <NButton
          name={"Add to cart"}
          size={"4xl"}
          xref={addToCartRef}
          onClickFn={() => {
            cartService.addToCart(product.id, quantity);
            cartService.getCart().then((cart) => cart.length);
          }}
        />
      </div>
    </div>
  );
}

export default ProductInfo;
