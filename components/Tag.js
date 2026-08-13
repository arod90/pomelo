"use client";
import React from "react";

/** Interactive filter chip / tag. Rounded pill, selectable. */
export function Tag({ children, selected = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-medium)",
        fontSize: "var(--text-sm)",
        padding: "8px 16px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        background: selected ? "var(--espresso-900)" : hover ? "var(--surface-sunken)" : "transparent",
        color: selected ? "var(--cream-50)" : "var(--text-body)",
        border: `1.5px solid ${selected ? "var(--espresso-900)" : "var(--border-default)"}`,
        transition: "all var(--dur-fast) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
