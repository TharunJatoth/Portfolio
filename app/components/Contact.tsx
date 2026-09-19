"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all fields before submitting.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("loading");

    // Simulate sending message
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setStatusMessage("Message sent successfully! I will get back to you promptly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try reaching out via direct email.");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "tharunjatoth620@gmail.com",
      href: "mailto:tharunjatoth620@gmail.com",
      actionText: "Send an Email",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 7981984440",
      href: "tel:+917981984440",
      actionText: "Call Directly",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: MapPin,
      label: "Current Location",
      value: "Hyderabad, India",
      href: "https://maps.google.com/?q=Hyderabad,+India",
      actionText: "Open in Maps",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialProfiles = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tharun-jatoth",
      icon: Linkedin,
      label: "Connect professionally",
      color: "hover:border-blue-500/40 hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/TharunJatoth",
      icon: Github,
      label: "Explore repositories",
      color: "hover:border-violet-500/40 hover:text-violet-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#070a13] relative overflow-hidden text-slate-100"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            I am available for full-stack engineering opportunities, scalable system architecture consultations,
            and impactful projects. Reach out via email, phone, or send a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <a
                    key={idx}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-2xl p-5 flex items-center justify-between border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 group block"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                          {card.label}
                        </p>
                        <p className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-slate-500 group-hover:text-blue-400 transition-colors shrink-0"
                    />
                  </a>
                );
              })}
            </div>

            {/* Social Network Profiles */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Social Profiles & Repositories
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialProfiles.map((soc, idx) => {
                  const SocIcon = soc.icon;
                  return (
                    <a
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 ${soc.color} group`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <SocIcon size={20} className="text-slate-300 group-hover:text-white" />
                        <ExternalLink size={14} className="text-slate-500" />
                      </div>
                      <span className="text-sm font-bold text-white">{soc.name}</span>
                      <span className="text-[11px] text-slate-400 mt-0.5">{soc.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability pill */}
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3.5">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Current Status
                </p>
                <p className="text-sm text-slate-200 mt-0.5">
                  Ready to join innovative engineering teams immediately in Hyderabad or remote.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.08] relative">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                    >
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Full Stack Opportunity / Technical Collaboration"
                    className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, technology stack, or open role..."
                    className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y"
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-4 rounded-xl flex items-center gap-3 text-sm ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                        : "bg-rose-500/10 text-rose-300 border border-rose-500/30"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 size={18} className="shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="shrink-0" />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
