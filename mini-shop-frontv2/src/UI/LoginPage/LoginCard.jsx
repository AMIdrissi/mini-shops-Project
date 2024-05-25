import { motion } from "framer-motion";
import { useState } from "react";
import InputField from "../Inputs/InputField";
import NButton from "../buttons/NavBarButton";

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

function LoginCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false); // State to track if it's in register mode

  const handleRegisterModeToggle = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-28 mt-14 mb-10">
      <div className="flex flex-col items-center justify-center">
        {isRegisterMode ? ( // Check if in register mode
          <div className={`flex flex-col items-center justify-center border-4 rounded-tl-xl rounded-tr-xl bg-[#dcd7d7a1]`}>
            <div className="flex flex-col items-center p-3">
              <InputField
                placeHolder={"Name"}
                type={"text"}
                size={"2xl"}
              />
              <InputField
                placeHolder={"Email"}
                type={"email"}
                size={"2xl"}
              />
              <InputField
                placeHolder={"Password"}
                type={"password"}
                size={"2xl"}
              />
              <InputField
                placeHolder={"Phone"}
                type={"tel"}
                size={"2xl"}
              />
              <NButton name={"Register"} size={"2xl"} />
              <NButton
                name={"Back to Login"}
                size={"2xl"}
                onClickFn={handleRegisterModeToggle}
              />
            </div>
          </div>
        ) : (
          <div className={`flex flex-col items-center justify-center border-4 rounded-tl-xl rounded-tr-xl bg-[#dcd7d7a1]`}>
            <div className="flex flex-col items-center p-3">
              <InputField
                placeHolder={"Email"}
                type={"email"}
                size={"2xl"}
              />
              <InputField
                placeHolder={"Password"}
                type={"password"}
                size={"2xl"}
              />
              <NButton name={"Login"} size={"2xl"} />
              <NButton
                name={"Register"}
                size={"2xl"}
                onClickFn={handleRegisterModeToggle}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginCard;
