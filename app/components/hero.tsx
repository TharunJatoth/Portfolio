"use client";

import React from "react";
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Download,
  Code,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Phone,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    { name: "Next.js", icon: "▲" },
    { name: "React.js", icon: "⚛️" },
    { name: "NestJS", icon: "🦁" },
    { name: "Node.js", icon: "🟢" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "Razorpay", icon: "💳" },
    { name: "Azure", icon: "☁️" },
    { name: "Linux NGINX", icon: "🐧" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#070a13]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-48 w-[28rem] h-[28rem] bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-tech opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main 2-column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content (Cols 7) */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Status Beacon Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Full-Stack Opportunities
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
              <span className="text-slate-400 font-medium text-lg sm:text-2xl block mb-2 font-mono">
                Hello, I'm Tharun Jatoth
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <span className="block mt-1 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                & Systems Builder
              </span>
            </h1>

            {/* Value Proposition Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              Full Stack Developer with <strong className="text-white font-semibold">2+ years of experience</strong> building scalable, production-grade web applications using{" "}
              <span className="text-blue-400 font-medium">Next.js, React.js, NestJS, Node.js</span>, and{" "}
              <span className="text-indigo-400 font-medium">Spring Boot</span>. Skilled in designing secure REST APIs, role-based access control, Razorpay payment flows, and Linux server deployments (NGINX, aaPanel, SSL).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
              <a
                href="/Tharun_Jatoth_Resume.pdf"
                download="Tharun_Jatoth_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all text-sm group"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => scrollToSection("#projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white px-7 py-3.5 rounded-xl font-semibold border border-white/10 hover:border-blue-500/40 transition-all text-sm group"
              >
                <Code size={18} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                View Key Projects
              </button>
            </div>

            {/* Quick Social & Contact Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono mr-2 hidden sm:inline">
                Connect:
              </span>
              <a
                href="https://github.com/TharunJatoth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 hover:border-slate-600 transition-all shadow-sm hover:scale-105"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/tharun-jatoth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all shadow-sm hover:scale-105"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:tharunjatoth620@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-white/10 hover:border-indigo-500/30 transition-all shadow-sm hover:scale-105"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+917981984440"
                aria-label="Phone"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all shadow-sm hover:scale-105"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Right Profile Photo & Floating Badges (Cols 5) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 opacity-60 blur-lg animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1">
                {/* Photo container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                  <img
                    src="/Profile.jpg"
                    alt="Tharun Jatoth"
                    className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Stat Badge 1 - Top Left */}
              <div className="absolute -top-3 -left-4 sm:-left-8 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-2xl px-3.5 py-2 shadow-xl shadow-black/60 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Zap size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">40% Faster</div>
                  <div className="text-[10px] text-slate-400">Load Times</div>
                </div>
              </div>

              {/* Floating Stat Badge 2 - Bottom Right */}
              <div className="absolute -bottom-3 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-md border border-purple-500/30 rounded-2xl px-3.5 py-2 shadow-xl shadow-black/60 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">Enterprise RBAC</div>
                  <div className="text-[10px] text-slate-400">& Razorpay Auth</div>
                </div>
              </div>

              {/* Verified Beacon */}
              <div className="absolute bottom-4 left-4 p-2 bg-slate-900/90 rounded-full border border-white/20 shadow-lg text-amber-400">
                <Sparkles size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills Ribbon */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08]">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Core Production Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/[0.08] hover:border-blue-500/30 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm hover:scale-105"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase group-hover:translate-y-0.5 transition-transform">
              Scroll Down
            </span>
            <ChevronDown size={18} className="animate-bounce text-slate-400 group-hover:text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
