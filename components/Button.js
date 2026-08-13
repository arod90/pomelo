"use client";
import React from "react";

/** Pomelo Button — pill-shaped, grapefruit-coral primary.
 *  Variants: primary | secondary | ghost | cool. Sizes: sm | md | lg. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 18px", fontSize: "var(--text-sm)" },
    md: { padding: "12px 26px", fontSize: "var(--text-base)" },
    lg: { padding: "16px 36px", fontSize: "var(--text-md)" },
  };
  const variants = {
    primary: { background: "var(--accent)", color: "var(--text-on-accent)", border: "1.5px solid var(--accent)" },
    secondary: { background: "transparent", color: "var(--text-body)", border: "1.5px solid var(--border-strong)" },
    ghost: { background: "transparent", color: "var(--text-accent)", border: "1.5px solid transparent" },
    cool: { background: "var(--surface-cool)", color: "var(--espresso-900)", border: "1.5px solid var(--surface-cool)" },
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = (hover && !disabled) ? {
    primary: { background: "var(--accent-hover)", borderColor: "var(--accent-hover)" },
    secondary: { background: "var(--surface-sunken)", borderColor: "var(--espresso-900)" },
    ghost: { background: "var(--surface-accent-soft)" },
    cool: { background: "var(--blue-300)", borderColor: "var(--blue-300)" },
  }[variant] : null;
  const hoverShadow = {
    primary: "0 5px 14px -9px color-mix(in srgb, var(--coral-600) 45%, transparent)",
    secondary: "0 4px 12px -10px rgba(52,33,27,0.35)",
    ghost: "none",
    cool: "0 4px 12px -10px color-mix(in srgb, var(--blue-500) 40%, transparent)",
  }[variant];
  const reset = () => { setHover(false); setPress(false); };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={reset}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onBlur={reset}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5em",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "0.02em",
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        transform: disabled ? "none" : press ? "translateY(0) scale(0.99)" : hover ? "translateY(-1px)" : "none",
        boxShadow: hover && !press && !disabled ? hoverShadow : "none",
        ...sizes[size],
        ...variants[variant],
        ...(hoverStyle),
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
