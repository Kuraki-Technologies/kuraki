import React, { useState } from "react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";
import { X, ExternalLink, Calendar, Milestone, MilestoneIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CaseStudies() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "ai-chatbot">("all");
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const filteredCaseStudies = filter === "all" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter((c) => c.category === filter);

  const handleOpenModal = (project: CaseStudy) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="case-studies"
      className="py-24 bg-[#050810] border-t border-slate-900/60 text-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header content block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900 text-xs font-mono text-brand-primary">
              <span>🎯 OUR PRODUCTION PORTFOLIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Kuraki Solutions, <span className="text-brand-primary">Exceptional</span> Results.
            </h2>
            <p className="text-slate-400 font-sans font-light text-base leading-relaxed">
              At Kuraki Technologies, we deliver production-ready digital solutions designed for performance, scalability, and measurable business impact. Explore our portfolio to see how we transform ideas into successful products.
            </p>
          </div>

          {/* Category Filter Pills (Mobile Scrollable) */}
          <div className="flex items-center overflow-x-auto no-scrollbar pb-2 md:pb-0 gap-2 shrink-0">
            {[
              { id: "all", label: "All Works" },
              { id: "web", label: "Web Apps" },
              { id: "ai-chatbot", label: "AI & Chatbots" },
              { id: "mobile", label: "Mobile Apps" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border cursor-pointer whitespace-nowrap transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-indigo-600 border-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/20"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => handleOpenModal(project)}
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800/80 overflow-hidden cursor-pointer hover:border-brand-primary/40 hover:bg-slate-900 transition-all duration-300 shadow-xl"
              >
                
                {/* Project Image Panel */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-45 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-65 transition-all duration-500"
                  />
                  
                  {/* Category Pill Overlaid */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono uppercase bg-slate-950/80 backdrop-blur border border-slate-800 text-brand-primary px-2.5 py-1 rounded-md">
                    {project.category === "ai-chatbot"
                      ? "AI Integration"
                      : project.category === "web"
                      ? "Web Portal"
                      : "Mobile App"}
                  </span>

                  {/* Impact Metric Accent */}
                  <div className="absolute bottom-4 right-4 bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 shadow-xl text-right">
                    <div className="text-[10px] font-mono text-slate-500 uppercase leading-none">
                      {project.metric.label}
                    </div>
                    <div className="font-display text-lg font-bold text-brand-accent mt-0.5">
                      {project.metric.value}
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 sm:p-8 space-y-4 text-left flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                      Client: {project.client}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-brand-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 font-sans font-light text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Tech stack row */}
                  <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-slate-950 text-[10px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded bg-slate-950 text-[10px] font-mono text-slate-400">
                        +{project.techStack.length - 4} More
                      </span>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Project Detail Modal overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Dark backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-10 text-left z-10 no-scrollbar"
              >
                
                {/* Close Button top-right */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title Header */}
                <div className="space-y-2 pb-6 border-b border-slate-805">
                  <div className="flex items-center space-x-3 text-brand-primary text-xs font-mono uppercase">
                    <span>CASE STUDY BLUEPRINT</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {selectedProject.duration} Build
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight pr-8">
                    {selectedProject.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono">
                    Owner Operations: {selectedProject.client}
                  </div>
                </div>

                {/* Grid Split Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
                  
                  {/* Left Main (Col Span 7) */}
                  <div className="md:col-span-7 space-y-6">
                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        The Core Challenge
                      </h4>
                      <p className="text-slate-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        The Solution Implemented
                      </h4>
                      <p className="text-slate-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>

                    {/* Stacks */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        Technology Frameworks Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 bg-slate-950"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Results Sidebar (Col Span 5) */}
                  <div className="md:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-805 space-y-6">
                    <div className="flex items-center space-x-2 text-brand-accent">
                      <MilestoneIcon className="w-4 h-4" />
                      <h4 className="text-xs font-mono uppercase tracking-widest font-semibold">
                        Identified Metrics
                      </h4>
                    </div>

                    <div className="text-center py-4 bg-slate-900 rounded-xl border border-slate-805">
                      <div className="text-xs font-mono text-slate-500 uppercase">
                        {selectedProject.metric.label}
                      </div>
                      <div className="font-display text-3xl font-extrabold text-brand-accent mt-1">
                        {selectedProject.metric.value}
                      </div>
                    </div>

                    <ul className="space-y-3 text-left">
                      {selectedProject.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start text-xs text-slate-300 leading-normal">
                          <CheckCircleIcon className="w-4 h-4 text-brand-primary shrink-0 mr-2.5 mt-0.5" />
                          <span className="font-light">{res}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Modal CTA */}
                    <button
                      onClick={() => {
                        handleCloseModal();
                        const contactEl = document.querySelector("#contact");
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all text-xs uppercase tracking-wider cursor-pointer shadow-lg shadow-indigo-600/20"
                    >
                      Build Something Similar
                    </button>

                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

// Icon Helpers within file
function CheckCircleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}
