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
      "I build and maintain backend services in Java Spring Boot, full-stack apps with the MERN stack, and REST APIs that frontend and platform teams can actually integrate. Currently doing this full-time as a Platform Software Engineer. I work in Agile sprints, write documentation, and debug production issues.",
    skills: [
      "Java", "Spring Boot", "Node.js", "Express.js",
      "React.js", "JavaScript", "MySQL", "MongoDB",
      "JWT", "REST APIs", "Git", "Postman",
      "Agile/Scrum", "API Documentation"
    ],
    achievements: [
      "Built and maintained Spring Boot REST endpoints and CRUD services used by client applications and reporting tools at Ambula Technology.",
      "Designed normalized MySQL schemas and wrote SQL queries for both application logic and reporting.",
      "Implemented JWT authentication and role-based access control across frontend routes and backend endpoints in two separate projects.",
      "Built three full-stack projects: a MERN recipe platform, a Spring Boot student portal API, and an AI market trend assistant."
    ],
    pdfPath: "resumes/resume-swe.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "consulting",
    roleName: "Technology / Business Consulting",
    summary:
      "I combine software engineering with business problem-solving. I have built data pipelines and dashboards for sales teams, managed CRM systems for 500+ leads, and worked on client-facing applications. I was selected for the McKinsey Forward Program (Oct-Dec 2026). I can read a business problem, translate it into a technical spec, and ship it.",
    skills: [
      "Power BI", "SQL Analytics", "LeadSquared CRM",
      "Advanced Excel", "Data Visualization",
      "Java", "Spring Boot", "REST APIs",
      "Process Documentation", "Agile/Scrum",
      "Technical Documentation", "Stakeholder Communication"
    ],
    achievements: [
      "Selected for the McKinsey Forward Program (Oct-Dec 2026), a competitive program for the next generation of business problem-solvers.",
      "Built Power BI dashboards at Infinity Learn tracking outreach, follow-up rates, and conversion metrics for the sales team.",
      "Managed 500+ active leads on LeadSquared CRM: set up workflow automations, access controls, and lead field structures.",
      "Coordinated 20+ of 80+ HR professionals at the PROXIMA HR Summit as one of 15 head student coordinators at SOA University.",
      "Built client-facing REST APIs and reporting tools at Ambula Technology, working directly with cross-functional teams to deliver on deadline."
    ],
    pdfPath: "resumes/resume-consulting.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "data",
    roleName: "Data Analyst",
    summary:
      "I work with SQL, MongoDB, and Power BI to query, transform, and present data. I have designed normalized database schemas, written complex SQL queries for reporting, and built dashboards from scratch. I understand data end to end: how it is stored, how it is queried, and how to present it clearly.",
    skills: [
      "SQL", "MySQL", "MongoDB", "Power BI",
      "Data Visualization", "DBMS", "Advanced Excel",
      "Python", "Data Structures and Algorithms",
      "LeadSquared CRM", "REST APIs", "Git"
    ],
    achievements: [
      "Built Power BI dashboards at Infinity Learn to track outreach activity, follow-up rates, and conversion metrics for the sales team.",
      "Designed normalized MySQL schemas and wrote SQL queries for application and reporting needs at Ambula Technology.",
      "Managed and structured 500+ leads in LeadSquared CRM with workflow automations and access controls.",
      "Indexed MongoDB schemas for efficient data access in a production-style full-stack application.",
      "HackerRank verified in SQL (Basic and Intermediate) and Problem Solving (Intermediate), 2025."
    ],
    pdfPath: "resumes/resume-data.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "general",
    roleName: "General",
    summary:
      "I am a backend-leaning full-stack developer who can also work on data and business problems. I write Java and JavaScript, design databases, build APIs, and ship features in Agile teams. I pick up new tools quickly and care about code that is readable and well-documented.",
    skills: [
      "Java", "JavaScript", "Python",
      "Spring Boot", "React.js", "Node.js",
      "MySQL", "MongoDB", "SQL",
      "Power BI", "Data Structures and Algorithms",
      "Git", "REST APIs", "Agile/Scrum", "Technical Documentation"
    ],
    achievements: [
      "Currently working as a Platform Software Engineer at Ambula Technology: Spring Boot APIs, MySQL schemas, Agile delivery.",
      "Built three full-stack projects from scratch covering MERN, Spring Boot, and Node.js with real auth and documented APIs.",
      "Selected for the McKinsey Forward Program (Oct-Dec 2026).",
      "HackerRank verified: SQL (Basic and Intermediate), Problem Solving (Intermediate), 2025."
    ],
    pdfPath: "resumes/resume-general.pdf",
    lastUpdated: "November 2026"
  }
];
