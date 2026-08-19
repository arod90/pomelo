"use client";
import React from "react";

/** Top navigation bar: cursive wordmark, tracked uppercase links, coral pill CTA.
 *  Below 940px the links collapse behind a burger into a drop-down panel — the
 *  same `.snav-*` mobile treatment the home page header uses. */
export function NavBar({ brand = "Pomelo", items = [], activeIndex = 0, cta, onNavigate, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const go = (i) => { setOpen(false); onNavigate && onNavigate(i); };
  const norm = (it) => (typeof it === "string" ? { label: it, sub: null } : it);

  return (
    <div style={{ position: "relative" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-6)",
          padding: "18px var(--container-pad)",
          background: "color-mix(in srgb, var(--surface-page) 88%, transparent)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          ...style,
        }}
        {...rest}
      >
        <span className="nb-brand" style={{ fontFamily: "var(--font-script)", fontSize: "var(--text-3xl)", lineHeight: 1, color: "var(--espresso-900)" }}>
          {brand}
        </span>
        <div className="snav-right" style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
          <ul className="snav-links" style={{ alignItems: "center", gap: "var(--space-6)", listStyle: "none", margin: 0, padding: 0 }}>
            {items.map((raw, i) => {
              const { label, sub } = norm(raw);
              const active = i === activeIndex;
              return (
                <li key={label}>
                  <button
                    onClick={() => go(i)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "1px",
                      fontFamily: "var(--font-display)",
                      fontWeight: "var(--weight-semibold)",
                      fontSize: "var(--text-xs)",
                      letterSpacing: "var(--tracking-caps)",
                      textTransform: "uppercase",
                      color: active ? "var(--text-accent)" : "var(--text-body)",
                    }}
                  >
                    <span>{label}</span>
                    {sub && <span style={{ fontWeight: "var(--weight-regular)", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", fontSize: "var(--text-2xs)" }}>{sub}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
          {cta}
          <button className="snav-burger" aria-label="Menú" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <React.Fragment><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></React.Fragment>
                    : <React.Fragment><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></React.Fragment>}
            </svg>
          </button>
        </div>
      </nav>
      <div className={"snav-panel" + (open ? " open" : "")}>
        {items.map((raw, i) => {
          const { label, sub } = norm(raw);
          return (
            <button key={label} className={"snav-item" + (i === activeIndex ? " active" : "")} onClick={() => go(i)}>
              <span>{label}</span>{sub && <span className="snav-sub">{sub}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
