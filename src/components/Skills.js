import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaVuejs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiLaravel,
  SiGithub,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "PHP", icon: <FaPhp /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "REST APIs", icon: "🔗" },
  ],
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      
      <h2 className="text-3xl font-bold mb-2 text-teal-700 text-center">Skills</h2>
      <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>

      <p className="text-center text-gray-600 mb-10 text-base max-w-2xl mx-auto">
        I have hands-on experience with a variety of technologies and tools for full stack development,
        combining frontend, backend, and database solutions to build scalable, secure, and responsive web applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} data-aos="fade-up">
            <h3 className="text-lg font-semibold text-teal-700 mb-4 text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {items.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-sm font-medium text-gray-800 hover:bg-teal-100 transition"
                >
                  <span className="text-teal-600 text-lg">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
