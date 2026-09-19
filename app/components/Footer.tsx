"use client";

import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  Code2,
  Zap,
  Layers,
  ArrowUp,
  Heart,
  Terminal,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/TharunJatoth",
      icon: Github,
      borderHover: "hover:border-violet-500/50 hover:text-violet-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tharun-jatoth",
      icon: Linkedin,
      borderHover: "hover:border-blue-500/50 hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:tharunjatoth620@gmail.com",
      icon: Mail,
      borderHover: "hover:border-rose-500/50 hover:text-rose-400",
    },
  ];

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const techHighlights = [
    {
      icon: Code2,
      title: "Full-Stack Architecture",
      desc: "Next.js 15, React 19, NestJS, Node.js, Spring Boot",
    },
    {
      icon: Layers,
      title: "Data & Systems",
      desc: "MongoDB, MySQL, Redis, REST APIs, Razorpay",
    },
    {
      icon: Zap,
      title: "Cloud & Reliability",
      desc: "Linux, NGINX, aaPanel, SSL/TLS, Azure AZ-900",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top Summary Row */}
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/20">
                TJ
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Tharun Jatoth
                </span>
                <p className="text-xs text-blue-400 font-medium">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software engineer with 2+ years of production experience architecting scalable Next.js
              frontends, modular NestJS/Spring Boot backends, and reliable cloud deployments.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.name}
                    className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 transition-all duration-300 ${s.borderHover}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Core Competencies Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {techHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-4 border border-white/[0.06]"
                >
                  <Icon size={20} className="text-blue-400 mb-2" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-6">
            {navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Tharun Jatoth. Crafted for high-performance web experiences.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-400">Available for Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
