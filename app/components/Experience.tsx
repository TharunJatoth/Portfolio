"use client";

import React, { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
} from "lucide-react";

// You can create a separate file for your data and import it
// import { experienceData } from "./data/portfolioData";
// For this example, I'll define it directly in the component
const newExperienceData = [
  {
    role: "Software Engineer",
    company: "BRV Technologies",
    period: "May 2025 – Present",
    details: [
      "Developed scalable full-stack applications using Next.js, React.js, and Spring Boot, accelerating feature delivery by 25%.",
      "Built comprehensive admin dashboard with real-time analytics, role-based access control, and automated workflows.",
      "Implemented performance optimization techniques reducing application load times by 40%.",
      "Led code review processes and established pull request workflows using Bitbucket for improved code quality.",
      "Mentored 2 junior developers, increasing team productivity by 20% and streamlining onboarding processes.",
      "Participated in Agile ceremonies including sprint planning, daily standups, and retrospectives ensuring timely project delivery.",
    ],
  },
  {
    role: "Developer Intern",
    company: "BRV Technologies",
    period: "August 2024 – April 2025",
    details: [
      "Developed responsive web applications using React.js, Next.js, Tailwind CSS, and Material UI.",
      "Optimized application performance through code splitting, lazy loading, and image optimization techniques.",
      "Integrated RESTful APIs for dynamic content management and seamless user experiences.",
      "Collaborated with cross-functional teams including designers, backend developers, and product managers.",
      "Utilized version control systems (Git, Bitbucket) for collaborative development and deployment workflows.",
    ],
  },
];

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);
  const experienceData = newExperienceData;

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full -translate-y-48 -translate-x-48 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200 to-purple-200 rounded-full translate-y-48 translate-x-48 opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
            <Briefcase size={16} className="text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in building scalable web applications and
            leading development teams
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 hidden md:block"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full hidden md:block z-10 shadow-lg"></div>

                <div className="md:ml-16">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    {/* Header */}
                    <div
                      className="p-8 cursor-pointer"
                      onClick={() => toggleExpanded(index)}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                          {/* The new data doesn't have a logo or companyColor, so we'll use a placeholder */}
                          <div
                            className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0`}
                          >
                            {item.company
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                              {item.role}
                            </h3>
                            <div className="flex items-center text-blue-600 font-semibold mb-2">
                              <Briefcase size={18} className="mr-2" />
                              {item.company}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              {/* The new data doesn't have location or type, so we will remove these or add placeholders */}
                              {/*
                              <div className="flex items-center">
                                <MapPin size={16} className="mr-1" />
                                {item.location}
                              </div>
                              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                {item.type}
                              </span>
                              */}
                              <div className="flex items-center">
                                <Calendar size={16} className="mr-1" />
                                {item.period}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Expand Button */}
                        <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 lg:ml-4">
                          <span className="mr-2">
                            {expandedItem === index
                              ? "Hide Details"
                              : "View Details"}
                          </span>
                          {expandedItem === index ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      {/* Technologies - The new data doesn't have a technologies array, so we'll remove this part */}
                      {/*
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      */}
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedItem === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-8 pb-8">
                        <div className="border-t border-gray-200 pt-6">
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <Award size={18} className="mr-2 text-blue-600" />
                            Key Achievements & Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {item.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start"
                              >
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <span className="text-gray-600 leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting
              projects. Let's connect and see how we can create something
              amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/tharun-jatoth/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
              >
                <ExternalLink size={20} className="mr-2" />
                View My LinkedIn
              </a>

              <a
                href="/Resume.pdf"
                download
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
