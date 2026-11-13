/**
 * resumes.js — All resume role data lives here.
 *
 * HOW TO ADD A NEW ROLE:
 * 1. Copy one object below and add it to the RESUMES array.
 * 2. Set a unique `id` — used in the URL hash (#resume-<id>)
 *    and as the PDF filename (resume-<id>.pdf).
 * 3. Add the matching PDF to /resumes/resume-<id>.pdf
 * 4. That is it. No other code changes needed.
 *
 * CURRENT ROLES:
 *   #resume-swe          → Software Engineer / Platform Engineer
 *   #resume-consulting   → Technology & Business Consulting
 *   #resume-data         → Data Analyst
 *   #resume-general      → General / Open Application
 */
const RESUMES = [
  {
    id: "swe",
    roleName: "Software Engineer / Platform",
    summary:
      "I build backend services in Java Spring Boot and full-stack apps with the MERN stack. Currently doing this full-time as a Platform Software Engineer at Ambula Technology. I work in Agile sprints, write API documentation, and debug production issues. Outside of work I have shipped three projects from scratch.",
    skills: [
      "Java", "Spring Boot", "Node.js", "Express.js",
      "React.js", "JavaScript", "MySQL", "MongoDB",
      "JWT", "REST APIs", "Git", "Postman", "Docker",
      "Agile/Scrum", "API Documentation", "Swagger"
    ],
    achievements: [
      "Built and maintained Spring Boot REST endpoints and CRUD services at Ambula Technology, consumed by client apps and reporting tools.",
      "Implemented JWT auth and role-based access control across frontend routes and backend endpoints in multiple projects.",
      "Built JobBot (Spring Boot + MySQL + Groq AI): fetches jobs from 5 APIs, scores them against a resume using AI, drafts cover letters. Real unit tests, Swagger docs, $0 AI cost.",
      "Built the AI Market Trend Assistant: React 19 frontend with Recharts dashboards, Node.js REST API, conversational assistant, and 8-slide proposal generator.",
      "Built a MERN recipe platform with indexed MongoDB schemas, JWT auth, full-text search, pagination, and star ratings."
    ],
    pdfPath: "resumes/resume-swe.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "consulting",
    roleName: "Technology / Business Consulting",
    summary:
      "I combine software engineering with business problem-solving. I have built dashboards for sales teams, managed CRM systems for 500+ leads, and worked on client-facing applications. I was selected for the McKinsey Forward Program (Oct-Dec 2026). I can read a business problem, translate it into a spec, and ship it.",
    skills: [
      "Power BI", "SQL Analytics", "LeadSquared CRM",
      "Data Visualization", "Stakeholder Communication",
      "Java", "Spring Boot", "Node.js", "REST APIs",
      "Process Documentation", "Agile/Scrum",
      "Technical Documentation", "MySQL", "MongoDB"
    ],
    achievements: [
      "Selected for the McKinsey Forward Program (Oct-Dec 2026), a competitive program for the next generation of business problem-solvers.",
      "Built Power BI dashboards at Infinity Learn tracking outreach, follow-up rates, and conversion metrics for the sales team.",
      "Managed 500+ active leads on LeadSquared CRM: workflow automations, access controls, and lead field structures.",
      "Coordinated 20+ of 80+ HR professionals at the PROXIMA HR Summit as one of 15 head student coordinators.",
      "Built the AI Market Trend Assistant: data-heavy platform showing AI market trends across 10 sectors ($279B total market), with an executive proposal deck generator.",
      "Built client-facing REST APIs and reporting tools at Ambula Technology in Agile sprints."
    ],
    pdfPath: "resumes/resume-consulting.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "data",
    roleName: "Data Analyst",
    summary:
      "I work with SQL, MongoDB, and Power BI to query, transform, and present data. I have designed normalized database schemas, written SQL queries for reporting, and built dashboards from scratch. I understand data end to end: how it is stored, how it is queried, and how to present it clearly.",
    skills: [
      "SQL", "MySQL", "MongoDB", "Power BI",
      "Data Visualization", "DBMS", "Python",
      "Data Structures and Algorithms",
      "LeadSquared CRM", "REST APIs", "Git", "Java"
    ],
    achievements: [
      "Built Power BI dashboards at Infinity Learn to track outreach activity, follow-up rates, and conversion metrics.",
      "Designed normalized MySQL schemas and wrote SQL queries for application and reporting needs at Ambula Technology.",
      "Managed and structured 500+ leads in LeadSquared CRM with workflow automations and access controls.",
      "Built the AI Market Trend Assistant: React + Node.js platform surfacing $279B AI market data across 10 sectors with interactive Recharts dashboards.",
      "Indexed MongoDB schemas for efficient data access in a production-style MERN application.",
      "HackerRank verified in SQL (Basic and Intermediate) and Problem Solving (Intermediate), 2025."
    ],
    pdfPath: "resumes/resume-data.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "general",
    roleName: "General",
    summary:
      "I am a backend-leaning full-stack developer. I write Java and JavaScript, design databases, build APIs, and ship features in Agile teams. I have three live projects on GitHub and I pick up new tools quickly.",
    skills: [
      "Java", "JavaScript", "Python",
      "Spring Boot", "React.js", "Node.js",
      "MySQL", "MongoDB", "SQL",
      "Power BI", "Data Structures and Algorithms",
      "Git", "Docker", "REST APIs", "Agile/Scrum"
    ],
    achievements: [
      "Platform Software Engineer at Ambula Technology: Spring Boot APIs, MySQL schemas, Agile delivery.",
      "Built JobBot: Spring Boot app that fetches jobs from 5 public APIs, scores them with Groq AI, and drafts cover letters. Java 21, MySQL, Docker, unit tests.",
      "Built AI Market Trend Assistant: full-stack React + Node.js platform with Recharts dashboards and an executive proposal generator.",
      "Built a MERN recipe platform with JWT auth, role-based access, full-text search, and star ratings.",
      "Selected for the McKinsey Forward Program (Oct-Dec 2026). HackerRank verified: SQL, Problem Solving, 2025."
    ],
    pdfPath: "resumes/resume-general.pdf",
    lastUpdated: "November 2026"
  }
];
