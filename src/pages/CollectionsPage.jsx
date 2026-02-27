import { useReveal } from "../hooks/useReveal";
import WordmarkSection from "../components/WordmarkSection";
import { COLLECTIONS, COLLECTION_FILTERS } from "../data/products";

export default function CollectionsPage() {
  useReveal();

  return (
    <div className="page-enter">

      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <header style={{ padding: "160px 48px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Ghost wordmark */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0 }}>
          <p
            className="font-serif"
            style={{ fontSize: "28vw", fontWeight: 900, color: "rgba(0,0,0,0.03)", lineHeight: 1, whiteSpace: "nowrap", userSelect: "none" }}
            aria-hidden="true"
          >
            ELEGANCE
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 16 }}>
            Curated Series 2024
          </p>
          <h1 className="font-serif reveal" style={{ fontSize: "clamp(60px, 12vw, 140px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
            OUR<br />COLLECTIONS
          </h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
            <div style={{ width: 1, height: 80, background: "var(--primary)" }} />
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--primary)", marginTop: 16 }}>
              Scroll to explore
            </p>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div style={{ display: "flex", gap: 60, padding: "0 48px 120px", maxWidth: 1500, margin: "0 auto" }}>

        {/* Sidebar */}
        <aside style={{ width: 240, flexShrink: 0, position: "sticky", top: 120, alignSelf: "flex-start" }}>
          <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 28 }}>
            Filter By
          </p>

          {Object.entries(COLLECTION_FILTERS).map(([group, items]) => (
            <div key={group} style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 10, fontWeight: 800, textTransform: "capitalize", letterSpacing: "0.2em", marginBottom: 16 }}>
                {group}
              </p>
              {items.map((item) => (
                <div
                  key={item}
                  className="hover-line"
                  style={{ fontSize: 13, opacity: 0.5, marginBottom: 10, cursor: "pointer", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}

          <button className="btn-pill btn-ghost" style={{ width: "100%", justifyContent: "center", fontSize: 9, padding: "14px 0" }}>
            Clear Filters
          </button>
        </aside>

        {/* Asymmetric grid */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "7fr 5fr", gap: "80px 40px" }}>

          {/* Collection 01 — large */}
          <CollectionCard
            collection={COLLECTIONS[0]}
            style={{ gridColumn: "1", gridRow: "1" }}
            aspect="4/5"
            delay={0}
            renderOverlay={() => (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h2 className="font-serif" style={{ color: "white", fontSize: "clamp(28px,4vw,56px)", fontStyle: "italic", textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
                  {COLLECTIONS[0].heroTitle}
                </h2>
              </div>
            )}
            showDesc
          />

          {/* Collection 02 — small, offset */}
          <CollectionCard
            collection={COLLECTIONS[1]}
            style={{ gridColumn: "2", gridRow: "1", marginTop: 120 }}
            aspect="3/4"
            delay={150}
            renderOverlay={() => (
              <div style={{ position: "absolute", bottom: 32, left: 0, right: 0, textAlign: "center" }}>
                <h2 style={{ color: "white", fontSize: 28, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.4em" }}>
                  Midnight
                </h2>
              </div>
            )}
          />

          {/* Collection 03 — medium */}
          <CollectionCard
            collection={COLLECTIONS[2]}
            style={{ gridColumn: "1" }}
            aspect="1/1"
            delay={100}
            renderOverlay={() => (
              <div style={{ position: "absolute", top: 32, right: 32, textAlign: "right" }}>
                <h2 className="font-serif" style={{ color: "var(--slate-900)", fontSize: "clamp(22px,2.5vw,38px)", fontStyle: "italic", lineHeight: 1 }}>
                  Daylight
                </h2>
                <h2 style={{ color: "var(--slate-900)", fontSize: 18, fontWeight: 300, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                  Essentials
                </h2>
              </div>
            )}
          />

          {/* Collection SE — wide */}
          <CollectionCard
            collection={COLLECTIONS[3]}
            style={{ gridColumn: "2" }}
            aspect="16/9"
            delay={200}
            renderOverlay={() => (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 28,
              }}>
                <h2 style={{ color: "white", fontSize: "clamp(22px,3.5vw,44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Archives
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.3em", marginTop: 4 }}>
                  Revisiting the 2012 Originals
                </p>
              </div>
            )}
          />
        </div>
      </div>

      {/* ── WORDMARK ─────────────────────────────────────────────────────── */}
      <WordmarkSection />
    </div>
  );
}

/* ── CollectionCard sub-component ── */
function CollectionCard({ collection, style, aspect, delay, renderOverlay, showDesc = false }) {
  return (
    <div className="reveal collection-card" style={{ cursor: "pointer", ...style }} data-delay={delay}>
      <div className="img-zoom" style={{ aspectRatio: aspect, background: "var(--slate-100)", borderRadius: 20, overflow: "hidden", position: "relative" }}>
        <div style={{ width: "100%", height: "100%", backgroundImage: `url('${collection.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
        {renderOverlay && renderOverlay()}
      </div>
      <div className="collection-card-text" style={{ marginTop: 20 }}>
        <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", color: "var(--primary)", textTransform: "uppercase", marginBottom: 6 }}>
          {collection.label}
        </p>
        <h3 style={{ fontSize: 20, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: showDesc ? 10 : 0 }}>
          {collection.name}
        </h3>
        {showDesc && collection.desc && (
          <p style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.7, maxWidth: 320 }}>{collection.desc}</p>
        )}
      </div>
    </div>
  );
}
