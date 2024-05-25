import { motion } from "framer-motion";

export default function OrderContainer() {
  return (
    <motion.div
      className="font-customFont grid grid-cols-[auto_auto] items-center bg-[#e9e4e4] justify-between p-3 mr-[10%] mt-4 rounded-xl border-4 ml-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, type: "spring", damping: 15 }}
      whileHover={{
        scale: [null, 1.1, 1.02],
        transition: { duration: 6, type: "spring", damping: 5 },
        backgroundColor: "#ffffffa1",
        boxShadow: "1px 0px 10px 2px rgba(185, 28, 28,0.50)",
      }}
    >
      <div className="text-[21px] flex flex-col h-full justify-between py-4 px-4">
        <h1>Product Name:</h1>
        <h1>Date Of purchase:</h1>
        <h1>Total:</h1>
      </div>
      <div className="border-l-4 pl-2 border-red-700">
        <img
          src="https://cdn.discordapp.com/attachments/1092253246812332112/1193368854974447686/450183.png?ex=6634e99a&is=6633981a&hm=1680f3fa7de97a1559c947d9eb8970fae1f95f03e19de05c53a45a151d5c3528&"
          alt=""
          className="h-40 w-40"
        />
      </div>
    </motion.div>
  );
}
