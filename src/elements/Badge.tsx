import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "~/lib/utils"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = "default", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles = "inline-flex items-center justify-center font-medium"

    const variantStyles = {
      default: "bg-gray-100 text-gray-800",
      primary: "bg-theme-primary text-theme-fg",
      secondary: "bg-theme-secondary text-theme-fg",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
    }

    const sizeStyles = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    }

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    )
  },
)

Badge.displayName = "Badge"
