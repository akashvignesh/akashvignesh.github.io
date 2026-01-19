"use client";
import { useTheme } from "@/src/context/ThemeContext";

const links = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function LeftNav() {
  const { theme } = useTheme();
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = -90;
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="left-nav" aria-label="Section navigation">
      {/* Decorative vertical line */}
      <div className={`left-nav-line left-nav-line--${themeClass}`} />
      
      <ul className="left-nav-list">
        {links.map((link, index) => (
          <li key={link.id} className="left-nav-item" style={{ animationDelay: `${index * 50}ms` }}>
            <button
              onClick={() => scrollTo(link.id)}
              className={`left-nav-btn left-nav-btn--${themeClass}`}
            >
              <span className="left-nav-label">{link.label}</span>
              <div className={`left-nav-hover left-nav-hover--${themeClass}`} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
