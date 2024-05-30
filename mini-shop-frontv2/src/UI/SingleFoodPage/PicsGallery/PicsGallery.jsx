import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function PicSquareCrop({ link, maxW_H }) {
  return (
    <div style={{ minWidth: maxW_H }}>
      <img
        src={link}
        alt=""
        className={`object-cover`}
        style={{ width: maxW_H, height: maxW_H }}
      />
    </div>
  );
}

function PicsGallery({ picsLinks, scale }) {
  const [pos, setPos] = useState(0);
  const scaler = scale ? scale : 0.65;
  const [maxW_H, setMaxW_H] = useState(window.innerHeight * scaler);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMaxW_H(window.innerHeight * scaler);
    });
  }, []);

  function handleTranslate(pos) {
    if (picsLinks.length > 0) {
      if (pos < 0) {
        setPos(picsLinks.length - 1);
        return picsLinks.length - 1;
      }
      if (pos > picsLinks.length - 1) {
        setPos(0);
        return 0;
      }
    }
    return pos;
  }
  return (
    <div className="flex flex-col items-center">
      <div
        className={`overflow-hidden flex flex-col justify-evenly items-center rounded-md`}
        style={{ maxWidth: maxW_H }}
      >
        <button
          className="absolute self-end z-[10] bg-slate-800/30 rounded-tl-md rounded-bl-md"
          onClick={() => {
            setPos(pos + 1);
          }}
        >
          <svg
            width="30px"
            height="38px"
            viewBox="0 0 27 24"
            fill="none"
            className="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div>
          <motion.div
            className={`flex rounded-md`}
            style={{
              transform: `translateX(-${handleTranslate(pos) * maxW_H}px)`,
              maxWidth: maxW_H,
            }}
            initial={{ translateX: -pos * maxW_H }}
            animate={{ translateX: -pos * maxW_H }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            {picsLinks.length > 0 ? (
              picsLinks.map((pic) => {
                return <PicSquareCrop link={pic?.url} maxW_H={maxW_H} />;
              })
            ) : (
              <>
                <motion.svg
                  width="400px"
                  height="320px"
                  viewBox="0 0 120.00 120.00"
                  fill="none"
                  className=" object-cover cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect width="120" height="120" fill="#EFF1F3" />{" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.2503 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z"
                      fill="#687787"
                    />{" "}
                  </g>
                </motion.svg>
              </>
            )}
          </motion.div>
        </div>
        <button
          className="absolute self-start z-[10] bg-slate-800/30 rounded-tr-md rounded-br-md"
          onClick={() => {
            setPos(pos - 1);
          }}
        >
          <svg
            width="30px"
            height="38px"
            viewBox="0 0 27 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex">
        {picsLinks.map((pic, index) => {
          return (
            <div
              className={`h-[10px] w-[10px] my-4 mx-2 ${
                pos === index ? "bg-red-600" : "bg-black/40"
              } rounded-full ease-in-out cursor-pointer`}
              onClick={() => {
                setPos(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default PicsGallery;
