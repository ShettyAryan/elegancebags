import { useState, useEffect } from "react";

const NAV_PAGES = ["Home", "Collections", "Archives", "About"];

/**
 * Nav
 * Fixed top navigation with glass-blur on scroll.
 * Left: first two links. Center: logomark SVG. Right: last two links + Cart.
 */
export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 48px",
        background: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Left links */}
      <div style={{ display: "flex", gap: 36 }}>
        {NAV_PAGES.slice(0, 2).map((label) => (
          <button
            key={label}
            className={`nav-link ${page === label ? "active" : ""}`}
            onClick={() => setPage(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Centre logomark */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          aria-label="Elegance logomark"
        >
          <circle cx="16" cy="16" r="14" stroke="var(--primary)" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="8"  stroke="var(--primary)" strokeWidth="1" />
          <circle cx="16" cy="16" r="3"  fill="var(--primary)" />
        </svg>
      </div>

      {/* Right links */}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {NAV_PAGES.slice(2).map((label) => (
          <button
            key={label}
            className={`nav-link ${page === label ? "active" : ""}`}
            onClick={() => setPage(label)}
          >
            {label}
          </button>
        ))}
        <span className="nav-link" style={{ opacity: 0.4, cursor: "default" }}>
          Cart (0)
        </span>
      </div>
    </nav>
  );
}
