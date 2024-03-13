import { useEffect } from "react";

function Logo() {
  return (
    <div className="m-1 ml-3 flex items-center">
      <h1 className="text-5xl font-sans font-bold text-[#28282a]">
        <span
          className="hover:bg-[#d4d3cf] font-serif font-bold hover:text-[#4a4c50] px-1.5 m-1 rounded-md hover:border-[3px]
         hover:border-[#4a4c50] hover:shadow-md shadow-lg shadow-gray-700/80 ease-in-out duration-300
         bg-[#4a4c50] text-[#d4d3cf] border-[3px] border-[#4a4c50] cursor-pointer tracking-tighter"
        >
          アミ
        </span>
        shop
      </h1>
    </div>
  );
}

export default Logo;
