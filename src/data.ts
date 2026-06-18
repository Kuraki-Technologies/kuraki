import { Service, CaseStudy, CareerRole, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "web-apps",
    title: "Custom Web Applications",
    subtitle: "SaaS engines, custom workflows, and secure customer portals.",
    description: "We engineer lightning-fast frontends paired with resilient, scalable APIs. Whether it is a multi-tenant business dashboard or a complex marketplace, we build with precision.",
    detailedDescription: "Our team writes modular, highly maintained React and TypeScript applications that execute flawlessly. We avoid generic templates, designing custom state machines, reactive layouts, and robust backend endpoints optimized for security, scale, and long-term codebase health.",
    benefits: [
      "Custom responsive layouts optimized for all device breakpoints",
      "Robust state management (Zustand, React Context) avoiding stutter",
      "Seamless integrations with Stripe, Auth systems, and custom APIs",
      "SEO and performance-first architectures with clean routing structures"
    ],
    techStack: ["React", "TypeScript", "Vite", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Docker"],
    iconName: "Monitor"
  },
  {
    id: "ai-bots",
    title: "AI Integrations & WhatsApp Bots",
    subtitle: "Conversational assistants and automatic AI-powered workflows.",
    description: "Skip the basic automated forms. We implement custom LLM agents and multi-turn conversational chatbots that hook directly into your backend business databases.",
    detailedDescription: "We specialize in building intelligent WhatsApp marketing, utility, and support flows that feel completely human-like. Enabled by modern AI context reasoning and semantic indexes, our search agents can consult company knowledge bases to resolve tickets, order items, or file leads automatically.",
    benefits: [
      "Full API integrations to edit customer CRM records live during chat",
      "Automated WhatsApp catalog searches, order placements, and notifications",
      "Semantic knowledge lookup (Vector databases) for precise responses",
      "Subtle escalation gates transitioning clients elegantly to human support"
    ],
    techStack: ["Gemini SDK", "Python", "FastAPI", "Twilio API", "LangChain", "Pinecone", "Node.js", "Express"],
    iconName: "Bot"
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Apps",
    subtitle: "Fluid native-feel mobile designs built with Flutter or React Native.",
    description: "Reach your users on iOS and Android without doubling your engineering budget. We construct beautiful, single-codebase mobile applications focused on fluid motion.",
    detailedDescription: "A great mobile application is defined by its micro-interactions and performance under spotty connection. We craft offline-first local engines, push notification protocols, and customized canvas rendering options that make your application stand out on both App Store and Google Play.",
    benefits: [
      "Smooth visual transitions with 60 FPS frame rates on standard phones",
      "Smart offline sync storing records safely in encrypted local databases",
      "Native device capabilities: Camera, Geolocation, Biometrics, Bluetooth",
      "Automated build releases to Google Play and Apple TestFlight"
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Expo", "Dart", "Firebase Auth", "SQLite", "Tailwind CSS"],
    iconName: "Smartphone"
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & DevOps",
    subtitle: "Resilient serverless layers, automated pipelines, and continuous safety.",
    description: "Scale from 10 users to 100,000 without hitting latency walls. We configure modern container, serverless, and cloud database blueprints.",
    detailedDescription: "Say goodbye to server crashing incidents. We map your architectural infrastructure as software code, enabling automated deployment pipelines, continuous audit logs, and self-healing systems that guarantee high availability during intensive user spikes.",
    benefits: [
      "Zero-downtime rolling updates using automated build checks",
      "Optimized database indexing and caching (Redis) reducing query costs",
      "Encrypted server security keys and role-based operational permissions",
      "Live application telemetry logs alerting team of anomalies instantly"
    ],
    techStack: ["Google Cloud Platform (GCP)", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Redis", "Nginx"],
    iconName: "Cloud"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "intellectai",
    title: "IntellectAI: Research & Document Analyst",
    client: "Intelekt Corp",
    category: "ai-chatbot",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    challenge: "Academic researchers and attorneys struggled with manually analyzing thousands of pages of PDF contracts, resulting in lost productivity and missed risk factors.",
    solution: "We designed a multi-module browser portal combining state-of-the-art semantic chunking algorithms and LLM analysis. This allows users to import bulk folders of files and run comparative logic queries over complex documents in natural language.",
    results: [
      "Reduced contract review workflows from 48 hours to just 15 minutes",
      "Achieved 97% document precision accuracy without imaginary AI hallucinations",
      "Served over 12,000 successful workspace queries within the first month of deployment",
      "Seamless secure cloud workspace and strict zero-knowledge document encryption"
    ],
    techStack: ["React", "TypeScript", "Gemini SDK", "FastAPI", "Pinecone Vector DB", "Tailwind CSS", "AWS Lambda"],
    duration: "10 weeks",
    metric: {
      label: "Workflow Speedup",
      value: "18x"
    }
  },
  {
    id: "leapcart",
    title: "LeapCart: Automated WhatsApp Orders",
    client: "LeapCart Logistics",
    category: "ai-chatbot",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    challenge: "B2C food and grocery sellers experienced high drop-off rates on slow website pages, particularly in regions with limited 3G/4G connectivity.",
    solution: "We engineered a direct checkout chatbot funnel running inside WhatsApp. Integrating deep catalog lookups and automated Stripe credit payments, customers can search, add to cart, pay, and track items entirely within text chat.",
    results: [
      "Increased user order conversion rate by 34% compared to standard web checkout",
      "Automated over 8,000 monthly orders without requiring physical operator supervision",
      "Integrated live push notifications for courier vehicle maps routing",
      "Secure payment token safety minimizing dispute rates to less than 0.1%"
    ],
    techStack: ["TypeScript", "Express", "Node.js", "Twilio WhatsApp API", "PostgreSQL", "Stripe Checkout API", "GCP Run"],
    duration: "8 weeks",
    metric: {
      label: "Sales Conversion Up",
      value: "34%"
    }
  },
  {
    id: "wealthflow",
    title: "WealthFlow: Premium Investor Panel",
    client: "WealthFlow Financials",
    category: "web",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=600",
    challenge: "High-ticket asset managers needed a visual, secure panel that presents live asset portfolios and complex compound forecasts without confusing clients.",
    solution: "We engineered a sleek dark-mode web portal utilizing elegant, fast vector diagrams and interactive sliders. Clients can simulate investment futures, track live market values, and execute secure wire communications from a premium single platform.",
    results: [
      "Successfully tracked and categorized $120M+ in client assets under management",
      "Achieved 100% test coverage on complex compound calculations and tax forecasting",
      "Enhanced user satisfaction with fluid transitions between assets classes",
      "Impenetrable multi-factor authentication (MFA) shielding client vaults"
    ],
    techStack: ["React", "TypeScript", "Vite", "D3.js", "Zustand", "Express", "PostgreSQL", "Auth0"],
    duration: "12 weeks",
    metric: {
      label: "Assets Monitored",
      value: "$120M+"
    }
  },
  {
    id: "fitloop",
    title: "FitLoop: Gamified Workout Tracker",
    client: "FitLoop Fitness",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1510051646317-7571d0295327?auto=format&fit=crop&q=80&w=600",
    challenge: "Traditional fitness trackers lacked immediate community engagement, with over 72% of new app registrants abandoning training plans within two weeks.",
    solution: "We built a beautiful, high-performance hybrid mobile application implementing customizable workout leagues, secure user profiles, peer triggers, and offline accelerometer sync.",
    results: [
      "Boosted average user app retention from 14 days to 90+ days",
      "Delivered real-time push alerts that sync instantly with device calendars",
      "Built offline-first state machine database preventing exercise logging data loss",
      "5.0 star app performance metrics on Apple and Google Play stores"
    ],
    techStack: ["React Native", "TypeScript", "Expo", "SQLite", "Firebase Core API", "Tailwind CSS", "Lottie Animations"],
    duration: "14 weeks",
    metric: {
      label: "Log Retention Up",
      value: "4.2x"
    }
  }
];

export const CAREERS: CareerRole[] = [
  {
    id: "lead-dev",
    title: "Lead Fullstack Developer",
    department: "Engineering",
    location: "Kolkata (On-site / Hybrid)",
    commitment: "Full-Time",
    experience: "4+ Years",
    description: "We are seeking a brilliant fullstack engineer with a passion for writing pristine, clean TypeScript, Node.js and React codes. You will lead client project architectures, design robust databases, and refine state managers.",
    requirements: [
      "Deep understanding of advanced React guidelines, hooks, and performance profiling",
      "Proficiency with backend patterns in Node.js (Express), FastAPI (Python), and SQL",
      "Ability to write tests and containerize deployments (Docker, GitHub Actions)",
      "An insatiable curiosity and a willingness to try unconventional code designs (hence, we're weird!)"
    ]
  },
  {
    id: "uiux-designer",
    title: "UI/UX Product Artisan",
    department: "Product Design",
    location: "Kolkata (On-site / Hybrid)",
    commitment: "Full-Time",
    experience: "2+ Years",
    description: "We hate default designs. We are looking for a digital artist who lives for letter spacing, rhythmic padding, micro-animations, and striking layouts in dark and light themes.",
    requirements: [
      "Expert skills in Figma, drawing customized vectors and design frames from absolute scratch",
      "Stellar sense of contrast, responsive layouts, text hierarchies, and aesthetic pairings",
      "Basic understanding of Tailwind CSS and React layout hierarchies (design for code!)",
      "A creative portfolio demonstrating actual interactive widgets, dark themes, and rich prototypes"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Kuraki Technologies operates like an elite SWAT team of builders. They didn't just build a database; they mapped our business operations into an automated machine that saves us $15k every month.",
    author: "Rohan Sengupta",
    role: "VP of Operations",
    company: "LeapCart Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t2",
    quote: "Their 'weird' approach is actually the highest level of execution we've seen. The level of speed, code cleanliness, and transparent pricing estimators gave us direct confidence on Day 1.",
    author: "Elena Vance",
    role: "Co-Founder",
    company: "Intelekt Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  }
];
