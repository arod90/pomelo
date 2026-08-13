"use client";
import React from "react";

/** Styled native select with brand chrome. */
export function Select({ label, hint, id, value, onChange, children, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%", ...style }}>
      {label && (
        <label htmlFor={selId} style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={selId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            width: "100%",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--text-body)",
            background: "var(--surface-raised)",
            border: `1.5px solid ${focus ? "var(--accent)" : "var(--border-default)"}`,
            borderRadius: "var(--radius-md)",
            padding: "12px 40px 12px 16px",
            outline: "none",
            boxShadow: focus ? "var(--shadow-focus)" : "none",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.5 : 1,
            transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
          }}
          {...rest}
        >
          {children}
        </select>
        <span aria-hidden style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)", fontSize: "0.7rem" }}>▼</span>
      </div>
      {hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{hint}</span>}
    </div>
  );
}
