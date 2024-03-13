/**
 * @param {string} clicked
 * @param {Map} sectionMap
 * @returns {Component}
 * @description
 * ? returns a simple dropDown menu
 * ? Takes a parameter clicked for the click action to show or hide the menu , and a Map of categories and
 * ? the map should have the categorie and its sub-categories
 */

function DropDownMenu({ clicked, sectionMap }) {
  const mapX = new Map();
  mapX.set("dd", ["ddxxxxxxxxxxx", "ff", "xx"]);
  mapX.set("dx", ["ff", "xx"]);
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
          return (
            <>
              {Array.from(val).map((v) => {
                return (
                  <div className="flex flex-col items-center">
                    <button
                      className="bg-[#d4d3cf] p-2  h-16  
                            hover:bg-[#a2a1a6] hover: rounded hover:text-gray-50 hover:border-[#a2a1a6] hover:scale-[1.05] hover:border-b-[2px]
                              ease-in-out duration-[250ms] text-start text-[18px] text-[#232227] w-full"
                    >
                      {v}
                    </button>
                    <div className="w-[90%] h-[1px] rounded-sm bg-[#a2a1a639]"></div>
                  </div>
                );
              })}
              <div className="w-full h-[4px] rounded-md bg-[#a2a1a6]"></div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DropDownMenu;
