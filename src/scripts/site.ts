// Site-wide interactions. Every effect is progressive: without JS the page is complete.
const root = document.documentElement;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Theme ---------------------------------------------------------------- */
function toggleTheme() {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* storage unavailable — theme still switches for this visit */
  }
}
document.querySelectorAll('[data-theme-toggle]').forEach((b) => b.addEventListener('click', toggleTheme));
document.addEventListener('toggle-theme', toggleTheme);

/* Reveal on scroll ------------------------------------------------------ */
const revealer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealer.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealer.observe(el));

/* Count-up metrics ------------------------------------------------------ */
const counter = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      counter.unobserve(e.target);
      const el = e.target as HTMLElement;
      const target = Number(el.dataset.count);
      const { prefix = '', suffix = '' } = el.dataset;
      if (reduceMotion || !target) continue;
      const start = performance.now();
      const dur = 1400;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${prefix}${Math.round(eased * target)}${suffix}`;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  },
  { threshold: 0.6 },
);
document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));

/* Pointer spotlight on cards ------------------------------------------- */
document.addEventListener('pointermove', (e) => {
  const card = (e.target as HTMLElement).closest?.<HTMLElement>('.spotlight');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - r.left}px`);
  card.style.setProperty('--my', `${e.clientY - r.top}px`);
});

/* Nav state, scroll progress, timeline fill ----------------------------- */
const nav = document.querySelector<HTMLElement>('[data-nav]');
const progress = document.querySelector<HTMLElement>('.progress');
const timeline = document.querySelector<HTMLElement>('[data-timeline]');
let ticking = false;

function onScroll() {
  ticking = false;
  const y = window.scrollY;
  nav?.classList.toggle('is-scrolled', y > 12);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress?.style.setProperty('--progress', String(max > 0 ? y / max : 0));
  if (timeline) {
    const r = timeline.getBoundingClientRect();
    const mid = window.innerHeight * 0.6;
    const fill = Math.min(1, Math.max(0, (mid - r.top) / r.height));
    timeline.style.setProperty('--fill', String(fill));
  }
}
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
onScroll();

// Highlight the nav link for the section in view.
const navLinks = new Map<string, HTMLElement>();
document.querySelectorAll<HTMLElement>('[data-nav-link]').forEach((a) => navLinks.set(a.dataset.navLink!, a));
if (navLinks.size) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const link = navLinks.get(e.target.id);
        if (!link) continue;
        if (e.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  navLinks.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });
}

/* Copy email ------------------------------------------------------------ */
document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((btn) => {
  const label = btn.querySelector('[data-copy-label]');
  btn.addEventListener('click', async () => {
    const email = document.body.dataset.email ?? '';
    try {
      await navigator.clipboard.writeText(email);
      btn.classList.add('copied');
      if (label) label.textContent = 'Copied';
      setTimeout(() => {
        btn.classList.remove('copied');
        if (label) label.textContent = 'Copy';
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
});
