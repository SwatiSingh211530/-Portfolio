import { FaGithub } from "react-icons/fa";

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] text-center px-4">
      <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mb-6">
        Projects
      </h2>

      <p className="text-lg text-lightGrey max-w-[800px] leading-relaxed">
        I've crafted responsive websites, scalable full-stack apps, and visually striking UI interfaces using modern tech stacks like React, Node.js, MongoDB, and Tailwind CSS.
        My projects focus on performance, usability, and real-world impact.
      </p>

      <a
        href="https://github.com/SwatiSingh211530"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-300 shadow-lg"
      >
        <FaGithub className="text-2xl" />
        View My GitHub
      </a>
    </div>
  );
};

export default ProjectsText;
