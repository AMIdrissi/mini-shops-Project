/**
 * @param {string} name
 * @param {Map} categorieMap
 * @returns {Component}
 * @description
 * ? returns a button + icon with styling and a hidden dropDown menu triggered by click action
 * ? Takes a parameter name for the button name , and a Map of categories to pass down to the menu component
 */

import { Component, useEffect, useRef, useState } from "react";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import ExpandDown from "../icons/ExpandDown";

function ButtonForMenu({ name, categorieMap }) {
  const [clicked, setClicked] = useState(false);
  const MenuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (MenuRef.current && !MenuRef.current.contains(e.target)) {
      setClicked(false);
    }
  };

  return (
    <div ref={MenuRef} className="w-1/2">
      <div
        onClick={() => {
          setClicked(!clicked);
        }}
        onKeyDown={(e) => {
          if (e.key == "Escape") setClicked(false);
        }}
        className={
          clicked
            ? "text-[21px] border-[none] px-[1.5em] py-[1em] uppercase relative [transition:0.5s_ease] cursor-pointer h-full before:content-[''] before:absolute before:left-[0] before:bottom-[0] before:h-[2px] before:bg-[#4a4c50] before:[transition:0.5s_ease]  hover:delay-100 hover:before:w-full hover:bg-[#a2a1a6] hover:text-white after:content-[''] after:absolute after:left-[0] after:bottom-[0] after:h-[0] after:w-full after:bg-[#4a4c50] after:[transition:0.4s_ease] after:delay-[400ms] after:text-[aliceblue] text-white before:w-full flex items-center justify-center bg-[#a2a1a7]"
            : "text-[21px] bg-transparent border-[none] px-[1.5em] py-[1em] text-[#232227] uppercase relative [transition:0.5s_ease] cursor-pointer h-full before:content-[''] before:absolute before:left-[0] before:bottom-[0] before:h-[2px] before:w-[0] before:bg-[#4a4c50] before:[transition:0.5s_ease]  hover:delay-100 hover:before:w-full hover:bg-[#a2a1a6] hover:text-white after:content-[''] after:absolute after:left-[0] after:bottom-[0] after:h-[0] after:w-full after:bg-[#4a4c50] after:[transition:0.4s_ease] after:delay-[400ms] after:text-[aliceblue] flex items-center hover:fill-white justify-center"
        }
      >
        <button className="px-[6px]">{name}</button>
        <ExpandDown clicked={clicked} />
      </div>
      <DropDownMenu clicked={clicked} sectionMap={categorieMap} />
    </div>
  );
}

export default ButtonForMenu;
