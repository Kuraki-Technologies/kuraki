import React, { useState, useEffect } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, PhoneCall } from "lucide-react";

interface ContactProps {
  prefilledMessage: string;
}

export default function Contact({ prefilledMessage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$5k - $15k",
    message: ""
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill when calculator state changes
  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage
      }));
      // Scroll to Contact block
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [prefilledMessage]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccessful(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "$5k - $15k",
      message: ""
    });
    setIsSubmitSuccessful(false);
  };

  const budgetOptions = [
    { label: "Bespoke MVP (< $5k)", value: "< $5k" },
    { label: "Growth custom app ($5k - $15k)", value: "$5k - $15k" },
    { label: "Advanced full systems ($15k - $30k)", value: "$15k - $30k" },
    { label: "Enterprise Scale tier (> $30k)", value: "> $30k" }
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#050810] border-t border-slate-900 text-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel instructions (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900 text-xs font-mono text-brand-primary">
                <span>💬 DISCOVERY KICK-OFF</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Let's Build <br />
                <span className="text-brand-primary">Something Rare.</span>
              </h2>
              <p className="text-slate-400 font-sans font-light text-sm sm:text-base leading-relaxed">
                We are ready to map, draft, and deploy your engineering solutions. Skip the corporate sales playbooks; write your features direct to our senior developers. We answer every discovery inquiry in less than 12 business hours.
              </p>
            </div>

            {/* Direct contact info */}
            <div className="space-y-4 pt-6 border-t border-slate-900">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-805 flex items-center justify-center text-brand-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">EMAIL DIRECT</h4>
                  <p className="text-sm font-semibold text-slate-300">hello@Kuraki Technologies.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-805 flex items-center justify-center text-brand-primary">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">HEADQUARTERS</h4>
                  <p className="text-sm font-semibold text-slate-300">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Guarantee footer */}
            <div className="text-[11px] font-sans font-light text-slate-500 leading-normal">
              *By submitting this Discovery form, you automatically enter our NDA protection queue guaranteeing absolute secret assets security of all files uploaded.
            </div>
          </div>

          {/* Right form container (Col Span 7) */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            
            {isSubmitSuccessful ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/35 flex items-center justify-center text-brand-primary">
                  <CheckCircle2 className="w-10 h-10 animate-pulse" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h3 className="font-display text-2xl font-bold text-white">Blueprint Logged!</h3>
                  <p className="text-slate-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                    Success! We have successfully routed your project parameters directly to our Principal Solutions Architect. We are drawing a custom scoping recommendation for you right now. Expect an email contact in less than 12 business hours.
                  </p>
                </div>
                <button
                  onClick={handleResetForm}
                  className="px-6 py-2.5 bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 hover:text-white hover:border-slate-700 rounded-full transition-all"
                >
                  Clear and write another
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                
                <h3 className="font-display text-lg font-bold text-white tracking-tight pb-2 border-b border-slate-850">
                  Scoping parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Elena Vance"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Company / Startup
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Intelekt Corp"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. elena@intelekt.ai"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Allocated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-300 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary appearance-none cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-200">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Brief */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Project Requirements / Brief
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about the custom app or automated agent you are thinking of. Mention specific integrations, timelines, or features and we'll scope it."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary resize-y font-sans leading-relaxed"
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all text-sm uppercase tracking-wider cursor-pointer shadow-lg shadow-indigo-600/20 disabled:opacity-50"
                >
                  {isSubmitting ? "Logging Scopes..." : "Submit Project Discovery Brief"}
                  <Send className="ml-2 w-4 h-4" />
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
