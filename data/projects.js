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
    title: "Food Recipe Web App",
    stack: "MongoDB · Express.js · React.js · Node.js · JWT",
    problem:
      "I wanted to build something that covered the full authentication and authorization flow end to end, not just a frontend calling a mock API.",
    what:
      "Full-stack recipe platform. The backend is a Node.js and Express REST API with a MongoDB schema I indexed for efficient queries. I implemented JWT authentication and role-based access control so only authors can edit their own content. The React frontend handles protected routes on the client side. Full-text search, pagination, and star ratings are all wired up.",
    outcome:
      "A production-style MERN app with real auth, real data persistence, and an API that is documented.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/vinayviratwork/food-recipe-app",
    live: null
  },
  {
    id: "ai-trend",
    number: "02",
    title: "AI Market Trend Assistant",
    stack: "React 19 · Node.js · Express · Recharts",
    problem:
      "Wanted a project that showed I could handle a data-heavy frontend, a conversational backend, and document generation all together.",
    what:
      "Full-stack platform that surfaces AI market trend data across 10 real trends totalling $279B in market size, runs a keyword-based assistant for market queries, and generates 8-slide executive proposal decks. The backend is a Node and Express API with in-memory data. The frontend uses Recharts for interactive 12-month trend charts and handles three separate page flows: Dashboard, AI Assistant, and Proposal Generator.",
    outcome:
      "A complete full-stack app that goes beyond basic CRUD and shows I can think about data presentation and user flows, not just endpoints.",
    tags: ["React 19", "Node.js", "Express.js", "Recharts", "REST API"],
    github: "https://github.com/vinayviratwork/AI-Trend-Assistant",
    live: null
  },
  {
    id: "jobbot",
    number: "03",
    title: "JobBot — AI Job Application Assistant",
    stack: "Java 21 · Spring Boot 3 · MySQL · Groq AI · Docker",
    problem:
      "I wanted a real Spring Boot project that used external APIs, AI integration, and a proper database, not just a toy CRUD app.",
    what:
      "Spring Boot application that fetches jobs from 5 public job board APIs (Greenhouse, Lever, Ashby, Workable, RemoteOK), scores each listing against an uploaded resume using Groq AI (Llama 3.3), and auto-drafts tailored cover letters for jobs above the match threshold. The whole pipeline runs on demand or on a daily 9am schedule. Includes a vanilla JS dashboard served by Spring Boot, Swagger docs, CSV export, and optional email notifications. AI cost: $0.",
    outcome:
      "A production-style Java application with real external integrations, AI scoring, a working UI, and actual unit tests. Something I use myself.",
    tags: ["Java 21", "Spring Boot 3", "MySQL", "Groq AI", "Docker", "REST API", "Swagger"],
    github: "https://github.com/vinayviratwork/JOB-BOT",
    live: null
  }
];
