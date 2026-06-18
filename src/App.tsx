/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectCalculator from "./components/Calculator";
import CaseStudies from "./components/CaseStudies";
import ChatbotPlayground from "./components/ChatbotPlayground";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleCalculatePrefill = (detailsText: string) => {
    setPrefilledMessage(detailsText);
  };

  return (
    <div className="min-h-screen bg-[#050810] text-slate-100 font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden antialiased">
      {/* Dynamic glow overlay behind the app */}
      <div className="fixed top-0 inset-x-0 h-[500px] bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Navigation Bar Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero visual stage */}
          <Hero />

          {/* 2. Values & Philosophy */}
          <About />

          {/* 3. Core specialties panel */}
          <Services />

          {/* 4. Cost scoping Estimator */}
          <ProjectCalculator onCalculate={handleCalculatePrefill} />

          {/* 5. Production Cases list */}
          <CaseStudies />

          {/* 6. AI conversational sandbox */}
          <ChatbotPlayground />

          {/* 7. Working Opportunities catalog */}
          <Careers />

          {/* 8. Contact form & NDA guarantee */}
          <Contact prefilledMessage={prefilledMessage} />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </div>
  );
}

