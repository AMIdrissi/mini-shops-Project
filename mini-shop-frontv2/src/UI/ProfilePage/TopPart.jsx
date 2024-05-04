import { motion, useScroll, useTransform } from "framer-motion";

function TopPart({ imageUrl, scaler }) {
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(
    scrollYProgress,
    [0, 1],
    [1, scaler ? scaler : 1.2]
  );
  return (
    <div className={`h-[${"600px"}] min-h-[600px] overflow-y-hidden`}>
      <motion.img
        src={imageUrl ? imageUrl : mainImage}
        alt=""
        id="bgImg"
        className={`absolute top-0 w-full min-h-[620px] h-[${"620px"}] object-cover max-h-[864px]`}
        initial={{ scale: 1 }}
        style={{ scale: scale1, translateY: "-3%" }}
      />
    </div>
  );
}

export default TopPart;
