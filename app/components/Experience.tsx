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
  Sparkles,
  CheckCircle2,
  Download,
} from "lucide-react";

const experienceData = [
  {
    role: "Software Engineer",
    company: "BRV Technologies",
    location: "Hyderabad, India",
    period: "June 2025 – Present",
    type: "Full-time",
    summary:
      "Full stack development and Linux server operations for enterprise interior design, project management, and operational platforms.",
    technologies: [
      "Next.js",
      "React.js",
      "NestJS",
      "Node.js",
      "Spring Boot",
      "MongoDB",
      "MySQL",
      "Razorpay",
      "Linux",
      "NGINX",
      "aaPanel",
      "SSL/TLS",
      "Flutter",
      "Bitbucket",
      "RBAC",
    ],
    details: [
      "Developed and maintained Next.js admin dashboards for managing users, vendors, projects, approvals, configurations, and operational workflows.",
      "Built and enhanced an enterprise interior design and project management platform supporting admin, vendor, and customer roles across multiple business workflows.",
      "Designed and implemented modular NestJS backend services for project tracking, task scheduling, work orders, vendor management, and internal operations.",
      "Developed secure REST APIs using Node.js, NestJS, and Spring Boot with modular architecture and role-based access control (RBAC).",
      "Implemented JWT-based authentication and RBAC to enforce secure access and data isolation across multiple user roles.",
      "Integrated Razorpay payment workflows supporting booking payments, partial payments, order lifecycle management, and transaction handling.",
      "Designed and optimized MongoDB and MySQL data models, queries, and API workflows for production applications.",
      "Managed Linux servers, NGINX, aaPanel, SSL/TLS, and DNS configuration for deployment and production environments; investigated and resolved production/server-level issues within Agile sprints.",
      "Built an advanced admin dashboard with real-time analytics, role-based access control, and automated workflows, accelerating feature delivery by 25%.",
      "Implemented performance optimization techniques that reduced application load times by 40%.",
      "Designed and developed a Garage Management System (Flutter) enabling seamless vehicle tracking, service scheduling, and billing automation.",
      "Led code review processes and established pull request workflows on Bitbucket to enhance code quality.",
      "Mentored 2 junior developers and supported onboarding of new team members, increasing team productivity by 20%.",
      "Collaborated with frontend, backend, and business teams to translate requirements into production-ready features, participating in Agile ceremonies (sprint planning, standups, retrospectives).",
    ],
  },
  {
    role: "Developer Intern",
    company: "BRV Technologies",
    location: "Hyderabad, India",
    period: "Aug 2024 – June 2025",
    type: "Internship",
    summary:
      "Frontend engineering, REST API integrations, and client-side performance optimizations across production web applications.",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "RESTful APIs",
      "Git",
      "Bitbucket",
      "Code Splitting",
    ],
    details: [
      "Developed responsive web applications using React.js, Next.js, Tailwind CSS, and Material UI.",
      "Optimized application performance through code splitting, lazy loading, and image optimization.",
      "Integrated RESTful APIs to deliver dynamic content and seamless user experiences.",
      "Collaborated with designers, backend developers, and product managers to meet project requirements.",
      "Used Git and Bitbucket for version control, supporting collaborative development and deployment workflows.",
    ],
  },
];

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#070a13] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Briefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Hands-on track record building production systems, scaling architectures, and mentoring engineers.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Spine */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 hidden sm:block opacity-30" />

          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((item, index) => {
              const isExpanded = expandedItem === index;

              return (
                <div key={index} className="relative sm:pl-16">
                  {/* Timeline Node Icon */}
                  <div className="absolute left-6 top-7 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-900 border-2 border-blue-400 hidden sm:flex items-center justify-center z-10 shadow-lg shadow-blue-500/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  </div>

                  {/* Main Job Card */}
                  <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/[0.08]">
                    {/* Header */}
                    <div
                      className="cursor-pointer"
                      onClick={() => toggleExpanded(index)}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          {/* Company Badge */}
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/30 flex-shrink-0">
                            {item.company
                              .split(" ")
                              .map((w) => w[0])
                              .join("")}
                          </div>

                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {item.role}
                            </h3>
                            <div className="text-blue-400 font-semibold text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                              <Briefcase size={16} />
                              <span>{item.company}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2.5 mt-2 text-xs text-slate-400 font-mono">
                              <span className="flex items-center gap-1">
                                <MapPin size={13} className="text-slate-400" />
                                {item.location}
                              </span>
                              <span className="text-slate-500">•</span>
                              <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 font-medium">
                                {item.type}
                              </span>
                              <span className="text-slate-500">•</span>
                              <span className="flex items-center gap-1 text-slate-300">
                                <Calendar size={13} className="text-purple-400" />
                                {item.period}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Expand / Collapse Button */}
                        <div className="self-end lg:self-center">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-blue-400 text-xs font-semibold border border-blue-500/20 transition-all"
                          >
                            <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Role summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white hover:bg-blue-500/10 text-xs font-mono border border-white/[0.04] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Detailed Responsibilities */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? "max-h-[1600px] opacity-100 mt-6 pt-6 border-t border-white/[0.08]" : "max-h-0 opacity-0"
                      }`}
                    >
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2 font-mono">
                        <Award size={16} className="text-blue-400" />
                        <span>Core Deliverables & Contributions ({item.details.length})</span>
                      </h4>

                      <ul className="space-y-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Together Banner */}
        <div className="mt-16 sm:mt-20 glass-card rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden border border-purple-500/20">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Looking for a Production-Ready Engineer?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I bring deep experience building scalable full-stack architectures, clean REST APIs, and automated deployment pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="https://linkedin.com/in/tharun-jatoth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-7 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all text-sm"
              >
                <ExternalLink size={16} />
                Connect on LinkedIn
              </a>
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white px-7 py-3 rounded-xl font-semibold border border-white/10 transition-all text-sm"
              >
                <Download size={16} />
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
