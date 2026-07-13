import React, {useEffect, useRef} from "react";
import "./Contact.scss";

const contactItems = [
  {
    id: "email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "twinklejaiswal8485@gmail.com",
    href: "mailto:twinklejaiswal8485@gmail.com",
    color: "#7c3aed",
  },
  {
    id: "phone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11 19.79 19.79 0 0 1 1.71 2.38 2 2 0 0 1 3.68 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.1A16 16 0 0 0 16 16.09l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 24 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91-9129303088",
    href: "tel:+919129303088",
    color: "#06b6d4",
  },
  {
    id: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "twinklejaiswal8485",
    href: "https://www.linkedin.com/in/twinklejaiswal8485/",
    color: "#0e76a8",
  },
];

const Contact = () => {
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
    <section id="contact" className="contact-section portfolio-section" ref={sectionRef}>
      <div className="contact-glow contact-glow-1" aria-hidden="true" />
      <div className="contact-glow contact-glow-2" aria-hidden="true" />

      <div className="portfolio-container">
        <div className="contact-inner">
          <div className="contact-text fade-in-left">
            <p className="section-label">Get In Touch</p>
            <h2 className="contact-title">
              Let's <span className="gradient-word">Work Together</span>
            </h2>
            <p className="contact-subtitle">
              I'm currently <strong className="open-text">open to new opportunities</strong> — whether
              it's a full-time role, freelance project, or just a great conversation about
              tech and design. My inbox is always open.
            </p>
            <div className="contact-availability fade-in-left delay-2">
              <span className="avail-dot" />
              <span>Available for Full-time & Freelance roles</span>
            </div>
            <a
              href="mailto:twinklejaiswal8485@gmail.com"
              className="contact-cta-main fade-in-left delay-3"
              id="contact-main-email-btn"
            >
              Send a Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="contact-cards fade-in-right delay-2">
            {contactItems.map((item, i) => (
              <a
                key={item.id}
                href={item.href}
                target={item.id === "linkedin" ? "_blank" : undefined}
                rel={item.id === "linkedin" ? "noopener noreferrer" : undefined}
                className={`contact-card fade-in-up delay-${i + 2}`}
                id={`contact-${item.id}-card`}
                style={{"--card-color": item.color}}
              >
                <div className="contact-card-icon" style={{"--icon-bg": item.color}}>
                  {item.icon}
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">{item.label}</span>
                  <span className="contact-card-value">{item.value}</span>
                </div>
                <div className="contact-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
