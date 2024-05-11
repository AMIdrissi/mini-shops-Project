import NButton from "../../buttons/NavBarButton";
import GlobalRating from "../starRating/GlobalRating";

function ProductInfo() {
  return (
    <div className="mr-[15%] flex flex-col">
      <h1 className="font-customFont text-6xl font-semibold mb-8 mt-6">
        PRODUCT NAME
      </h1>
      <div>
        <p className="bg-slate-200/40 mb-4 px-4 text-[22px] rounded-xl p-2 inline font-customFont">
          Category : {"hell"}
        </p>
      </div>
      <div className="my-6">
        <GlobalRating rating={60} numReviewVis={true} />
      </div>
      <div>
        <h1 className="text-2xl font-customFont mr-4 font-semibold">
          Description
        </h1>
        <p className="text-xl my-6 font-customFont mr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at
          magni suscipit autem molestias, nihil commodi delectus perferendis,
          quis tenetur officia, accusamus ipsam illum quos minima a natus
          doloribus. Illo? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Possimus at magni suscipit autem molestias, nihil commodi
          delectus perferendis, quis tenetur officia, accusamus ipsam illum quos
          minima a natus doloribus. Illo? Lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="my-10">
        <NButton name={"Order Now"} size={"4xl"} />
      </div>
    </div>
  );
}

export default ProductInfo
