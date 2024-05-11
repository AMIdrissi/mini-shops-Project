import { useEffect, useRef } from "react";

function Star({ value, size, color }) {
  const starRef = useRef();
  useEffect(() => {
    console.log(starRef.current.checked);
  }, []);
  return (
    <>
      <input
        ref={starRef}
        value={value}
        name="rating"
        id={`star${value}`}
        type="radio"
        required={true}
        className="hidden "
      />
      <label
        className={`float-right cursor-pointer text-red-200 before:content-["\\2605"] ${
          size ? size : "text-4xl"
        }`}
        style={{ textShadow: "1px 1px 3px #000000", color: color }}
        for={`star${value}`}
      ></label>
    </>
  );
}

export default Star;
