import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFileAlt, FaFolderOpen } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-600 to-blue-700 text-white py-24 px-4 text-center shadow-md">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Yogesh Kumavat
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm a{" "}
          <span className="text-white font-bold">
            <Typewriter
              words={["Full Stack Developer", "MERN + Laravel Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition duration-300 flex items-center gap-2 justify-center"
          >
            <FaFolderOpen /> View Projects
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300 flex items-center gap-2 justify-center"
          >
            <FaFileAlt /> View Resume
          </a>
        </motion.div>
        {/* <motion.p
          className="flex flex-col sm:flex-row justify-center gap-4 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          “Learn continually – there’s always ‘one more thing’ to learn.” – Steve Jobs
        </motion.p> */}
      </div>
    </section>
  );
};

export default Hero;
