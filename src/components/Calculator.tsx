import React, { useState, useEffect } from "react";
import { Calculator, Check, ArrowRight, HelpCircle } from "lucide-react";

interface CalculatorProps {
  onCalculate: (details: string) => void;
}

export default function ProjectCalculator({ onCalculate }: CalculatorProps) {
  // Option lists
  const platforms = [
    { id: "web", name: "Custom Web Platform", baseCost: 6500, baseWeeks: 6, desc: "Portals, Dashboards, SaaS panels" },
    { id: "mobile", name: "iOS & Android Mobile App", baseCost: 9500, baseWeeks: 8, desc: "Single codebase hybrid apps (React Native/Flutter)" },
    { id: "ai", name: "AI Chatbot / WhatsApp Agent", baseCost: 4500, baseWeeks: 4, desc: "Automated, context-focused smart chat agents" },
    { id: "full", name: "Full Ecosystem (Web + Mobile + AI)", baseCost: 14500, baseWeeks: 12, desc: "Combined interconnected system setup" },
  ];

  const scales = [
    { id: "mvp", name: "Startup MVP", multiplier: 1.0, addWeeks: 0, desc: "Fast-to-market validation product with core pillars" },
    { id: "growth", name: "Custom Growth Product", multiplier: 1.35, addWeeks: 3, desc: "Highly refined modules, high-security profiles" },
    { id: "enterprise", name: "Scalable Enterprise System", multiplier: 1.75, addWeeks: 6, desc: "High availability clusters, extensive audit locks" },
  ];

  const designs = [
    { id: "clean", name: "Clean Modern Minimalist", addCost: 0, addWeeks: 0, desc: "Sleek utility structures with standard animations" },
    { id: "premium", name: "Custom Identity Design", addCost: 2000, addWeeks: 2, desc: "Aesthetic branding pairings, unique spacing modules" },
    { id: "immersive", name: "Immersive & Cyber Aesthetics", addCost: 4500, addWeeks: 4, desc: "Striking dark layouts, custom illustrations & micro-interactions" },
  ];

  const features = [
    { id: "stripe", name: "Stripe Subscription Checkout", cost: 1500, weeks: 1, desc: "Recurring pricing structures" },
    { id: "gemini", name: "Semantic Search / Gemini RAG Engine", cost: 2800, weeks: 2, desc: "Smart customer lookup databases" },
    { id: "realtime", name: "Real-time Collaborative Websockets", cost: 1800, weeks: 1, desc: "Messengers or dynamic cards sync" },
    { id: "offline", name: "Offline Sync Locks database", cost: 2200, weeks: 2, desc: "Robust data caching on devices" },
  ];

  // Selection state
  const [selectedPlatform, setSelectedPlatform] = useState("web");
  const [selectedScale, setSelectedScale] = useState("mvp");
  const [selectedDesign, setSelectedDesign] = useState("clean");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  
  // Scoped calculation output
  const [minCost, setMinCost] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [minWeeks, setMinWeeks] = useState(0);
  const [maxWeeks, setMaxWeeks] = useState(0);

  const handleToggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  useEffect(() => {
    const platform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];
    const scale = scales.find((s) => s.id === selectedScale) || scales[0];
    const design = designs.find((d) => d.id === selectedDesign) || designs[0];

    // Compute cost bases
    const calculatedBase = platform.baseCost * scale.multiplier;
    const featuresCost = selectedFeatures.reduce((total, fId) => {
      const feat = features.find((f) => f.id === fId);
      return total + (feat ? feat.cost : 0);
    }, 0);

    const baseCostCombined = calculatedBase + design.addCost + featuresCost;
    
    // Give a neat ±10% range for design honesty
    const floorCost = Math.round((baseCostCombined * 0.95) / 100) * 100;
    const ceilingCost = Math.round((baseCostCombined * 1.10) / 100) * 100;

    // Compute weeks bases
    const baseWeeksCount = platform.baseWeeks + scale.addWeeks + design.addWeeks;
    const featuresWeeksCount = selectedFeatures.reduce((total, fId) => {
      const feat = features.find((f) => f.id === fId);
      return total + (feat ? feat.weeks : 0);
    }, 0);

    const totalWeeksSum = baseWeeksCount + featuresWeeksCount;
    
    setMinCost(floorCost);
    setMaxCost(ceilingCost);
    setMinWeeks(totalWeeksSum);
    setMaxWeeks(totalWeeksSum + 2);
  }, [selectedPlatform, selectedScale, selectedDesign, selectedFeatures]);

  const handlePrefillDiscovery = () => {
    const platformName = platforms.find((p) => p.id === selectedPlatform)?.name;
    const scaleName = scales.find((s) => s.id === selectedScale)?.name;
    const designName = designs.find((d) => d.id === selectedDesign)?.name;
    const featuresList = selectedFeatures
      .map((fId) => features.find((f) => f.id === fId)?.name)
      .filter(Boolean)
      .join(", ");

    const textToPrefill = `Hello Kuraki Technologies! I calculated an estimate with your online cost tool:
- **Solution Type**: ${platformName}
- **Complexity Scale**: ${scaleName}
- **UI Design System**: ${designName}
- **Add-on Requirements**: ${featuresList || "None selected"}
- **Estimated Bracket**: $${minCost.toLocaleString()} - $${maxCost.toLocaleString()}
- **Estimated Timeline**: ${minWeeks} - ${maxWeeks} Weeks.
Let's schedule a call to refine this blueprint!`;

    onCalculate(textToPrefill);
  };

  return (
    <section
      id="estimator"
      className="py-24 bg-[#050810] border-t border-b border-slate-900/60 relative overflow-hidden text-slate-100"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Topic Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-950 text-xs font-mono text-brand-primary">
            <span>📊 INSTANT PROJECT ESTIMATOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Check Your Scope <span className="text-brand-primary">Transparently</span>
          </h2>
          <p className="text-slate-300 font-sans font-light text-base sm:text-lg leading-relaxed">
            Configure your technical blueprint. Our estimator compiles clear pricing brackets and development timelines based on physical material requirements. No guesswork.
          </p>
        </div>

        {/* Calculator Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Panel (Column Span 7) */}
          <div className="lg:col-span-7 space-y-8 bg-slate-950/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80">
            
            {/* Step 1: Platforms option */}
            <div className="space-y-4">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest text-left">
                1. System Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms.map((plat) => (
                  <button
                    key={plat.id}
                    onClick={() => setSelectedPlatform(plat.id)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedPlatform === plat.id
                        ? "bg-slate-900 border-brand-primary shadow-lg"
                        : "bg-slate-950 border-slate-900 hover:border-slate-800"
                    }`}
                  >
                    <div className="font-semibold text-sm text-white">{plat.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-normal font-light">
                      {plat.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Complexity Option */}
            <div className="space-y-4">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest text-left">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scales.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScale(sc.id)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedScale === sc.id
                        ? "bg-slate-900 border-brand-primary shadow-lg"
                        : "bg-slate-950 border-slate-900 hover:border-slate-800"
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{sc.name}</div>
                    <div className="text-[10px] text-slate-400 mt-1 leading-normal font-light">
                      {sc.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Design Identity Fidelity */}
            <div className="space-y-4">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest text-left">
                3. Design Fidelity System
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {designs.map((ds) => (
                  <button
                    key={ds.id}
                    onClick={() => setSelectedDesign(ds.id)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedDesign === ds.id
                        ? "bg-slate-900 border-brand-primary shadow-lg"
                        : "bg-slate-950 border-slate-900 hover:border-slate-800"
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{ds.name}</div>
                    <div className="text-[10px] text-slate-400 mt-1 leading-normal font-light">
                      {ds.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Special Custom Features */}
            <div className="space-y-4">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest text-left">
                4. Production Modules (Select Multiple)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((ft) => {
                  const isChecked = selectedFeatures.includes(ft.id);
                  return (
                    <button
                      key={ft.id}
                      onClick={() => handleToggleFeature(ft.id)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? "bg-slate-900 border-brand-primary shadow-lg"
                          : "bg-slate-950 border-slate-900 hover:border-slate-800"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                          isChecked ? "bg-brand-primary border-brand-primary text-slate-950" : "border-slate-800 bg-slate-950"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-semibold text-xs text-white leading-none">
                          {ft.name}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-normal font-light">
                          {ft.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Live Summary Panel (Column Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-slate-950 border border-slate-800 p-8 shadow-2xl relative overflow-hidden hover:border-brand-primary hover:border-opacity-30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-8">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white tracking-tight">
                    Compilation Result
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">ESTIMATION FRAMEWORK V1.2</p>
                </div>
              </div>

              {/* Price bracket display */}
              <div className="space-y-2 text-left border-y border-slate-900 py-6">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Estimated Investment
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  ${minCost.toLocaleString()} - ${maxCost.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-500 font-sans italic leading-normal">
                  *This range includes fully deployed staging setups, server setups, and 30-day bug-warranty coverage cycles post launch.
                </p>
              </div>

              {/* Duration bracket */}
              <div className="space-y-1 text-left">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Estimated Build Time
                </div>
                <big className="font-display text-2xl font-bold text-white">
                  {minWeeks} - {maxWeeks} Weeks
                </big>
                <div className="text-[11px] text-slate-400 font-light mt-1">
                  Includes visual prototyping sprint, core engine assembly, client staging review, and final secure cloud push.
                </div>
              </div>
            </div>

            {/* Launch Call To Action */}
            <div className="mt-8">
              <button
                onClick={handlePrefillDiscovery}
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all cursor-pointer shadow-lg shadow-indigo-500/20 group"
              >
                Send Scope to Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-center text-[10px] font-mono text-slate-500 tracking-wide uppercase mt-4">
                Locks specifications & pre-fills the chat form
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
