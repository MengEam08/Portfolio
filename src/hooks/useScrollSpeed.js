import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useScrollSpeed: accelerates and smooths mousewheel/page scrolling,
 * giving a fast, responsive, and modern scroll feel.
 */
export const useScrollSpeed = (multiplier = 1.6) => {
  useEffect(() => {
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isWheeling = false;
    let animId = null;

    const onScroll = () => {
      if (!isWheeling) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    const isScrollable = (el) => {
      while (el && el !== document.body && el !== document.documentElement) {
        if (el.scrollHeight > el.clientHeight) {
          const overflowY = window.getComputedStyle(el).overflowY;
          if (overflowY === "auto" || overflowY === "scroll") {
            return true;
          }
        }
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e) => {
      // Don't intercept zoom or horizontal scroll or if modifier keys are pressed
      if (e.ctrlKey || e.altKey || e.shiftKey) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Check if user is scrolling inside an internal scrollable container
      if (isScrollable(e.target)) return;

      e.preventDefault();

      // Differentiate mouse wheel (large discrete deltas, typically >= 40) vs trackpad
      const isMouseWheel = Math.abs(e.deltaY) >= 40;
      const boost = isMouseWheel ? multiplier : 1.2;
      const delta = e.deltaY * boost;

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Accumulate target scroll position
      targetY = Math.max(0, Math.min(maxScroll, (isWheeling ? targetY : window.scrollY) + delta));

      if (!isWheeling) {
        isWheeling = true;
        currentY = window.scrollY;

        const updateScroll = () => {
          const diff = targetY - currentY;
          if (Math.abs(diff) > 0.5) {
            currentY += diff * 0.22; // Snappy, responsive interpolation
            window.scrollTo(0, currentY);
            if (ScrollTrigger) {
              ScrollTrigger.update();
            }
            animId = requestAnimationFrame(updateScroll);
          } else {
            window.scrollTo(0, targetY);
            if (ScrollTrigger) {
              ScrollTrigger.update();
            }
            isWheeling = false;
          }
        };

        animId = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [multiplier]);
};
