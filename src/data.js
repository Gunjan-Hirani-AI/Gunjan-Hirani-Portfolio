// Portfolio data — Gunjan Hirani

export const profile = {
  name: "Gunjan Hirani",
  title: "AI Engineer",
  tagline: "AI Agents • RAG Systems • LangChain • Node.js Backend",
  bio: "AI Engineer and Backend Developer with 2.5+ years of experience building AI agents, RAG systems, multi-agent workflows, and LLM-powered automation solutions using Google ADK, LangChain, Gemini, OpenAI APIs, and n8n. Strong foundation in Node.js backend engineering with scalable APIs, database systems, and production-ready applications. Passionate about AI orchestration, agentic workflows, retrieval systems, and deploying intelligent automation for real-world use cases.",
  avatar: `${import.meta.env.BASE_URL}profile.png`,
  location: "Bhavnagar, Gujarat, India",
  email: "gunjan.hirani.developer@gmail.com",
  phone: "+919408369539",
  whatsapp: "+919408369539",
  github: "https://github.com/Gunjan-Hirani-AI",
  linkedin: "https://linkedin.com/in/gunjan-hirani",
  aiPortfolio: "https://ai-portfolio-dashboard.vercel.app/",
  githubUsername: "Gunjan-Hirani-AI",
};

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: ["Python", "JavaScript"],
  },
  {
    category: "AI / LLM Stack",
    icon: "🤖",
    items: [
      "LangChain",
      "LangGraph",
      "Google ADK",
      "OpenAI API",
      "RAG",
      "MCP Protocol",
      "Prompt Engineering",
      "AI Agents",
      "Multi-Agent Systems",
    ],
  },
  {
    category: "Frameworks & Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "React.js", "REST APIs"],
  },
  {
    category: "Databases & Vector Stores",
    icon: "🗄️",
    items: ["MongoDB", "MySQL", "ChromaDB"],
  },
  {
    category: "AI Observability & Automation",
    icon: "📡",
    items: ["LangFuse", "n8n", "Google Sheets API"],
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: "🛠️",
    items: ["Docker", "AWS S3", "NGINX", "RabbitMQ", "Git", "GitHub", "Postman", "APIdog", "Jira"],
  },
];

export const experience = [
  {
    role: "AI Automation Developer & Node.js Backend Developer",
    company: "Insomniacs",
    period: "Feb 2024 – Present",
    description:
      "Building AI-powered automation systems and scalable Node.js backends for real-world business workflows, CRM integrations, and production deployments.",
    highlights: [
      "Built AI automation systems using n8n, Gemini API, and OpenAI APIs for business and internal operations",
      "Developed multi-agent blogging automation — topic research, content generation, SEO, and publishing",
      "Designed lead capture and CRM automation pipelines with conversational AI and messaging workflows",
      "Built and maintained scalable Node.js backends with 80+ REST APIs for CRM, CMS, and event management",
      "Integrated Razorpay, Firebase, AWS S3, and external APIs; deployed with Docker and optimized for high availability",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  field: "Computer Engineering",
  institution: "Gyanmanjari Institute of Technology",
  location: "Bhavnagar, Gujarat",
  cgpa: "8.07",
  cgpaMax: "10",
  period: "2020 – 2024",
};

export const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "80+", label: "REST APIs Built" },
  { value: "4+", label: "Production AI Projects" },
  { value: "12+", label: "Gen AI Implementations" },
];
