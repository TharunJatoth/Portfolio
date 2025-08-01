"use client";

import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  Code,
  Zap,
  Globe,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:tharunjatoth620@gmail.com",
      icon: Mail,
      color: "from-red-500 to-red-600",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tharun-jatoth",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/TharunJatoth/tharun",
      icon: Github,
      color: "from-gray-700 to-gray-800",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 text-slate-300 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-900/20 to-pink-900/20 rounded-full translate-y-48 translate-x-48"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            {/* Logo/Name */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Tharun Jatoth
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            </div>

            {/* CTA Message */}
            <div className="max-w-2xl mx-auto mb-12">
              <h4 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-lg text-slate-400 leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on
                new projects and collaborate with innovative teams.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Skills Summary */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code size={24} className="text-white" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">
                  Full Stack Development
                </h5>
                <p className="text-slate-400 text-sm">
                  React, Next.js, Spring Boot, Node.js
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe size={24} className="text-white" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">
                  Cloud & DevOps
                </h5>
                <p className="text-slate-400 text-sm">
                  AWS, Azure, Docker, Microservices
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} className="text-white" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">
                  Performance Optimization
                </h5>
                <p className="text-slate-400 text-sm">
                  Database tuning, Code optimization
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center mb-12">
            <h5 className="text-lg font-bold text-white mb-6">
              Quick Navigation
            </h5>
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center mt-16 text-sm text-slate-500 border-t border-slate-700/50 pt-8 relative">
            <p>
              &copy; {currentYear} Tharun Jatoth. Built with ❤️ and Next.js.
            </p>
            <button
              onClick={scrollToTop}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-700 hover:bg-slate-600 text-white rounded-full p-2 shadow-lg transition"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
