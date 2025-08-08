"use client";

import React from "react";
import {
  Award,
  GraduationCap,
  MapPin,
  BookOpen,
  Star,
  Trophy,
  CheckCircle,
} from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-indigo-100 to-purple-100 rounded-full -translate-y-36 translate-x-36 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full translate-y-36 -translate-x-36 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-50 rounded-full px-6 py-2 mb-6">
            <GraduationCap size={16} className="text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-600">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic achievements and professional certifications that form the
            foundation of my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                <p className="text-gray-600">Academic qualifications</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Bachelor's Degree */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        Bachelor of Technology
                      </h4>
                      <p className="text-blue-600 font-medium">
                        Computer Science & Engineering
                      </p>
                    </div>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    2019 - 2023
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm">
                    Christu Jyothi Institute of Technology and Science
                  </span>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    Focused on software engineering principles, data structures,
                    algorithms, and modern web technologies.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    CGPA: <span className="text-gray-800">7.1</span>
                  </p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <BookOpen size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        Intermediate
                      </h4>
                      <p className="text-purple-600 font-medium">
                        Mathematics, Physics, Chemistry
                      </p>
                    </div>
                  </div>
                  <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                    2017 - 2019
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm">Sri Gayatri Jr.College</span>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    Strong foundation in analytical thinking and problem-solving
                    through science and mathematics.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    Percentage: <span className="text-gray-800">70%</span>
                  </p>
                </div>
              </div>

              {/* SSC */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <BookOpen size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">SSC</h4>
                      <p className="text-blue-600 font-medium">
                        General Studies
                      </p>
                    </div>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    2016 - 2017
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm">Sri Aurobindo High School</span>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    Gained fundamental knowledge across various subjects with
                    emphasis on discipline and academic curiosity.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    CGPA: <span className="text-gray-800">8.0</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Trophy size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Certifications
                </h3>
                <p className="text-gray-600">Professional achievements</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Microsoft Azure Certification */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        Microsoft Certified
                      </h4>
                      <p className="text-blue-600 font-medium">
                        Azure Fundamentals AZ-900
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-500" />
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 mb-3">
                  <p className="text-sm text-gray-600">
                    Validated foundational knowledge of cloud services and
                    Microsoft Azure platform capabilities.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    Cloud Computing
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    Azure Services
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    Cloud Security
                  </span>
                </div>
              </div>

              {/* Microsoft Future Ready Talent */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                      <Star size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        Microsoft Future Ready Talent
                      </h4>
                      <p className="text-green-600 font-medium">
                        Virtual Internship Program
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-500" />
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4 mb-3">
                  <p className="text-sm text-gray-600">
                    Completed comprehensive program focusing on emerging
                    technologies and industry best practices.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    AI/ML
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    Data Science
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    Cloud Development
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <Star size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        CVCORP Training Certificate
                      </h4>
                      <p className="text-blue-600 font-medium">
                        Core Java, Adv Java, SQL, HTML/CSS
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-blue-500" />
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 mb-3">
                  <p className="text-sm text-gray-600">
                    Completed training program at <strong>CVCORP</strong> from
                    Aug 2023 to April 2024 under the guidance of HR Priyanka T.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    Core Java
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    Advanced Java
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    SQL
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    HTML/CSS
                  </span>
                </div>
              </div>

              {/* Continuous Learning Card */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-dashed border-purple-300">
                <div className="text-center">
                  <Trophy size={32} className="text-purple-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-gray-600">
                    Actively pursuing additional certifications in cloud
                    architecture and advanced development frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Academic Excellence
            </h4>
            <p className="text-gray-600">
              Strong foundation in computer science principles and engineering
              practices
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Industry Certified
            </h4>
            <p className="text-gray-600">
              Microsoft certified professional with cloud computing expertise
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Future Ready
            </h4>
            <p className="text-gray-600">
              Committed to staying current with emerging technologies and trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
