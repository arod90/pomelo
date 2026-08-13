"use client";
import React from "react";

/** Single radio option. Group by sharing `name` and controlling `checked`. */
export function Radio({ label, name, value, checked = false, onChange, disabled = false, id, style, ...rest }) {
  const rId = id || React.useId();
  return (
    <label
      htmlFor={rId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          borderRadius: "var(--radius-circle)",
          border: `1.5px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
          background: "var(--surface-raised)",
          transition: "border-color var(--dur-fast) var(--ease-out)",
        }}
      >
        {checked && <span style={{ width: 11, height: 11, borderRadius: "var(--radius-circle)", background: "var(--accent)" }} />}
      </span>
      <input
        id={rId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      {label}
    </label>
  );
}
