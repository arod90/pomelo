// Pomelo scroll-reveal system, ported from the design's motion.js.
// [data-reveal] / [data-write] elements fade/rise (or "write") into view;
// siblings inside [data-stagger] cascade. The multi-page "curtain" transition
// from the original is omitted — this is a single standalone page, so the
// hero's own CSS choreography is the load animation.
export function initPomeloMotion() {
  const root = document.documentElement;
  root.classList.add("pm-ready");

  let io = null;
  let fallbackTimer = null;

  const els = [].slice.call(document.querySelectorAll("[data-reveal],[data-write]"));

  // Stagger siblings within each [data-stagger] group.
  const groups = new Map();
  els.forEach((el) => {
    const g = el.closest("[data-stagger]") || el.parentNode;
    const i = groups.get(g) || 0;
    groups.set(g, i + 1);
    el.style.transitionDelay = i * 80 + "ms";
  });

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("pm-in"); io.unobserve(e.target); }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  els.forEach((el) => { if (!el.classList.contains("pm-in")) io.observe(el); });

  // Fallback: reveal anything already in view shortly after mount, in case the
  // observer is throttled or the element started on-screen.
  fallbackTimer = setTimeout(() => {
    const vh = window.innerHeight || 800;
    els.forEach((el) => {
      if (el.classList.contains("pm-in")) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95 && r.bottom > 0) { el.classList.add("pm-in"); if (io) io.unobserve(el); }
    });
  }, 560);

  // Note: `pm-ready` is left on <html> — it only enables the reveal CSS and is
  // harmless to keep, which lets the menu re-run this on tab change (re-observing
  // freshly-rendered rows) without a hide/show flash.
  return function cleanup() {
    if (io) io.disconnect();
    if (fallbackTimer) clearTimeout(fallbackTimer);
  };
}
