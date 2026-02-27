import { MARQUEE_ITEMS } from "../data/products";

/**
 * MarqueeStrip
 * Infinite scrolling ticker. Items are duplicated to create seamless loop.
 * Pauses on hover.
 *
 * @param {string} bg    - background color (CSS value)
 * @param {string} color - text color (CSS value)
 */
export default function MarqueeStrip({
  bg = "var(--cornflower)",
  color = "white",
}) {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div style={{ background: bg, overflow: "hidden", padding: "16px 0" }}>
      <div className="marquee-inner" aria-hidden="true">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              color,
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              padding: "0 28px",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
