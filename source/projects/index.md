---
title: Projects
date: 2024-04-16 18:17:18
---

<style>
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 720px;
  margin: 2rem auto 0;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e0e4ea;
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.10);
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
  color: #2c3e50;
  margin: 0;
  line-height: 1.4;
}

.project-date {
  font-size: 0.8rem;
  color: #8a9bac;
  white-space: nowrap;
  flex-shrink: 0;
}

.project-desc {
  font-size: 0.92rem;
  color: #5a6a7a;
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
  background: #eef2fa;
  color: #2a5298;
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
  background: #2c3e50;
  color: #ffffff;
  border: 1px solid #2c3e50;
}

.btn-primary:hover {
  background: #1e2d3d;
  border-color: #1e2d3d;
  color: #ffffff;
}

.btn-outline {
  background: transparent;
  color: #2a5298;
  border: 1px solid #2a5298;
}

.btn-outline:hover {
  background: #eef2fa;
  color: #1e3f80;
  border-color: #1e3f80;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .project-card {
    background: #252d38;
    border-color: #435266;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }

  .project-card:hover {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.35);
  }

  .project-title { color: #c4c6c9; }
  .project-date  { color: #6b7f92; }
  .project-desc  { color: #a7a9ad; }

  .tag {
    background: #364151;
    color: #5b8ef0;
  }

  .btn-primary {
    background: #3d5166;
    border-color: #3d5166;
    color: #e8ecf0;
  }

  .btn-primary:hover {
    background: #4a6278;
    border-color: #4a6278;
    color: #ffffff;
  }

  .btn-outline {
    color: #5b8ef0;
    border-color: #5b8ef0;
  }

  .btn-outline:hover {
    background: #364151;
    color: #7aaef5;
    border-color: #7aaef5;
  }
}

/* Project image */
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
  background: #f4f5f7;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  color: #b0bac4;
  border: 1px dashed #d0d6de;
}

@media (prefers-color-scheme: dark) {
  .project-img-placeholder {
    background: #2e3848;
    color: #687582;
    border-color: #435266;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .project-card {
    padding: 1.2rem 1.25rem;
  }

  .project-header {
    flex-direction: column;
    gap: 0.2rem;
  }
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
