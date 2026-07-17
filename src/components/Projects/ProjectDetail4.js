import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaCogs, FaListUl, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineCloudUpload } from "react-icons/md";
import { RiSecurePaymentLine, RiUserSettingsLine } from "react-icons/ri";

const ProjectDetail = () => {
  return (
    <section className="min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-14 relative">

        {/* Back Link */}
        <div className="absolute top-6 left-6">
          <Link
            to="/My_portfolio"
            className="text-sm text-teal-600 hover:underline flex items-center gap-1"
          >
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-600 mb-4">
          Live Project: HireOneWay Cab Booking Website
        </h1>

        {/* Live Link */}
        <div className="flex justify-center mb-6">
          <a
            href="https://hireoneway.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-teal-600 hover:underline font-medium"
          >
            Visit Live Website <FaExternalLinkAlt />
          </a>
        </div>

        {/* Stack Info */}
        <p className="text-center text-sm md:text-base text-gray-500 mb-8 flex justify-center flex-wrap gap-x-2 gap-y-2">
          <FaTools className="text-teal-500 mt-0.5" />
          Built with:
          <span className="font-medium text-gray-700">Laravel</span>,
          <span className="font-medium text-gray-700">Tailwind CSS</span>,
          <span className="font-medium text-gray-700">MySQL</span>,
          <span className="font-medium text-gray-700">Hostinger</span>
        </p>

        {/* Overview */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineDashboardCustomize className="text-teal-500" />
            Project Overview
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            HireOneWay is a live one-way cab booking platform developed using <strong>Laravel</strong> and deployed on
            <strong> Hostinger </strong>. I was responsible for developing the complete website architecture,
            backend logic, database design, and admin panel.
            <br /><br />
            The platform allows users to book intercity rides by selecting pickup and drop locations using
            <strong> Google Places Autocomplete</strong>. Distance calculation and fare estimation are handled using
            <strong> Google Distance Matrix API</strong> for accurate booking flow and pricing.
            <br /><br />
            The admin panel provides full control over bookings, customers, routes, pricing, and website content,
            while the frontend was designed using <strong>Tailwind CSS</strong> for a responsive user experience.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaListUl className="text-teal-500" />
            Key Features
          </h2>

          <ul className="text-gray-700 text-base md:text-lg space-y-3 ml-1">
            <li className="flex items-start gap-2">
              <FaCogs className="text-teal-500 mt-1 shrink-0" />
              Laravel-based backend with scalable MVC architecture
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineDashboardCustomize className="text-teal-500 mt-1 shrink-0" />
              Custom admin panel for managing bookings, customers, pricing, routes, and services
            </li>

            <li className="flex items-start gap-2">
              <FaTools className="text-teal-500 mt-1 shrink-0" />
              Google Places Autocomplete integration for pickup and drop location search
            </li>

            <li className="flex items-start gap-2">
              <RiSecurePaymentLine className="text-teal-500 mt-1 shrink-0" />
              Distance calculation and fare estimation using Google Distance Matrix API
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineCloudUpload className="text-teal-500 mt-1 shrink-0" />
              Website deployment and server configuration on AWS EC2
            </li>

            <li className="flex items-start gap-2">
              <RiUserSettingsLine className="text-teal-500 mt-1 shrink-0" />
              Authentication, customer handling, and admin role permissions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;