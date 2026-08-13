/** A single menu line: dish name with a dotted leader to the price, optional
 *  description and dietary tags. The core building block of the Pomelo menu. */
export function MenuRow({ name, description, price, tags = [], style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "var(--space-3) 0", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-md)", color: "var(--text-body)", whiteSpace: "nowrap" }}>
          {name}
        </span>
        <span aria-hidden style={{ flex: 1, borderBottom: "1.5px dotted var(--border-default)", transform: "translateY(-3px)" }} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-md)", color: "var(--text-accent)", whiteSpace: "nowrap" }}>
          {price}
        </span>
      </div>
      {description && (
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--leading-normal)", maxWidth: "52ch" }}>
          {description}
        </p>
      )}
      {tags.length > 0 && (
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "2px" }}>
          {tags.map((t) => {
            const seasonal = /temporada/i.test(t);
            const fg = seasonal ? "var(--blue-500)" : "var(--leaf-600)";
            const bd = seasonal ? "color-mix(in srgb, var(--blue-400) 70%, transparent)" : "color-mix(in srgb, var(--leaf-400) 55%, transparent)";
            return (
              <span key={t} style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-medium)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: fg, border: `1px solid ${bd}`, borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>
                {t}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
