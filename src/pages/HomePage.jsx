import { useReveal } from "../hooks/useReveal";
import MarqueeStrip from "../components/MarqueeStrip";
import WordmarkSection from "../components/WordmarkSection";
import { CAROUSEL_PRODUCTS, COLLAGE_IMAGES, HERO_PURSE_IMAGE } from "../data/products";

export default function HomePage({ setPage }) {
  useReveal();

  return (
    <div className="page-enter">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background: "var(--white)",
        }}
      >
        {/* Faded background wordmark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            className="text-bleed font-serif"
            style={{ color: "rgba(0,0,0,0.04)", fontWeight: 900 }}
            aria-hidden="true"
          >
            ELEGANCE
          </h1>
        </div>

        {/* Floating blobs */}
        <div
          className="float-anim"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: 180,
            height: 180,
            background: "radial-gradient(circle, var(--powder) 0%, transparent 70%)",
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
            opacity: 0.6,
            zIndex: 0,
          }}
        />
        <div
          className="float-anim2"
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: 120,
            height: 120,
            background: "radial-gradient(circle, #AFCDF2 0%, transparent 70%)",
            borderRadius: "40% 60% 30% 70% / 60% 40% 50% 50%",
            opacity: 0.5,
            zIndex: 0,
          }}
        />

        {/* Hero body */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            paddingTop: 100,
          }}
        >
          {/* Left label */}
          <div
            className="reveal-left"
            style={{ position: "absolute", left: 48, bottom: "25%", maxWidth: 200 }}
          >
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", opacity: 0.4, marginBottom: 8 }}>
              01 — Global Launch
            </p>
            <p style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.4 }}>
              Spring Summer 2024
            </p>
          </div>

          {/* Floating purse */}
          <div
            className="float-anim"
            style={{
              width: "min(520px, 55vw)",
              aspectRatio: "1/1",
              backgroundImage: `url('${HERO_PURSE_IMAGE}')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              transition: "transform 0.7s cubic-bezier(.16,1,.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
              e.currentTarget.style.transform = "scale(1)";
            }}
            role="img"
            aria-label="Featured Elegance luxury purse"
          />

          {/* Right CTA */}
          <div
            className="reveal"
            style={{ position: "absolute", right: 48, bottom: "25%", textAlign: "right" }}
            data-delay="200"
          >
            <p
              className="font-serif"
              style={{ fontSize: 13, fontStyle: "italic", opacity: 0.5, marginBottom: 16, maxWidth: 200, textAlign: "right" }}
            >
              Where Art<br />Meets Arm.
            </p>
            <button className="btn-pill btn-primary" onClick={() => setPage("Collections")}>
              Explore Edition →
            </button>
          </div>
        </div>

        {/* Bottom tagline */}
        <div style={{ padding: "0 48px 48px", display: "flex", justifyContent: "center", zIndex: 2, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 40, height: 1, background: "var(--primary)" }} />
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)" }}>
              Crafted for the Extraordinary
            </p>
            <div style={{ width: 40, height: 1, background: "var(--primary)" }} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── ABOUT STRIP ──────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div className="reveal-left" style={{ position: "sticky", top: 120 }}>
          <span
            className="font-serif"
            style={{ fontSize: "clamp(60px, 8vw, 100px)", fontStyle: "italic", color: "var(--primary)", opacity: 0.2, lineHeight: 1 }}
          >
            02
          </span>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 8 }}>
            What We Do
          </h2>
        </div>

        <div className="reveal" data-delay="150">
          <p style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 300, lineHeight: 1.4, color: "var(--slate-600)", marginBottom: 40 }}>
            Elegance is more than a brand — it's a statement of{" "}
            <em className="font-serif" style={{ fontStyle: "italic", color: "var(--near-black)" }}>
              high-fashion editorial excellence
            </em>{" "}
            and timeless design.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.6, maxWidth: 420, marginBottom: 48 }}>
            Every bag is the perfect combination of creativity and practicality. We curate
            silhouettes that define an era — blending raw heritage with the fluid aesthetics of tomorrow.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button className="btn-pill btn-primary" onClick={() => setPage("About")}>
              Our Philosophy →
            </button>
            <div style={{ flex: 1, height: 1, background: "var(--slate-200)" }} />
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS CAROUSEL ─────────────────────────────────────────── */}
      <section style={{ background: "var(--cornflower)", padding: "80px 0 100px", overflow: "hidden" }}>
        <div style={{ padding: "0 48px", marginBottom: 48, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
              Editor's Pick · New Arrivals · Bestsellers
            </p>
            <h2 className="font-serif reveal" style={{ fontSize: "clamp(36px, 6vw, 70px)", fontStyle: "italic", color: "white", lineHeight: 1 }}>
              The Azure Series
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["←", "→"].map((arrow, i) => (
              <button
                key={i}
                aria-label={i === 0 ? "Previous" : "Next"}
                style={{
                  width: 48, height: 48,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  background: "transparent",
                  color: "white",
                  fontSize: 18,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "var(--cornflower)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "white"; }}
              >
                {arrow}
              </button>
            ))}
          </div>
        </div>

        <div
          className="no-scroll"
          style={{ display: "flex", gap: 24, overflowX: "auto", padding: "10px 48px", scrollSnapType: "x mandatory" }}
        >
          {CAROUSEL_PRODUCTS.map((card) => (
            <div
              key={card.id}
              className="card-hover"
              style={{
                minWidth: 360,
                aspectRatio: "4/5",
                background: card.bg,
                borderRadius: 24,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                scrollSnapAlign: "center",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span
                  style={{
                    background: "rgba(19,127,236,0.12)",
                    color: "var(--primary)",
                    fontSize: 9, fontWeight: 800,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    borderRadius: 999,
                  }}
                >
                  {card.badge}
                </span>
              </div>

              <div
                role="img"
                aria-label={card.name}
                style={{
                  flex: 1,
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  margin: "16px 0",
                }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 16, color: card.textColor }}>{card.name}</p>
                  <p style={{ fontSize: 12, opacity: 0.6, color: card.textColor }}>{card.subtitle}</p>
                </div>
                <button className="btn-pill btn-white" style={{ padding: "10px 20px", fontSize: 10 }}>
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAND STORY ──────────────────────────────────────────────────── */}
      <section style={{ padding: "140px 48px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 80, alignItems: "start" }}>

          {/* Left copy */}
          <div className="reveal-left" style={{ paddingTop: 60 }}>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)", display: "block", marginBottom: 20 }}>
              Brand Story
            </span>
            <h3 className="font-serif" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontStyle: "italic", lineHeight: 1.15, marginBottom: 28 }}>
              Liquid<br />Metal<br />Soul.
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.9, opacity: 0.6, marginBottom: 16 }}>
              Our team is passionate about futurism and innovation, and we bring this passion
              to life in every bag we make.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.9, opacity: 0.6, marginBottom: 40 }}>
              We love experimenting with modern materials, technologies and shapes to create
              products that not only meet your needs, but also inspire new possibilities.
            </p>
            <button className="btn-pill btn-ghost" onClick={() => setPage("About")}>
              More about us →
            </button>
          </div>

          {/* Right collage */}
          <div className="reveal" style={{ position: "relative", height: 600 }} data-delay="100">
            {/* Main image */}
            <div
              className="img-zoom"
              style={{ position: "absolute", top: 0, left: 0, width: "75%", aspectRatio: "4/5", borderRadius: 20, overflow: "hidden" }}
            >
              <div style={{ width: "100%", height: "100%", backgroundImage: `url('${COLLAGE_IMAGES.editorial}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            {/* Overlay image */}
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "42%", aspectRatio: "3/4", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
              <div style={{ width: "100%", height: "100%", backgroundImage: `url('${COLLAGE_IMAGES.chrome}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            {/* Blob accent */}
            <div
              className="float-anim"
              aria-hidden="true"
              style={{ position: "absolute", top: "30%", right: "20%", width: 80, height: 80, background: "radial-gradient(circle, #AFCDF2, #3F7CC4)", borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%", opacity: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* ── WORDMARK ─────────────────────────────────────────────────────── */}
      <WordmarkSection />
    </div>
  );
}
