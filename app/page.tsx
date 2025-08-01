"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      {/* Main Content Sections */}
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}
