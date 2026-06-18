import React from "react";
import { Sparkles, HeartCrack, Rocket, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const letters = [
  {
    char: "K",
    title: "Knowledge Excellence",
    desc: "We combine industry expertise, technical mastery, and strategic thinking to deliver intelligent digital solutions.",
    bgColor: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20"
  },
  {
    char: "U",
    title: "User-Focused Innovation",
    desc: "Every solution is designed around user needs, ensuring seamless experiences, accessibility, and business impact.",
    bgColor: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20"
  },
  {
    char: "R",
    title: "Reliable Technology",
    desc: "We build secure, scalable, and high-performance systems that organizations can trust for mission-critical operations.",
    bgColor: "bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20"
  },
  {
    char: "A",
    title: "Advanced Engineering",
    desc: "By leveraging modern architectures, cloud technologies, and AI-driven solutions, we help businesses stay ahead.",
    bgColor: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20"
  },
  {
    char: "K",
    title: "Key Strategic Growth",
    desc: "Our technology solutions are designed to accelerate business growth, efficiency, and long-term success.",
    bgColor: "bg-indigo-500/15 text-indigo-300 group-hover:bg-indigo-500/25"
  },
  {
    char: "I",
    title: "Integrity & Innovation",
    desc: "We uphold the highest standards of transparency, quality, and innovation in every project we deliver.",
    bgColor: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20"
  }
];

  return (
    <section
      id="why-kuraki"
      className="py-24 bg-[#050810] border-t border-slate-900 relative overflow-hidden text-slate-100"
    >
      {/* Background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-950 text-xs font-mono text-brand-primary">
            <span>💡 WHAT WE STAND FOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Why Choose <span className="text-brand-primary"> Kuraki </span> Technologies?
          </h2>
          <p className="text-slate-300 font-sans font-light text-base sm:text-lg leading-relaxed">
              At Kuraki Technologies, we believe exceptional software is built through innovation, precision, and a deep understanding of business needs. Rather than delivering one-size-fits-all solutions, we develop scalable, high-performance digital products tailored to each client's unique goals. Our commitment to engineering excellence, transparency, and long-term value enables businesses to innovate, grow, and succeed in an ever-evolving digital world.          
              </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Callout Card (Left Span 4) */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-950 border border-slate-800/80 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-colors" />
            
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">
                The Kuraki Standard
              </h3>
              <p className="text-slate-400 font-sans font-light text-sm leading-relaxed">
                At Kuraki Technologies, we are committed to delivering solutions that go beyond expectations. We partner with businesses that recognize technology as a strategic advantage and a catalyst for growth.
              </p>
              <p className="text-slate-400 font-sans font-light text-sm leading-relaxed">
                Following The Kuraki Standard means building scalable, secure, and future-ready software through modern technologies, robust architectures, and exceptional user experiences. Every solution we create is driven by innovation, engineering excellence, and a commitment to long-term business success.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 bg-slate-950/40">
              <div className="flex items-center space-x-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                  <ShieldCheck className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Full IP Protection</h4>
                  <p className="text-[11px] text-slate-500">You own 100% of the hand-written code assets.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Acronym List (Right Span 8) */}
          <div className="lg:col-span-8 space-y-4 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {letters.map((item, idx) => (
                <motion.div
                  key={item.char}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-300 hover:bg-slate-950"
                >
                  {/* Huge Letter */}
                  <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center font-display text-2xl font-bold transition-colors ${item.bgColor}`}>
                    {item.char}
                  </div>
                  
                  {/* Description text */}
                  <div className="space-y-1 text-left">
                    <h4 className="font-display text-base font-semibold text-white group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 font-sans font-light text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
