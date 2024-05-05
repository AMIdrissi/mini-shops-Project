import { motion, transform } from "framer-motion";
import { useState } from "react";
import NButton from "../../buttons/NavBarButton";
import InputField from "../../Inputs/InputField";

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

const maskPwd = (pwdString) => {
  let maskedPwd = "";
  for (let i = 0; i < pwdString.length; i++) {
    maskedPwd += "•";
  }
  return maskedPwd;
};

function UserInfos({ editOn, user }) {
  if (editOn) {
    return (
      <div className="my-2">
        <InputField
          placeHolder={"UserName"}
          type={"text"}
          value={"AF464654"}
          size={"2xl"}
        />
        <InputField
          placeHolder={"Password"}
          type={"text"}
          value={"AF464654"}
          size={"2xl"}
        />
        <InputField
          placeHolder={"Email"}
          type={"email"}
          value={"AF464654"}
          size={"2xl"}
        />
        <div>
          <h4 className="mx-1 font-customFont text-lg">Address</h4>
          <motion.textarea
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            cols="25"
            rows="6"
            className={inputStyle("2xl")}
            type="text"
            required
            placeholder="Address"
            value={"AF45694"}
            style={inputStyleFunction(0, false)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-2 text-[#232227]">
        <div>
          <h4 className="mx-1 font-customFont text-xl">{"UserName"}</h4>
          <motion.p
            className={inputStyle("2xl")}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            hello
          </motion.p>
        </div>
        <div>
          <h4 className="mx-1 font-customFont text-lg">{"Password"}</h4>
          <motion.p
            className={inputStyle("2xl")}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {maskPwd("hello")}
          </motion.p>
        </div>
        <div>
          <h4 className="mx-1 font-customFont text-lg">{"Email"}</h4>
          <motion.p
            className={inputStyle("2xl")}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            hello
          </motion.p>
        </div>
        <div>
          <h4 className="mx-1 font-customFont text-lg">{"address"}</h4>
          <motion.p
            className={inputStyle("2xl")}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            hello
          </motion.p>
        </div>
      </div>
    );
  }
}

function ProfileCard() {
  const [editOn, setEditOn] = useState(false);
  const deleteAn = {
    rest: { opacity: 0, scale: 0 },
    hover: {
      scale: 1.2,
      rotate: 362,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        bounce: 0.5,
      },
    },
  };
  const delTxtAn = {
    rest: { opacity: 1 },
    hover: {
      scale: [null, 1.2],
      transition: {
        duration: 10,
        type: "spring",
        stiffness: 2000,
        bounce: 1,
        damping: 6,
        velocity: 3,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center mx-28 mt-14 mb-10 ">
      <div className="flex flex-col items-center justify-center ">
        <div
          className={`flex flex-col items-center justify-center border-4 rounded-tl-xl rounded-tr-xl bg-[#dcd7d7a1] ${
            editOn ? "rounded-xl" : "border-b-0"
          }`}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            className="pt-5"
          >
            {" "}
            {/* Nice */}
            <img
              src="https://i.pinimg.com/736x/4b/71/b8/4b71b8483fa2f5955f420ef459936ee9.jpg"
              alt="smilry face"
              className="border-4 border-red-700 rounded-full h-36 w-36 z-[1]"
            />
          </motion.div>
          <motion.div
            className={`flex flex-col items-center p-3 `}
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
          >
            <UserInfos editOn={editOn} />
            <NButton
              name={editOn ? "Save" : "Edit"}
              size={"2xl"}
              onClickFn={() => {
                setEditOn(!editOn);
              }}
            />
          </motion.div>
        </div>
        {editOn ? (
          ""
        ) : (
          <motion.div
            className="border-[#e5e7eb] w-full h-full border-b-4 border-x-4 bg-[#e81313c4]  rounded-bl-xl rounded-br-xl p-2"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.button
              type="button"
              className="font-bold w-full h-full p-2 font-customFont text-2xl text-white flex items-center justify-center pl-[24px]"
              variants={delTxtAn}
            >
              Delete Account{" "}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                fill="#ffffff"
                viewBox="0 0 30 30"
                className="translate-y-[1px] mx-1"
                variants={deleteAn}
              >
                <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
