import { motion } from "framer-motion";

function Cappuccino({ timeDiff }) {
  const textShow = {
    rest: {
      opacity: 0,
      scale: 1,
    },

    hover: {
      opacity: 1,
      color: "#ffffff",
      // padding: "0px 2px",
      scale: 1.1,
      zIndex: 0,
    },
  };

  return (
    <div className="mt-[106px]">
      <div className="flex flex-col items-center">
        <p className="translate-y-4">WELCOME TO </p>
        <motion.p
          className="text-7xl font-sans font-bold text-[#432d27] translate-y-[34px]"
          initial={{ translateX: 100, opacity: 0, translateY: 34, zIndex: 1 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: timeDiff + 0.5,
            type: "spring",
            // damping: 15,
          }}
        >
          Coffee
        </motion.p>
        <div className="flex">
          <motion.div
            transition={{
              duration: 0.3,
              type: "spring",
              // damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              translateX: -15,
            }}
          >
            <motion.div
              className="bg-red-500 rounded-s-3xl"
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: timeDiff + 0.2,
                type: "spring",
                // damping: 15,
              }}
            >
              <motion.div
                whileHover="hover"
                initial="rest"
                className="flex items-center justify-center"
              >
                <motion.div
                  className="absolute flex items-center"
                  variants={textShow}
                >
                  <svg
                    fill="#ffffff"
                    width="38px"
                    height="38px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.32 15.653a.812.812 0 0 1-.086-.855c.176-.342.245-.733.2-1.118a2.106 2.106 0 0 0-.267-.779 2.027 2.027 0 0 0-.541-.606 3.96 3.96 0 0 1-1.481-2.282c-1.708 2.239-1.053 3.51-.235 4.63a.748.748 0 0 1-.014.901.87.87 0 0 1-.394.283.838.838 0 0 1-.478.023c-1.105-.27-2.145-.784-2.85-1.603a4.686 4.686 0 0 1-.906-1.555 4.811 4.811 0 0 1-.263-1.797s-.133-2.463 2.837-4.876c0 0 3.51-2.978 2.292-5.18a.621.621 0 0 1 .112-.653.558.558 0 0 1 .623-.147l.146.058a7.63 7.63 0 0 1 2.96 3.5c.58 1.413.576 3.06.184 4.527.325-.292.596-.641.801-1.033l.029-.064c.198-.477.821-.325 1.055-.013.086.137 2.292 3.343 1.107 6.048a5.516 5.516 0 0 1-1.84 2.027 6.127 6.127 0 0 1-2.138.893.834.834 0 0 1-.472-.038.867.867 0 0 1-.381-.29zM7.554 7.892a.422.422 0 0 1 .55.146c.04.059.066.126.075.198l.045.349c.02.511.014 1.045.213 1.536.206.504.526.95.932 1.298a3.06 3.06 0 0 1 1.16 1.422c.22.564.25 1.19.084 1.773a4.123 4.123 0 0 0 1.39-.757l.103-.084c.336-.277.613-.623.813-1.017.201-.393.322-.825.354-1.269.065-1.025-.284-2.054-.827-2.972-.248.36-.59.639-.985.804-.247.105-.509.17-.776.19a.792.792 0 0 1-.439-.1.832.832 0 0 1-.321-.328.825.825 0 0 1-.035-.729c.412-.972.54-2.05.365-3.097a5.874 5.874 0 0 0-1.642-3.16c-.156 2.205-2.417 4.258-2.881 4.7a3.537 3.537 0 0 1-.224.194c-2.426 1.965-2.26 3.755-2.26 3.834a3.678 3.678 0 0 0 .459 2.043c.365.645.89 1.177 1.52 1.54C4.5 12.808 4.5 10.89 7.183 8.14l.372-.25z" />
                  </svg>
                  <p className="text-2xl">Hot</p>
                </motion.div>
                <motion.img
                  src="https://cdn.discordapp.com/attachments/1091841712445477018/1217733290845405274/cappuchino.jpg?ex=66051980&is=65f2a480&hm=6a9bb7cf1d239ad6ebf04deb1cee2902bae05893d2aed8a5fc1bf9256e8ada8a&"
                  alt="capuccino"
                  className="w-[520px] rounded-s-3xl"
                  initial={{ zIndex: 0 }}
                  whileHover={{ opacity: 0.6, zIndex: 0, cursor: "pointer" }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* the second pic for cold drinks*/}

          <motion.div
            transition={{
              duration: 0.3,
              type: "spring",
              // damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              translateX: 15,
            }}
          >
            <motion.div
              className="bg-sky-500 rounded-e-3xl"
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: timeDiff + 0.4,
                type: "spring",
                // damping: 15,
              }}
            >
              <motion.div
                whileHover="hover"
                initial="rest"
                className="flex justify-center items-center"
              >
                <motion.div
                  className="absolute flex items-center"
                  variants={textShow}
                >
                  <svg
                    width="38px"
                    height="38px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17L9 20M12 17L15 20M12 17V12M12 17V21M12 7L9 4M12 7L15 4M12 7V12M12 7V3M12 12L7.66985 9.49995M12 12L16.3301 14.4999M12 12L7.66985 14.4999M12 12L16.3301 9.49995M16.3301 14.4999L17.4282 18.598M16.3301 14.4999L20.4282 13.4019M16.3301 14.4999L19.7943 16.5M7.66985 9.49995L3.57178 10.598M7.66985 9.49995L6.57178 5.40187M7.66985 9.49995L4.20581 7.5M16.3301 9.49995L20.4282 10.598M16.3301 9.49995L17.4282 5.40187M16.3301 9.49995L19.7943 7.5M7.66985 14.4999L6.57178 18.598M7.66985 14.4999L3.57178 13.4019M7.66985 14.4999L4.20581 16.5"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-2xl">Cold</p>
                </motion.div>
                <motion.img
                  src="https://cdn.discordapp.com/attachments/1091841712445477018/1217752474560237649/image3.png?ex=66052b5e&is=65f2b65e&hm=846b797c039b5ed99574577d3391aa5881039762d8067d39ea43f608555ee153&"
                  alt="iced moka"
                  className="w-[520px] rounded-e-3xl"
                  initial={{ zIndex: 0 }}
                  whileHover={{ opacity: 0.6, zIndex: 0, cursor: "pointer" }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  onClick={() => {
                    console.log(cold);
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.p
          className="text-7xl font-sans font-bold text-[#D7B7A3] -translate-y-[38px]"
          initial={{ translateX: -100, opacity: 0, translateY: -38, zIndex: 1 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: timeDiff + 0.7,
            type: "spring",
            // damping: 15,
          }}
        >
          & Chill
        </motion.p>
      </div>
    </div>
  );
}

export default Cappuccino;
