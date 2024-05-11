import Star from "./Star";
import StarRating from "./StarRating";

// rating should be in precent
function GlobalRating({ rating, numReviewVis = false, hideStarColor }) {
  return (
    <div className="flex">
      <div className="flex h-16 text-clip items-center w-[216px]">
        <div className=" text-clip absolute">
          <Star size={"text-5xl"} color={"red"} />
          <Star size={"text-5xl"} color={"red"} />
          <Star size={"text-5xl"} color={"red"} />
          <Star size={"text-5xl"} color={"red"} />
          <Star size={"text-5xl"} color={"red"} />
          <div
            style={{ width: 100 - rating + "%" }}
            className={` ${
              hideStarColor ? hideStarColor : "bg-white/80"
            } h-16  absolute right-0`}
          ></div>
        </div>
      </div>
      {numReviewVis && (
        <div className="flex items-center ml-8 text-xl mt-[2px] underline">
          <a href="#reviews">{"20"} Reviews </a>
        </div>
      )}
    </div>
  );
}

export default GlobalRating;
