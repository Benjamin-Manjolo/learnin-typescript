import React from "react";

// Literal union types — very precise and great autocomplete
type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // gets all native button props: disabled, type, form, etc.
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: React.ReactNode; // most flexible and correct type for children
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      className = "",
      disabled,
      ...rest
    },
    ref
  ) => {
    // Simple style mapping (in real apps use Tailwind or CSS variables)
    const baseStyles = {
      fontWeight: "medium",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.2s",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid transparent",
    };

    const variantStyles = {
      primary: {
        backgroundColor: "#3b82f6",
        color: "white",
        borderColor: "#2563eb",
      },
      secondary: {
        backgroundColor: "#6b7280",
        color: "white",
        borderColor: "#4b5563",
      },
      danger: {
        backgroundColor: "#ef4444",
        color: "white",
        borderColor: "#dc2626",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "#374151",
        borderColor: "transparent",
      },
    };

    const sizeStyles = {
      sm: { padding: "6px 12px", fontSize: "14px" },
      md: { padding: "8px 16px", fontSize: "16px" },
      lg: { padding: "10px 20px", fontSize: "18px" },
    };

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      width: fullWidth ? "100%" : undefined,
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={className}
        style={combinedStyles as React.CSSProperties}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
