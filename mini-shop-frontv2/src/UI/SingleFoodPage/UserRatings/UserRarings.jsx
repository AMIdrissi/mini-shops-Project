import GlobalRating from "../starRating/GlobalRating";
import UserRatingCard from "./UserRatingCard";

function UserRating({ userRatings }) {
  const ratingsList = [20, 40, 60, 80, 100];

  return (
    <div className="mx-44">
      <h1 id="reviews" className="text-4xl font-customFont font-semibold my-7">
        User Ratings
      </h1>
      <div className="">
        {userRatings ? (
          <div className="flex justify-center">
            <p className="text-2xl p-4 px-6 rounded-xl text-center font-customFont mb-5 bg-slate-100">
              There are no ratings for this product
            </p>
          </div>
        ) : (
          userRatings.map((rating) => {
            <UserRatingCard StarRating={5} RaterName={"HellNah"} />;
          })
        )}
      </div>
    </div>
  );
}

export default UserRating;
