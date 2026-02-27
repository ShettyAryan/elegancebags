import { useReveal } from "../hooks/useReveal";
import { ARCHIVE_SEASONS, SEASON_REGISTRY } from "../data/products";

export default function ArchivesPage() {
  useReveal();

  return (
    <div className="page-enter" style={{ background: "#F8FAFC" }}>

      {/* Ambient background blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }} aria-hidden="true">
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, background: "var(--powder)", borderRadius: "50%", filter: "blur(80px)", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "20%", right: "8%", width: 500, height: 500, background: "#DBEAFE", borderRadius: "50%", filter: "blur(100px)", opacity: 0.25 }} />
      </div>

      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <header style={{ position: "relative", zIndex: 10, paddingTop: 180, paddingBottom: 80, textAlign: "center" }}>
        <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.5em", textTransform: "uppercase", opacity: 0.4, display: "block", marginBottom: 16 }}>
          The Historical Retrospective
        </span>
        <h1
          className="font-serif reveal"
          style={{ fontSize: "clamp(80px, 15vw, 180px)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 0.9, color: "rgba(0,0,0,0.12)", textTransform: "uppercase" }}
        >
          Archives
        </h1>
        <div style={{ width: 1, height: 80, background: "var(--near-black)", margin: "40px auto 0", opacity: 0.15 }} />
      </header>

      {/* ── HORIZONTAL SCROLL TIMELINE ───────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 10, padding: "40px 0" }}>
        <div
          className="no-scroll"
          style={{ display: "flex", overflowX: "auto", padding: "40px 80px", gap: 80, scrollSnapType: "x mandatory", alignItems: "center" }}
        >
          {ARCHIVE_SEASONS.map((s, i) => (
            <div
              key={s.id}
              className="reveal"
              style={{ minWidth: 420, scrollSnapAlign: "center", display: "flex", flexDirection: "column", gap: 28 }}
              data-delay={i * 80}
            >
              {/* Card */}
              <div className="archive-card" style={{ position: "relative" }}>
                {/* Ghost year number */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    [i % 2 === 0 ? "top" : "bottom"]: -40,
                    [i % 2 === 0 ? "left" : "right"]: -24,
                    fontSize: "7rem",
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    color: "rgba(0,0,0,0.06)",
                    zIndex: 0,
                    userSelect: "none",
                    lineHeight: 1,
                  }}
                >
                  {s.year}
                </div>
                {/* White frame */}
                <div style={{ background: "white", padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)", position: "relative", zIndex: 1 }}>
                  <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                    <div
                      className="inner-img"
                      style={{ width: "100%", height: "100%", backgroundImage: `url('${s.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                      role="img"
                      aria-label={s.season}
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h2 className="font-serif" style={{ fontSize: 28, fontWeight: 300, fontStyle: "italic" }}>
                    {s.season}
                  </h2>
                  <p
                    className="font-mono"
                    style={{ fontSize: 10, marginTop: 14, maxWidth: 280, lineHeight: 1.7, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5 }}
                  >
                    [{s.note}]
                  </p>
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, opacity: 0.25, letterSpacing: "0.05em" }}>{s.num}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────────── */}
      <section style={{ padding: "120px 48px", textAlign: "center", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 40, color: "var(--primary)", opacity: 0.4, marginBottom: 24 }}>"</div>
          <blockquote
            className="font-serif reveal"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.35, color: "rgba(0,0,0,0.3)" }}
          >
            "Style is the only thing that{" "}
            <span style={{ color: "var(--near-black)" }}>survives the friction</span> of time."
          </blockquote>
          <p className="font-mono" style={{ marginTop: 32, fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", opacity: 0.35 }}>
            — Curator's Preface, Edition I
          </p>
        </div>
      </section>

      {/* ── SEASON REGISTRY ──────────────────────────────────────────────── */}
      <section style={{ padding: "40px 48px 120px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
          {[0, 1].map((col) => (
            <div key={col}>
              {/* Header row */}
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1.5px solid var(--near-black)", paddingBottom: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase" }}>Season</span>
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase" }}>Availability</span>
              </div>

              {SEASON_REGISTRY.slice(col * 3, col * 3 + 3).map((r) => (
                <div
                  key={r.season}
                  className="reveal"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,0.07)", cursor: "crosshair" }}
                  data-delay={col * 100}
                  onMouseEnter={(e) => { e.currentTarget.querySelector(".season-label").style.fontStyle = "italic"; }}
                  onMouseLeave={(e) => { e.currentTarget.querySelector(".season-label").style.fontStyle = "normal"; }}
                >
                  <span className="season-label font-serif" style={{ fontSize: 22, fontWeight: 300, transition: "font-style 0.2s" }}>
                    {r.season}
                  </span>
                  <span className="font-mono" style={{ fontSize: 10, opacity: 0.4, letterSpacing: "0.05em" }}>
                    {r.availability}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
