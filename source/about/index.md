---
title: About
layout: about
date: 2024-04-16 18:17:18
---

<style>
/* ── About page — CSS variables (light mode defaults) ───────────── */
:root {
  --ab-accent:          #1d4ed8;   /* vivid blue, clearly visible on white */
  --ab-dot-border:      #ffffff;
  --ab-text-primary:    #1e293b;   /* near-black */
  --ab-text-secondary:  #475569;   /* readable medium gray */
  --ab-text-label:      #64748b;   /* section title — visible but secondary */
  --ab-timeline-border: #cbd5e1;   /* visible against white glass */
  --ab-card-bg:         #ffffff;
  --ab-card-border:     #e2e8f0;
  --ab-placeholder-bg:  #f1f5f9;
  --ab-placeholder-fg:  #94a3b8;
}

/* ── Dark mode — OS preference (only when user hasn't overridden) ── */
@media (prefers-color-scheme: dark) {
  html:not([data-user-color-scheme='light']) {
    --ab-accent:          #5b8ef0;
    --ab-dot-border:      #252d38;
    --ab-text-primary:    #c4c6c9;
    --ab-text-secondary:  #a7a9ad;
    --ab-text-label:      #687582;
    --ab-timeline-border: #435266;
    --ab-card-bg:         #252d38;
    --ab-card-border:     #435266;
    --ab-placeholder-bg:  #2e3848;
    --ab-placeholder-fg:  #687582;
  }
}

/* ── Dark mode — Fluid toggle button ───────────────────────────── */
html[data-user-color-scheme='dark'] {
  --ab-accent:          #5b8ef0;
  --ab-dot-border:      #252d38;
  --ab-text-primary:    #c4c6c9;
  --ab-text-secondary:  #a7a9ad;
  --ab-text-label:      #687582;
  --ab-timeline-border: #435266;
  --ab-card-bg:         #252d38;
  --ab-card-border:     #435266;
  --ab-placeholder-bg:  #2e3848;
  --ab-placeholder-fg:  #687582;
}

/* ── Components ─────────────────────────────────────────────────── */
.ab-intro-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--ab-text-primary);
  margin: 0 0 0.75rem;
  line-height: 1.4;
  max-width: 680px;
}

.ab-intro {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--ab-text-primary);
  margin-bottom: 2.5rem;
  max-width: 680px;
}

/* ── Timeline ───────────────────────────────────────────────────── */
.ab-section-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ab-text-label);
  margin: 0 0 1.25rem;
}

.ab-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 3rem;
  border-left: 2px solid var(--ab-timeline-border);
  padding-left: 1.5rem;
}

.ab-step {
  position: relative;
  padding-bottom: 1.75rem;
}

.ab-step:last-child { padding-bottom: 0; }

.ab-step::before {
  content: "";
  position: absolute;
  left: -1.875rem;
  top: 0.35rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--ab-accent);
  border: 2px solid var(--ab-dot-border);
  box-shadow: 0 0 0 2px var(--ab-accent);
}

.ab-step-year {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ab-accent);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.15rem;
}

.ab-step-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ab-text-primary);
  margin-bottom: 0.2rem;
}

.ab-step-desc {
  font-size: 0.875rem;
  color: var(--ab-text-secondary);
  line-height: 1.55;
  margin: 0;
}

/* ── Artwork grid ───────────────────────────────────────────────── */
.ab-art-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  margin-bottom: 3rem;
}

.ab-art-card {
  border: 1px solid var(--ab-card-border);
  border-radius: 6px;
  overflow: hidden;
  background: var(--ab-card-bg);
}

.ab-art-placeholder {
  height: 180px;
  background: var(--ab-placeholder-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: var(--ab-placeholder-fg);
  font-size: 0.82rem;
}

.ab-art-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.ab-art-body {
  padding: 0.7rem 0.85rem 0.8rem;
}

.ab-art-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ab-text-primary);
  margin: 0 0 0.2rem;
}

.ab-art-caption {
  font-size: 0.8rem;
  color: var(--ab-text-secondary);
  margin: 0;
  line-height: 1.5;
}

/* ── Research ───────────────────────────────────────────────────── */
.ab-research-list {
  padding-left: 1.25rem;
  margin: 0 0 3rem;
}

.ab-research-list li {
  font-size: 0.92rem;
  color: var(--ab-text-primary);
  line-height: 1.7;
  margin-bottom: 0.25rem;
}

.ab-section { margin-bottom: 2.75rem; }

/* ── Mobile ─────────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .ab-art-grid { grid-template-columns: 1fr; }
}
</style>

<h2 class="ab-intro-title">Hi, I'm Wei — a CS student who codes, moves, and explores.</h2>
<p class="ab-intro">
  I believe sports and the outdoors shape who we are. My love for movement and nature keeps me curious and eager to learn. Staying physically active gives me the confidence to take on challenges, while a strong ability to learn allows me to stay calm and think clearly when facing any difficulties.
</p>

---

<div class="ab-section">
<p class="ab-section-title">My Path</p>
<div class="ab-timeline">

  <div class="ab-step">
    <p class="ab-step-year">2022 – 2026</p>
    <p class="ab-step-title">B.Sc. in Computer Science and Technology (ShanghaiTech University)</p>
    <p class="ab-step-desc">Built my foundation in computer science — from algorithms to machine learning — and began exploring spatial representation learning in 3D medical image segmentation.</p>
  </div>

  <div class="ab-step">
    <p class="ab-step-year">2025</p>
    <p class="ab-step-title">UC Berkeley Extension — Computer Science Certificate</p>
    <p class="ab-step-desc">Expanded my global perspective through academic experience in the U.S., engaging with diverse ideas, cultures, and approaches to computing.</p>
  </div>

  <div class="ab-step">
    <p class="ab-step-year">2026 – 2029 (Expected)</p>
    <p class="ab-step-title">M.Sc. in Computer Science and Technology (ShanghaiTech University)</p>
    <p class="ab-step-desc">Continuing research in deep learning and medical imaging, with a focus on methods that are both rigorous and practically impactful.</p>
  </div>

</div>
</div>

---

<div class="ab-section">
<p class="ab-section-title">Creative Life</p>
<div class="ab-art-grid">

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/about/creative/travel.JPG" alt="Travel">
    <div class="ab-art-body">
      <p class="ab-art-label">✈️ Travel</p>
      <p class="ab-art-caption">Every new place rewires how I think — different landscapes, different people, different perspectives.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/about/creative/photography.JPG" alt="Photography">
    <div class="ab-art-body">
      <p class="ab-art-label">📷 Photography</p>
      <p class="ab-art-caption">Learning to see the world more carefully, one frame at a time.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/about/creative/food.png" alt="Food">
    <div class="ab-art-body">
      <p class="ab-art-label">🍜 Food</p>
      <p class="ab-art-caption">The best way to understand a culture — always curious, always hungry.</p>
    </div>
  </div>

</div>
</div>

---

<div class="ab-section">
<p class="ab-section-title">Outside the Lab</p>
<div class="ab-art-grid">

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/about/outdoors/rowing.jpg" alt="Rowing">
    <div class="ab-art-body">
      <p class="ab-art-label">🚣 Rowing</p>
      <p class="ab-art-caption">Eight people, one rhythm — the sport that taught me what real teamwork feels like.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/about/outdoors/skiing.png" alt="Skiing" style="object-position: top;">
    <div class="ab-art-body">
      <p class="ab-art-label">⛷️ Skiing</p>
      <p class="ab-art-caption">Speed, balance, and the mountain — where I feel most alive in winter.</p>
    </div>
  </div>

  <div class="ab-art-card">
    <img class="ab-art-img" src="/img/about/outdoors/hiking.png" alt="Hiking">
    <div class="ab-art-body">
      <p class="ab-art-label">🥾 Hiking</p>
      <p class="ab-art-caption">Where I do my best thinking — the further from a screen, the better.</p>
    </div>
  </div>

</div>
</div>

---

<div class="ab-section">
<p class="ab-section-title">Research Interests</p>
<ul class="ab-research-list">
  <li><strong>Deep learning in medical imaging</strong> — spatial representation learning, 3D medical image segmentation, and methods that generalize under real clinical conditions</li>
  <li><strong>Large language models</strong> — mechanistic interpretability, activation steering, and understanding what's actually happening inside these models</li>
</ul>
</div>
