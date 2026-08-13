"use client";

/** Inline toast/notification bar. Tones: default | success | info | danger. */
export function Toast({ children, tone = "default", icon, onClose, style, ...rest }) {
  const tones = {
    default: { bg: "var(--espresso-900)", fg: "var(--cream-50)" },
    success: { bg: "var(--leaf-600)", fg: "var(--cream-50)" },
    info: { bg: "var(--surface-cool)", fg: "var(--espresso-900)" },
    danger: { bg: "var(--coral-700)", fg: "var(--cream-50)" },
  };
  const c = tones[tone];
  return (
    <div
      role="status"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        background: c.bg,
        color: c.fg,
        borderRadius: "var(--radius-pill)",
        padding: "12px 20px",
        boxShadow: "var(--shadow-md)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        animation: "pomelo-fade-up var(--dur-base) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {onClose && (
        <button onClick={onClose} aria-label="Cerrar" style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontSize: "1.1em", opacity: 0.8, lineHeight: 1, padding: 0, marginLeft: "4px" }}>×</button>
      )}
    </div>
  );
}
