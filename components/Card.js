/** Soft rounded content card. Elevations: flat | raised | inverse | accent. */
export function Card({ children, elevation = "raised", padding = "lg", style, ...rest }) {
  const pads = { none: 0, sm: "var(--space-4)", md: "var(--space-5)", lg: "var(--space-6)" };
  const elevations = {
    flat: { background: "var(--surface-card)", boxShadow: "none", border: "1.5px solid var(--border-subtle)" },
    raised: { background: "var(--surface-card)", boxShadow: "var(--shadow-md)", border: "none" },
    inverse: { background: "var(--surface-inverse)", color: "var(--text-inverse)", boxShadow: "var(--shadow-lg)", border: "none" },
    accent: { background: "var(--surface-accent)", color: "var(--text-on-accent)", boxShadow: "var(--shadow-md)", border: "none" },
  };
  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        padding: pads[padding],
        ...elevations[elevation],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
