import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I’m <strong>Swati Singh</strong>, a final-year B.Tech Computer Science student and passionate <strong>Full-Stack Developer</strong>. I love building complete web solutions that combine clean UI with powerful backend logic. My core skills include <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>RESTful APIs</strong>.
        <br /><br />
        I’ve developed full-stack projects like portfolio websites, to-do apps, authentication systems, and dashboards. I’m comfortable working across the stack — from crafting responsive UIs with <strong>Tailwind CSS</strong> to managing backend logic, databases, and deployment.
        <br /><br />
        I’m currently exploring tools like <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Firebase</strong> to build scalable web apps. I also enjoy working with version control (Git), deploying on platforms like Vercel and Render, and following clean code principles.
        <br /><br />
        I’m open to internships, freelance work, and full-time roles as a frontend/backend/full-stack developer. Let's build something awesome together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
