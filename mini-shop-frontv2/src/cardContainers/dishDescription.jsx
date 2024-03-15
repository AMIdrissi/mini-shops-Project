function DishDescription({ reference, whenInView }) {
  return (
    <div>
      <div className="text-white font-customFont font-bold text-6xl ml-28 my-14 child:m-5">
        <h1
          style={{
            transition: "all 1s ease 0.1s",
            opacity: whenInView ? 1 : 0,
            transform: whenInView ? "translateX(0px)" : "translateX(-60px)",
          }}
        >
          Fresh
        </h1>
        <h1
          style={{
            transition: "all 1s ease 0.3s",
            opacity: whenInView ? 1 : 0,
            transform: whenInView ? "translateX(0px)" : "translateX(-80px)",
          }}
        >
          Authentic
        </h1>
        <h1
          style={{
            transition: "all 1s ease 0.5s",
            opacity: whenInView ? 1 : 0,
            transform: whenInView ? "translateX(0px)" : "translateX(-100px)",
          }}
        >
          Simples
        </h1>
      </div>
      <div
        className="h-1 bg-white ml-28 mr-10 rounded"
        style={{
          transition: "all 1s ease 0.4s",
          width: whenInView ? "100%" : "0%",
        }}
      ></div>
      <div
        className="ml-36 text-white mr-14 overflow-y-scroll"
        style={{
          transition: "all 1s ease 0.7s",
          opacity: whenInView ? 1 : 0,
          transform: whenInView ? "translateX(0px)" : "translateX(-120px)",
        }}
      >
        <p className="text-3xl font-customFont pt-12 leading-[1.35]">
          At our business, we take pride in crafting delectable dishes that
          tantalize the taste buds and warm the soul. Each plate showcases a
          symphony of flavors, meticulously prepared using the freshest
          ingredients.
        </p>
        <p className="text-3xl font-customFont pb-7 pt-5 leading-[1.35]">
          With every meal, we strive to deliver an unforgettable dining
          experience that leaves our customers craving for more.
        </p>
      </div>
    </div>
  );
}

export default DishDescription;
