// i didn't know what to name it

import NButton from "../buttons/NavBarButton";

function FID({ whenInView }) {
  return (
    <div
      className="flex justify-start flex-col items-center child:scale-125 mt-6"
      style={{
        transition: "all 1s ease 0.7s",
        opacity: whenInView ? 1 : 0,
        transform: whenInView ? "translateX(0px)" : "translateY(-60px)",
      }}
    >
      <h1 className="text-white font-customFont font-bold text-2xl mb-8">
        Check out our menu here{" "}
      </h1>
      <NButton name={"Menu"} />
    </div>
  );
}

export default FID;
