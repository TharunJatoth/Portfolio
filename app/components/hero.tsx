import React from "react";
import {
  Download,
  Code,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ProfileImage = () => (
    <img
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  );

  return (
    <section
      id="hero"
      className="min-h-screen pt-[50px] scroll-mt-[96px] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Available for new opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent block">
                Full Stack
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Developer
              </span>
            </h1>
          </div>

          {/* Right Profile */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 relative group">
                {/* Background Shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>

                {/* Profile Image */}
                <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105 border-4 border-white">
                  <ProfileImage />
                </div>

                {/* Status Indicators */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  <Sparkles size={20} className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Content */}
        <div className="text-center mt-12">
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            I build{" "}
            <span className="font-semibold text-blue-600">responsive</span>,
            <span className="font-semibold text-purple-600"> scalable</span>,
            and
            <span className="font-semibold text-indigo-600">
              {" "}
              optimized
            </span>{" "}
            web applications that transform ideas into exceptional digital
            experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 min-w-[200px]">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 min-w-[200px]"
            >
              <Code size={20} className="group-hover:animate-pulse" />
              View My Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide font-semibold">
              Tech Stack & Methodologies
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Spring Boot",
                "Node.js",
                "MySQL",
                "Agile",
                "Scrum",
                "TDD",
                "Code Reviews",
                "RESTful APIs",
                "Responsive Design",
                "CI/CD",
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium text-gray-700">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="mailto:tharunjatoth620@gmail.com"
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <Mail
                size={24}
                className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
              />
            </a>
            <a
              href="https://linkedin.com/in/tharun-jatoth"
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <Linkedin
                size={24}
                className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
              />
            </a>
            <a
              href="https://github.com/TharunJatoth/tharun"
              className="group p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <Github
                size={24}
                className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
              />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("#about")}
            className="animate-bounce hover:animate-none transition-all duration-200 group"
          >
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Scroll Down
              </span>
              <ChevronDown
                size={32}
                className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        body {
          scroll-behavior: smooth;
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
};

export default Hero;
