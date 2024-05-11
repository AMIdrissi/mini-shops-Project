import NavBar_ from "../MainPage/NavBar/NavBar";
import PicsGallery from "./PicsGallery/PicsGallery";

// not as single as i am , get it get it ? :) :| :( [that was an awful joke]
function SingleFoodPage() {
  return (
    <>
        <NavBar_/>
      <div className="grid grid-cols-2">
        <PicsGallery />
        <div>
          <h1 className="font-customFont text-3xl font-semibold">PRODUCT NAME</h1>
        </div>
      </div>
    </>
  );
}

export default SingleFoodPage;
