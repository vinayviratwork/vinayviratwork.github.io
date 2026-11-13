/* ============================================================
   main.js — Scroll animations, navbar, mobile menu, contact form
   ============================================================ */

// ── NAVBAR scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// ── ACTIVE NAV LINK on scroll ─────────────────────────────────
const allSections = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  allSections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 110) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ── MOBILE MENU ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── CONTACT FORM (mailto) ─────────────────────────────────────
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('cName').value.trim();
    const email   = document.getElementById('cEmail').value.trim();
    const subject = document.getElementById('cSubject').value.trim();
    const message = document.getElementById('cMessage').value.trim();
    if (!name || !email || !message) return;
    const to   = 'vinayvirat827178@gmail.com';
    const sub  = encodeURIComponent(subject || `Message from ${name} via portfolio`);
    const body = encodeURIComponent(`Hi Vinay,\n\n${message}\n\n---\nFrom: ${name}\nReply-to: ${email}`);
    window.location.href = `mailto:${to}?subject=${sub}&body=${body}`;
    setTimeout(() => contactForm.reset(), 600);
  });
}

// ── RENDER PROJECTS ───────────────────────────────────────────
function renderProjects() {
  const container = document.getElementById('projectsList');
  if (!container || typeof PROJECTS === 'undefined') return;

  container.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal" aria-label="${p.title}">
      <div class="project-num" aria-hidden="true">${p.number}</div>
      <div class="project-body">
        <div class="project-stack">${p.stack}</div>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-case">
          <div class="case-block">
            <div class="case-label">The problem</div>
            <div class="case-text">${p.problem}</div>
          </div>
          <div class="case-block">
            <div class="case-label">What I built</div>
            <div class="case-text">${p.what}</div>
          </div>
          <div class="case-block">
            <div class="case-label">What came out</div>
            <div class="case-text">${p.outcome}</div>
          </div>
        </div>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub&nbsp;<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>` : ''}
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener noreferrer" class="project-link-item">
            Live demo&nbsp;<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>` : ''}
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  observeReveal();
});
