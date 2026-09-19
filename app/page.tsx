"use client";
import React from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Education from "@/app/components/Education";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070a13] text-slate-100 overflow-x-hidden">
      <Header />

      <main className="w-full flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
