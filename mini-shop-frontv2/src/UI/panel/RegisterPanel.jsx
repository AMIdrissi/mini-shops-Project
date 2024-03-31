import NButton from "../buttons/NavBarButton";
import { motion } from "framer-motion";

function RegisterPanel({ whenInViewReg }) {
  const inputStyle =
    "bg-red-800 border-[3px] text-white placeholder-white py-1 px-3 font-customFont text-3xl rounded-3xl outline-none focus:pl-7 focus:bg-red-900";
  const inputStyleFunction = (delay, positive) => {
    return {
      transition: "all 0.5s ease " + (delay - 0.1) + "s",
      opacity: whenInViewReg ? 1 : 0,
      transform: whenInViewReg
        ? "translateX(0px)"
        : (positive ? "translateX(100px)" : "translateX(-100px)"),
    };
  };
  return (
    <div className="bg-red-700 flex flex-col justify-center px-52">
      <h1 className="text-white font-customFont text-6xl font-bold my-8">
        Register today
      </h1>
      <div>
        <div className="flex flex-col child:my-[12px] self-center">
          <motion.input
            className={inputStyle}
            type="text"
            required
            placeholder="Full Name"
            style={inputStyleFunction(0.1,true)}
          />
          <motion.input
            className={inputStyle}
            type="text"
            required
            placeholder="CIN"
            style={inputStyleFunction(0.2,false)}
          />
          <motion.input
            className={inputStyle}
            type="email"
            required
            placeholder="Email"
            style={inputStyleFunction(0.3,true)}
          />
          <motion.input
            className={inputStyle}
            type="tel"
            required
            placeholder="Phone number"
            style={inputStyleFunction(0.4,false)}
          />
          <motion.input
            className={inputStyle}
            type="text"
            required
            placeholder="Address"
            style={inputStyleFunction(0.5,true)}
          />
        </div>
        <div
          className="flex justify-center my-4"
          style={{
            transition: "all 0.5s ease " + 0.2 + "s",
            opacity: whenInViewReg ? 1 : 0,
            transform: whenInViewReg ? "translateX(0px)" : "translateY(-100px)",
          }}
        >
          <NButton name={"Register"} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPanel;
