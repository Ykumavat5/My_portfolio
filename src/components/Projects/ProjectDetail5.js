import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaCogs, FaListUl, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineCloudUpload } from "react-icons/md";
import { RiSecurePaymentLine, RiUserSettingsLine } from "react-icons/ri";

const ProjectDetail = () => {
  return (
    <section className="min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-14 relative">

        <div className="absolute top-6 left-6">
          <Link
            to="/My_portfolio"
            className="text-sm text-teal-600 hover:underline flex items-center gap-1"
          >
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-600 mb-4">
          Live Project: Matrix Cabs
        </h1>

        <div className="flex justify-center mb-6">
          <a
            href="https://www.matrixcab.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-teal-600 hover:underline font-medium"
          >
            Visit Live Website <FaExternalLinkAlt />
          </a>
        </div>

        <p className="text-center text-sm md:text-base text-gray-500 mb-8 flex justify-center flex-wrap gap-x-2 gap-y-2">
          <FaTools className="text-teal-500 mt-0.5" />
          Built with:
          <span className="font-medium text-gray-700">Laravel</span>,
          <span className="font-medium text-gray-700">Tailwind CSS</span>,
          <span className="font-medium text-gray-700">MySQL</span>,
          <span className="font-medium text-gray-700">AWS EC2</span>
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineDashboardCustomize className="text-teal-500" />
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Matrix Cabs is a live travel booking platform developed using <strong>Laravel</strong> and deployed on
            <strong> AWS EC2</strong>. I was responsible for developing the complete website architecture,
            backend logic, database structure, and admin panel for managing bookings, services, and vehicle categories.
            <br /><br />
            The platform supports multiple travel services including <strong>one-way cab bookings</strong>,
            <strong> outstation trips</strong>, <strong> airport transfers</strong>, <strong> hourly rentals</strong>,
            <strong> corporate travel</strong>, as well as bookings for <strong>buses</strong>,
            <strong> tempo travellers</strong>, and <strong> luxury cars</strong>.
            <br /><br />
            The admin panel provides complete control over bookings, pricing, routes, customers, fleet-related content,
            and website management, while the frontend was designed to provide a responsive and user-friendly booking experience.
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
              Laravel-based booking platform with scalable MVC architecture
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineDashboardCustomize className="text-teal-500 mt-1 shrink-0" />
              Admin panel for managing bookings, pricing, routes, customers, and website content
            </li>

            <li className="flex items-start gap-2">
              <FaTools className="text-teal-500 mt-1 shrink-0" />
              Support for one-way cabs, outstation trips, airport transfers, and hourly rentals
            </li>

            <li className="flex items-start gap-2">
              <RiSecurePaymentLine className="text-teal-500 mt-1 shrink-0" />
              Booking flow for buses, tempo travellers, premium cars, and luxury cars
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineCloudUpload className="text-teal-500 mt-1 shrink-0" />
              Website deployment and server configuration on AWS EC2
            </li>

            <li className="flex items-start gap-2">
              <RiUserSettingsLine className="text-teal-500 mt-1 shrink-0" />
              Authentication, admin access control, and fleet/service content management
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;