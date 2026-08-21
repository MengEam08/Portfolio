import React, { useEffect, useRef } from "react";

/**
 * ScrollReveal — animates children into view as they enter the viewport.
 *
 * Props:
 *  delay  — stagger index 0-5 (maps to .reveal-delay-N CSS classes)
 *  className — extra classes on the wrapper div
 */
const ScrollReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // only reveal once
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 6)}` : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
