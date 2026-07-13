import React, {useEffect, useRef, useState} from "react";
import "./Greeting.scss";

const TITLES = [
  "Full Stack Developer",
  "Design Engineer",
  "Next.js Specialist",
  "UI/UX Enthusiast",
  "EdTech Builder",
];

const SocialLinks = () => (
  <div className="hero-socials">
    <a
      href="https://github.com/dashboard"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-btn"
      aria-label="GitHub"
      id="hero-github-link"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/twinklejaiswal8485/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-btn"
      aria-label="LinkedIn"
      id="hero-linkedin-link"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>
    <a
      href="mailto:twinklejaiswal8485@gmail.com"
      className="social-icon-btn"
      aria-label="Email"
      id="hero-email-link"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    </a>
  </div>
);

const Greeting = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting
  const charRef = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let timeout;
    const current = TITLES[titleIndex];

    if (phase === "typing") {
      if (charRef.current < current.length) {
        timeout = setTimeout(() => {
          charRef.current++;
          setDisplayed(current.slice(0, charRef.current));
        }, 60);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else if (phase === "deleting") {
      if (charRef.current > 0) {
        timeout = setTimeout(() => {
          charRef.current--;
          setDisplayed(current.slice(0, charRef.current));
        }, 35);
      } else {
        const next = (titleIndex + 1) % TITLES.length;
        setTitleIndex(next);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, displayed, titleIndex]);

  // Scroll reveal
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
    <section id="hero" className="hero-section" ref={sectionRef}>
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content portfolio-container">
        <div className="hero-text fade-in-up">
          {/* Status badge */}
          <div className="hero-badge fade-in-up delay-1" id="hero-status-badge">
            <span className="badge-dot" />
            <span>Open to opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="hero-name fade-in-up delay-2">
            Hi, I'm <span className="name-gradient">Twinkle</span>
          </h1>

          {/* Typewriter */}
          <div className="hero-typewriter fade-in-up delay-3">
            <span className="typewriter-text">{displayed}</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </div>

          {/* Description */}
          <p className="hero-description fade-in-up delay-4">
            Full Stack Developer specializing in{" "}
            <strong>Next.js 15</strong> &amp; Creative UI/UX. Building scalable
            EdTech solutions with a passion for Design Engineering and
            immersive digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas fade-in-up delay-5">
            <a
              href="#contact"
              className="cta-primary"
              id="hero-cta-contact"
              onClick={e => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
              }}
            >
              Let's Connect
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1yeEFsw_I2xcp-Fccq6NJOqJRJ48GGbzv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
              id="hero-cta-resume"
            >
              View Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>

          <SocialLinks />
        </div>

        {/* Right — code card visual */}
        <div className="hero-visual fade-in-right delay-3">
          <div className="code-card">
            <div className="code-card-header">
              <div className="code-dot red" /><div className="code-dot yellow" /><div className="code-dot green" />
              <span className="code-filename">twinkle.tsx</span>
            </div>
            <pre className="code-body">
              <code>{`const developer = {
  name: "Twinkle Jaiswal",
  role: "Full Stack Dev",
  stack: [
    "Next.js 15",
    "TypeScript",
    "React",
    "Node.js",
  ],
  passion: "Design Eng",
  status: "open_to_work",
};`}</code>
            </pre>
          </div>

          {/* Floating stats */}
          <div className="stat-bubble stat-bubble-1 fade-in-up delay-4">
            <span className="stat-num">1yr+</span>
            <span className="stat-label">Experience</span>
          </div>
          <div className="stat-bubble stat-bubble-2 fade-in-up delay-5">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator fade-in-up delay-6">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Greeting;
