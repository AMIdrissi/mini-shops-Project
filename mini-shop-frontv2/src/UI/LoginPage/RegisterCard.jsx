import InputField from "../Inputs/InputField";
import { motion } from "framer-motion";
import NButton from "../buttons/NavBarButton";
import { useRef, useState } from "react";
import authenticate from "../../services/LoginService";

function RegisterCard() {
  const regNameRef = useRef();
  const regPwdRef = useRef();
  const regEmailRef = useRef();
  const regAddressRef = useRef();
  const [fieldError, setFieldError] = useState({});
  const [isInfoOk, setIsinfoOk] = useState({ er500: false, erOther: false });

  const checkField = () => {
    let error = { errCode: 0, message: "" };

    if (!(regNameRef.current?.value && true)) {
      error.errCode = 1;
      error.message = "UserName field is empty";
    } else if (!(regPwdRef.current?.value && true)) {
      error.errCode = 2;
      error.message = "Password field is empty";
    } else if (!(regEmailRef.current?.value && true)) {
      error.errCode = 3;
      error.message = "Email field is empty";
    } else if (!(regAddressRef.current?.value && true)) {
      error.errCode = 4;
      error.message = "Address field is empty";
    }

    return error;
  };

  return (
    <div className="flex flex-col items-center p-3 pb-0">
      <h1 className="font-customFont text-4xl font-bold p-5 pb-4">
        REGISTER NOW!
      </h1>
      {isInfoOk.er500 && (
        <p className="text-white px-2 py-1 rounded-xl bg-red-600 font-customFont font-bold">
          {" "}
          UserName already exixts{" "}
        </p>
      )}
      {isInfoOk.erOther && (
        <p className="text-white px-2 py-1 rounded-xl bg-red-600 font-customFont font-bold">
          {" "}
          An unknown error has occured{" "}
        </p>
      )}
      {fieldError.message && (
        <p className="text-white px-2 py-1 rounded-xl bg-red-600 font-customFont font-bold">
          {" "}
          {fieldError.message}
        </p>
      )}
      <div className="p-3 pb-0">
        <InputField
          placeHolder={"Name*"}
          type={"text"}
          size={"2xl"}
          inRef={regNameRef}
        />
        <InputField
          placeHolder={"Email*"}
          type={"email"}
          size={"2xl"}
          inRef={regEmailRef}
        />
        <InputField
          placeHolder={"Password*"}
          type={"password"}
          size={"2xl"}
          inRef={regPwdRef}
        />
        <div>
          <h4 className="mx-1 font-customFont text-lg py-2">Address*</h4>
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
              "bg-red-800 border-[3px] text-white placeholder-white py-0 px-3 font-customFont text-" +
              "2xl" +
              " rounded-3xl outline-none focus:pl-5 focus:bg-red-900 w-96"
            }
            type="text"
            required
            placeholder={"Your Address*"}
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

            setFieldError({ ...checkField() });

            checkField().errCode === 0 &&
              authenticate
                .signUp(
                  regNameRef.current.value,
                  regEmailRef.current.value,
                  regPwdRef.current.value,
                  regAddressRef.current.value
                )
                .then((response) => {
                  console.log(response.status);
                })
                .catch((err) => {
                  console.log();
                  if (err.response.status === 500) {
                    setIsinfoOk({
                      ...isInfoOk,
                      er500: true,
                      erOther: false,
                    });
                  } else {
                    setIsinfoOk({
                      ...isInfoOk,
                      erOther: true,
                      er500: false,
                    });
                  }
                  // navigate("/");
                });
          }}
        />
      </div>
    </div>
  );
}

export default RegisterCard;
