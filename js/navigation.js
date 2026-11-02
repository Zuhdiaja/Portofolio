/* Navigasi bersama: menu mobile, bayangan header, dan tahun footer */
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

function setMenu(open) {
  if (!menuToggle || !navLinks) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  navLinks.classList.toggle('open', open);
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('click', (event) => {
    if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
      menuToggle.focus();
    }
  });
}

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
}

/* =========================================================
   Mode gelap / terang
   ========================================================= */
(function () {
  var rootEl = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  function syncToggle() {
    if (toggle) toggle.setAttribute('aria-pressed', rootEl.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
  }

  syncToggle();

  if (toggle) toggle.addEventListener('click', function () {
    var next = rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    rootEl.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* abaikan */ }
    syncToggle();
  });
})();

/* =========================================================
   Scroll reveal - kartu & panel muncul bertahap saat masuk viewport
   ========================================================= */
(function () {
  var targets = document.querySelectorAll(
    '.explore-card, .project-card, .exp-card, .edu-card, .edu-info-card, .org-card, .social-card, .soft-card, .software-card, .value-card, .summary-card, .profile-card, .contact-form, .cta-panel, .project-note, .social-note, .org-note, .skills-note, .about-note, .float-card'
  );
  if (!targets.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-revealed'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 3) * 70 + 'ms';
    io.observe(el);
  });
})();

/* Scroll reveal - kartu & panel muncul bertahap saat masuk viewport */
(function initReveal() {
  const targets = document.querySelectorAll(
    '.explore-card, .project-card, .exp-card, .edu-card, .edu-info-card, .org-card, .social-card, .soft-card, .software-card, .value-card, .summary-card, .profile-card, .contact-form, .cta-panel, .project-note, .social-note, .org-note, .skills-note, .about-note, .float-card'
  );
  if (!targets.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    io.observe(el);
  });
})();
