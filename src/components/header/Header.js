import React, {useContext, useState, useEffect, useRef} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./Header.scss";

const navLinks = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Experience", href: "#experience"},
  {label: "Projects", href: "#projects"},
  {label: "Education", href: "#education"},
  {label: "Contact", href: "#contact"},
];

const Header = () => {
  const {isDark, changeTheme} = useContext(StyleContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = navLinks.map(l => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const handleNavClick = href => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <header className={`portfolio-header${isScrolled ? " scrolled" : ""}`} ref={menuRef}>
      <div className="header-inner">
        {/* Logo */}
        <a href="#hero" className="header-logo" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Twinkle</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <button
              key={link.href}
              className={`nav-link${activeSection === link.href.replace("#", "") ? " active" : ""}`}
              onClick={() => handleNavClick(link.href)}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="header-controls">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={changeTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className={`toggle-track${isDark ? "" : " light"}`}>
              <div className="toggle-thumb">
                <span className="toggle-icon">{isDark ? "🌙" : "☀️"}</span>
              </div>
            </div>
          </button>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1yeEFsw_I2xcp-Fccq6NJOqJRJ48GGbzv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            id="header-resume-btn"
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            id="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
        <nav className="mobile-nav">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              className={`mobile-nav-link${activeSection === link.href.replace("#", "") ? " active" : ""}`}
              onClick={() => handleNavClick(link.href)}
              style={{animationDelay: `${i * 0.05}s`}}
              id={`mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1yeEFsw_I2xcp-Fccq6NJOqJRJ48GGbzv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume-btn"
            onClick={() => setMobileOpen(false)}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
