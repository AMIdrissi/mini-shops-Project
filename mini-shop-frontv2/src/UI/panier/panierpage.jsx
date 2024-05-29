import React, { useEffect, useState } from "react";
import NavbarGeneric from "../Navbar/NavbarGeneric"; // Import NavbarGeneric
import PanierCard from "./PanierCard"; // Import PanierCard
import cartService from "../../services/CartService";
import { motion } from "framer-motion";

function PanierPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    cartService.getCart().then((cart) => setItems(cart));
  }, [items.length]);
  console.log(items);
  return (
    <div
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex flex-col"
    >
      <div className="w-full h-full flex justify-end">
        <NavbarGeneric />
      </div>
      <div className="mt-20 h-screen flex-1 w-full">
        {" "}
        {/* Scrollable container with custom scrollbar */}
        <div className="space-y-8 overflow-y-scroll scrollbar-custom max-h-[650px]">
          {" "}
          {/* Spacing between cards */}
          {items.length > 0 ? (
            items.map((item) => {
              return <PanierCard item={item} />;
            })
          ) : (
            <div>
              <div className="flex justify-center">
                <h1 className="bg-slate-100/50 p-4 text-4xl font-customFont rounded-3xl px-6 align-middle">
                  Your cart is empty
                </h1>
              </div>
              <div className="my-6 overflow-x-hidden min-h-[450px] px-10 mt-20">
                <motion.svg
                  width="300px"
                  height="300px"
                  viewBox="-2.5 0 79.999 79.999"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-2"
                  animate={{
                    translateX: ["-140%", "800%"],
                    rotate: 860,
                  }}
                  transition={{
                    delay: 1,
                    duration: 6,
                    ease: "easeInOut",
                    type: "tween",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <g
                    id="_12-Desert"
                    data-name="12-Desert"
                    transform="translate(-472.5 -352.5)"
                  >
                    <g id="Group_141" data-name="Group 141">
                      <g id="Group_129" data-name="Group 129">
                        <path
                          id="Path_152"
                          data-name="Path 152"
                          d="M515,427.5a32.5,32.5,0,0,1,0-65,2.5,2.5,0,0,1,0,5A27.5,27.5,0,1,0,542.5,395a2.5,2.5,0,0,1,5,0A32.536,32.536,0,0,1,515,427.5Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_130" data-name="Group 130">
                        <path
                          id="Path_153"
                          data-name="Path 153"
                          d="M502.5,412.5a30,30,0,0,1,0-60,2.5,2.5,0,0,1,0,5,25,25,0,1,0,25,25V370a2.5,2.5,0,0,1,5,0v12.5A30.034,30.034,0,0,1,502.5,412.5Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_131" data-name="Group 131">
                        <path
                          id="Path_154"
                          data-name="Path 154"
                          d="M490,432.5a2.494,2.494,0,0,1-1.768-.732,16.662,16.662,0,0,1,0-23.535,2.5,2.5,0,0,1,3.536,3.536,11.64,11.64,0,0,0,0,16.463A2.5,2.5,0,0,1,490,432.5Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_132" data-name="Group 132">
                        <path
                          id="Path_155"
                          data-name="Path 155"
                          d="M530,397.5A17.521,17.521,0,0,1,512.5,380a2.5,2.5,0,0,1,5,0,12.5,12.5,0,0,0,25,0,2.5,2.5,0,0,1,5,0A17.521,17.521,0,0,1,530,397.5Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_133" data-name="Group 133">
                        <path
                          id="Path_156"
                          data-name="Path 156"
                          d="M500,395a17.5,17.5,0,0,1-13.218-28.969,2.5,2.5,0,0,1,3.776,3.278A12.5,12.5,0,0,0,500,390a2.5,2.5,0,0,1,0,5Z"
                          fill="#fd8f50"
                        />
                      </g>
                      <g id="Group_134" data-name="Group 134">
                        <path
                          id="Path_157"
                          data-name="Path 157"
                          d="M515,427.5a2.5,2.5,0,0,1-2.5-2.5A17.521,17.521,0,0,1,530,407.5a2.5,2.5,0,0,1,0,5A12.514,12.514,0,0,0,517.5,425,2.5,2.5,0,0,1,515,427.5Z"
                          fill="#fd8f50"
                        />
                      </g>
                      <g id="Group_135" data-name="Group 135">
                        <path
                          id="Path_158"
                          data-name="Path 158"
                          d="M530,372.5a2.5,2.5,0,0,1-2.5-2.5A12.514,12.514,0,0,1,540,357.5a2.5,2.5,0,0,1,0,5,7.508,7.508,0,0,0-7.5,7.5A2.5,2.5,0,0,1,530,372.5Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_136" data-name="Group 136">
                        <path
                          id="Path_159"
                          data-name="Path 159"
                          d="M515,367.5a2.5,2.5,0,0,1,0-5,7.508,7.508,0,0,0,7.5-7.5,2.5,2.5,0,0,1,5,0A12.514,12.514,0,0,1,515,367.5Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_137" data-name="Group 137">
                        <path
                          id="Path_160"
                          data-name="Path 160"
                          d="M510,357.5h-7.5a2.5,2.5,0,0,1,0-5H510a2.5,2.5,0,0,1,0,5Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_138" data-name="Group 138">
                        <path
                          id="Path_161"
                          data-name="Path 161"
                          d="M514.274,409.856a2.494,2.494,0,0,1-1.966-.954A22.269,22.269,0,0,1,507.5,395a2.5,2.5,0,0,1,5,0,17.315,17.315,0,0,0,3.737,10.81,2.5,2.5,0,0,1-1.963,4.046Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_139" data-name="Group 139">
                        <path
                          id="Path_162"
                          data-name="Path 162"
                          d="M503.213,383.661a2.488,2.488,0,0,1-1.473-.481,22.453,22.453,0,0,1-7.958-10.675,2.5,2.5,0,0,1,4.715-1.666,17.458,17.458,0,0,0,6.192,8.3,2.5,2.5,0,0,1-1.476,4.518Z"
                          fill="#c74a2e"
                        />
                      </g>
                      <g id="Group_140" data-name="Group 140">
                        <path
                          id="Path_163"
                          data-name="Path 163"
                          d="M500,412.5a47.407,47.407,0,0,1-24.8-6.981,2.5,2.5,0,0,1,2.613-4.262A42.418,42.418,0,0,0,500,407.5a2.5,2.5,0,0,1,0,5Z"
                          fill="#c74a2e"
                        />
                      </g>
                    </g>
                  </g>
                </motion.svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PanierPage;
