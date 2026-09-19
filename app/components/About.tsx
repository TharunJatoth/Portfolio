"use client";

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
  Zap,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Years Experience",
      value: "2+",
      sub: "Production Web Apps",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      label: "Load Time Reduction",
      value: "40%",
      sub: "Optimized Performance",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Zap,
      label: "Feature Acceleration",
      value: "25%",
      sub: "Agile Sprints & Workflows",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      label: "Junior Devs Mentored",
      value: "2+",
      sub: "Code Reviews & PRs",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Frontend Engineering",
      description:
        "Modern component architecture, SSR & SSG with Next.js, React.js, Tailwind CSS, and Material UI with responsive micro-interactions.",
      skills: ["Next.js", "React.js", "Tailwind CSS", "Material UI"],
      accent: "border-blue-500/20 group-hover:border-blue-500/50",
      glow: "from-blue-500/10 to-transparent",
    },
    {
      icon: Server,
      title: "Backend Services & APIs",
      description:
        "Scalable modular backend architecture using NestJS, Node.js, and Spring Boot with granular RBAC authorization and JWT security.",
      skills: ["NestJS", "Node.js", "Spring Boot", "REST APIs", "RBAC"],
      accent: "border-purple-500/20 group-hover:border-purple-500/50",
      glow: "from-purple-500/10 to-transparent",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description:
        "High-performance data modeling, indexing, and query optimization across MongoDB document stores and MySQL relational schemas.",
      skills: ["MongoDB", "MySQL", "Query Optimization", "Schema Design"],
      accent: "border-cyan-500/20 group-hover:border-cyan-500/50",
      glow: "from-cyan-500/10 to-transparent",
    },
    {
      icon: Globe,
      title: "Cloud & Production Deployments",
      description:
        "Hands-on Linux server administration, NGINX reverse proxies, aaPanel, SSL/TLS, DNS configuration, and Microsoft Azure cloud fundamentals.",
      skills: ["Linux / NGINX", "Microsoft Azure", "aaPanel", "SSL/TLS"],
      accent: "border-emerald-500/20 group-hover:border-emerald-500/50",
      glow: "from-emerald-500/10 to-transparent",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#090d16] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Cpu size={14} />
            <span>Profile & Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Crafting Scalable Enterprise Software
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Delivering robust end-to-end applications across the modern web stack, with a deep focus on performance, security, and developer productivity.
          </p>
        </div>

        {/* 4 Impact Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 text-center group relative overflow-hidden"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 hidden sm:block">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid: Bio + 4 Pillars */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          {/* Left: Professional Bio & Status (Cols 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck size={22} className="text-blue-400" />
                <span>End-to-End Delivery</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Full Stack Developer with <span className="text-white font-semibold">2+ years of experience</span> building scalable, production-grade web applications using <span className="text-blue-400 font-medium">Next.js, React.js, NestJS, Node.js</span>, and <span className="text-indigo-400 font-medium">Spring Boot</span>.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Skilled in designing secure REST APIs, role-based access control (RBAC), and payment integrations (Razorpay), with hands-on experience across MongoDB, MySQL, and Linux server deployment (NGINX, aaPanel, SSL/TLS).
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Proven track record of improving performance, mentoring junior developers, and delivering enterprise platforms end-to-end across frontend, backend, and infrastructure.
              </p>

              {/* Quick Contact Points */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex items-center text-slate-300 text-sm">
                  <MapPin size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center text-slate-300 text-sm">
                  <Calendar size={16} className="mr-3 text-purple-400 flex-shrink-0" />
                  <span className="text-emerald-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for New Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Engineering Pillars (Cols 7) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group border ${item.accent}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />

                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-600 transition-all">
                    <Icon size={22} />
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-300 text-[11px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden border border-blue-500/20">
          <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-50" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10">
            Let's Collaborate on Scalable Systems
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-6 relative z-10">
            Whether you need a high-performance frontend, a resilient microservices backend, or a secure payment workflow, I'm ready to contribute immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all text-sm"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white px-7 py-3 rounded-xl font-semibold border border-white/10 transition-all text-sm"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
