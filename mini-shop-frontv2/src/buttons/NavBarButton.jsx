import { useState } from "react";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import ButtonForMenu from "./ButtonForMenu";

function NButton() {
  return (
    <div className="flex justify-center w-1/2 min-w-[168px]">
      <button className="grow text-[21px] bg-transparent border-[none] px-[1.5em] py-[1em] text-[#232227] relative [transition:0.5s_ease] cursor-pointer flex h-full before:content-[''] before:absolute before:left-[0] before:bottom-[0] before:h-[2px] before:w-[0] before:bg-[#4a4c50] before:[transition:0.5s_ease]  hover:delay-100 hover:before:w-full hover:bg-[#a2a1a6] hover:text-white after:content-[''] after:absolute after:left-[0] after:bottom-[0] after:h-[0] after:w-full after:bg-[#4a4c50] after:[transition:0.4s_ease] after:delay-[400ms] after:text-[aliceblue] items-center justify-center">
        button
      </button>
    </div>
  );
}

export default NButton;
