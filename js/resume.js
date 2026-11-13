/* ============================================================
   resume.js — Role switcher, hash routing, PDF preview, a11y.

   HOW IT WORKS:
   - Reads RESUMES array from data/resumes.js
   - Renders pill tabs (desktop) + <select> (mobile)
   - URL hash: #resume-<id>  e.g. #resume-fullstack (shareable)
   - Active role saved in hash; reloading preserves selection

   HOW TO ADD A NEW ROLE:
   1. Add entry to data/resumes.js (copy existing object)
   2. Add PDF to /resumes/resume-<id>.pdf
   Done — no changes needed here.
   ============================================================ */

(function () {
  'use strict';

  function init() {
    if (typeof RESUMES === 'undefined') return;

    const switcherEl = document.getElementById('roleSwitcher');
    const selectEl   = document.getElementById('roleSelect');
    const panelsEl   = document.getElementById('resumePanels');
    if (!switcherEl || !panelsEl) return;

    // ── Build pill tabs ────────────────────────────────────────
    switcherEl.setAttribute('role', 'tablist');
    switcherEl.innerHTML = RESUMES.map((r, i) => `
      <button
        class="role-pill"
        data-role="${r.id}"
        role="tab"
        aria-selected="false"
        aria-controls="panel-${r.id}"
        id="tab-${r.id}"
        tabindex="-1"
      >${r.roleName}</button>
    `).join('');

    // ── Build mobile select ────────────────────────────────────
    if (selectEl) {
      selectEl.innerHTML = RESUMES.map(r =>
        `<option value="${r.id}">${r.roleName}</option>`
      ).join('');
      selectEl.addEventListener('change', e => activateRole(e.target.value, false));
    }

    // ── Build panels ──────────────────────────────────────────
    panelsEl.innerHTML = RESUMES.map(r => `
      <div class="resume-panel" id="panel-${r.id}" role="tabpanel"
           aria-labelledby="tab-${r.id}" data-role="${r.id}" hidden>
        <div class="resume-left">
          <div class="resume-summary-label">For this role</div>
          <p class="resume-summary">${r.summary}</p>

          <div class="resume-skills-label">Highlighted skills</div>
          <div class="resume-skills">
            ${r.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
          </div>

          <div class="resume-achievements-label">Key highlights</div>
          <ul class="resume-achievements">
            ${r.achievements.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>

        <div class="resume-right">
          <div class="resume-pdf-wrap">
            <iframe
              class="resume-pdf-frame"
              src="${r.pdfPath}"
              title="${r.roleName} resume PDF preview"
            ></iframe>
            <div class="resume-pdf-fallback">
              <p>PDF preview not available on this screen size.</p>
              <a href="${r.pdfPath}" download class="btn btn-primary">Download PDF</a>
            </div>
          </div>
          <div class="resume-actions">
            <a href="${r.pdfPath}" download class="btn btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
            <a href="${r.pdfPath}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              Open in new tab
            </a>
          </div>
          <p class="resume-updated">Last updated: ${r.lastUpdated}</p>
        </div>
      </div>
    `).join('');

    // ── Tab keyboard navigation ────────────────────────────────
    switcherEl.addEventListener('keydown', e => {
      const pills = [...switcherEl.querySelectorAll('.role-pill')];
      const idx   = pills.indexOf(document.activeElement);
      if (idx === -1) return;
      if (e.key === 'ArrowRight') {
        pills[(idx + 1) % pills.length].focus();
        activateRole(pills[(idx + 1) % pills.length].dataset.role);
      } else if (e.key === 'ArrowLeft') {
        pills[(idx - 1 + pills.length) % pills.length].focus();
        activateRole(pills[(idx - 1 + pills.length) % pills.length].dataset.role);
      }
    });

    // ── Pill click ─────────────────────────────────────────────
    switcherEl.addEventListener('click', e => {
      const btn = e.target.closest('.role-pill');
      if (btn) activateRole(btn.dataset.role);
    });

    // ── Activate by hash on load ───────────────────────────────
    const hash = location.hash.replace('#resume-', '');
    const initial = RESUMES.find(r => r.id === hash) ? hash : RESUMES[0].id;
    activateRole(initial, false);
  }

  // ── Core activate function ─────────────────────────────────
  function activateRole(id, updateHash = true) {
    if (typeof RESUMES === 'undefined') return;

    const switcherEl = document.getElementById('roleSwitcher');
    const selectEl   = document.getElementById('roleSelect');
    const panelsEl   = document.getElementById('resumePanels');
    if (!switcherEl || !panelsEl) return;

    // Pills
    switcherEl.querySelectorAll('.role-pill').forEach(btn => {
      const active = btn.dataset.role === id;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
      btn.tabIndex = active ? 0 : -1;
    });

    // Mobile select
    if (selectEl) selectEl.value = id;

    // Panels — fade transition
    panelsEl.querySelectorAll('.resume-panel').forEach(panel => {
      const show = panel.dataset.role === id;
      if (show) {
        panel.removeAttribute('hidden');
        panel.classList.add('active');
        // Trigger fade
        requestAnimationFrame(() => { panel.style.opacity = '1'; });
      } else {
        panel.style.opacity = '0';
        panel.classList.remove('active');
        setTimeout(() => panel.setAttribute('hidden', ''), 300);
      }
    });

    // Hash
    if (updateHash) {
      history.replaceState(null, '', `#resume-${id}`);
    }
  }

  // Expose for external use if needed
  window.activateResumeRole = activateRole;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
