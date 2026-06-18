

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  techStack: string[];
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "all" | "web" | "mobile" | "ai-chatbot";
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  duration: string;
  metric: {
    label: string;
    value: string;
  };
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  commitment: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface EstimateOptions {
  platform: string;
  scale: string;
  features: string[];
  design: string;
}
