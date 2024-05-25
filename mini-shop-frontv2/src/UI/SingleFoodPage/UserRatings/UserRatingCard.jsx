import GlobalRating from "../starRating/GlobalRating";

function UserRatingCard({ StarRating, RaterName }) {
  return (
    <div className="flex items-center justify-between border-4 p-3 px-10 border-red-600 rounded-xl bg-[#e9e4e4] my-6">
      <p className="text-3xl font-customFont">By : {RaterName}</p>
      <GlobalRating rating={StarRating * 20} hideStarColor={"bg-[#e9e4e4cc]"} />
    </div>
  );
}

export default UserRatingCard;
