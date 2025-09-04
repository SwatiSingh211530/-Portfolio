import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Animated Image inside Hexagon */}
      <motion.div
        initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-[300px] h-[300px] hexagon-shape overflow-hidden border-[6px] border-cyan shadow-cyanShadow hover:shadow-[0_0_30px_#15d1e9,0_0_60px_#15d1e9] transition-all duration-500 z-10"
      >
        <img
          src="public/images/HexaPic.jpg" // replace with your image path
          alt="Swati Singh"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Spinning Hexagon Outline Behind */}
      <div className="absolute -z-10 flex justify-center items-center">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
