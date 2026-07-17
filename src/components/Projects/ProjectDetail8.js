import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaWifi, FaMicrochip } from "react-icons/fa";
import { MdOutlineRadar, MdOutlineStorage, MdShowChart } from "react-icons/md";

const ProjectDetail = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 shadow-xl rounded-3xl p-8 md:p-14 relative">

        {/* Back Link - Top Right */}
        <div className="absolute top-6 right-6">
          <Link
            to="/My_portfolio"
            className="text-sm text-teal-600 hover:underline flex items-center gap-1"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
        </div>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-600 mb-4">
          BSc IT Project: IoT Radar System
        </h1>

        {/* Stack */}
        <p className="text-center text-sm md:text-base text-gray-500 mb-8 flex justify-center flex-wrap gap-x-2">
          Built with:
          <span className="font-medium text-gray-700">NodeMCU</span>,
          <span className="font-medium text-gray-700">Ultrasonic Sensor</span>,
          <span className="font-medium text-gray-700">ThingSpeak</span>,
          <span className="font-medium text-gray-700">Arduino (C++)</span>
        </p>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineRadar className="text-teal-500" />
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            This academic project involved building a radar system using an
            <strong> ultrasonic sensor</strong> and a <strong>NodeMCU</strong> microcontroller.
            It detects nearby obstacles and sends the measured distances to
            <strong> ThingSpeak</strong> for live graphing. The system demonstrates a practical IoT use-case in obstacle detection and real-time cloud data analytics. Programming was done in <strong>Arduino C++</strong>.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineStorage className="text-teal-500" />
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3 ml-1">
            <li className="flex items-start gap-2">
              <MdOutlineRadar className="text-teal-500 mt-1" />
              Real-time obstacle distance detection
            </li>
            <li className="flex items-start gap-2">
              <FaWifi className="text-teal-500 mt-1" />
              Wi-Fi-based data transmission using NodeMCU
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineStorage className="text-teal-500 mt-1" />
              ThingSpeak integration for cloud storage and visualization
            </li>
            <li className="flex items-start gap-2">
              <MdShowChart className="text-teal-500 mt-1" />
              Graph-based visualization of sensor readings
            </li>
            <li className="flex items-start gap-2">
              <FaMicrochip className="text-teal-500 mt-1" />
              Microcontroller programmed via Arduino IDE (C++)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
