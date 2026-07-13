import React, {useEffect, useRef} from "react";
import collegeLogo from "../../assets/images/College logo.png";
import "./Education.scss";

const educationData = [
  {
    school: "Greater Noida Institute of Technology",
    logo: collegeLogo,
    degree: "B.Tech — Information Technology",
    duration: "November 2019 – June 2023",
    cgpa: "7.50",
    location: "Greater Noida, India",
    highlights: [
      "Core subjects: Data Structures, OS, DBMS, Computer Networks, System Design",
      "Final year project: Full Stack web application with React & Node.js",
      "Active participant in college tech events and hackathons",
    ],
  },
];

const Education = () => {
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
    <section id="education" className="education-section portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <p className="section-label fade-in-up">Academics</p>
        <h2 className="section-title fade-in-up delay-1">
          <span className="gradient-word">Education</span>
        </h2>

        <div className="edu-cards">
          {educationData.map((edu, i) => (
            <div key={i} className={`edu-card fade-in-up delay-${i + 2}`} id={`edu-card-${i}`}>
              {/* Left accent */}
              <div className="edu-card-accent" />

              {/* Logo */}
              <div className="edu-logo-wrap">
                <img src={edu.logo} alt={`${edu.school} logo`} className="edu-logo" />
              </div>

              {/* Info */}
              <div className="edu-info">
                <div className="edu-badges">
                  <span className="edu-badge-degree">B.Tech</span>
                  <span className="edu-badge-location">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {edu.location}
                  </span>
                </div>
                <h3 className="edu-school">{edu.school}</h3>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-meta">
                  <span className="edu-duration">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {edu.duration}
                  </span>
                  <span className="edu-cgpa">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                <ul className="edu-highlights">
                  {edu.highlights.map((h, hi) => (
                    <li key={hi} className="edu-highlight">
                      <span className="edu-highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
