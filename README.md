# Vinay Virat — Portfolio

Personal portfolio site. Built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step. Deploys directly to GitHub Pages.

**Live:** https://vinayviratwork.github.io

---

## How to edit content

All content lives in two data files. You don't need to touch `index.html` or the JS files for most edits.

### Edit projects
Open `data/projects.js` and edit the `PROJECTS` array. Each object has:
- `title`, `stack`, `problem`, `what`, `outcome` — the case study text
- `tags` — chip labels
- `github` / `live` — links (set to `null` to hide)

### Edit resume roles
Open `data/resumes.js` and edit the `RESUMES` array. Each object has:
- `id` — used in the URL hash (`#resume-<id>`) and PDF filename
- `roleName` — shown on the pill tab
- `summary` — 2-3 line first-person summary for that role
- `skills` — array of skill chips to highlight
- `achievements` — array of bullet points (use facts only)
- `pdfPath` — path to the PDF file (e.g. `resumes/resume-backend.pdf`)
- `lastUpdated` — displayed under the PDF preview

### Edit contact details / meta
Open `index.html` and search for `vinayviratoff@gmail.com` or `+91-8893770796`. All contact links are plain `<a href>` elements — update in place.

---

## How to add a new resume role

1. Open `data/resumes.js`
2. Copy an existing object in the `RESUMES` array and paste it as a new entry
3. Set a unique `id` (e.g. `"frontend"`)
4. Fill in `roleName`, `summary`, `skills`, `achievements`, `pdfPath`, `lastUpdated`
5. Add the PDF file at `resumes/resume-<id>.pdf`
6. Done. The pill tab, mobile select, URL hash, and panel are all generated automatically.

---

## Folder structure

```
portfolio/
├── index.html          # All HTML sections
├── css/
│   └── style.css       # All styles, CSS variables, responsive
├── js/
│   ├── main.js         # Navbar, scroll reveal, mobile menu, contact form
│   └── resume.js       # Role switcher, hash routing, keyboard nav
├── data/
│   ├── projects.js     # Project case study data (PROJECTS array)
│   └── resumes.js      # Resume role data (RESUMES array)
└── resumes/
    ├── resume-backend.pdf
    ├── resume-fullstack.pdf
    └── resume-general.pdf
```

---

## Deploy

### GitHub Pages (current setup)
Push to `master` on `vinayviratwork/vinayviratwork.github.io`. GitHub Pages serves the root automatically. No build step needed.

### Vercel
1. Import the repo on vercel.com
2. Framework: Other (static)
3. Output directory: `.` (root)
4. Deploy

### Netlify
1. Drag the folder onto app.netlify.com, or connect the repo
2. Build command: (leave empty)
3. Publish directory: `.`

---

## Add your photo

Replace the placeholder `div` in `index.html` (search for `hero-photo`) with:
```html
<img src="images/photo.jpg" alt="Vinay Virat" class="hero-photo" />
```
Add `images/photo.jpg` to the repo. Recommended: 400×500px, good lighting.
