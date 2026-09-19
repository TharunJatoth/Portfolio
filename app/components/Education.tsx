"use client";

import React from "react";
import {
  Award,
  GraduationCap,
  MapPin,
  BookOpen,
  Calendar,
  CheckCircle2,
  Trophy,
  Users,
  Compass,
  Cloud,
  Sparkles,
} from "lucide-react";

const Education = () => {
  const academics = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Christu Jyothi Institute of Technology and Science",
      location: "Jangaon, Telangana",
      period: "2019 – 2023",
      score: "GPA: 7.0",
      details:
        "Comprehensive coursework in Data Structures & Algorithms, Database Management Systems, Operating Systems, Web Technologies, and Software Engineering.",
      highlightColor: "from-blue-500 to-indigo-500",
    },
    {
      degree: "Intermediate (MPC)",
      field: "Mathematics, Physics, Chemistry",
      institution: "Sri Gayatri Junior College",
      location: "Hyderabad, Telangana",
      period: "2017 – 2019",
      score: "Score: 70%",
      details:
        "Rigorous foundation in advanced mathematical modeling, analytical problem solving, and scientific methods.",
      highlightColor: "from-violet-500 to-purple-500",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "General Secondary Curriculum",
      institution: "Sri Aurobindo High School",
      location: "Telangana, India",
      period: "2016 – 2017",
      score: "GPA: 8.0",
      details:
        "Consistent academic excellence with deep engagement in mathematics, physical sciences, and computer literacy.",
      highlightColor: "from-cyan-500 to-blue-500",
    },
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      code: "AZ-900",
      issuer: "Microsoft",
      icon: Cloud,
      accent: "from-blue-600 to-sky-500",
      badge: "Cloud Certified",
      summary:
        "Demonstrated foundational knowledge of cloud concepts, Microsoft Azure architectural services, governance, privacy, compliance, and cloud cost management.",
      skills: ["Azure Cloud", "Identity & Security", "Cloud Architecture", "Compliance"],
    },
    {
      title: "Microsoft Future Ready Talent",
      code: "Virtual Internship",
      issuer: "Microsoft & Partners",
      icon: Trophy,
      accent: "from-emerald-500 to-teal-500",
      badge: "Industry Certified",
      summary:
        "Completed industry-oriented engineering immersion covering modern cloud technologies, serverless architecture, AI foundations, and full-stack development best practices.",
      skills: ["Cloud Development", "Modern DevOps", "AI Services", "Industry Workflows"],
    },
  ];

  const leadershipRoles = [
    {
      role: "Project Lead",
      organization: "Fall Detection System",
      badge: "System Architect",
      summary:
        "Directed a cross-functional engineering team to build a machine learning powered 'Fall Detection' system classifying fall vs non-fall postures with automated emergency alerts.",
    },
    {
      role: "Club Convenor",
      organization: "Research & Development (R&D) Club",
      badge: "Technical Leadership",
      summary:
        "Organized hackathons, technical seminars, and code workshops. Mentored junior engineering students in full-stack architecture, clean coding, and git version control.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-[#090d16] relative overflow-hidden text-slate-100"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-36 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap size={14} />
            <span>Credentials & Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Education, Certifications &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Verified academic qualifications in Computer Science, official Microsoft cloud credentials,
            and proven leadership heading technical initiatives.
          </p>
        </div>

        {/* Top Grid: Education & Certifications */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Academic Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Qualifications</h3>
                <p className="text-xs text-slate-400">Computer science degree & secondary education</p>
              </div>
            </div>

            <div className="space-y-4">
              {academics.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/30 group relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.highlightColor} opacity-50 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-medium text-blue-400">{item.field}</p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/[0.05] text-slate-300 border border-white/10">
                        <Calendar size={11} className="text-slate-400" />
                        {item.period}
                      </span>
                      <span className="text-xs font-bold text-emerald-400">
                        {item.score}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-xs text-slate-400 mb-3 gap-1.5">
                    <MapPin size={13} className="text-slate-500 shrink-0" />
                    <span>{item.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-500">{item.location}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed border-l-2 border-blue-500/40 pl-3">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Microsoft Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cloud Certifications</h3>
                  <p className="text-xs text-slate-400">Microsoft verified credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => {
                  const CertIcon = cert.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/30 group relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.accent} flex items-center justify-center text-white shrink-0 shadow-lg`}
                          >
                            <CertIcon size={20} />
                          </div>
                          <div>
                            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                              {cert.issuer}
                            </span>
                            <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                              {cert.title}
                            </h4>
                          </div>
                        </div>

                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                          {cert.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4 pl-1">
                        {cert.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]"
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

            {/* Leadership & Extra-Curricular */}
            <div className="pt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Leadership & Mentorship</h3>
                  <p className="text-xs text-slate-400">Team leadership and club initiatives</p>
                </div>
              </div>

              <div className="space-y-4">
                {leadershipRoles.map((lead, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-amber-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          {lead.role}
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          {lead.organization}
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                        {lead.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lead.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
