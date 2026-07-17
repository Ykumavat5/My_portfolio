import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaCogs, FaListUl } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineCloudUpload } from "react-icons/md";
import { RiSecurePaymentLine, RiUserSettingsLine } from "react-icons/ri";

const ProjectDetail = () => {
  return (
    <section className="min-h-screen py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-14 relative shadow-sm">

        <div className="absolute top-6 left-6">
          <Link
            to="/My_portfolio"
            className="text-sm text-teal-600 hover:underline flex items-center gap-2"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-600 mb-4">
          Live Project: Athena Flower E-commerce App
        </h1>

        <p className="text-center text-sm md:text-base text-gray-500 mb-8 flex justify-center flex-wrap gap-x-2 gap-y-2">
          <FaTools className="text-teal-500 mt-0.5" />
          Built with:
          <span className="font-medium text-gray-700">Node.js + Express (APIs)</span>,
          <span className="font-medium text-gray-700">Laravel (Admin Panel)</span>,
          <span className="font-medium text-gray-700">React Native (Mobile App)</span>,
          <span className="font-medium text-gray-700">AWS EC2</span>
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineDashboardCustomize className="text-teal-500" />
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Athena Flower is a live flower delivery e-commerce application where I developed
            the complete backend API architecture using <strong>Node.js and Express</strong>,
            along with a <strong>Laravel-based admin panel</strong> for managing products,
            orders, delivery time slots, and serviceable cities. The mobile application was
            developed in <strong>React Native</strong> by another developer using the APIs I built.
            The project was deployed and managed on <strong>AWS EC2</strong> . Published on <strong>Google Play store </strong>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaListUl className="text-teal-500" />
            Key Features
          </h2>

          <ul className="text-gray-700 text-base md:text-lg space-y-3 ml-1">
            <li className="flex items-start gap-2">
              <FaCogs className="text-teal-500 mt-1 shrink-0" />
              RESTful APIs built using Node.js and Express for the React Native mobile application
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineDashboardCustomize className="text-teal-500 mt-1 shrink-0" />
              Laravel-based admin panel for product, category, and order management
            </li>
            <li className="flex items-start gap-2">
              <FaTools className="text-teal-500 mt-1 shrink-0" />
              Multi-city delivery support with configurable delivery time slots
            </li>
            <li className="flex items-start gap-2">
              <RiSecurePaymentLine className="text-teal-500 mt-1 shrink-0" />
              Secure online payment integration for customer orders
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineCloudUpload className="text-teal-500 mt-1 shrink-0" />
              Image and media upload handling on AWS-hosted infrastructure
            </li>
            <li className="flex items-start gap-2">
              <RiUserSettingsLine className="text-teal-500 mt-1 shrink-0" />
              Authentication and role-based admin access control
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;