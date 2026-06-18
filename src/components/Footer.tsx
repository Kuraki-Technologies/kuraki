import React from "react";
import { ArrowUp, Terminal, Cpu } from "lucide-react";
import kurakiLogo from "../img/kurakilogo1.png";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="app-footer"
      className="bg-[#050810] text-slate-400 border-t border-slate-900/60 py-16 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Logo brand (Col Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 group"
            >
              <div className="relative flex items-center justify-center w-22 h-22 rounded-lg from-indigo-500 to-purple-600 font-bold text-white leading-none">
              <img
                src={kurakiLogo}
                alt="Kuraki Logo"
                className="w-22 h-22 object-contain"
              />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors">
                  Kuraki<span className="text-brand-primary"> Technologies</span>
                </span>
                <span className="text-[8px] font-mono tracking-wider uppercase text-slate-500">
                  TECHNOLOGY, INFORMATION & INTELLIGENCE
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-sm font-light leading-relaxed">
              We are an independent engineering collective that builds fast web ports, native mobile systems, and scalable AI context pipelines. We believe custom computer code is each business's ultimate operational moat.
            </p>

            <div className="flex items-center space-x-1 text-[10px] text-slate-600 font-mono">
              <Terminal className="w-3.5 h-3.5 mr-1" />
              <span>PIPELINES RUN ON SECURE CONTAINERS</span>
            </div>
          </div>

          {/* Quick links division (Col Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Company Core
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleScrollToSection("#why-weird")}
                  className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                >
                  The Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("#services")}
                  className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                >
                  Our Technical Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("#case-studies")}
                  className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                >
                  Explore Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("#careers")}
                  className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                >
                  Join the Team
                </button>
              </li>
            </ul>
          </div>

          {/* Pricing division (Col Span 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Engine Utilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleScrollToSection("#estimator")}
                  className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                >
                  Price Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("#ai-playground")}
                  className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                >
                  WeirdoBot Chat Sandbox
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("#contact")}
                  className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                >
                  Book Discovery Call
                </button>
              </li>
            </ul>
          </div>

          {/* Legal division (Col Span 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Headquarters
            </h4>
            <address className="not-italic text-xs text-slate-400 space-y-2 font-light">
              <p>Kuraki Technologies LLC & Associates</p>
              <p>Salt Lake Sector V</p>
              <p>Kolkata, WB 700091</p>
              <p className="text-slate-500 font-mono">ESTD. 2021</p>
            </address>
          </div>

        </div>

        {/* Footer trademark license bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-light text-slate-600">
            © {new Date().getFullYear()} Kuraki Technologies Private Limited. All rights reserved. Code licensed under Apache-2.0.
          </p>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center space-x-1.5 text-slate-500 hover:text-white transition-colors cursor-pointer font-mono uppercase text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 p-0.5 rounded border border-slate-800" />
          </button>
        </div>

      </div>
    </footer>
  );
}
