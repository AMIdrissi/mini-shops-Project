import GlobalRating from "../starRating/GlobalRating";
import UserRatingCard from "./UserRatingCard";

function UserRating() {
  const ratingsList = [20, 40, 60, 80, 100];

  return (
    <div className="mx-44">
      <h1 id="reviews" className="text-4xl font-customFont font-semibold my-7">
        User Ratings
      </h1>
      <div className="">
        <UserRatingCard StarRating={2} RaterName={"someGuy"}/>
        <UserRatingCard StarRating={5} RaterName={"HellNah"}/>
      </div>
    </div>
  );
}

export default UserRating;
