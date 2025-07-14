import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaListUl } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiSmartphoneLine, RiFirebaseLine, RiBox3Line } from "react-icons/ri";

const ProjectDetail = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 shadow-xl rounded-3xl p-8 md:p-14 relative">

        {/* Back Link - Aligned Right */}
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
          MSc IT Project: E-commerce Admin + App
        </h1>

        {/* Stack */}
        <p className="text-center text-sm md:text-base text-gray-500 mb-8 flex justify-center flex-wrap gap-x-2">
          <FaTools className="text-teal-500 mt-0.5" />
          Built with:
          <span className="font-medium text-gray-700">Laravel</span>,
          <span className="font-medium text-gray-700">Flutter</span>,
          <span className="font-medium text-gray-700">Firebase</span>
        </p>

        {/* Overview */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineDashboardCustomize className="text-teal-500" />
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            As part of my Master's degree, I developed a complete e-commerce system.
            The admin panel was created using <strong>Laravel</strong> to manage products, users, and orders,
            while the customer-facing application was built in <strong>Flutter</strong>.
            The system included real-time notifications using <strong>Firebase</strong> and was designed to be scalable and user-friendly.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaListUl className="text-teal-500" />
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3 ml-1">
            <li className="flex items-start gap-2">
              <RiSmartphoneLine className="text-teal-500 mt-1" />
              Flutter-based mobile app for end users
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineDashboardCustomize className="text-teal-500 mt-1" />
              Admin dashboard built in Laravel with full CRUD functionality
            </li>
            <li className="flex items-start gap-2">
              <RiFirebaseLine className="text-teal-500 mt-1" />
              Firebase integration for push notifications
            </li>
            <li className="flex items-start gap-2">
              <RiBox3Line className="text-teal-500 mt-1" />
              Order management and status tracking
            </li>
            <li className="flex items-start gap-2">
              <FaTools className="text-teal-500 mt-1" />
              Category, product, and inventory management
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
