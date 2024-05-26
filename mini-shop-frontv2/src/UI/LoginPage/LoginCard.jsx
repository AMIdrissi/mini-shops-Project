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
  const [isInfoOk, setIsinfoOk] = useState(true);
  const [isRegisterMode, setIsRegisterMode] = useState(false); // State to track if it's in register mode
  const navigate = useNavigate();

  const handleRegisterModeToggle = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  const loginNameRef = useRef();
  const loginPwdRef = useRef();
  //-------------------------------

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
              {!isInfoOk && (
                <p className="text-white px-2 py-1 rounded-xl bg-red-600 font-customFont font-bold">
                  {" "}
                  invalid UserName or Password{" "}
                </p>
              )}
              <div className="p-3">
                <InputField
                  name={"email"}
                  placeHolder={"Email"}
                  type={"email"}
                  size={"2xl"}
                  inRef={loginNameRef}
                />
                <InputField
                  name={"password"}
                  placeHolder={"Password"}
                  type={"password"}
                  size={"2xl"}
                  inRef={loginPwdRef}
                />
                <div className="my-3 mb-0">
                  <NButton
                    name={"Login"}
                    size={"2xl"}
                    onClickFn={() => {
                      authenticate
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
                            setIsinfoOk(false);
                          }
                          // navigate("/");
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
