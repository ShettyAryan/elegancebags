import { FOOTER_LINKS } from "../data/products";

/**
 * Footer
 * Dark footer with giant faded wordmark, newsletter input, and 4-col link grid.
 */
export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: "var(--slate-950)",
        color: "white",
        padding: "100px 48px 40px",
      }}
    >
      {/* Giant wordmark + newsletter */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(60px, 12vw, 160px)",
            fontWeight: 900,
            letterSpacing: "0.2em",
            opacity: 0.08,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          ELEGANCE
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: -20,
            position: "relative",
            zIndex: 1,
          }}
        >
          <input
            type="email"
            placeholder="JOIN THE LIST"
            aria-label="Email newsletter signup"
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "1.5px solid rgba(255,255,255,0.2)",
              color: "white",
              padding: "14px 8px",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              outline: "none",
              width: 260,
              fontFamily: "'Manrope', sans-serif",
            }}
          />
          <button
            className="btn-pill"
            style={{ background: "white", color: "var(--slate-950)" }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Link columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 48,
        }}
      >
        {FOOTER_LINKS.map((col) => (
          <div key={col.label}>
            <p
              style={{
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: "0.3em",
                color: "var(--primary)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {col.label}
            </p>
            {col.links.map((link) => (
              <p
                key={link}
                className="hover-line"
                style={{
                  fontSize: 13,
                  opacity: 0.5,
                  marginBottom: 12,
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          marginTop: 60,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 9,
          letterSpacing: "0.3em",
          opacity: 0.3,
          textTransform: "uppercase",
        }}
      >
        <p>© 2024 Elegance International. All Rights Reserved.</p>
        <div style={{ display: "flex", gap: 32 }}>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span style={{ cursor: "pointer" }}>Terms</span>
        </div>
      </div>
    </footer>
  );
}
