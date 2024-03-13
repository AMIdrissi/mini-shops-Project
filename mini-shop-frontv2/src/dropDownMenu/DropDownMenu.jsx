import { useState } from "react";

function DropDownMenu({ clicked, sectionMap }) {
  const mapX = new Map();
  mapX.set("dd", ["ddxxxxxxxxxxx", "ff", "xx"]);
  return (
    <div
      className={
        clicked
          ? "block absolute ease-in-out duration-300 opacity-100 w-[35%] min-w-[168px]"
          : "hidden  opacity-0 min-w-[168px]"
      }
    >
      <div className="flex justify-center flex-col px-1 pb-1 bg-[#d4d3cf] rounded-b-[5px]">
        {Array.from(mapX.entries()).map((el) => {
          const [key, val] = el;
          return Array.from(val).map((v) => {
            return (
              <button
                className="bg-[#d4d3cf] p-2 border-b-[2px] border-[#a2a1a680] h-16 
                          hover:bg-[#a2a1a6] hover:text-gray-50 hover:border-[#a2a1a6] hover:scale-[1.05] hover:border-b-[2px]
                            ease-in-out duration-[250ms] text-start text-[18px] text-[#232227]"
              >
                {v}
              </button>
            );
          });
        })}
      </div>
    </div>
  );
}

export default DropDownMenu;
