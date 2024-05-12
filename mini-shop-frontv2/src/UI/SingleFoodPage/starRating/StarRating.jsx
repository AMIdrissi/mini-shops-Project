import { useEffect, useRef } from "react";
import Star from "./Star";
import NButton from "../../buttons/NavBarButton";

const cssStyle = `
#rating form input:checked ~  label svg path,
#rating form label :hover,
#rating form label :hover ~ label{
  fill: red;
  transition: fill 0.3s;
}`;

function StarRating({ size }) {
  return (
    <div>
      <style>
        {/* it's just waaay easier here */}
        {cssStyle}
      </style>
      <div id="rating" className="flex">
        <form action="" method="get">
          <div className="mb-[86px]">
            <Star value={5} size={size} />
            <Star value={4} size={size} />
            <Star value={3} size={size} />
            <Star value={2} size={size} />
            <Star value={1} size={size} />
          </div>
          <div>
            <NButton size={"2xl"} name={"Rate!"} isSubmit />
          </div>
        </form>
      </div>
    </div>
  );
}

export default StarRating;
