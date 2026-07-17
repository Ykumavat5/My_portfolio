import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTools, FaCogs, FaListUl, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineCloudUpload } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";

const ProjectDetail = () => {
  return (
    <section className="min-h-screen py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-14 relative">

        {/* Back Link */}
        <div className="absolute top-6 right-6">
          <Link
            to="/My_portfolio"
            className="text-sm text-teal-600 hover:underline flex items-center gap-1"
          >
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-600 mb-4">
          Live Project: Wellness Nature Cure
        </h1>

        {/* Live Link */}
        <div className="flex justify-center mb-6">
          <a
            href="https://www.wellnessnaturecure.com/"
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
          <span className="font-medium text-gray-700">HTML/CSS</span>,
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
            Wellness Nature Cure is a live wellness website developed to showcase nature cure therapies,
            treatment services, and wellness packages online. I developed the website along with a basic
            <strong> Laravel admin panel</strong> for managing package-related content and website sections.
            <br /><br />
            The website was designed to present services such as <strong>naturopathy</strong>,
            <strong> ayurveda</strong>, <strong> yoga</strong>, <strong> hydrotherapy</strong>,
            and <strong> mud therapy</strong> in a clean and informative format.
            The admin panel allows simple updates for therapies, packages, and other website content.
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
              Static Laravel website for showcasing wellness therapies and treatment packages
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineDashboardCustomize className="text-teal-500 mt-1 shrink-0" />
              Basic admin panel for managing therapies, packages, and website content
            </li>

            <li className="flex items-start gap-2">
              <FaTools className="text-teal-500 mt-1 shrink-0" />
              Informational service display for naturopathy, ayurveda, yoga, hydrotherapy, and mud therapy
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineCloudUpload className="text-teal-500 mt-1 shrink-0" />
              Live deployment and hosting configuration
            </li>

            <li className="flex items-start gap-2">
              <RiUserSettingsLine className="text-teal-500 mt-1 shrink-0" />
              Secure admin login and website content management access
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;