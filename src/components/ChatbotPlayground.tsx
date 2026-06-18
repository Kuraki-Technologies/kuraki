import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User, Check, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function ChatbotPlayground() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m1",
      sender: "bot",
      text: "Hello! 👋 I am Kuraki AI, the intelligent assistant of Kuraki Technologies. We specialize in custom software development, AI-powered solutions, cloud platforms, and digital transformation services. Whether you're planning a new product, scaling your business, or exploring innovative technology solutions, I'm here to guide you. How can I assist you today?",
      time: "Just now"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const presetQuestions = [
  { label: "What services do you offer?", key: "services" },
  { label: "How does your pricing work?", key: "pricing" },
  { label: "What technologies do you use?", key: "technologies" },
  { label: "How long does a project take?", key: "timeline" }
];

  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();
    
    if (text.includes("template")) {
      return "Templates? 😱 Absolutely not! We strictly write 100% custom, hand-coded applications from clean slates. No bulky frameworks and no visual drag-and-drop page builders. Just clean code tailored to your parameters.";
    }
    if (text.includes("price") || text.includes("pricing") || text.includes("cost") || text.includes("rate")) {
      return "No speculative  hourly price spikes of traditional agencies. We break down your requirements and deliver a binding upfront project cost with locked-in delivery guarantees. Go check our 'Instant Project Estimator' above to test a custom quote bracket!";
    }
    if (text.includes("tool") || text.includes("stack") || text.includes("tech") || text.includes("language")) {
      return "We are obsessed with highly modular, fast tech stacks. Typically: React and TypeScript for bulletproof client screens, Node.js or FastAPI for fast backend structures, PostgreSQL for secure data, and GCP or AWS container nodes for hosting.";
    }
    if (text.includes("time") || text.includes("fast") || text.includes("duration") || text.includes("schedule") || text.includes("launch")) {
      return "Most of our standard MVPs and automated workflows launch safely in staging within 6 to 10 weeks! We divide the progress into transparent, weekly sprints allowing you to test iterations as we deploy.";
    }
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
      return "Hello! Great to meet a fellow builders/founders. If you have an app idea, click any prompt bubble or outline what you are building so I can advise!";
    }
    if (text.includes("contact") || text.includes("book") || text.includes("meet") || text.includes("email")) {
      return "Awesome! You can message us directly on the 'Book discovery call' form right below, or write to our team. We'll answer in less than 12 business hours.";
    }
    
    return "That's an ambitious question! At Kuraki Technologies, we engineer deep solutions. Our real human engineers would love to map this out for you. Fill in your message in our Contact form below to get a dedicated answer!";
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // User Message
    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate Bot delayed typing reply
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: ChatMessage = {
        id: "b-" + Date.now(),
        sender: "bot",
        text: getBotResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1200);
  };

  return (
    <section
      id="ai-playground"
      className="py-24 bg-[#050810] border-t border-b border-slate-900/60 relative overflow-hidden text-slate-100"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-950 text-xs font-mono text-brand-accent">
            <span>🧙‍♂️ KURAKI AI ASSISTANT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Meet the <span className="text-brand-accent">Kuraki </span> AI Assistant
          </h2>
          <p className="text-slate-300 font-sans font-light text-base sm:text-lg leading-relaxed">
            Experience the capabilities of Kuraki AI, our intelligent assistant designed to answer questions about our services, technology solutions, project workflows, and pricing models.
          </p>
        </div>

        {/* Sandbox Window Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel instructions (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-slate-950/40 border border-slate-805 p-6 rounded-3xl text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-brand-accent">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-display font-semibold text-white">AI Experience Center</h3>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed font-light">
                Discover how Kuraki AI helps businesses automate workflows, enhance customer engagement, and accelerate digital transformation through intelligent technology solutions.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                Quick prompt chips
              </span>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {presetQuestions.map((q) => (
                  <button
                    key={q.key}
                    onClick={() => handleSendMessage(q.label)}
                    className="px-3 py-2 bg-slate-900 border border-slate-805 rounded-xl text-xs text-slate-300 text-left hover:text-white hover:border-indigo-500 hover:bg-slate-900/80 transition-all cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-900 pt-4 text-[10px] font-mono text-slate-500 flex items-center gap-1.5 uppercase">
              <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-ping" />
              Kuraki AI Online
            </div>
          </div>

          {/* Right actual chat widget (Col Span 8) */}
          <div className="lg:col-span-8 h-[500px] flex flex-col bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Chat header bar */}
            <div className="bg-slate-900 px-6 py-4 border-b border-slate-850 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-left">
                <div className="relative w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center text-slate-950 font-bold">
                  <Bot className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-950 rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Kuraki AI Assistance</h4>
                  <p className="text-[10px] text-slate-400 font-mono">INTELLIGENT BUSINESS ASSISTANT</p>
                </div>
              </div>

              <div className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2.5 py-1 rounded border border-slate-850">
                AI ASSISTANT ACTIVE
              </div>
            </div>

            {/* Chat Messages flow */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 no-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 text-left ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.sender === "user" ? "bg-slate-900 text-slate-300" : "bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div className="space-y-1 max-w-[80%]">
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-indigo-600 text-white font-medium rounded-tr-none"
                          : "bg-slate-900/60 rounded-tl-none text-slate-200 border border-slate-850"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <p className="text-[9px] text-slate-500 font-mono text-right scale-90">{msg.time}</p>
                  </div>
                </div>
              ))}

              {/* Typing simulation anim */}
              {isTyping && (
                <div className="flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-slate-900/60 border border-slate-850 text-slate-400 text-xs flex items-center space-x-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Send input bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-4 bg-slate-900 border-t border-slate-850 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about our services, pricing, technologies, or project timelines..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-full px-5 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans"
              />
              <button
                type="submit"
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-all font-semibold flex items-center justify-center cursor-pointer disabled:opacity-50 shadow-md shadow-indigo-600/20"
                disabled={!inputText.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
