"use client";

import React from "react";
import {
  Briefcase,
  Building,
  Code2,
  CheckCircle2,
  Layers,
  Sparkles,
  Server,
  ShoppingCart,
  Wrench,
  ShieldCheck,
  Zap,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  status: "Production" | "Completed";
  statusNote: string;
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
  tech: string[];
  highlights: string[];
  metrics?: { label: string; value: string };
};

const Projects = () => {
  const projectsData: Project[] = [
    {
      id: "interior-design-platform",
      title: "Enterprise Interior Design & Project Management Platform",
      category: "Enterprise Full-Stack Platform",
      role: "Full Stack Developer",
      status: "Production",
      statusNote: "Active Production Deployment",
      icon: Building,
      accentColor: "from-blue-500 via-indigo-500 to-violet-500",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      tech: ["Next.js", "NestJS", "MongoDB", "Razorpay", "Linux", "NGINX", "Tailwind CSS"],
      metrics: { label: "Deployment", value: "Linux + NGINX + SSL" },
      highlights: [
        "Delivered end-to-end production features spanning responsive frontend, modular NestJS backend services, and high-performance MongoDB data layers.",
        "Engineered role-based dashboards and multi-tenant workflows for administrators, vendors, and customers with strict access control.",
        "Integrated end-to-end Razorpay payment workflows supporting booking payments, installment milestones, and automated transaction verification.",
        "Configured production servers, domain DNS, SSL/TLS certificates, reverse proxies, and continuous performance tuning.",
      ],
    },
    {
      id: "ecommerce-platform",
      title: "Full-Stack Multi-Vendor E-Commerce Platform",
      category: "E-Commerce & Marketplaces",
      role: "Full Stack Developer",
      status: "Completed",
      statusNote: "Full Architecture & REST APIs",
      icon: ShoppingCart,
      accentColor: "from-violet-500 via-purple-500 to-fuchsia-500",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
      metrics: { label: "Security", value: "JWT + RBAC Guards" },
      highlights: [
        "Engineered scalable commerce architecture with isolated workflows for administrators, storefront vendors, and retail customers.",
        "Built inventory, real-time stock levels, catalog indexing, product categorizations, and automated order processing pipelines.",
        "Designed normalized MongoDB schemas and secure RESTful endpoints with centralized error handling and request validation.",
        "Implemented secure JWT authentication, encrypted credential storage, and responsive Next.js frontend interfaces.",
      ],
    },
    {
      id: "garage-management-system",
      title: "Garage Management System (GMS)",
      category: "Automotive & Service Workflow",
      role: "Backend & Database Developer",
      status: "Completed",
      statusNote: "Service Lifecycle & Billing",
      icon: Wrench,
      accentColor: "from-emerald-500 via-teal-500 to-cyan-500",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "Postman", "Hibernate/JPA"],
      metrics: { label: "Backend", value: "Spring Boot + MySQL" },
      highlights: [
        "Constructed robust backend services covering the entire vehicle lifecycle: intake inspection, technician assignment, job execution, and billing.",
        "Designed structured relational MySQL schemas ensuring data consistency across customers, service logs, parts inventory, and invoices.",
        "Implemented custom business exceptions, input validation, and high-reliability transaction management.",
        "Exhaustively tested and documented all REST endpoints with Postman collections for rapid third-party integration.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#070a13] relative overflow-hidden text-slate-100"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase size={14} />
            <span>Featured Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Production & Enterprise{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real-world systems demonstrating architectural rigor, secure payment lifecycles,
            modular microservices, and end-to-end production deployments.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            const isFeatured = idx === 0;

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-blue-500/30 group relative overflow-hidden"
              >
                {/* Subtle top gradient accent on card */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Header bar: Category + Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white shadow-inner">
                          <Icon size={20} className="text-blue-400" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {project.category}
                          </span>
                          <p className="text-xs text-slate-500">
                            Role: <span className="text-slate-300 font-medium">{project.role}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.status === "Production" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span>{project.statusNote}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                            <CheckCircle2 size={13} />
                            <span>{project.statusNote}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Highlights / Responsibilities */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <Layers size={14} className="text-blue-400" />
                        <span>Key Deliverables & Architectural Impact</span>
                      </p>
                      <ul className="space-y-2.5">
                        {project.highlights.map((point, pointIdx) => (
                          <li
                            key={pointIdx}
                            className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-400 shrink-0 mt-0.5"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Tech Stack & Architecture Specs */}
                  <div className="lg:col-span-5 bg-slate-900/60 rounded-2xl p-6 border border-white/[0.06] flex flex-col justify-between space-y-6">
                    {/* Tech Stack List */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                        <Code2 size={14} className="text-violet-400" />
                        <span>Technology Stack</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:border-blue-400/40 hover:bg-white/[0.08] transition-all"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Architecture Pill */}
                    {project.metrics && (
                      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-500/20">
                        <p className="text-xs text-slate-400 uppercase font-semibold">
                          System Capability
                        </p>
                        <p className="text-base font-bold text-white mt-0.5">
                          {project.metrics.value}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Enterprise-grade deployment with full production verification and zero-downtime workflows.
                        </p>
                      </div>
                    )}

                    {/* Quick highlights footer */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-emerald-400" />
                        Production Tested
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Zap size={14} className="text-amber-400" />
                        Optimized Performance
                      </span>
                    </div>
                  </div>
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
