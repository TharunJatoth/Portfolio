"use client";

import React, { useState } from "react";
import {
  Code,
  Server,
  Database,
  Globe,
  Layers,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";

type Skill = {
  name: string;
  level: number;
  description: string;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof skillCategories>("Frontend");

  const skillCategories = {
    Frontend: {
      icon: Code,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      skills: [
        {
          name: "React",
          level: 95,
          description: "Advanced component architecture & hooks",
        },
        {
          name: "Next.js",
          level: 90,
          description: "SSR, SSG, and full-stack applications",
        },
        {
          name: "TypeScript",
          level: 85,
          description: "Type-safe development practices",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "Utility-first CSS framework",
        },
        {
          name: "JavaScript (ES6+)",
          level: 95,
          description: "Modern JavaScript features",
        },
        {
          name: "HTML5 & CSS3",
          level: 95,
          description: "Semantic markup & modern styling",
        },
      ],
    },
    Backend: {
      icon: Server,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      skills: [
        {
          name: "Spring Boot",
          level: 90,
          description: "RESTful APIs & microservices",
        },
        {
          name: "Node.js",
          level: 85,
          description: "Server-side JavaScript runtime",
        },
        {
          name: "Express.js",
          level: 80,
          description: "Web application framework",
        },
        {
          name: "RESTful APIs",
          level: 90,
          description: "API design & implementation",
        },
        { name: "GraphQL", level: 75, description: "Query language for APIs" },
        {
          name: "Microservices",
          level: 80,
          description: "Distributed system architecture",
        },
      ],
    },
    Database: {
      icon: Database,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      skills: [
        {
          name: "MySQL",
          level: 90,
          description: "Relational database management",
        },
        {
          name: "PostgreSQL",
          level: 85,
          description: "Advanced SQL database",
        },
        {
          name: "MongoDB",
          level: 80,
          description: "NoSQL document database",
        },
        {
          name: "Redis",
          level: 75,
          description: "In-memory data structure store",
        },
        {
          name: "Database Design",
          level: 85,
          description: "Schema design & optimization",
        },
        {
          name: "Query Optimization",
          level: 80,
          description: "Performance tuning",
        },
      ],
    },
    "DevOps & Tools": {
      icon: Globe,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      skills: [
        { name: "AWS", level: 80, description: "Cloud services & deployment" },
        {
          name: "Azure",
          level: 75,
          description: "Microsoft cloud platform",
        },
        {
          name: "Docker",
          level: 85,
          description: "Containerization technology",
        },
        {
          name: "Git & GitHub",
          level: 95,
          description: "Version control systems",
        },
        {
          name: "CI/CD",
          level: 80,
          description: "Continuous integration/deployment",
        },
        {
          name: "Linux",
          level: 75,
          description: "Unix-like operating systems",
        },
      ],
    },
  };

  const getSkillIcon = (skillName: string): string => {
    const icons: Record<string, string> = {
      React: "⚛️",
      "Next.js": "🔺",
      TypeScript: "🔷",
      "JavaScript (ES6+)": "🟨",
      "Spring Boot": "🍃",
      "Node.js": "🟢",
      MySQL: "🐬",
      MongoDB: "🍃",
      AWS: "☁️",
      Docker: "🐳",
      "Git & GitHub": "🐱",
    };
    return icons[skillName] || "💻";
  };

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{getSkillIcon(skill.name)}</span>
          <div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {skill.name}
            </h4>
            <p className="text-sm text-gray-500">{skill.description}</p>
          </div>
        </div>
        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full animate-[fillBar_1.5s_ease-out_forwards]"
          style={{
            width: `${skill.level}%`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full -translate-y-36 translate-x-36 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full translate-y-36 -translate-x-36 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
            <Zap size={16} className="text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains
          </p>
        </div>

        {/* Skills Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(
            Object.entries(skillCategories) as [
              keyof typeof skillCategories,
              (typeof skillCategories)[keyof typeof skillCategories]
            ][]
          ).map(([category, data]) => {
            const Icon = data.icon;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-br ${data.bgColor} shadow-xl border-2 border-blue-200`
                    : "bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-br ${data.color} shadow-lg`
                      : "bg-gray-200 group-hover:bg-gray-300"
                  }`}
                >
                  <Icon
                    size={28}
                    className={isActive ? "text-white" : "text-gray-600"}
                  />
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isActive ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {category}
                </h3>
                <p className="text-sm text-gray-500">
                  {data.skills.length} skills
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Skills Display */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center mb-8">
            {(() => {
              const Icon = skillCategories[activeCategory].icon;
              return (
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${skillCategories[activeCategory].color} rounded-xl flex items-center justify-center mr-4`}
                >
                  <Icon size={24} className="text-white" />
                </div>
              );
            })()}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {activeCategory} Skills
              </h3>
              <p className="text-gray-600">Detailed proficiency breakdown</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <SkillBar skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Full Stack Expert
            </h4>
            <p className="text-gray-600">
              End-to-end development capabilities from frontend to backend
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Performance Focused
            </h4>
            <p className="text-gray-600">
              Optimized solutions that scale and perform under pressure
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Modern Stack
            </h4>
            <p className="text-gray-600">
              Latest technologies and industry best practices
            </p>
          </div>
        </div>
      </div>

      {/* Custom Keyframe Animation */}
      <style jsx>{`
        @keyframes fillBar {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
