import React, {useEffect, useRef} from "react";
import "./StartupProjects.scss";

const projects = [
  {
    id: "novelverse",
    name: "Novel Verse",
    desc: "A high-performance e-commerce platform for book enthusiasts. Focused on a seamless user journey from discovery to checkout with fast load times and beautiful UI.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    url: "https://novel-verse-book.vercel.app/",
    image: require("../../assets/images/novelverse.png"),
    color: "#7c3aed",
    size: "featured",
    emoji: "NOV",
  },
  {
    id: "chaistory",
    name: "Chai Story",
    desc: "Story-telling chai website with creative animations built with Framer Motion and Shadcn UI. Seamless motion-driven storytelling with optimized performance.",
    tags: ["Next.js", "Framer Motion", "Shadcn UI"],
    url: "https://the-chai-story.vercel.app/",
    image: require("../../assets/images/chaistory.png"),
    color: "#f59e0b",
    size: "normal",
    emoji: "CHI",
  },
  {
    id: "underrated-coder",
    name: "Underrated Coder",
    desc: "Production-ready EdTech platform engineered with Next.js. Optimized core web vitals and system workflows delivering 99% performance rating.",
    tags: ["Next.js", "EdTech", "SEO", "Performance"],
    url: "https://underratedcoder.com",
    image: require("../../assets/images/underrated coder.webp"),
    color: "#06b6d4",
    size: "normal",
    emoji: "UCR",
  },
];

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const StartupProject = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle("visible", e.isIntersecting)),
      {threshold: 0.08}
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(child => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="projects-header">
          <p className="section-label fade-in-up">Work</p>
          <h2 className="section-title fade-in-up delay-1">
            My <span className="gradient-word">Projects</span>
          </h2>
          <p className="section-subtitle fade-in-up delay-2">
            A selection of projects I've built — from EdTech platforms to creative web experiences.
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              className={`bento-card bento-normal fade-in-up delay-${(i % 4) + 2}`}
              id={`project-${proj.id}`}
            >
              <div className="bento-image-wrap">
                <img src={proj.image} alt={proj.name} className="bento-image" loading="lazy" />
                <div className="bento-overlay" />
              </div>
              <div className="bento-content">
                <div className="bento-top">
                  <span className="bento-emoji">{proj.emoji}</span>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-link-btn"
                    aria-label={`Visit ${proj.name}`}
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
                <h3 className="bento-name">{proj.name}</h3>
                <p className="bento-desc bento-desc-short">{proj.desc}</p>
                <div className="bento-tags">
                  {proj.tags.map(t => (
                    <span key={t} className="bento-tag" style={{"--tag-color": proj.color}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupProject;
