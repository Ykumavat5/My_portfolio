import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name:"live-project",
    title: "Live E-commerce App (Flowers)",
    stack: ["Node.js", "Laravel", "React Native"],
    description:
      "Built RESTful APIs using Node.js for order management, payments, and products. Developed the admin panel using Laravel to manage orders, categories, and users. React Native dev handled frontend app based on our APIs.",
  },
  {
    id: 2,
    name:"msc-project",
    title: "MSc IT Project – E-commerce Admin + App",
    stack: ["Laravel", "Flutter"],
    description:
      "Laravel was used to build a web-based admin dashboard for managing users, categories, and inventory. Flutter-based app was designed for end-users to browse and place orders.",
  },
  {
    id: 3,
    name:"bsc-project",
    title: "BSc IT Project – IoT Radar System",
    stack: ["NodeMCU", "ThingSpeak", "C++"],
    description:
      "Designed a radar system using ultrasonic sensors to detect obstacles and stream real-time data to the cloud using ThingSpeak. Used C++ for microcontroller and visualized sensor data graphs online.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
     
    <h2 className="text-3xl font-bold mb-2 text-teal-700">Projects</h2>
      <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            to={`project/${project.name}`}
            key={project.id}
            className="bg-white rounded-xl border p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 text-left block"
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-teal-100 text-teal-700 font-medium rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {project.description.length > 130
                ? project.description.substring(0, 130) + "..."
                : project.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
