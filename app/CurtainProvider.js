"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

// Page-transition curtain, ported from the design's motion.js: on navigation the
// espresso curtain slides up to cover, the route swaps behind it, then it lifts
// away — so the changing page is never exposed. Falls back to an instant push if
// the DOM ref is missing or the user prefers reduced motion.
const CurtainCtx = React.createContext(null);
export const useCurtainNav = () => React.useContext(CurtainCtx) || ((p) => { window.location.href = p; });

export function CurtainProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const ref = React.useRef(null);
  const armed = React.useRef(false);

  const setDur = (ms) => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionProperty = "transform";
    el.style.transitionTimingFunction = "cubic-bezier(.7,0,.2,1)";
    el.style.transitionDuration = ms + "ms";
  };

  const go = React.useCallback((path) => {
    const el = ref.current;
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce) { router.push(path); return; }
    // reset below the fold with no transition
    el.style.display = "";
    el.classList.remove("pm-lift");
    el.style.transition = "none";
    el.classList.remove("pm-cover");
    void el.offsetHeight;
    // slide up to cover
    setDur(460);
    requestAnimationFrame(() => { el.classList.add("pm-cover", "pm-show"); });
    armed.current = true;
    setTimeout(() => router.push(path), 450);
  }, [router]);

  // Once the new route has mounted, lift the curtain away.
  React.useEffect(() => {
    if (!armed.current) return;
    armed.current = false;
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.classList.remove("pm-show", "pm-cover");
      el.classList.add("pm-lift");
      setDur(540);
      setTimeout(() => { if (el) { el.style.display = "none"; el.classList.remove("pm-lift"); } }, 600);
    }, 90);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <CurtainCtx.Provider value={go}>
      {children}
      <div id="pm-curtain" ref={ref} style={{ display: "none" }}>
        <div className="pm-panel"><div className="pm-edge" /><div className="pm-mark">Pomelo</div></div>
      </div>
    </CurtainCtx.Provider>
  );
}
