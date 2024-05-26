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

function PicsGallery({picsLinks}) {
  const [pos, setPos] = useState(0);
  const [maxW_H, setMaxW_H] = useState(window.innerHeight * 0.65);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMaxW_H(window.innerHeight * 0.65);
    });
  }, []);

  function handleTranslate(pos) {
    if (pos < 0) {
      setPos(picsLinks.length - 1);
      return picsLinks.length - 1;
    }
    if (pos > picsLinks.length - 1) {
      setPos(0);
      return 0;
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
            {picsLinks.map((pic) => {
              return <PicSquareCrop link={pic.url} maxW_H={maxW_H} />;
            })}
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
