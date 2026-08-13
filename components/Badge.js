/** Small status/label badge. Tones: coral | espresso | blue | leaf | neutral. */
export function Badge({ children, tone = "coral", solid = false, style, ...rest }) {
  const tones = {
    coral: { soft: { bg: "var(--surface-accent-soft)", fg: "var(--text-accent)" }, solid: { bg: "var(--accent)", fg: "var(--text-on-accent)" } },
    espresso: { soft: { bg: "var(--surface-sunken)", fg: "var(--espresso-900)" }, solid: { bg: "var(--espresso-900)", fg: "var(--cream-50)" } },
    blue: { soft: { bg: "var(--surface-cool-soft)", fg: "var(--blue-500)" }, solid: { bg: "var(--surface-cool)", fg: "var(--espresso-900)" } },
    leaf: { soft: { bg: "color-mix(in srgb, var(--leaf-400) 30%, var(--cream-50))", fg: "var(--leaf-600)" }, solid: { bg: "var(--leaf-600)", fg: "var(--cream-50)" } },
    neutral: { soft: { bg: "var(--surface-sunken)", fg: "var(--text-muted)" }, solid: { bg: "var(--sand-500)", fg: "var(--espresso-900)" } },
  };
  const c = tones[tone][solid ? "solid" : "soft"];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        padding: "5px 11px",
        borderRadius: "var(--radius-pill)",
        background: c.bg,
        color: c.fg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
