import React from "react";

const projects = [
  {
    title: "Live E-commerce App (Flowers)",
    stack: "Node.js + Laravel + React Native",
    description:
      "Built APIs using Node.js and admin panel in Laravel. App interface handled by React Native developer.",
  },
  {
    title: "MSc IT Project – E-commerce Admin + App",
    stack: "Laravel + Flutter",
    description:
      "Created Laravel admin to manage orders/products, and Flutter app for user side.",
  },
  {
    title: "BSc IT Project – IoT Radar System",
    stack: "IoT + ThingSpeak",
    description:
      "Designed a radar-based obstacle detection system with cloud data visualization.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition duration-300 text-left"
          >
            <h3 className="text-xl font-bold text-teal-600 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 font-semibold mb-3">
              {project.stack}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
