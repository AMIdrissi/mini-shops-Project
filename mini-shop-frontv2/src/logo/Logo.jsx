import { useEffect } from "react";

function Logo() {
  return (
    <div className="m-1 ml-3 flex items-center">
      <h1 className="text-5xl font-sans font-bold text-[#232227]">
        <span
          className="bg-[#d4d3cf] font-serif font-bold text-[#4a4c50] px-1.5 m-1 rounded-md border-2
         border-[#4a4c50] shadow-sm hover:shadow-lg hover:shadow-gray-700/80 ease-in-out duration-300
         hover:bg-[#4a4c50] hover:text-[#d4d3cf] hover:border-2 hover:border-[#4a4c50] cursor-pointer"
        >
          MO
        </span>
        shop
      </h1>
    </div>
  );
}

export default Logo;
