import React, {useEffect, useRef} from "react";
import "./About.scss";

const stats = [
  {num: "1yr+", label: "Experience", icon: "YRS"},
  {num: "10+", label: "Projects Shipped", icon: "PRJ"},
  {num: "15+", label: "Technologies", icon: "TCH"},
  {num: "99%", label: "Performance Score", icon: "PFM"},
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle("visible", e.isIntersecting)),
      {threshold: 0.12}
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(child => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="about-grid">
          {/* Left — Text */}
          <div className="about-text-col">
            <p className="section-label fade-in-left">Who I Am</p>
            <h2 className="section-title fade-in-left delay-1">
              Building the web,{" "}
              <span className="gradient-word">one pixel</span> at a time
            </h2>
            <p className="about-bio fade-in-left delay-2">
              I'm <strong>Twinkle Jaiswal</strong>, a Full Stack Developer & Design
              Engineer based in India. I specialize in building high-performance
              web applications using <strong>Next.js 15</strong>, TypeScript, and
              modern frontend tools — with a strong eye for aesthetics and UX.
            </p>
            <p className="about-bio fade-in-left delay-3">
              Currently exploring the intersection of{" "}
              <strong>AI optimization</strong> (LoRA/Quantization) and immersive
              web storytelling. I believe great software is where engineering
              precision meets design intuition.
            </p>

            <div className="about-tags fade-in-left delay-4">
              {["Next.js 15", "TypeScript", "React", "Node.js", "Framer Motion", "Shadcn UI", "Tailwind CSS", "PostgreSQL"].map(tag => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>

            <div className="about-ctas fade-in-left delay-5">
              <a
                href="https://www.linkedin.com/in/twinklejaiswal8485/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-cta-primary"
                id="about-linkedin-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                View LinkedIn
              </a>
              <a
                href="mailto:twinklejaiswal8485@gmail.com"
                className="about-cta-secondary"
                id="about-email-btn"
              >
                Say Hello
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="about-stats-col">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={s.label} className={`stat-card fade-in-up delay-${i + 2}`} id={`stat-card-${i}`}>
                  <div className="stat-card-icon">{s.icon}</div>
                  <div className="stat-card-num">{s.num}</div>
                  <div className="stat-card-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Philosophy card */}
            <div className="philosophy-card fade-in-up delay-5">
              <div className="philosophy-quote">"</div>
              <p className="philosophy-text">
                Code is like music — the best code has rhythm, flow, and hits all
                the right notes at exactly the right moment.
              </p>
              <div className="philosophy-author">— Twinkle Jaiswal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
