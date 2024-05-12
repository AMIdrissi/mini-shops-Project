import Star from "./Star";
import StarRating from "./StarRating";

// rating should be in precent
function GlobalRating({
  rating,
  numReviewVis = false,
  hideStarColor,
  numReviews,
}) {
  return (
    <div className="flex">
      <div className="flex h-16 text-clip items-center w-[200px]">
        <div className=" text-clip absolute">
          <Star size={"32px"} color={"red"} />
          <Star size={"32px"} color={"red"} />
          <Star size={"32px"} color={"red"} />
          <Star size={"32px"} color={"red"} />
          <Star size={"32px"} color={"red"} />
          <div
            style={{ width: 100 - rating + "%" }}
            className={` ${
              hideStarColor ? hideStarColor : "bg-white/80"
            } h-12  absolute right-0 top-0`}
          ></div>
        </div>
      </div>
      {numReviewVis && (
        <div className="flex items-center ml-8 text-xl mt-[2px] underline">
          <a href="#reviews">{numReviews} Reviews </a>
        </div>
      )}
    </div>
  );
}

export default GlobalRating;
