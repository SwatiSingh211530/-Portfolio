import ProjectsText from "./ProjectsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Personal Finance Visualizer",
    year: "2025",
    align: "left",
    image: "images/budget.webp",
    link: "https://personal-finance-visualizer-six-ochre.vercel.app/",
    border: "border-cyan-400",
    shadow: "shadow-cyanShadow",
  },
  {
    name: "Digital Healthcare App",
    year: "2024",
    align: "right",
    image: "images/OIP.webp",
    link: "https://github.com/SwatiSingh211530/Digital-Health",
    border: "border-orange-400",
    shadow: "shadow-orangeMediumShadow",
  },
  {
    name: "URL Shortener Web App",
    year: "2024",
    align: "left",
    image: "images/url.jpg",
    link: "https://github.com/SwatiSingh211530/URL-Shortener",
    border: "border-grey",
    shadow: "shadow-lg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-20 relative">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col items-center mt-20 relative before:absolute before:w-1 before:h-full before:bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-400 before:left-1/2 before:-translate-x-1/2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className={`w-full flex items-center justify-between mb-20 group transition-all duration-500 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
          >
            {/* Hexagon Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10"
            >
              <img
                src={project.image}
                alt={project.name}
                className={`hexagon-img w-40 h-40 object-cover border-4 ${project.border} ${project.shadow} shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              />
            </a>

            {/* Project Details */}
            <div className="w-2/3 px-6 text-left text-white z-10">
              <h3 className="text-2xl font-bold text-orange-400 group-hover:text-cyan-400 transition-colors duration-300">{project.name}</h3>
              <p className="text-sm text-lightGrey mt-1">{project.year}</p>
              <p className="mt-2 text-base">
                A modern web application built using {project.name.includes("Finance") ? "Next.js and MongoDB for budgeting" : project.name.includes("Healthcare") ? "React for digital health use-cases" : "Node.js and MongoDB for link shortening"}.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;