import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaCogs, FaListUl } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiCalendarCheck } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";

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
          Live Project: Retreat India
        </h1>

        <a
          href="https://www.retreatindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-teal-600 hover:underline mb-6"
        >
          Visit Live Website
        </a>

        <p className="text-center text-sm md:text-base text-gray-500 mb-8 flex justify-center flex-wrap gap-x-2 gap-y-2">
          <FaTools className="text-teal-500 mt-0.5" />
          Built with:
          <span className="font-medium text-gray-700">Laravel (Website)</span>,
          <span className="font-medium text-gray-700">Laravel (Admin Panel)</span>,
          <span className="font-medium text-gray-700">Hostinger</span>
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MdOutlineDashboardCustomize className="text-teal-500" />
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Retreat India is a live yoga and meditation retreat booking platform developed for showcasing wellness packages and handling customer inquiries and bookings.
            I developed the complete <strong>website and admin panel in Laravel</strong>, allowing users to browse retreat packages, view package details, and submit booking or inquiry requests.
            The admin panel was built to manage packages, pricing, bookings, content, and other website data efficiently.
            The project is hosted and managed on <strong>Hostinger</strong>.
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
              Laravel-based website for showcasing yoga and meditation retreat packages
            </li>
            <li className="flex items-start gap-2">
              <MdOutlineDashboardCustomize className="text-teal-500 mt-1 shrink-0" />
              Admin panel for managing retreat packages, pricing, and website content
            </li>
            <li className="flex items-start gap-2">
              <BiCalendarCheck className="text-teal-500 mt-1 shrink-0" />
              Booking and inquiry management for customer submissions
            </li>
            <li className="flex items-start gap-2">
              <TbCategory className="text-teal-500 mt-1 shrink-0" />
              Dynamic management of package categories, retreat details, and content sections
            </li>
            <li className="flex items-start gap-2">
              <FaTools className="text-teal-500 mt-1 shrink-0" />
              Custom package listing with pricing and schedule information
            </li>
            <li className="flex items-start gap-2">
              <RiUserSettingsLine className="text-teal-500 mt-1 shrink-0" />
              Secure admin authentication and management access
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;