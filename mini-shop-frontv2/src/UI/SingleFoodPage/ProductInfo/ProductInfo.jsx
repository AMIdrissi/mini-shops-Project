import NButton from "../../buttons/NavBarButton";
import GlobalRating from "../starRating/GlobalRating";

function ProductInfo({ product, numOfRatings, rating }) {
  return (
    <div className="mr-[15%] flex flex-col">
      <h1 className="font-customFont text-6xl font-semibold mb-8 mt-6">
        {product.name ? product.name : "PRODUCT NAME"}
      </h1>
      <div>
        <p className="bg-slate-200/40 mb-4 px-4 text-[22px] rounded-xl p-2 inline font-customFont">
          Category : {product.category ? product.category : "----"}
        </p>
      </div>
      <div className="my-4 ">
        <GlobalRating
          rating={rating ? rating : 100}
          numReviewVis={true}
          numReviews={numOfRatings ? numOfRatings : 0}
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
      <div className="ml-[6px]">
        <h1 className="text-2xl font-customFont mr-4 font-semibold">
          Description
        </h1>
        <p className="text-xl my-6 font-customFont mr-10">
          {product.description}
        </p>
      </div>
      <div className="my-10">
        <NButton name={"Order Now"} size={"4xl"} />
      </div>
    </div>
  );
}

export default ProductInfo;
