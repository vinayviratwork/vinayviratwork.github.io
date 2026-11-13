/**
 * resumes.js — All resume role data lives here.
 *
 * HOW TO ADD A NEW ROLE:
 * 1. Copy one object below and add it to the array.
 * 2. Set a unique `id` (used in URL hash, e.g. "frontend" → #resume-frontend).
 * 3. Add the matching PDF to /resumes/resume-<id>.pdf
 * 4. That's it. No other code changes needed.
 */

const RESUMES = [
  {
    id: "backend",
    roleName: "Backend Developer",
    summary:
      "I build REST APIs and database-driven services in Java Spring Boot and Node.js. I've worked on CRUD services, normalized MySQL schemas, JWT authentication, and API documentation that frontend teams can actually use. Currently doing this full-time at Ambula Technology.",
    skills: [
      "Java", "Spring Boot", "Node.js", "Express.js",
      "MySQL", "MongoDB", "JWT", "REST APIs",
      "Git", "Postman", "Agile/Scrum", "API Documentation"
    ],
    achievements: [
      "Built and maintained Spring Boot REST endpoints and CRUD services used by client apps and reporting tools at Ambula Technology.",
      "Designed normalized MySQL schemas and wrote SQL queries for both application logic and reporting.",
      "Implemented JWT authentication and role-based access control in the RESTful Student Portal API.",
      "Debugged and fixed backend defects to keep applications stable across releases."
    ],
    pdfPath: "resumes/resume-backend.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "fullstack",
    roleName: "Full Stack Developer",
    summary:
      "I work across the whole stack — React frontends, Node.js or Spring Boot backends, SQL and NoSQL databases. I've built full-stack apps with JWT auth, role-based routing, and indexed schemas. I'm comfortable owning a feature end to end.",
    skills: [
      "React.js", "JavaScript", "HTML", "CSS",
      "Node.js", "Express.js", "Java", "Spring Boot",
      "MongoDB", "MySQL", "JWT", "REST APIs",
      "Git", "Postman", "Agile/Scrum"
    ],
    achievements: [
      "Built the Food Recipe Web App end to end: React frontend, Node/Express REST API, MongoDB with indexed schemas, JWT auth and role-based access.",
      "Implemented JWT authentication across both frontend routes and backend endpoints in two separate projects.",
      "Developed REST endpoints and MySQL schema for the Student Portal API, with documentation for frontend integration.",
      "Managed 500+ leads in LeadSquared CRM and built Power BI dashboards at Infinity Learn."
    ],
    pdfPath: "resumes/resume-fullstack.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "general",
    roleName: "Software Engineer",
    summary:
      "I'm a backend-leaning full-stack developer who can work across the stack. I write Java and JavaScript, design databases, build APIs, and ship features in Agile teams. I pick up new tools quickly and care about code that's readable and maintainable.",
    skills: [
      "Java", "JavaScript", "Python",
      "Spring Boot", "React.js", "Node.js",
      "MySQL", "MongoDB",
      "Data Structures & Algorithms", "Git",
      "REST APIs", "Agile/Scrum", "Technical Documentation"
    ],
    achievements: [
      "Developed and shipped backend features in Agile sprints at Ambula Technology, collaborating with cross-functional teams.",
      "Built two full-stack projects from scratch: a recipe web app (MERN) and a student portal API (Spring Boot + MySQL).",
      "Selected for the McKinsey Forward Program (Oct–Dec 2026), a selective leadership and problem-solving program.",
      "HackerRank verified in SQL (Basic + Intermediate) and Problem Solving (Intermediate), 2025."
    ],
    pdfPath: "resumes/resume-general.pdf",
    lastUpdated: "November 2026"
  }
];
