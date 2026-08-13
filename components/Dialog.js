"use client";

/** Modal dialog with cream panel, warm scrim, coral primary action slot. */
export function Dialog({ open, onClose, title, children, footer, width = 480, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "color-mix(in srgb, var(--espresso-950) 55%, transparent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-5)",
        zIndex: 1000,
        animation: "pomelo-fade-in var(--dur-base) var(--ease-out)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: width,
          background: "var(--surface-raised)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          padding: "var(--space-6)",
          animation: "pomelo-fade-up var(--dur-base) var(--ease-out)",
          ...style,
        }}
        {...rest}
      >
        {title && (
          <h2 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-display)", fontWeight: "var(--weight-black)", fontSize: "var(--text-xl)", color: "var(--text-body)" }}>
            {title}
          </h2>
        )}
        <div style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)" }}>{children}</div>
        {footer && <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>{footer}</div>}
      </div>
    </div>
  );
}
