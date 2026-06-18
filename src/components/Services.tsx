import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [selectedId, setSelectedId] = useState<string>(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];

  // Helper to render dynamic Lucide Icons
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <LucideIcons.HelpCircle className={className} />;
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#050810] relative overflow-hidden text-slate-100"
    >
      {/* Background glow meshes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900 text-xs font-mono text-brand-accent">
            <span>🛠 SERVICES & SPECIALTIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Our Core <span className="text-brand-accent">Software Toolkit</span>
          </h2>
          <p className="text-slate-300 font-sans font-light text-base sm:text-lg leading-relaxed">
            We operate at the convergence of fast backend architectures, elegant high-contrast interfaces, and highly intelligent custom AI models. Click on each service to reveal detailed specifications.
          </p>
        </div>

        {/* Dynamic Selector Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Button List Selector (Span 4) */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isActive = service.id === selectedId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                    isActive
                      ? "bg-slate-900 border-brand-accent shadow-xl shadow-brand-accent/5"
                      : "bg-slate-950/60 border-slate-900 hover:border-slate-800 hover:bg-slate-900/40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-brand-accent text-slate-950"
                        : "bg-slate-900 text-slate-400 group-hover:text-white"
                    }`}
                  >
                    {renderIcon(service.iconName, "w-6 h-6")}
                  </div>

                  <div className="flex-1 space-y-0.5">
                    <h3
                      className={`font-display text-base font-semibold tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans leading-tight line-clamp-1 font-light">
                      {service.subtitle}
                    </p>
                  </div>

                  <LucideIcons.ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isActive ? "text-brand-accent translate-x-1" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Detail Showcase Panel (Span 8) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 text-left"
              >
                
                {/* Header within component */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-850">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase text-brand-accent px-2.5 py-1 rounded bg-brand-accent/10">
                      TECHNICAL DIVISION
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white pt-2">
                      {selectedService.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-accent">
                    {renderIcon(selectedService.iconName, "w-6 h-6")}
                  </div>
                </div>

                {/* Subtext and Description */}
                <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed font-sans">
                  {selectedService.detailedDescription}
                </p>

                {/* Specific features / benefits list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Operational Moats
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs sm:text-sm text-slate-300">
                        <LucideIcons.CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5 mr-2.5" />
                        <span className="font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-6 border-t border-slate-850 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Primary Production Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
