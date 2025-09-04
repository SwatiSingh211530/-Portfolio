import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Swati Singh<br className="sm:hidden md:block" />
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        Final-year B.Tech CSE student with strong skills in full-stack development and DSA.<br/>
        Seeking an opportunity to build impactful web applications and grow in a tech-driven environment.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4"
      >
       <a
  href="https://drive.google.com/file/d/1pdTrTEFqSWPvlSDVMingilDSXsVvJz2Y/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:scale-105 transition-all duration-300 border-b-4 border-cyan-700"
>
  Download Resume
</a>
      </motion.div>
    </div>
  );
};

export default HeroText;