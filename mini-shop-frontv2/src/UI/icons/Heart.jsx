import { motion } from "framer-motion";

function HeartIcon({ fillColor, borderColor, hw }) {
  return (
    <motion.svg
      width={hw}
      height={hw}
      viewBox="0 0 24 22"
      fill={fillColor ? fillColor : "none"}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ fill: "none", stroke: "#000000", scale: 1 }}
      whileHover={{scale: [null,1.3,1.1] }}
      transition={{ type: "spring", damping: 1, velocity:2 }}
    >
      <path
        d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
        stroke={borderColor ? borderColor : "#000000"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}

export default HeartIcon;