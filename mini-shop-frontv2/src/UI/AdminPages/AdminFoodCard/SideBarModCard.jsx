import { useEffect, useRef, useState } from "react";
import InputField from "../../Inputs/InputField";
import PicsGallery from "../../SingleFoodPage/PicsGallery/PicsGallery";
import { motion } from "framer-motion";
import produitService from "../../../services/ProduitService";

function SideBarModCard({ product, creatorMod, setCreatorMod }) {
  const [showUrlInput, setShowUrlInput] = useState(false);
  // this is a lot of refs bruh
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const discountRef = useRef();
  const brandRef = useRef();
  const categoryRef = useRef();
  const descRef = useRef();
  const [images, setImages] = useState([]);

  useEffect(() => {
    idRef.current.value = product?.id ? product?.id : "";
    nameRef.current.value = product?.name ? product?.name : "";
    priceRef.current.value = product?.price ? product?.price : "";
    quantityRef.current.value = product?.quantity ? product?.quantity : "";
    discountRef.current.value = product?.discount ? product?.discount : "";
    brandRef.current.value = product?.brand ? product?.brand : "";
    categoryRef.current.value = product?.category ? product?.category : "";
    descRef.current.value = product?.description ? product?.description : "";
    setImages(product?.images ? product?.images : []);
  }, [product]);

  return (
    <div className="my-5">
      <input type="hidden" ref={idRef} />
      <div className="flex items-center justify-center">
        {images.length > 0
          ? !showUrlInput && (
              <motion.button
                className={`bg-gray-400 text-white px-[14px] py-[3px] font-bold font-customFont text-3xl rounded-xl mb-10 mx-3 flex items-center `}
                whileHover={{
                  boxShadow: "0px 0px 10px rgb(126 ,133, 145)",
                  backgroundColor: "rgb(126 ,133, 145)",
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0,
                  duration: 0.2,
                  type: "tween",
                  damping: 20,
                }}
              >
                -
              </motion.button>
            )
          : console.log("aaaaaaaaaaaaaaaaa")}
        {console.log(images)}
        <PicsGallery scale={0.3} picsLinks={images} />
        {images.length > 0 || creatorMod ? (
          !showUrlInput ? (
            <motion.button
              className={`bg-gray-400 text-white px-[11px] py-[2px] font-bold font-customFont text-3xl rounded-xl mx-3 flex items-center `}
              whileHover={{
                boxShadow: "0px 0px 10px rgb(126 ,133, 145)",
                backgroundColor: "rgb(126 ,133, 145)",
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.95,
              }}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0,
                duration: 0.2,
                type: "tween",
                damping: 20,
              }}
              onClick={() => {
                setShowUrlInput(true);
              }}
            >
              +
            </motion.button>
          ) : (
            <div className="pl-4">
              <motion.textarea
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                cols="15"
                rows="4"
                className={
                  "bg-red-800 border-[3px] text-white placeholder-white py-1 px-3 font-customFont text-" +
                  "2xl" +
                  " rounded-3xl outline-none focus:pl-5 focus:bg-red-900"
                }
                type="text"
                required
                placeholder={"Image URL"}
              />
              <div className="flex justify-center my-1">
                <motion.button
                  className={`bg-red-800 text-white px-4 py-2 font-customFont text-2xl rounded-3xl mx-3 flex items-center `}
                  whileHover={{
                    boxShadow: "0px 0px 10px rgb(185 ,28 ,28)",
                    backgroundColor: "rgb(220 ,38 ,38)",
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  initial={{ translateY: -100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    duration: 0.2,
                    type: "tween",
                    damping: 20,
                  }}
                  onClick={() => {
                    setShowUrlInput(false);
                  }}
                >
                  <span className="font-extrabold">{" X "}</span>
                </motion.button>
                <motion.button
                  className={`bg-green-600 text-white px-[13px] py-2 font-customFont text-2xl rounded-full mx-3 flex items-center `}
                  whileHover={{
                    boxShadow: "0px 0px 10px rgb(185 ,28 ,28)",
                    backgroundColor: "rgb(220 ,38 ,38)",
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  initial={{ translateY: -100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    duration: 0.2,
                    type: "tween",
                    damping: 20,
                  }}
                  onClick={() => {
                    setShowUrlInput(false);
                  }}
                >
                  <span className="font-extrabold text-3xl px-1">{" + "}</span>
                </motion.button>
              </div>
            </div>
          )
        ) : (
          console.log("hell")
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="p-1 grid grid-cols-3">
          <h1>{"Name"}</h1>
          <InputField
            inRef={nameRef}
            placeHolder={"Name"}
            size={"2xl"}
            withLabel={false}
          />
          <h1></h1>
        </div>
        <div className="p-1 grid grid-cols-3">
          <h1>{"Price"}</h1>
          <InputField
            inRef={priceRef}
            placeHolder={"Price"}
            size={"2xl"}
            withLabel={false}
          />
          <h1></h1>
        </div>
        <div className="p-1 grid grid-cols-3">
          <h1>{"Quatity"}</h1>
          <InputField
            inRef={quantityRef}
            placeHolder={"Quatity"}
            size={"2xl"}
            withLabel={false}
          />
          <h1></h1>
        </div>
        <div className="p-1 grid grid-cols-3">
          <h1>{"Discount%"}</h1>
          <InputField
            inRef={discountRef}
            placeHolder={"Discount%"}
            size={"2xl"}
            withLabel={false}
          />
          <h1></h1>
        </div>
        <div className="p-1 grid grid-cols-3">
          <h1>{"Brand"}</h1>
          <InputField
            inRef={brandRef}
            placeHolder={"Brand"}
            size={"2xl"}
            withLabel={false}
          />
          <h1></h1>
        </div>
        <div className="p-1 grid grid-cols-3">
          <h1>{"Category"}</h1>
          <InputField
            inRef={categoryRef}
            placeHolder={"Category"}
            size={"2xl"}
            withLabel={false}
          />
          <h1></h1>
        </div>
        <div className="p-1 grid grid-cols-3">
          <h1>{"Description"}</h1>
          <motion.textarea
            ref={descRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            cols="25"
            rows="5"
            className={
              "bg-red-800 border-[3px] text-white placeholder-white py-1 px-3 font-customFont text-" +
              "2xl" +
              " rounded-3xl outline-none focus:pl-5 focus:bg-red-900 w-96"
            }
            type="text"
            required
            placeholder={"Description"}
          />
        </div>
      </div>
      {images.length > 0 ||
        (creatorMod && (
          <div className="flex justify-around my-2">
            <motion.button
              className={`bg-red-800 text-white px-6 py-2 font-customFont text-2xl rounded-3xl m-2 flex items-center `}
              whileHover={{
                boxShadow: "0px 0px 10px rgb(185 ,28 ,28)",
                backgroundColor: "rgb(220 ,38 ,38)",
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0,
                duration: 0.2,
                type: "tween",
                damping: 20,
              }}
              onClick={() => {
                creatorMod && setCreatorMod(false);
              }}
            >
              Cancel{" "}
              <span className="pl-2 font-extrabold text-3xl">{" X "}</span>
            </motion.button>
            <motion.button
              className={`bg-green-800 text-white px-6 py-2 font-customFont text-2xl rounded-3xl m-2 flex items-center `}
              whileHover={{
                boxShadow: "0px 0px 10px rgb(22 ,163 ,74)",
                backgroundColor: "rgb(22 ,163 ,74)",
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0,
                duration: 0.2,
                type: "tween",
                damping: 20,
              }}
              onClick={() => {
                creatorMod
                  ? produitService
                      .addProduct(
                        nameRef.current.value,
                        categoryRef.current.value,
                        priceRef.current.value,
                        brandRef.current.value,
                        descRef.current.value,
                        quantityRef.current.value
                      )
                      .then((response) => {
                        console.log(response.status);
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                  : produitService
                      .updateProduct(
                        idRef.current.value,
                        nameRef.current.value,
                        categoryRef.current.value,
                        priceRef.current.value,
                        brandRef.current.value,
                        descRef.current.value,
                        quantityRef.current.value
                      )
                      .then((response) => {
                        console.log(response.status);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
              }}
            >
              {creatorMod ? "Add" : "Confirme"}
              <span className="pl-2 font-extrabold text-3xl">{" ✔ "}</span>
            </motion.button>
          </div>
        ))}
    </div>
  );
}

export default SideBarModCard;
