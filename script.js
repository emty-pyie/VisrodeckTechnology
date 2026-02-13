:root {
  --bg: #070b12;
  --bg-elev: #0d141f;
  --panel: rgba(13, 20, 32, 0.82);
  --panel-strong: rgba(12, 18, 28, 0.92);
  --text: #e6edf3;
  --muted: #9aaac0;
  --line: rgba(120, 146, 185, 0.28);
  --accent: #58a6ff;
  --accent-2: #7d89ff;
  --success: #4ad5b5;

  --space-1: clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem);
  --space-2: clamp(0.75rem, 0.65rem + 0.35vw, 1rem);
  --space-3: clamp(1rem, 0.85rem + 0.7vw, 1.5rem);
  --space-4: clamp(1.35rem, 1rem + 1.2vw, 2.1rem);
  --space-5: clamp(1.9rem, 1.3rem + 1.9vw, 3.2rem);
  --space-6: clamp(2.6rem, 1.8rem + 3vw, 4.8rem);

  --radius-md: 16px;
  --radius-lg: 20px;
  --container: min(1140px, calc(100% - 2 * var(--space-3)));
}

* { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
body {
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}


.background-lighting {
  position: fixed;
  inset: -12%;
  z-index: -2;
  opacity: 0.3;
  filter: blur(70px);
  background: linear-gradient(130deg, #1b335e, #23335f, #162231);
  animation: hueShift 18s ease-in-out infinite alternate;
}

.grid-overlay {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.12;
  background-image: linear-gradient(rgba(145, 173, 214, 0.14) 1px, transparent 1px),
    linear-gradient(90deg, rgba(145, 173, 214, 0.14) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 82%);
}

.announcement {
  text-align: center;
  padding: 0.55rem 1rem;
  font-size: 0.9rem;
  color: #d2e3ff;
  border-bottom: 1px solid var(--line);
  background: linear-gradient(90deg, rgba(38, 57, 95, 0.42), rgba(28, 45, 75, 0.42));
}

.navbar {
  position: sticky;
  top: 0.55rem;
  z-index: 20;
  width: var(--container);
  margin: var(--space-3) auto;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  border: 1px solid rgba(123, 153, 198, 0.3);
  background: rgba(7, 11, 18, 0.84);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.logo {
  text-decoration: none;
  color: var(--text);
  font-weight: 700;
  letter-spacing: 0.01em;
}
.logo span { color: var(--accent); }

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.nav-links a {
  text-decoration: none;
  color: var(--muted);
  font-weight: 500;
  transition: color 220ms ease;
}
.nav-links a:hover,
.nav-links a.active { color: var(--text); }

.container { width: var(--container); margin: 0 auto; }
.section { padding: var(--space-3) 0; }

.hero {
  max-width: 900px;
  padding-top: var(--space-3);
}

.eyebrow {
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.82rem;
  font-weight: 600;
}

h1, h2, h3 { line-height: 1.1; margin: 0 0 var(--space-3); letter-spacing: -0.02em; }
h1 { font-size: clamp(2.15rem, 5.4vw, 5rem); }
h2 { font-size: clamp(1.45rem, 2.7vw, 2.7rem); }
h3 { font-size: clamp(1.05rem, 1.8vw, 1.4rem); }

.hero p.lead,
.section-intro {
  color: var(--muted);
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  max-width: 64ch;
}

.glow {
  color: #d8e8ff;
  text-shadow: 0 0 10px rgba(88, 166, 255, 0.45), 0 0 20px rgba(125, 137, 255, 0.3);
}

.row { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-top: var(--space-3); }

.button {
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.75rem 1.15rem;
  text-decoration: none;
  font-weight: 600;
  color: var(--text);
  background: transparent;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}
.button.primary {
  color: #081018;
  background: linear-gradient(120deg, #6cb6ff, #8994ff);
  box-shadow: 0 8px 20px rgba(64, 118, 190, 0.35);
}
.button.secondary {
  background: rgba(90, 118, 163, 0.12);
  border-color: rgba(128, 162, 214, 0.38);
}
.button:hover { transform: translateY(-2px); }

.grid {
  display: grid;
  gap: var(--space-3);
}
.grid.four { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid.three { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }

.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  backdrop-filter: blur(10px);
  transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
}
.card:hover {
  transform: translateY(-4px);
  border-color: rgba(154, 186, 236, 0.5);
  box-shadow: 0 16px 30px rgba(6, 16, 33, 0.45);
}

.badge {
  display: inline-flex;
  padding: 0.35rem 0.7rem;
  font-size: 0.78rem;
  border-radius: 999px;
  border: 1px solid rgba(157, 231, 212, 0.4);
  color: #b8f4e6;
  background: rgba(76, 186, 165, 0.14);
}

.stat {
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  margin-bottom: 0.3rem;
  font-weight: 700;
}

.blog-meta,
.meta {
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: var(--space-2);
}

.post-card { min-height: 260px; }
.post-card h3 { margin-bottom: 0.85rem; }
.post-card a,
.inline-link { color: #c9ddff; text-decoration: none; }
.post-card a:hover,
.inline-link:hover { text-decoration: underline; }

.article {
  width: min(820px, calc(100% - 2 * var(--space-3)));
  margin: var(--space-4) auto;
  background: var(--panel-strong);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 1rem + 2vw, 3rem);
}
.article p,
.article li { color: #c5d4ea; }
.article ul { padding-left: 1.25rem; }

.timeline {
  border-left: 1px solid rgba(148, 175, 224, 0.3);
  margin-left: 0.4rem;
  padding-left: var(--space-4);
  display: grid;
  gap: var(--space-3);
}
.release {
  position: relative;
}
.release::before {
  content: "";
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: linear-gradient(140deg, #69b8ff, #8f74ff);
  position: absolute;
  left: calc(-1 * var(--space-4) - 6px);
  top: 0.45rem;
}

.footer {
  width: var(--container);
  margin: var(--space-2) auto var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
  color: var(--muted);
}

.reveal {
  opacity: 1;
  transform: none;
  transition: opacity 500ms ease, transform 500ms ease;
}
.reveal.visible { opacity: 1; transform: none; }

@keyframes hueShift {
  from { transform: scale(1.05) translate(-2%, -1%); }
  to { transform: scale(1.12) translate(2%, 2%); }
}

@media (max-width: 980px) {
  .grid.four { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 760px) {
  .navbar { margin: var(--space-2) auto; top: 0.35rem; }
  .nav-links { display: none; }
  .grid.four { grid-template-columns: 1fr; }
  .section { padding: var(--space-3) 0; }
}

.hidden { display: none; }

.form-card {
  max-width: 860px;
}

.form-grid {
  display: grid;
  gap: var(--space-2);
}

.form-grid label {
  display: grid;
  gap: 0.45rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.form-grid input,
.form-grid textarea {
  width: 100%;
  background: rgba(10, 16, 25, 0.95);
  border: 1px solid rgba(145, 174, 221, 0.3);
  border-radius: 10px;
  color: var(--text);
  padding: 0.7rem 0.8rem;
  font: inherit;
}

.form-grid input:focus,
.form-grid textarea:focus {
  outline: none;
  border-color: rgba(139, 185, 255, 0.6);
  box-shadow: 0 0 0 3px rgba(110, 164, 245, 0.18);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4);
  width: 100%;
}

.footer-title {
  color: var(--text);
  font-weight: 700;
  margin-bottom: 0.45rem;
}

.footer-grid p {
  margin: 0 0 0.45rem;
}

@media (max-width: 760px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
}
