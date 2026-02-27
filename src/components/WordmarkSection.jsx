import { CHROME_CIRCLE_IMAGE } from "../data/products";

/**
 * WordmarkSection
 * Reused on HomePage and CollectionsPage.
 * Giant faded ELEGANCE wordmark + hoverable chrome circle overlay.
 *
 * @param {string} bg - background color token
 */
export default function WordmarkSection({ bg = "var(--slate-50)" }) {
  return (
    <section
      style={{
        padding: "100px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: bg,
      }}
    >
      <h2
        className="font-serif reveal"
        style={{
          fontSize: "clamp(80px, 18vw, 260px)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "var(--cornflower)",
          opacity: 0.1,
          lineHeight: 1,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        ELEGANCE
      </h2>

      {/* Chrome circle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "4px solid white",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('${CHROME_CIRCLE_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "filter 0.8s ease",
            filter: "grayscale(80%)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(80%)")}
        />
      </div>
    </section>
  );
}
