"use client";

import React, { useState } from "react";
import {
  Code,
  Server,
  Database,
  Globe,
  Zap,
  Star,
  TrendingUp,
  ShieldCheck,
  Cpu,
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
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      skills: [
        {
          name: "Next.js",
          level: 95,
          description: "SSR, SSG, App Router & administrative dashboards",
        },
        {
          name: "React.js",
          level: 95,
          description: "Component architecture, hooks, and responsive UX",
        },
        {
          name: "JavaScript (ES6+)",
          level: 92,
          description: "Modern ES6+, asynchronous programming & APIs",
        },
        {
          name: "Tailwind CSS",
          level: 92,
          description: "Utility-first modern responsive UI design",
        },
        {
          name: "Material UI",
          level: 88,
          description: "Production UI component library & themes",
        },
        {
          name: "HTML5 & CSS3",
          level: 95,
          description: "Semantic web markup, layouts, and animations",
        },
        {
          name: "Bootstrap",
          level: 85,
          description: "Grid systems and responsive mobile components",
        },
      ],
    },
    "Backend & APIs": {
      icon: Server,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        {
          name: "NestJS",
          level: 92,
          description: "Modular enterprise architecture, services & controllers",
        },
        {
          name: "Node.js",
          level: 90,
          description: "Scalable server-side runtimes & microservices",
        },
        {
          name: "Spring Boot",
          level: 88,
          description: "Enterprise Java REST services, models & logic",
        },
        {
          name: "REST APIs",
          level: 95,
          description: "Modular API design, validation, and documentation",
        },
        {
          name: "Role-Based Access Control",
          level: 92,
          description: "Multi-role security, permissions & data isolation",
        },
        {
          name: "JWT Authentication",
          level: 92,
          description: "Secure token issuance, verification & protected routes",
        },
      ],
    },
    Databases: {
      icon: Database,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      skills: [
        {
          name: "MongoDB",
          level: 92,
          description: "Document data models, aggregations & indexes",
        },
        {
          name: "MySQL",
          level: 90,
          description: "Relational schema design, queries, and constraints",
        },
        {
          name: "Database Design",
          level: 90,
          description: "Production schema architecture & normalization",
        },
        {
          name: "Query Optimization",
          level: 88,
          description: "Index tuning, query optimization & profiling",
        },
      ],
    },
    "Cloud & Infrastructure": {
      icon: Globe,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      skills: [
        {
          name: "Linux Server Administration",
          level: 88,
          description: "Server configuration, maintenance, and CLI workflows",
        },
        {
          name: "NGINX",
          level: 88,
          description: "Reverse proxy setup, SSL/TLS, and load balancing",
        },
        {
          name: "Microsoft Azure",
          level: 85,
          description: "AZ-900 Certified (Fundamentals, Administration)",
        },
        {
          name: "aaPanel, SSL/TLS & DNS",
          level: 88,
          description: "Domain DNS records, SSL certificates, host panels",
        },
        {
          name: "Razorpay Integration",
          level: 92,
          description: "Booking, partial payments, webhooks & order lifecycle",
        },
        {
          name: "Git & Bitbucket / GitHub",
          level: 95,
          description: "Version control, pull request workflows & code review",
        },
      ],
    },
  };

  const getSkillIcon = (skillName: string): string => {
    const icons: Record<string, string> = {
      "React.js": "⚛️",
      "Next.js": "▲",
      "JavaScript (ES6+)": "🟨",
      "Tailwind CSS": "🎨",
      "Material UI": "🧩",
      "HTML5 & CSS3": "🌐",
      Bootstrap: "🅱️",
      NestJS: "🦁",
      "Node.js": "🟢",
      "Spring Boot": "🍃",
      "REST APIs": "🔌",
      "Role-Based Access Control": "🛡️",
      "JWT Authentication": "🔐",
      MySQL: "🐬",
      MongoDB: "🍃",
      "Database Design": "📊",
      "Query Optimization": "⚡",
      "Linux Server Administration": "🐧",
      NGINX: "⚙️",
      "Microsoft Azure": "☁️",
      "aaPanel, SSL/TLS & DNS": "🔒",
      "Razorpay Integration": "💳",
      "Git & Bitbucket / GitHub": "🐱",
    };
    return icons[skillName] || "💻";
  };

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl">{getSkillIcon(skill.name)}</span>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h4>
            <p className="text-xs text-slate-400 leading-snug">{skill.description}</p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md ml-2 flex-shrink-0">
          {skill.level}%
        </span>
      </div>

      <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5 border border-white/[0.04]">
        <div
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#090d16] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Zap size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Skills & Technology Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Proficiencies across frontend architecture, distributed backend services, database design, and cloud infrastructure.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
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
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3.5 cursor-pointer ${
                  isActive
                    ? `bg-slate-800/90 ${data.borderColor} shadow-lg shadow-blue-500/10 border-blue-500/40`
                    : "glass-card hover:bg-slate-800/50 border-white/[0.06]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                    isActive
                      ? `bg-gradient-to-br ${data.color} text-white shadow-md`
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`text-xs sm:text-sm font-bold truncate ${
                      isActive ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {category}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {data.skills.length} skills
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Skills Display Matrix */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/[0.08] mb-16">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/[0.08]">
            {(() => {
              const Icon = skillCategories[activeCategory].icon;
              return (
                <div
                  className={`w-11 h-11 bg-gradient-to-br ${skillCategories[activeCategory].color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon size={22} />
                </div>
              );
            })()}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeCategory} Proficiency
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Production-tested skills and implementation scope
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-900/60 rounded-2xl p-4 sm:p-5 border border-white/[0.06] hover:border-white/10 transition-colors"
              >
                <SkillBar skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Strengths Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 text-center border border-blue-500/20">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
              <Star size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Full Stack Delivery
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Complete ownership from responsive client experiences down to server configuration and reverse proxy deployments.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 text-center border border-purple-500/20">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Performance Engineering
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Proven 40% reduction in page load times via code splitting, asset optimization, query indexing, and caching strategies.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 text-center border border-emerald-500/20">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Security & Payment Workflows
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Hardened JWT authentication, role-based authorization (RBAC), and transactional Razorpay payment processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
