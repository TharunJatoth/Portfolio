import React from "react";
import {
  Code,
  Server,
  Database,
  Globe,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Coffee,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: Coffee, label: "Cups of Coffee", value: "500+" },
    { icon: TrendingUp, label: "Years Experience", value: "1+" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Spring Boot, Node.js, APIs",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MySQL, MongoDB, PostgreSQL",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "AWS, Azure, Docker",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
            <Award size={16} className="text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                With a strong foundation in{" "}
                <span className="font-semibold text-blue-600">Next.js</span>,
                <span className="font-semibold text-purple-600"> React</span>,
                and
                <span className="font-semibold text-indigo-600">
                  {" "}
                  Spring Boot
                </span>
                , I specialize in creating high-performance web applications
                that deliver exceptional user experiences.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I'm passionate about clean code, modern development practices,
                and staying up-to-date with the latest technologies. My goal is
                to bridge the gap between design and functionality, creating
                solutions that are both beautiful and powerful.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Personal Info */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 space-y-4">
              <div className="flex items-center text-gray-700">
                <MapPin size={20} className="mr-3 text-blue-600" />
                <span className="font-medium">Hyderabad, Telangana, India</span>
              </div>

              <div className="flex items-center text-gray-700">
                <Calendar size={20} className="mr-3 text-purple-600" />
                <span className="font-medium">
                  Available for new opportunities
                </span>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Let's connect:</p>
                <div className="flex space-x-4">
                  <a
                    href="mailto:tharunjatoth620@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    tharunjatoth620@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My Journey in Numbers</h3>
            <p className="text-blue-100 text-lg">
              Some highlights from my development career
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. I'm
              always excited to work on new challenges and innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Get In Touch
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
