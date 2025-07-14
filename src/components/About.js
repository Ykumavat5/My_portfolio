import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section className="py-20 px-4 bg-gray-50">
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-2 text-teal-700">About Me</h2>
      <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>
      
      <p className="text-lg leading-relaxed text-gray-700">
        I'm a <span className="text-teal-600 font-medium">Full Stack Developer</span> with around
        <span className="font-semibold"> 2 years of experience</span> building dynamic and scalable web applications using
        <span className="text-teal-600 font-medium"> MERN stack (MongoDB, Express, React, Node.js)</span> and
        <span className="text-teal-600 font-medium"> Laravel (PHP)</span>.
        <br /><br />
        I specialize in
        <span className="text-teal-600 font-medium"> REST API development</span>,
        <span className="text-teal-600 font-medium"> JWT authentication</span>,
        <span className="text-teal-600 font-medium"> MySQL database design</span>, and creating
        <span className="text-teal-600 font-medium"> responsive UIs with Tailwind CSS</span>.
        <br /><br />
        I've worked on live production projects, collaborating with cross-functional teams and following
        <span className="text-teal-600 font-medium"> Agile workflows</span>,
        <span className="text-teal-600 font-medium"> Git version control</span>, and CI/CD practices.
      </p>
    </motion.div>
  </section>
);

export default About;
