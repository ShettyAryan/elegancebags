import { useEffect } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to every .reveal and .reveal-left element.
 * Adds the "visible" class when the element scrolls into view.
 * Supports a `data-delay` attribute (ms) for staggered entrances.
 *
 * Usage: call once at the top of any page component.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.delay) || 0;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".reveal, .reveal-left")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
