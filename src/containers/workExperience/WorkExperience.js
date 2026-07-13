import React, {useEffect, useRef} from "react";
import "./WorkExperience.scss";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Scalong AI",
    type: "Full-time",
    date: "September 2024 – January 2025",
    location: "Remote",
    color: "#7c3aed",
    tags: ["Next.js", "React", "SSR", "TypeScript", "Chart.js"],
    description:
      "Built high-performance web applications with Next.js and React, leading the transition to Server-Side Rendering for improved SEO and load times while architecting a reusable component library.",
    bullets: [
      "Architected scalable product features including SSO and PDF generation using Next.js Server Components; optimized data hydration, increasing processing speed by 8%.",
      "Engineered end-to-end testing workflows, restructuring automation pipelines for enhanced deployment reliability and 99% uptime.",
      "Built real-time monitoring workflows using Chart-base64 to visualize log data and diagnose service failures, maintaining high-fidelity stability across all environments.",
    ],
  },
];

const WorkExperience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle("visible", e.isIntersecting)),
      {threshold: 0.1}
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(child => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="experience-header">
          <p className="section-label fade-in-up">Career</p>
          <h2 className="section-title fade-in-up delay-1">
            Work <span className="gradient-word">Experience</span>
          </h2>
          <p className="section-subtitle fade-in-up delay-2">
            Where I've contributed, built, and grown as an engineer.
          </p>
        </div>

        <div className="timeline">
          {/* Timeline line */}
          <div className="timeline-line" aria-hidden="true" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`timeline-item fade-in-left delay-${i + 2}`}
              id={`exp-card-${i}`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" style={{"--dot-color": exp.color}} />

              {/* Card */}
              <div className="exp-card">
                {/* Card accent line */}
                <div className="exp-card-accent" style={{"--accent": exp.color}} />

                <div className="exp-card-body">
                  {/* Top row */}
                  <div className="exp-card-top">
                    <div className="exp-role-info">
                      <div className="exp-role-badges">
                        <span className="exp-type-badge">{exp.type}</span>
                        <span className="exp-location-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company">{exp.company}</span>
                        <span className="exp-separator">·</span>
                        <span className="exp-date">{exp.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="exp-description">{exp.description}</p>

                  {/* Bullets */}
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="exp-bullet">
                        <span className="exp-bullet-dot" style={{"--dot-color": exp.color}} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="exp-tags">
                    {exp.tags.map(tag => (
                      <span key={tag} className="exp-tag" style={{"--tag-color": exp.color}}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Future node */}
          <div className="timeline-item fade-in-up delay-5">
            <div className="timeline-dot timeline-dot-future" />
            <div className="exp-future-card">
              <span className="exp-future-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <polyline points="13 17 18 12 13 7"/>
                  <line x1="6" y1="12" x2="18" y2="12"/>
                </svg>
              </span>
              <div>
                <p className="exp-future-title">Your Next Chapter?</p>
                <p className="exp-future-sub">I'm open to exciting new opportunities.</p>
              </div>
              <a
                href="mailto:twinklejaiswal8485@gmail.com"
                className="exp-future-btn"
                id="exp-hire-btn"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
