const RESUMES = [
  {
    id: "swe",
    roleName: "Software Engineer / Platform",
    summary:
      "I build backend services in Java Spring Boot and full-stack apps with the MERN stack. Currently doing this full-time at Ambula Technology. I work in Agile sprints, write API docs, and fix bugs in production. Outside of work I have shipped three projects from scratch.",
    skills: [
      "Java", "Spring Boot", "Node.js", "Express.js",
      "React.js", "JavaScript", "MySQL", "MongoDB",
      "JWT", "REST APIs", "Git", "Postman", "Docker",
      "Agile/Scrum", "API Documentation", "Swagger"
    ],
    achievements: [
      "Built and maintained Spring Boot REST endpoints at Ambula Technology — paginated recording data, JWT-based access control, Azure Blob Storage streaming.",
      "Implemented JWT auth and role-based access control across frontend routes and backend endpoints in multiple projects.",
      "JobBot: Spring Boot app that hits 5 job board APIs, stores results in MySQL, and uses Groq to score jobs against a PDF resume and draft cover letters. Java 21, Docker, unit tests.",
      "AI Market Trend Assistant: React 19 dashboard with Recharts, Node.js API, chat assistant, and a proposal generator that builds an 8-slide deck.",
      "RecipeHub: MERN app with JWT auth, MongoDB text indexes for search, role-based recipe editing, pagination, and star ratings.",
      "Revenue Leakage Detection: 5 SQL rules on 20,951 invoices, 0-100 risk scoring, Streamlit dashboard, 41 tests. 99.6% recall."
    ],
    pdfPath: "resumes/resume-swe.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "consulting",
    roleName: "Technology / Business Consulting",
    summary:
      "I do backend engineering by day and I have done business-facing work too — CRM for 500+ leads, Power BI dashboards for a sales team, and I am in the McKinsey Forward Program right now. I can read a problem, figure out what needs to be built, and ship it.",
    skills: [
      "Power BI", "SQL", "LeadSquared CRM",
      "Data Visualization", "Stakeholder Communication",
      "Java", "Spring Boot", "Node.js", "REST APIs",
      "Process Documentation", "Agile/Scrum",
      "Technical Documentation", "MySQL", "MongoDB"
    ],
    achievements: [
      "McKinsey Forward Program participant, Oct-Dec 2026 — selected from a competitive pool, still ongoing.",
      "Power BI dashboards at Infinity Learn: outreach volume, follow-up rates, conversion timelines for the sales team.",
      "LeadSquared CRM: set up auto-assignment, follow-up reminders, and access controls for 500+ leads.",
      "Revenue Leakage Detection: SQL rules flagging Rs 15.52 Cr of potential leakage across 20,951 invoices, with a Streamlit dashboard and Power BI export.",
      "AI Market Trend Assistant: React + Node.js dashboard covering 10 AI sectors and a 4-step proposal generator.",
      "Client-facing REST APIs and reporting tools at Ambula Technology, delivered in Agile sprints."
    ],
    pdfPath: "resumes/resume-consulting.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "data",
    roleName: "Data Analyst",
    summary:
      "I work with SQL, Python (Pandas), and Power BI. I have written SQL detection rules, built Streamlit dashboards, designed normalized schemas, and built Power BI reports from scratch at an actual job. I know how data moves from a database to a chart.",
    skills: [
      "SQL", "MySQL", "SQLite", "Python", "Pandas",
      "Power BI", "Streamlit", "Plotly",
      "Data Visualization", "DBMS", "MongoDB",
      "LeadSquared CRM", "REST APIs", "Git", "Java"
    ],
    achievements: [
      "Revenue Leakage Detection: 5 SQL fraud-detection rules on 20,951 invoices, 0-100 risk score (99.6% recall, 77.9% F1), Streamlit dashboard, Power BI star schema, 41 tests.",
      "Power BI dashboards at Infinity Learn: outreach calls, follow-up rates, lead conversion timelines — used daily by the sales team.",
      "MySQL schema design and SQL queries for application logic and reporting at Ambula Technology.",
      "500+ leads managed in LeadSquared CRM with workflow automations and access controls.",
      "AI Market Trend Assistant: React + Node.js dashboard with Recharts showing 10 AI market sectors.",
      "HackerRank verified: SQL (Basic and Intermediate), Problem Solving (Intermediate), 2025."
    ],
    pdfPath: "resumes/resume-data.pdf",
    lastUpdated: "November 2026"
  },
  {
    id: "general",
    roleName: "General",
    summary:
      "Backend engineer at Ambula Technology, 2026 B.Tech CSIT grad. I write Spring Boot APIs, design MySQL schemas, and ship features in Agile sprints. I have also built full-stack apps in React and Node.js and done reporting work with Power BI and SQL.",
    skills: [
      "Java", "JavaScript", "Python", "SQL",
      "Spring Boot", "React.js", "Node.js",
      "MySQL", "MongoDB", "Power BI",
      "Git", "Docker", "REST APIs", "Agile/Scrum",
      "Data Structures and Algorithms"
    ],
    achievements: [
      "Platform Software Engineer at Ambula Technology: Spring Boot APIs, JWT auth, Azure Blob Storage streaming, MySQL schemas, Agile delivery.",
      "Revenue Leakage Detection: SQL pipeline flagging Rs 15.52 Cr on 20,951 invoices, Streamlit dashboard, 41 tests.",
      "JobBot: Spring Boot app that hits 5 job APIs, scores against a PDF resume with Groq, drafts cover letters. Java 21, MySQL, Docker.",
      "AI Market Trend Assistant: React + Node.js dashboard and proposal generator.",
      "RecipeHub: MERN app with JWT auth, role-based access, full-text search, star ratings.",
      "McKinsey Forward Program (Oct-Dec 2026). HackerRank: SQL, Problem Solving, 2025."
    ],
    pdfPath: "resumes/resume-general.pdf",
    lastUpdated: "November 2026"
  }
];
