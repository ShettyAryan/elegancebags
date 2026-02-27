import { useReveal } from "../hooks/useReveal";
import { BRAND_VALUES, COLLAGE_IMAGES, CHROME_CIRCLE_IMAGE } from "../data/products";

export default function AboutPage() {
  useReveal();

  return (
    <div className="page-enter">

      {/* ── HEADER — bleed wordmark ───────────────────────────────────────── */}
      <header style={{ background: "white", paddingTop: 100, overflow: "hidden" }}>
        <div style={{ overflow: "hidden", userSelect: "none", pointerEvents: "none", borderBottom: "1px solid var(--slate-100)" }}>
          <p
            className="text-bleed font-serif"
            style={{ color: "rgba(0,0,0,0.05)", fontWeight: 900, textTransform: "uppercase", textAlign: "center", whiteSpace: "nowrap" }}
            aria-hidden="true"
          >
            ELEGANCE
          </p>
        </div>
      </header>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
      <section className="about-philosophy" style={{ padding: "100px 48px", maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div className="reveal img-zoom" style={{ aspectRatio: "3/4", borderRadius: 20, overflow: "hidden", background: "var(--slate-100)" }}>
          <div style={{ width: "100%", height: "100%", backgroundImage: `url('${COLLAGE_IMAGES.craftsmanship}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>

        <div className="reveal-left" data-delay="150">
          <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)", display: "block", marginBottom: 20 }}>
            01 Philosophy
          </span>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, fontStyle: "italic", marginBottom: 32 }}
          >
            Crafting the<br />Future of<br />Legacy.
          </h2>
          <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.6, color: "var(--slate-600)", maxWidth: 440, marginBottom: 40 }}>
            We believe in the silent weight of quality. Each stitch is a commitment to
            longevity, merging raw heritage with the fluid aesthetics of tomorrow.
          </p>
          <div style={{ width: 80, height: 2, background: "var(--primary)" }} />
        </div>
      </section>

      {/* ── COLLAGE ──────────────────────────────────────────────────────── */}
      <section className="about-collage" style={{ padding: "20px 48px 100px", background: "white" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(6, 80px)",
            gap: 16,
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          <div className="reveal img-zoom" style={{ gridColumn: "1 / 8", gridRow: "1 / 5", borderRadius: 20, overflow: "hidden", background: "var(--slate-200)" }}>
            <div style={{ width: "100%", height: "100%", backgroundImage: `url('${COLLAGE_IMAGES.editorial}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>

          <div className="reveal" style={{ gridColumn: "8 / 13", gridRow: "1 / 4", borderRadius: 20, overflow: "hidden", background: "var(--slate-100)" }} data-delay="100">
            <div style={{ width: "100%", height: "100%", backgroundImage: `url('${COLLAGE_IMAGES.chrome}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>

          <div className="reveal" style={{ gridColumn: "8 / 13", gridRow: "4 / 7", borderRadius: 20, overflow: "hidden", background: "var(--slate-200)" }} data-delay="200">
            <div style={{ width: "100%", height: "100%", backgroundImage: `url('${COLLAGE_IMAGES.hardware}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>

          <div className="reveal" style={{ gridColumn: "1 / 8", gridRow: "5 / 7", display: "flex", alignItems: "flex-end" }} data-delay="150">
            <p className="font-serif" style={{ fontSize: "clamp(20px, 3vw, 36px)", fontStyle: "italic", color: "var(--slate-400)", lineHeight: 1.3 }}>
              &quot;The intersection of fluid dynamics<br />and rigid luxury craftsmanship.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────── */}
      <section className="about-values" style={{ background: "var(--cornflower)", padding: "100px 0 80px", overflow: "hidden" }}>
        <div className="about-values-header" style={{ padding: "0 48px", marginBottom: 60 }}>
          <h2 className="font-serif reveal" style={{ fontSize: "clamp(40px, 6vw, 70px)", fontStyle: "italic", color: "white", marginBottom: 16 }}>
            Our Values
          </h2>
          <div style={{ width: 100, height: 3, background: "var(--powder)" }} />
        </div>

        <div className="no-scroll about-values-track" style={{ display: "flex", gap: 24, padding: "10px 48px", overflowX: "auto" }}>
          {BRAND_VALUES.map((v, i) => (
            <div
              key={v.label}
              className="value-card reveal"
              style={{
                maxWidth: 450,
                aspectRatio: "1/1",
                background: "var(--powder)",
                borderRadius: 40,
                padding: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              data-delay={i * 100}
            >
              <span style={{ fontSize: 56, color: "var(--cornflower)" }} aria-hidden="true">{v.icon}</span>
              <div>
                <h3 style={{ fontSize: 36, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--cornflower)", marginBottom: 10 }}>
                  {v.label}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(63,124,196,0.7)" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER QUOTE ────────────────────────────────────────────────── */}
      <section className="about-founder" style={{ padding: "140px 48px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Chrome circle with pulse */}
        <div
          style={{
            width: 320, height: 320,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid white",
            boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
            marginBottom: 60,
            position: "relative",
          }}
        >
          <div
            className="pulse-slow"
            aria-hidden="true"
            style={{ position: "absolute", inset: -20, background: "radial-gradient(circle, var(--powder), var(--cornflower))", borderRadius: "50%", zIndex: 0 }}
          />
          <div
            style={{
              position: "relative", zIndex: 1,
              width: "100%", height: "100%",
              backgroundImage: `url('${CHROME_CIRCLE_IMAGE}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Chrome texture"
          />
        </div>

        <div style={{ maxWidth: 760 }} className="reveal">
          <blockquote
            className="font-serif"
            style={{ fontSize: "clamp(22px, 3.5vw, 44px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.4, color: "var(--slate-600)", marginBottom: 32 }}
          >
            &quot;We don&apos;t create accessories; we create artifacts for the modern silhouette.
            Elegance is the residue of design done with absolute intention.&quot;
          </blockquote>
          <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)" }}>
            — Founder &amp; Creative Director
          </p>
        </div>
      </section>
    </div>
  );
}
