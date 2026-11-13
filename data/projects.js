/**
 * projects.js — Project case study data.
 *
 * HOW TO ADD A PROJECT:
 * 1. Add a new object to the PROJECTS array.
 * 2. The page renders them in order. No HTML changes needed.
 */
const PROJECTS = [
  {
    id: "food-recipe",
    number: "01",
    title: "RecipeHub — Food Recipe Web App",
    stack: "MongoDB · Express.js · React.js · Node.js · JWT",
    problem:
      "I wanted to build something that covered the full authentication and authorization flow end to end, not just a frontend calling a mock API.",
    what:
      "Full-stack recipe platform with a React 19 frontend and a Node.js/Express REST backend. I designed an indexed MongoDB schema for efficient queries, implemented JWT auth and role-based access control so only authors can edit their own content, and wired up full-text search, pagination, and star ratings. Protected routes handled on both frontend and backend.",
    outcome:
      "A production-style MERN app with real auth, real data persistence, and an API that is documented. Used as a reference for how I think about full-stack projects.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Vite"],
    github: "https://github.com/vinayviratwork/food-recipe-app",
    live: null
  },
  {
    id: "ai-trend",
    number: "02",
    title: "AI Market Trend Assistant",
    stack: "React 19 · Node.js · Express · Recharts · Vite",
    problem:
      "Wanted a project that showed I could handle a data-heavy frontend, a conversational backend, and document generation all in one go.",
    what:
      "Full-stack executive intelligence platform. The backend is a Node.js/Express REST API serving 10 AI market trends covering $279B in market data. The React 19 frontend has three distinct flows: a Dashboard with Recharts trend charts and filters, a conversational AI Assistant for market queries, and a Proposal Generator that builds an 8-slide executive deck with speaker notes and ROI projections.",
    outcome:
      "A complete full-stack app that goes beyond basic CRUD and shows I can think about data presentation and multiple user flows, not just endpoints.",
    tags: ["React 19", "Node.js", "Express.js", "Recharts", "REST API", "Vite"],
    github: "https://github.com/vinayviratwork/AI-Trend-Assistant",
    live: null
  },
  {
    id: "jobbot",
    number: "03",
    title: "JobBot — AI Job Application Assistant",
    stack: "Java 21 · Spring Boot 3 · MySQL · Groq AI (Llama 3.3) · Docker",
    problem:
      "I wanted a real Spring Boot project with external API integrations, AI, and a proper database — not a toy CRUD app.",
    what:
      "Spring Boot application that fetches jobs from 5 public job board APIs (Greenhouse, Lever, Ashby, Workable, RemoteOK), scores each listing against an uploaded resume using Groq AI (free, $0 cost), and auto-drafts tailored cover letters for roles above the match threshold. The pipeline runs on demand or on a daily 9am schedule. Includes a vanilla JS dashboard served by Spring Boot, Swagger UI, CSV export, optional email alerts, and unit tests.",
    outcome:
      "A production-style Java application with real external integrations, AI scoring with anti-hallucination guardrails, a working dashboard, and unit tests. Something I actually use.",
    tags: ["Java 21", "Spring Boot 3", "MySQL", "Groq AI", "Docker", "Swagger", "JUnit"],
    github: "https://github.com/vinayviratwork/JOB-BOT",
    live: null
  }
];
