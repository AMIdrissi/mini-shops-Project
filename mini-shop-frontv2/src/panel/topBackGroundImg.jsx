import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function TopbgImg() {
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <div></div>
  );
}
export default TopbgImg;
