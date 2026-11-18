const PROJECTS = [
  {
    id: "food-recipe",
    number: "01",
    title: "RecipeHub — Food Recipe Web App",
    stack: "MongoDB · Express.js · React.js · Node.js · JWT",
    problem:
      "I wanted to build something that covered auth end to end — not just a frontend hitting a mock API, but actual login, roles, and protected routes on both sides.",
    what:
      "Full-stack recipe platform, React 19 on the front and Node.js/Express on the back. I designed a MongoDB schema with text indexes for search, wired up JWT auth with bcrypt, added role-based access so only the author can edit their own recipes, and built pagination and star ratings. Protected routes on both frontend and backend — if the token is bad, nothing works.",
    outcome:
      "A MERN app with real auth, real data, and a documented API. I use it as my baseline when I start a new full-stack project.",
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
      "I wanted one project that showed three things: a data-heavy dashboard, multiple API endpoints, and document generation. No good reason to split them up.",
    what:
      "React 19 frontend with three pages — a dashboard of 10 AI market trends with Recharts charts and filters, a chat-style assistant for market questions, and a proposal generator that builds an 8-slide deck with speaker notes and ROI numbers. Node.js/Express backend handles the data and generation logic. CORS-restricted.",
    outcome:
      "One project that does too many things, which was the point. Shows I can wire up different user flows through the same backend without them breaking each other.",
    tags: ["React 19", "Node.js", "Express.js", "Recharts", "REST API", "Vite"],
    github: "https://github.com/vinayviratwork/AI-Trend-Assistant",
    live: null
  },
  {
    id: "battleground-x",
    number: "03",
    title: "Battleground X — Multiplayer Battle Royale",
    stack: "Unity 2022.3 · C# · NGO Netcode · Unity Relay · URP · Android · Windows",
    problem:
      "I wanted to build real online multiplayer — not a local two-player prototype, but actual matchmaking over the internet where combat is validated on the server.",
    what:
      "10-player battle royale in Unity 2022.3, 35 C# scripts from scratch. Networking on Unity NGO 1.8.1 with Unity Relay — players join via a 6-digit code, no IP address needed, works behind NAT. Server validates every shot: ammo check, direction check, raycast on server physics. 8 named map zones. Shrinking safe zone with 7 phases, full match state machine, minimap using RenderTexture, pooled VFX so there is no GC spike on mobile. Scene generator builds the map from code — no binary Unity files in the repo.",
    outcome:
      "A working multiplayer game you can install and play. The VFX pooling was the hardest part — mobile kept freezing until I got the object pool tuned right.",
    tags: ["Unity", "C#", "NGO Netcode", "Unity Relay", "URP", "Android", "Windows x64", "Game Dev"],
    github: "https://github.com/vinayviratwork/BattlegroundX",
    live: "https://vinayviratwork.github.io/BattlegroundX"
  },
  {
    id: "jobbot",
    number: "04",
    title: "JobBot — AI Job Application Assistant",
    stack: "Java 21 · Spring Boot 3 · MySQL · Groq AI (Llama 3.3) · Docker",
    problem:
      "I apply to a lot of jobs and kept copy-pasting the same information. I wanted a Spring Boot project with real external integrations — not just CRUD endpoints talking to one database.",
    what:
      "Spring Boot app that hits 5 job board APIs (Greenhouse, Lever, Ashby, Workable, RemoteOK), saves listings to MySQL via Spring Data JPA, and runs a daily scan at 9am. Upload a PDF resume and Groq scores each job 0-100 against it, then drafts a cover letter for anything above the threshold. The prompt tells the model not to invent experience I do not have. Vanilla JS dashboard, Swagger docs, CSV export, email alerts, Docker Compose, unit tests.",
    outcome:
      "I actually use it. Went from spending 20 minutes per application to reviewing a shortlist. The scoring is not perfect but it is better than reading 50 job descriptions manually.",
    tags: ["Java 21", "Spring Boot 3", "MySQL", "Groq AI", "Docker", "Swagger", "JUnit"],
    github: "https://github.com/vinayviratwork/JOB-BOT",
    live: null
  },
  {
    id: "revenue-leakage",
    number: "05",
    title: "Revenue Leakage Detection",
    stack: "Python · SQL (SQLite) · Streamlit · Plotly · Pandas · Power BI",
    problem:
      "Accounts-payable teams miss duplicate payments, approval-limit splits, and outlier invoices because there is no automated way to flag them. Manual review does not scale past a few hundred invoices.",
    what:
      "Python pipeline on 20,951 synthetic invoices, 150 vendors, 3 Indian financial years. Five SQL rules each catch a different pattern: duplicates within 7 days, invoice clusters just below the Rs 50,000 approval limit, payments on weekends or holidays, suspiciously round amounts from non-retainer vendors, and statistical outliers (vendor mean + 3 std devs). Each flagged invoice gets a risk score 0-100. Streamlit dashboard shows KPI cards, leakage broken down by rule, monthly trend, top vendors by exposure, and per-rule precision/recall/F1. Power BI export is a star schema — one fact table, three dims.",
    outcome:
      "1,731 of 20,951 invoices flagged (8.3%). Recall 99.6%, F1 77.9%. Potential leakage Rs 15.52 Cr before audit, Rs 8.97 Cr from confirmed matches. 41 tests, all passing.",
    tags: ["Python", "SQL", "SQLite", "Streamlit", "Plotly", "Pandas", "Power BI", "Data Analytics"],
    github: "https://github.com/vinayviratwork/revenue-leakage-detection",
    live: null
  }
];
