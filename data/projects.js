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
      "A production-style MERN app with real auth, real data persistence, and an API that is actually documented.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/vinayviratwork/food-recipe-app",
    live: null
  },
  {
    id: "student-portal",
    number: "02",
    title: "RESTful Student Portal API",
    stack: "Java · Spring Boot · MySQL · JWT · Git",
    problem:
      "I wanted real Spring Boot experience and practice writing API documentation the way you would hand it off to a frontend team.",
    what:
      "REST API for a student portal in Spring Boot. Designed a normalized MySQL schema with input validation on every endpoint. Implemented JWT authentication and wrote clean documentation so a frontend developer could integrate without asking me what each field means.",
    outcome:
      "A well-structured Spring Boot API with working auth, a clean schema, and documentation I am comfortable showing in an interview.",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "REST API", "Git"],
    github: "https://github.com/vinayviratwork/JOB-BOT",
    live: null
  },
  {
    id: "ai-trend",
    number: "03",
    title: "AI Market Trend Assistant",
    stack: "React 19 · Node.js · Express · Recharts",
    problem:
      "Wanted a project that showed I could handle a data-heavy frontend, a conversational backend, and document generation all in one go.",
    what:
      "Full-stack platform that surfaces AI market trend data, runs a keyword-based assistant for market queries, and generates 8-slide executive proposal decks. The backend is a Node and Express API. The frontend uses Recharts for interactive charts and handles three separate page flows.",
    outcome:
      "A complete full-stack app that goes beyond basic CRUD and shows I can think about data presentation and user flows, not just endpoints.",
    tags: ["React 19", "Node.js", "Express.js", "Recharts", "REST API"],
    github: "https://github.com/vinayviratwork/AI-Trend-Assistant",
    live: null
  }
];
