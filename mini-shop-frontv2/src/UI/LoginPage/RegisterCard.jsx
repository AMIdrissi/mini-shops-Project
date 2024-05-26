import InputField from "../Inputs/InputField";
import { motion } from "framer-motion";
import NButton from "../buttons/NavBarButton";
import { useRef } from "react";
import authenticate from "../../services/LoginService";

function RegisterCard() {
  const regNameRef = useRef();
  const regPwdRef = useRef();
  const regEmailRef = useRef();
  const regAddressRef = useRef();

  return (
    <div className="flex flex-col items-center p-3">
      <h1 className="font-customFont text-4xl font-bold p-5 pb-4">
        REGISTER NOW!
      </h1>
      <div className="p-3 pb-0">
        <InputField
          placeHolder={"Name"}
          type={"text"}
          size={"2xl"}
          inRef={regNameRef}
        />
        <InputField
          placeHolder={"Email"}
          type={"email"}
          size={"2xl"}
          inRef={regEmailRef}
        />
        <InputField
          placeHolder={"Password"}
          type={"password"}
          size={"2xl"}
          inRef={regPwdRef}
        />
        <div>
          <h4 className="mx-1 font-customFont text-lg py-2">Address</h4>
          <motion.textarea
            ref={regAddressRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            cols="15"
            rows="6"
            className={
              "bg-red-800 border-[3px] text-white placeholder-white py-1 px-3 font-customFont text-" +
              "2xl" +
              " rounded-3xl outline-none focus:pl-5 focus:bg-red-900 w-96"
            }
            type="text"
            required
            placeholder={"your Adress"}
          />
        </div>
        <NButton
          name={"Register"}
          size={"2xl"}
          onClickFn={() => {
            console.log(
              regNameRef.current.value,
              regPwdRef.current.value,
              regEmailRef.current.value,
              regAddressRef.current.value
            );
            authenticate.signUp(
              regNameRef.current.value,
              regEmailRef.current.value,
              regPwdRef.current.value,
              regAddressRef.current.value
            );
          }}
        />
      </div>
    </div>
  );
}

export default RegisterCard;
