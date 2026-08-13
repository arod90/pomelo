"use client";

/** Top navigation bar: cursive wordmark, tracked uppercase links, coral pill CTA. */
export function NavBar({ brand = "Pomelo", items = [], activeIndex = 0, cta, onNavigate, style, ...rest }) {
  return (
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
      <span style={{ fontFamily: "var(--font-script)", fontSize: "var(--text-3xl)", lineHeight: 1, color: "var(--espresso-900)" }}>
        {brand}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
        <ul style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", listStyle: "none", margin: 0, padding: 0 }}>
          {items.map((it, i) => {
            const label = typeof it === "string" ? it : it.label;
            const sub = typeof it === "string" ? null : it.sub;
            const active = i === activeIndex;
            return (
              <li key={label}>
                <button
                  onClick={() => onNavigate && onNavigate(i)}
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
      </div>
    </nav>
  );
}
