import { motion, transform } from "framer-motion";

const inputStyle = (textSize) => {
  return (
    "bg-red-800 border-[3px] text-white placeholder-white py-1 px-3 font-customFont text-" +
    textSize +
    " rounded-3xl outline-none focus:pl-5 focus:bg-red-900 w-96"
  );
};

const inputStyleFunction = (delay, positive) => {
  return {
    transition: "all 0.5s ease " + (delay - 0.1) + "s",
  };
};

export default function InputField({name, placeHolder, value, type, style, size , inRef , withLabel=true }) {
  return (
    <div>
      {withLabel ? <h4 className="mx-1 my-1 font-customFont text-lg">{placeHolder}</h4> : ""}
      <motion.input
      name={name}
        ref={inRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={style ? style : inputStyle(size)}
        type={type}
        required
        placeholder={placeHolder}
        style={inputStyleFunction(0, false)}
      />
    </div>
  );
}
