import React, { useState } from "react";
import { CAREERS } from "../data";
import { CareerRole } from "../types";
import { Briefcase, Send, MapPin, AlarmClock, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Careers() {
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);
  const [applyState, setApplyState] = useState<{ [key: string]: boolean }>({});
  const [submittingApply, setSubmittingApply] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedRoleId(expandedRoleId === id ? null : id);
  };

  const handleApplyAction = (role: CareerRole) => {
    setSubmittingApply(role.id);
    
    // Simulate apply delay
    setTimeout(() => {
      setApplyState((prev) => ({ ...prev, [role.id]: true }));
      setSubmittingApply(null);
    }, 1200);
  };

  return (
    <section
      id="careers"
      className="py-24 bg-[#050810] border-t border-slate-900 relative overflow-hidden text-slate-100"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-950 text-xs font-mono text-brand-primary">
            <span>🔥 CAREERS & INTERNSHIPS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Join the <span className="text-brand-primary"> Kuraki </span> Team
          </h2>
          <p className="text-slate-300 font-sans font-light text-base sm:text-lg leading-relaxed">
           At Kuraki Technologies, we are passionate about innovation, engineering excellence, and building technology that creates real business impact. We seek talented individuals who are driven by creativity, problem-solving, and a commitment to delivering exceptional digital experiences. If you thrive on modern technologies, scalable architectures, and continuous learning, you'll feel right at home at Kuraki.
          </p>
        </div>

        {/* Career Items layout */}
        <div className="max-w-4xl mx-auto space-y-4">
          {CAREERS.map((role) => {
            const isExpanded = expandedRoleId === role.id;
            const hasApplied = applyState[role.id];
            const isWorking = submittingApply === role.id;

            return (
              <div
                key={role.id}
                className="rounded-2xl bg-slate-950/60 border border-slate-805 transition-all duration-300 hover:border-slate-700 hover:bg-slate-950 overflow-hidden text-left"
              >
                {/* Accordion Trigger header */}
                <button
                  onClick={() => toggleExpand(role.id)}
                  className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono uppercase bg-brand-primary/10 border border-brand-primary/15 text-brand-primary px-2.5 py-0.5 rounded">
                        {role.department}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-slate-500">
                        {role.experience} EXP REQUIRED
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-4 shrink-0自 mt-2 sm:mt-0">
                    <div className="flex items-center text-xs text-slate-400 font-sans">
                      <MapPin className="w-4 h-4 text-slate-500 mr-1 shrink-0" />
                      {role.location}
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Sub Panel details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-8 sm:px-8 space-y-6 border-t border-slate-900/50 pt-6">
                        
                        <div className="space-y-2">
                          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                            Overview of Role
                          </h4>
                          <p className="text-slate-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                            {role.description}
                          </p>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {role.requirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex items-start text-xs sm:text-sm text-slate-300 leading-normal">
                                <span className="h-1.5 w-1.5 bg-brand-primary rounded-full shrink-0 mr-3 mt-2" />
                                <span className="font-light">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply Interaction block inside role details */}
                        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono uppercase">
                            <AlarmClock className="w-4 h-4 text-slate-600" />
                            <span>Commitment: {role.commitment}</span>
                          </div>

                          {hasApplied ? (
                            <div className="text-xs bg-brand-primary/10 border border-brand-primary/20 text-brand-primary px-4 py-2 rounded-xl font-bold flex items-center space-x-2">
                              <span>Application Logged successfully! We will contact you soon.</span>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleApplyAction(role)}
                              disabled={isWorking}
                              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer flex items-center disabled:opacity-50 shadow-md shadow-indigo-600/20"
                            >
                              {isWorking ? "Syncing resume..." : "Apply in 1-Click"}
                              <Send className="ml-1.5 w-4 h-4" />
                            </button>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
