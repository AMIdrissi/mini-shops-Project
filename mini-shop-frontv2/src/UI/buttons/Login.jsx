import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext, useUserContext } from "../../UserContext";
import { Link } from "react-router-dom";

function LoginThing() {
  const user = useUserContext();

  return (
    <motion.div
      className="flex py-[2px] items-center border-b-2 bg-black/30 border-b-[#fffffd00] ease-in-out duration-200 hover:cursor-pointer rounded-3xl pl-[6px] ml-4"
      whileHover={{
        boxShadow: "0px 0px 15px #000000",
      }}
      transition={{
        delay: 0,
        duration: 0.1,
      }}
      whileTap={{
        boxShadow: "0px 0px 5px #000000",
        scale: 0.92,
      }}
    >
      {user.isConnected ? (
        <Link to="/profil" className="flex items-center ">
          <svg
            width="42px"
            height="42px"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="2" />
            <path
              d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-[22px] px-3 py-3 min-w-20 text-[#eae7e7] font-customFont text-center ">
            AMIdrissi
          </p>
        </Link>
      ) : (
        <Link to="/login">
          <p className="text-[32px] px-3 py-1 rounded-3xl min-w-20 text-[#eae7e7] font-customFont text-center">
            Log in
          </p>
        </Link>
      )}
    </motion.div>
  );
}

export default LoginThing;
