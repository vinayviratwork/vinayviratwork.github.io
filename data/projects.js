/**
 * projects.js — Project case study data.
 *
 * HOW TO ADD A PROJECT:
 * 1. Add a new object to the PROJECTS array below.
 * 2. The page renders them in order. No HTML changes needed.
 */

const PROJECTS = [
  {
    id: "food-recipe",
    number: "01",
    title: "Food Recipe Web App",
    stack: "MongoDB · Express.js · React.js · Node.js · JWT",
    problem:
      "I wanted to build a full-stack app that covered the whole authentication and authorization flow, not just a frontend calling a mock API.",
    what:
      "Built a full-stack recipe platform. The backend is a Node.js/Express REST API with MongoDB. I indexed the schema for efficient queries, implemented JWT authentication, and added role-based access control so only authors can edit their own recipes. The React frontend handles protected routes on the client side. I also added full-text search, pagination, and star ratings.",
    outcome:
      "A production-style MERN app with real auth, real data persistence, and an API that's actually documented.",
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
      "I wanted to get real experience with Spring Boot, JWT in Java, and writing API documentation the way you'd hand it off to a frontend team.",
    what:
      "Built a REST API for a student portal in Spring Boot. Designed a normalized MySQL schema with input validation. Implemented JWT authentication, wrote clean endpoint documentation, and structured the code so it would be easy for another developer to plug in a frontend.",
    outcome:
      "A well-structured Spring Boot API with working auth, clean schema, and documentation I'm actually proud to show.",
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
      "Wanted to build something that showed I could handle a data-heavy frontend, a conversational backend, and document generation all in one project.",
    what:
      "Full-stack platform that surfaces AI market trend data, runs a keyword-based assistant for market queries, and generates 8-slide executive proposal decks. Backend is a Node/Express API with in-memory data. Frontend uses Recharts for interactive trend charts and handles three distinct page flows.",
    outcome:
      "A complete full-stack app that goes beyond basic CRUD — it shows I can think about data presentation and user flows, not just endpoints.",
    tags: ["React 19", "Node.js", "Express.js", "Recharts", "REST API"],
    github: "https://github.com/vinayviratwork/AI-Trend-Assistant",
    live: null
  }
];
