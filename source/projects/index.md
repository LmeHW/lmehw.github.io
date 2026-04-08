---
title: Projects
date: 2024-04-16 18:17:18
---

<style>
/* ── Projects page — CSS variables (light mode defaults) ─────────── */
:root {
  --pj-accent:         #1d4ed8;
  --pj-text-primary:   #1e293b;
  --pj-text-secondary: #475569;
  --pj-text-date:      #64748b;
  --pj-card-bg:        #ffffff;
  --pj-card-border:    #e2e8f0;
  --pj-card-shadow:    rgba(0,0,0,0.06);
  --pj-card-shadow-hover: rgba(0,0,0,0.10);
  --pj-tag-bg:         #dbeafe;
  --pj-tag-color:      #1d4ed8;
  --pj-btn-primary-bg: #1e293b;
  --pj-btn-primary-hover: #0f172a;
  --pj-btn-outline-bg-hover: #dbeafe;
  --pj-btn-outline-hover-color: #1e3a8a;
  --pj-placeholder-bg: #f1f5f9;
  --pj-placeholder-fg: #94a3b8;
  --pj-placeholder-border: #cbd5e1;
}

/* ── Dark mode — OS preference ───────────────────────────────────── */
@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme='light']) {
    --pj-accent:         #5b8ef0;
    --pj-text-primary:   #c4c6c9;
    --pj-text-secondary: #a7a9ad;
    --pj-text-date:      #6b7f92;
    --pj-card-bg:        #252d38;
    --pj-card-border:    #435266;
    --pj-card-shadow:    rgba(0,0,0,0.25);
    --pj-card-shadow-hover: rgba(0,0,0,0.35);
    --pj-tag-bg:         #364151;
    --pj-tag-color:      #5b8ef0;
    --pj-btn-primary-bg: #3d5166;
    --pj-btn-primary-hover: #4a6278;
    --pj-btn-outline-bg-hover: #364151;
    --pj-btn-outline-hover-color: #7aaef5;
    --pj-placeholder-bg: #2e3848;
    --pj-placeholder-fg: #687582;
    --pj-placeholder-border: #435266;
  }
}

/* ── Dark mode — Fluid toggle ────────────────────────────────────── */
html[data-user-color-scheme='dark'] {
  --pj-accent:         #5b8ef0;
  --pj-text-primary:   #c4c6c9;
  --pj-text-secondary: #a7a9ad;
  --pj-text-date:      #6b7f92;
  --pj-card-bg:        #252d38;
  --pj-card-border:    #435266;
  --pj-card-shadow:    rgba(0,0,0,0.25);
  --pj-card-shadow-hover: rgba(0,0,0,0.35);
  --pj-tag-bg:         #364151;
  --pj-tag-color:      #5b8ef0;
  --pj-btn-primary-bg: #3d5166;
  --pj-btn-primary-hover: #4a6278;
  --pj-btn-outline-bg-hover: #364151;
  --pj-btn-outline-hover-color: #7aaef5;
  --pj-placeholder-bg: #2e3848;
  --pj-placeholder-fg: #687582;
  --pj-placeholder-border: #435266;
}

/* ── Components ──────────────────────────────────────────────────── */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 720px;
  margin: 2rem auto 0;
}

.project-card {
  background: var(--pj-card-bg);
  border: 1px solid var(--pj-card-border);
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 1px 4px var(--pj-card-shadow);
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: 0 3px 12px var(--pj-card-shadow-hover);
}

.project-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}

.project-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--pj-text-primary);
  margin: 0;
  line-height: 1.4;
}

.project-date {
  font-size: 0.8rem;
  color: var(--pj-text-date);
  white-space: nowrap;
  flex-shrink: 0;
}

.project-desc {
  font-size: 0.92rem;
  color: var(--pj-text-secondary);
  line-height: 1.65;
  margin: 0 0 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.1rem;
}

.tag {
  display: inline-block;
  padding: 0.2em 0.65em;
  background: var(--pj-tag-bg);
  color: var(--pj-tag-color);
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.project-links {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.38em 1em;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--pj-btn-primary-bg);
  color: #ffffff;
  border: 1px solid var(--pj-btn-primary-bg);
}

.btn-primary:hover {
  background: var(--pj-btn-primary-hover);
  border-color: var(--pj-btn-primary-hover);
  color: #ffffff;
}

.btn-outline {
  background: transparent;
  color: var(--pj-accent);
  border: 1px solid var(--pj-accent);
}

.btn-outline:hover {
  background: var(--pj-btn-outline-bg-hover);
  color: var(--pj-btn-outline-hover-color);
  border-color: var(--pj-btn-outline-hover-color);
}

/* ── Project image ───────────────────────────────────────────────── */
.project-img-wrap {
  margin: 0.75rem 0 1rem;
  border-radius: 6px;
  overflow: hidden;
}

.project-img-wrap img {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  display: block;
}

.project-img-placeholder {
  height: 160px;
  background: var(--pj-placeholder-bg);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  color: var(--pj-placeholder-fg);
  border: 1px dashed var(--pj-placeholder-border);
}

/* ── Mobile ──────────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .project-card { padding: 1.2rem 1.25rem; }
  .project-header { flex-direction: column; gap: 0.2rem; }
}
</style>

<div class="projects-grid">

  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">GPA4.0 — AI-Powered Product Design Studio</h3>
      <span class="project-date">2025</span>
    </div>
    <p class="project-desc">
      Transforms raw ideas into market-ready design packages through conversation. Guides users through
      a structured five-phase workflow — from appearance design and commercial strategy to product positioning,
      image generation, and 3D modeling — culminating in high-resolution 2D renders and interactive 3D models.
      Features a glass-morphism interface with real-time chat, markdown rendering, and auto-generated project
      thumbnails backed by a persistent local storage dashboard.
    </p>
    <div class="project-img-wrap">
      <img src="/img/projects/gpa40.svg" alt="GPA4.0 preview">
    </div>
    <div class="project-tags">
      <span class="tag">Python</span>
      <span class="tag">Flask</span>
      <span class="tag">JavaScript</span>
      <span class="tag">OpenAI GPT-4.1</span>
      <span class="tag">Gemini 2.0 Flash</span>
      <span class="tag">Meshy v5</span>
      <span class="tag">3D Modeling</span>
      <span class="tag">LLM</span>
    </div>
    <div class="project-links">
      <a class="btn btn-primary" href="https://github.com/KesonStar/GPA4.0" target="_blank" rel="noopener">View Code</a>
    </div>
  </div>

</div>
