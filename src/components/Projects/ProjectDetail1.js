import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaCogs, FaListUl } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineCloudUpload } from "react-icons/md";
import { RiSecurePaymentLine, RiUserSettingsLine } from "react-icons/ri";

const ProjectDetail = () => {
  return (
    <section className="min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-14 relative">

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
          Live Project: Flower E-commerce App
        </h1>

        {/* Stack Info */}
        <p className="text-center text-sm md:text-base text-gray-500 mb-8 flex justify-center flex-wrap gap-x-2">
          <FaTools className="text-teal-500 mt-0.5" />
          Built with:
          <span className="font-medium text-gray-700">Node.js (APIs)</span>,
          <span className="font-medium text-gray-700">Laravel (Admin)</span>,
          <span className="font-medium text-gray-700">React Native (App)</span>,
          <span className="font-medium text-gray-700">AWS EC2</span>
        </p>

        {/* Overview */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineDashboardCustomize className="text-teal-500" />
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            This is a live e-commerce app for a flower delivery business where I was responsible for developing the entire backend architecture and admin panel.
            The API was built using <strong>Node.js</strong>, and the <strong>Laravel</strong>-powered admin panel allowed efficient management of products, orders, time slots, and delivery cities.
            The mobile application was developed in <strong>React Native</strong> by another team member using the APIs I built.
            Images were stored securely on <strong>AWS EC2</strong>.
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
              <FaCogs className="text-teal-500 mt-1" />
              RESTful APIs built using Node.js for the mobile app
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineDashboardCustomize className="text-teal-500 mt-1" />
              Laravel-based admin panel for order, category, and product management
            </li>
            <li className="flex items-start gap-2">
              <FaTools className="text-teal-500 mt-1" />
              Multi-city delivery and customizable time slot management
            </li>
            <li className="flex items-start gap-2">
              <RiSecurePaymentLine className="text-teal-500 mt-1" />
              Secure online payment integration
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineCloudUpload className="text-teal-500 mt-1" />
              Media upload and management using AWS EC2 buckets
            </li>
            <li className="flex items-start gap-2">
              <RiUserSettingsLine className="text-teal-500 mt-1" />
              Authentication and admin roles
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
