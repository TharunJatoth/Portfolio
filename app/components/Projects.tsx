"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  User,
  Building,
  Code,
  CheckCircle,
  Star,
} from "lucide-react";

// Define project type for TypeScript
type Project = {
  title: string;
  client: string;
  role: string;
  category: string;
  tech: string[];
  details: string[];
  status: string;
  duration: string;
};

const Projects = () => {
  const projectsData: Project[] = [
    {
      title: "E-Commerce Platform",
      client: "Tech Solutions Inc",
      role: "Full Stack Developer",
      category: "Web Application",
      tech: ["React", "Node.js", "AWS"],
      details: [
        "Built responsive e-commerce platform with React and Next.js",
        "Implemented secure payment gateway integration",
        "Developed admin dashboard for inventory management",
        "Achieved 40% performance improvement through optimization",
      ],
      status: "Completed",
      duration: "6 months",
    },
    {
      title: "Next JS Landing Page Site",
      client: "Bigcareers",
      role: "Frontend Developer",
      category: "Marketing / SEO",
      tech: ["Next.js", "TypeScript", "React.js", "Tailwind CSS"],
      details: [
        "Developed a highly responsive and SEO-optimized landing page for Kolval",
        "Used Next.js with server-side rendering to improve performance and crawlability",
        "Ensured fast load times and cross-browser compatibility",
        "Applied Tailwind CSS for clean, consistent styling and utility-first design",
        "Focused on accessibility and responsive layout across various screen sizes",
      ],
      status: "Completed",
      duration: "1 month",
    },
    {
      title: "Hospital Information Management System",
      client: "Healthcare Solutions Inc.",
      role: "Full Stack Developer",
      category: "Healthcare Platform",
      tech: [
        "Next.js",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "NextAuth.js",
      ],
      details: [
        "Developed a responsive healthcare platform using React.js and Next.js",
        "Implemented Material UI for consistent design and reusable components",
        "Integrated NextAuth.js for secure and scalable authentication",
        "Optimized performance for cross-device compatibility and accessibility",
        "Ensured responsive design and smooth UX across desktop and mobile devices",
      ],
      status: "Completed",
      duration: "6 months",
    },
    {
      title: "Interior Design Platform Integration",
      client: "PerSft",
      role: "Full Stack Developer",
      category: "Interior Design",
      tech: ["Next.js", "TypeScript", "React.js", "Tailwind CSS"],
      details: [
        "Integrated an enterprise-level interior design platform with advanced customization features",
        "Enabled users to modify design selections and receive instant cost analysis",
        "Implemented cart functionality for managing design packages and purchases",
        "Built a scheduling module to streamline project planning and execution",
        "Provided real-time project tracking for both users and administrators",
      ],
      status: "Completed",
      duration: "5 months",
    },
  ];

  const getStatusColor = (status: string): string => {
    return status === "Completed"
      ? "text-green-600 bg-green-100"
      : "text-blue-600 bg-blue-100";
  };

  const getCategoryIcon = (category: string): React.ElementType => {
    const icons: Record<string, React.ElementType> = {
      "Web Application": Code,
      "Enterprise Application": Building,
      "Data Visualization": Star,
      "Mobile Application": Briefcase,
      "Healthcare Platform": Briefcase,
      "Interior Design": Building,
      "Marketing / SEO": Briefcase,
    };
    return icons[category] || Code;
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-48 -translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-indigo-100 rounded-full translate-y-48 translate-x-48 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-6 py-2 mb-6">
            <Briefcase size={16} className="text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-600">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of successful projects demonstrating technical expertise
            and problem-solving capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <CategoryIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Client & Role Info */}
                <div className="space-y-2 mb-6">
                  {project.client && (
                    <div className="flex items-center text-gray-600">
                      <Building size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm">
                        <strong>Client:</strong> {project.client}
                      </span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center text-gray-600">
                      <User size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm">
                        <strong>Role:</strong> {project.role}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    <span className="text-sm">
                      <strong>Duration:</strong> {project.duration}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {project.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <CheckCircle
                        size={16}
                        className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Line on Hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
