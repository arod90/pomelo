"use client";
import React from "react";

/** Circular icon button. Variants: solid | outline | soft | plain. */
export function IconButton({
  children,
  label,
  variant = "outline",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dims = { sm: 34, md: 42, lg: 52 }[size];
  const variants = {
    solid: { background: "var(--accent)", color: "var(--text-on-accent)", border: "1.5px solid var(--accent)" },
    outline: { background: "transparent", color: "var(--text-body)", border: "1.5px solid var(--border-strong)" },
    soft: { background: "var(--surface-accent-soft)", color: "var(--text-accent)", border: "1.5px solid transparent" },
    plain: { background: "transparent", color: "var(--text-body)", border: "1.5px solid transparent" },
  };
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dims,
        height: dims,
        borderRadius: "var(--radius-circle)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
        transform: hover && !disabled ? "translateY(-1px)" : "none",
        ...variants[variant],
        ...(hover && !disabled && variant === "outline" ? { background: "var(--surface-sunken)" } : null),
        ...(hover && !disabled && variant === "solid" ? { background: "var(--accent-hover)", borderColor: "var(--accent-hover)" } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
