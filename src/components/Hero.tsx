import React from "react";
import { Sparkles, Terminal, Code2, ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techBadges = [
    { name: "TypeScript", color: "border-blue-500/30 text-blue-400 bg-blue-950/20" },
    { name: "React / Vite", color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20" },
    { name: "Gemini SDK", color: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20" },
    { name: "Node Express", color: "border-green-500/30 text-green-400 bg-green-950/20" },
    { name: "PostgreSQL", color: "border-sky-500/30 text-sky-400 bg-sky-950/20" },
    { name: "Python / AI", color: "border-yellow-500/30 text-yellow-400 bg-yellow-950/20" },
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#050810] flex items-center"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-indigo-600/10 blur-[80px] glow-bg" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-purple-600/10 blur-[100px] glow-bg [animation-delay:2s]" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-pink-600/5 blur-[90px] glow-bg [animation-delay:4s]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>⚡ AMBITIOUS DIGITAL CRAFT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none"
            >
              Building Technology That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 relative">
               Powers the Future.
                <span className="absolute left-0 bottom-1 w-full h-[5px] bg-indigo-500/20 rounded" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl font-sans font-light leading-relaxed"
            >
              Kuraki Technologies is a software development and technology consulting company specializing in custom web applications, mobile solutions, cloud platforms, and AI-powered products. We create scalable, secure, and innovative digital experiences that help businesses accelerate growth, improve efficiency, and stay ahead in a rapidly evolving digital world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo("#estimator")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full cursor-pointer shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-200 group"
              >
                Cost Estimator Widget
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScrollTo("#services")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-850 hover:border-slate-700 cursor-pointer transition-all duration-200"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-4"
            >
              <div>
                <div className="font-display text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">Custom Hand-written Code</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-brand-primary">0</div>
                <div className="text-xs text-slate-400">Generic Templates Used</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-brand-accent">24/7</div>
                <div className="text-xs text-slate-400">Supportive Chat Agents</div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Screen / Graphic (Right Column) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full aspect-square max-w-[420px] mx-auto"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-800 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-slate-900 animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* Inner Glowing Orb */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-brand-primary/20 via-brand-violet/20 to-brand-accent/10 blur-xl opacity-80" />

              {/* The "Brain" or Code Core Mockup */}
              <div className="absolute inset-12 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl hover:border-brand-primary/50 transition-colors duration-500">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">Kuraki Technologies_engine.ts</span>
                </div>

                {/* Simulated Logs */}
                <div className="flex-1 font-mono text-[11px] text-slate-300 py-6 space-y-2 overflow-hidden text-left">
                  <p className="text-slate-500">// Bootstrapping client software system...</p>
                  <p className="text-brand-accent">✔ UI/UX Framework: Loaded [Inter + Space]</p>
                  <p className="text-purple-400">✔ Neural Engine: Active-Proxy enabled</p>
                  <p className="text-orange-400">✔ Custom APIs: WebSockets established</p>
                  <p className="text-emerald-400">✔ Status: 100% Weird & Elite</p>
                  <span className="inline-block w-2 h-4 bg-white animate-pulse" />
                </div>

                {/* Simulated Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  <span>UTF-8</span>
                  <span className="text-slate-400 flex items-center">
                    <Terminal className="w-3.5 h-3.5 mr-1" /> Ready
                  </span>
                </div>
              </div>

              {/* Floating Tech Badges around Orb */}
              <div className="absolute -top-2 left-6 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/90 text-xs font-mono text-white flex items-center shadow-lg transform -rotate-6 animate-pulse">
                <Code2 className="w-3.5 h-3.5 text-brand-primary mr-1 bg-brand-primary/10 p-0.5 rounded" /> TS + React
              </div>

              <div className="absolute bottom-6 -right-4 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/90 text-xs font-mono text-white flex items-center shadow-lg transform rotate-3 animate-pulse [animation-delay:1s]">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent mr-1 bg-brand-accent/10 p-0.5 rounded" /> AI Agent
              </div>
            </motion.div>
          </div>

        </div>

        {/* Brand Technologies Marquee */}
        <div className="mt-20 md:mt-24 pt-8 border-t border-slate-900/80">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-400 text-center mb-6">
            Elite tooling for state-of-the-art software engineering
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, idx) => (
              <motion.span
                key={badge.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                className={`px-4 py-2 rounded-xl border text-xs font-mono tracking-wide ${badge.color} shadow-sm`}
              >
                {badge.name}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
