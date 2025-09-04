import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Android Developer Intern",
    company: "Eduskills",
    date: "Oct 2024 – Dec 2024",
    responsibilities: [
      "Built simple Android apps using Kotlin and Room Database.",
      "Designed intuitive UIs and followed basic app architecture patterns.",
      "Practiced clean coding principles and modern Android components.",
    ],
  },
  {
    job: "Web Developer Intern",
    company: "Bharat Intern",
    date: "Sept 2023 – Oct 2023",
    responsibilities: [
      "Created responsive websites using HTML, CSS, and JavaScript.",
      "Integrated APIs and worked with React.js for interactive UIs.",
      "Improved user experience through clean layouts and component reuse.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Personal Projects",
    date: "2023 – Present",
    responsibilities: [
      "Built a Personal Finance Dashboard using Next.js, Tailwind, and MongoDB.",
      "Created a custom URL Shortener backend using Node.js and Express.",
      "Cloned Netflix UI using HTML, CSS, and JS with animations.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-12">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            className="transition-all duration-300"
          >
            <SingleExperience experience={experience} />
          </motion.div>
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mx-4"
            >
              <FaArrowRightLong className="text-5xl text-orange-400 md:block hidden" />
              <div className="w-1 h-16 bg-gradient-to-b from-orange-400 to-cyan-400 rounded-full md:hidden block mx-auto"></div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;