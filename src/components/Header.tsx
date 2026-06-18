import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import kurakiLogo from "../img/kurakilogo1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why Choose Kuraki", href: "#why-kuraki" },
    { name: "Our Expertise", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Cost Estimator", href: "#estimator" },
    { name: "AI Playground", href: "#ai-playground" },
    { name: "Careers", href: "#careers" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050810]/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative flex items-center justify-center w-22 h-22 rounded-lg from-indigo-500 to-purple-600 font-bold text-white transition-transform group-hover:rotate-12 duration-300">
             <img
                src={kurakiLogo}
                alt="Kuraki Logo"
                className="w-25 h-25 object-contain"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-accent rounded-full border-2 border-slate-950 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors">
                Kuraki<span className="text-brand-primary"> Technologies</span>
              </span>
              <span className="text-[9px] font-mono tracking-wider uppercase text-slate-400">
                TECHNOLOGY, INFORMATION & INTELLIGENCE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-brand-primary hover:bg-slate-900/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/20 transition-all duration-200"
            >
              Start Project
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-930 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-900 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4 pb-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/20 transition-all duration-200"
                >
                  Start Project
                  <ArrowUpRight className="ml-1.5 w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
