import React from "react";

// const projects = [
//   {
//     title: "Live E-commerce App (Flowers)",
//     stack: "Node.js + Laravel + React Native",
//     description:
//       "Built APIs using Node.js and admin panel in Laravel. App interface handled by React Native developer.",
//   },
//   {
//     title: "MSc IT Project – E-commerce Admin + App",
//     stack: "Laravel + Flutter",
//     description:
//       "Created Laravel admin to manage orders/products, and Flutter app for user side.",
//   },
//   {
//     title: "BSc IT Project – IoT Radar System",
//     stack: "IoT + ThingSpeak",
//     description:
//       "Designed a radar-based obstacle detection system with cloud data visualization.",
//   },
// ];

const projects = [
  {
    title: "Live E-commerce App (Flowers)",
    stack: "Node.js + Laravel + React Native",
    description:
      "Built RESTful APIs using Node.js for order management, payments, and products. Developed the admin panel using Laravel to manage orders, categories, and users. React Native dev handled frontend app based on our APIs.",
    features: [
      "Multi-city delivery and timeslot management",
      "User authentication",
      "Secure payment integration",
      "Admin dashboard & reporting",
    ],
    // github: "https://github.com/Ykumavat5", // optional
  },
  {
    title: "MSc IT Project – E-commerce Admin + App",
    stack: "Laravel + Flutter",
    description:
      "Laravel was used to build a web-based admin dashboard for managing users, categories, and inventory. Flutter-based app was designed for end-users to browse and place orders.",
    features: [
      "Mobile app in Flutter for customer side",
      "Laravel backend for admin with CRUD",
      "Firebase push notifications",
    ],
  },
  {
    title: "BSc IT Project – IoT Radar System",
    stack: "IoT (Nodemcu) + ThingSpeak",
    description:
      "Designed a radar system using ultrasonic sensors to detect obstacles and stream real-time data to the cloud using ThingSpeak. Used C++ for microcontroller and visualized sensor data graphs online.",
    features: [
      "Real-time distance measurement",
      "Cloud integration with ThingSpeak",
      "Graph-based analytics",
    ],
  },
];


const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Projects
      </h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition duration-300 text-left"
          >
            <h3 className="text-xl font-bold text-teal-600 mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{project.stack}</p>
            <p className="text-gray-700 text-sm mb-3">{project.description}</p>

            <ul className="list-disc list-inside text-sm text-gray-600 mb-3">
              {project.features && project.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>

            {project.github && (
              <a
                href={project.github}
                className="text-sm text-teal-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Projects;
