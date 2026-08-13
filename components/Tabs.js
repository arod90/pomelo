"use client";

/** Underline tab bar with coral active indicator. */
export function Tabs({ tabs = [], value = 0, onChange, style, ...rest }) {
  return (
    <div style={{ display: "flex", gap: "var(--space-6)", borderBottom: "1.5px solid var(--border-subtle)", ...style }} {...rest}>
      {tabs.map((t, i) => {
        const active = i === value;
        return (
          <button
            key={t}
            onClick={() => onChange && onChange(i)}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 14px",
              fontFamily: "var(--font-display)",
              fontWeight: active ? "var(--weight-bold)" : "var(--weight-medium)",
              fontSize: "var(--text-md)",
              color: active ? "var(--text-body)" : "var(--text-muted)",
              transition: "color var(--dur-fast) var(--ease-out)",
            }}
          >
            {t}
            {active && (
              <span style={{ position: "absolute", left: 0, right: 0, bottom: "-1.5px", height: "3px", borderRadius: "var(--radius-pill)", background: "var(--accent)" }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
