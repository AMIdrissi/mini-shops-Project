import { motion } from "framer-motion";
import { useRef, useState } from "react";
import InputField from "../Inputs/InputField";
import NButton from "../buttons/NavBarButton";
import { Form, Navigate, redirect, useNavigate } from "react-router-dom";
import authenticate from "../../services/LoginService";
import RegisterCard from "./RegisterCard";
import Cookies from "js-cookie";

const inputStyle = (textSize) => {
  return (
    "bg-red-800 border-[3px] text-white placeholder-white py-1 px-3 font-customFont text-" +
    textSize +
    " rounded-3xl outline-none focus:pl-5 focus:bg-red-900 w-96"
  );
};

function LoginCard() {
  const [isInfoOk, setIsinfoOk] = useState({ er400: false, erOther: false });
  const [isRegisterMode, setIsRegisterMode] = useState(false); // State to track if it's in register mode
  const navigate = useNavigate();
  const [fieldError, setFieldError] = useState({});

  const handleRegisterModeToggle = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  const loginNameRef = useRef();
  const loginPwdRef = useRef();
  //-------------------------------
  const checkField = () => {
    let error = { errCode: 0, message: "" };

    if (!(loginNameRef.current.value && true)) {
      error.errCode = 1;
      error.message = "UserName field is empty";
    } else if (!(loginPwdRef.current.value && true)) {
      error.errCode = 2;
      error.message = "Password field is empty";
    }

    return error;
  };

  return (
    <div className="flex flex-col items-center justify-center mx-28 mt-14 mb-10">
      <div className="flex flex-col items-center justify-center">
        {isRegisterMode ? ( // Check if in register mode
          <div
            className={`flex flex-col items-center justify-center border-4 rounded-xl bg-[#f0eeeea1]`}
          >
            <RegisterCard />
            <div className="mb-2">
              <NButton
                name={"Back to Login"}
                size={"2xl"}
                onClickFn={handleRegisterModeToggle}
              />
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-center border-4 rounded-xl rounded-tr-xl bg-[#f0eeeea1]`}
          >
            <div className="flex flex-col items-center p-3">
              <h1 className="font-customFont text-4xl font-bold p-5 pb-4">
                WELCOME!
              </h1>
              {isInfoOk.er400 && (
                <p className="text-white px-2 py-1 rounded-xl bg-red-600 font-customFont font-bold">
                  {" "}
                  invalid UserName or Password{" "}
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
              <div className="p-3">
                <InputField
                  name={"name"}
                  placeHolder={"Name*"}
                  type={"text"}
                  size={"2xl"}
                  inRef={loginNameRef}
                />
                <InputField
                  name={"password"}
                  placeHolder={"Password*"}
                  type={"password"}
                  size={"2xl"}
                  inRef={loginPwdRef}
                />
                <div className="my-3 mb-0">
                  <NButton
                    name={"Login"}
                    size={"2xl"}
                    onClickFn={() => {
                      setFieldError({ ...checkField() });
                      checkField().errCode === 0
                        ? authenticate
                            .signIn(
                              loginNameRef.current.value,
                              loginPwdRef.current.value
                            )
                            .then((response) => {
                              console.log(response.status);
                              if (response.status === 200) {
                                Cookies.set("USER", response.data.token);
                                navigate("/menu");
                              }
                            })
                            .catch((err) => {
                              console.log();
                              if (err.response.status === 400) {
                                setIsinfoOk({
                                  ...isInfoOk,
                                  er400: true,
                                  erOther: false,
                                });
                              } else {
                                setIsinfoOk({
                                  ...isInfoOk,
                                  erOther: true,
                                  er400: false,
                                });
                              }
                              // navigate("/");
                            })
                        :
                      setIsinfoOk({
                        ...isInfoOk,
                        er400: false,
                        erOther: false,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="mt-0">
                <NButton
                  name={"Register"}
                  size={"2xl"}
                  onClickFn={handleRegisterModeToggle}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginCard;
