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

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <Hero />
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
