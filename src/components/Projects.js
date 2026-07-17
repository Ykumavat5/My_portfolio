import React, { useRef } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "live-project-kwick",
    title: "Kwick Travels (Live Website & Admin Panel)",
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "AWS EC2",
      "REST APIs",
      "Google Maps API"
    ],
    description:
      "Developed a travel booking website and admin panel using Laravel. Implemented features for managing bookings, packages, users, and payments. The admin dashboard allows administrators to monitor reservations and manage travel services efficiently.",
  },
  {
    id: 2,
    name: "live-project-athena-flower",
    title: "Flower E-commerce (Admin Panel & APIs)",
    stack: ["Node.js",
      "Express.js",
      "Laravel",
      "REST APIs"],
    description:
      "Developed RESTful APIs using Node.js for product management, order processing, and payment handling. Created a Laravel-based admin panel to manage products, categories, customers, and order tracking.",
  },
  {
    id: 3,
    name: "live-project-retreat-india",
    title: "Retreat India (Live Website & Admin Panel)",
    stack: ["Laravel",
      "PHP",
      "MySQL",
      "Hostinger",
      "REST APIs"],
    description:
      "Built a tourism platform using Laravel with a dynamic admin dashboard. The system enables management of travel packages, customer inquiries, bookings, and content updates for the website.",
  },
  {
    id: 4,
    name: "live-project-hireoneway",
    title: "HireOneWay cabs (Live Website & Admin Panel)",
    stack: ["Laravel",
      "PHP",
      "MySQL",
      "Hostinger",],
    description:
      "Developed a travel booking website and admin panel using Laravel. Implemented features for managing bookings, packages, users, and payments. The admin dashboard allows administrators to monitor reservations and manage travel services efficiently.",
  },
  {
    id: 5,
    name: "live-project-matrix",
    title: "Matrix Cab (Website & Admin Panel)",
    stack: ["Laravel",
      "PHP",
      "MySQL",
      "AWS EC2",
      "REST APIs",
      "Google Maps API"],
    description:
      "Developed a cab booking website and admin panel using Laravel. Implemented features for managing ride bookings, drivers, customers, and fare details. The admin dashboard enables administrators to monitor bookings, manage drivers, and oversee overall cab service operations.",
  },
  {
    id: 6,
    name: "live-project-wellness-nature-cure",
    title: "Wellness Nature Cure (Website & Admin Panel)",
    stack: ["Laravel",
      "PHP",
      "MySQL",
      "Hostinger"],
    description:
      "Developed a healthcare and wellness website with a Laravel-based admin panel. Implemented features for managing products, services, customer inquiries, and website content.",
  },
  {
    id: 7,
    name: "msc-project",
    title: "MSc IT Project – E-commerce Admin Dashboard & Mobile App",
    stack: ["Laravel",
      "Flutter",
      "REST APIs",
      "MySQL",
      "Mobile App",
      "Admin Dashboard"],
    description:
      "Built an e-commerce management system where Laravel powers the admin dashboard for managing users, inventory, orders, and categories. Developed a Flutter mobile application for customers to browse products and place orders.",
  },
  {
    id: 8,
    name: "bsc-project",
    title: "BSc IT Project – IoT Radar Detection System",
    stack: ["NodeMCU",
      "C++",
      "IoT",
      "Ultrasonic Sensor",
      "ThingSpeak",
      "Cloud Monitoring"],
    description:
      "Developed an IoT-based radar system using ultrasonic sensors and NodeMCU to detect nearby obstacles. Sensor data was transmitted to the cloud via ThingSpeak and visualized through real-time graphs. The microcontroller logic was implemented in C++.",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector("a").offsetWidth + 32; // card width + gap
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-teal-700">Projects</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-9 h-9 flex items-center justify-center text-teal-600 hover:bg-teal-50 transition"
            aria-label="Scroll left"
          >
            ‹
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {projects.map((project) => (
              <Link
                to={`/My_portfolio/project/${project.name}`}
                key={project.id}
                className="bg-white rounded-xl border p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 text-left block snap-start flex-shrink-0"
                style={{
                  // 3 cards on lg, 2 on md, 1 on sm
                  width: "clamp(280px, calc(33.333% - 22px), 360px)",
                  minWidth: "280px",
                }}
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

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-9 h-9 flex items-center justify-center text-teal-600 hover:bg-teal-50 transition"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;