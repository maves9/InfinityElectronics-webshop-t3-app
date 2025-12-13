import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "~/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50"

    const variantStyles = {
      primary: "bg-theme-primary text-theme-primary-text hover:opacity-90",
      secondary: "bg-theme-secondary text-theme-secondary-text hover:opacity-90",
      outline:
        "border-2 border-theme-primary bg-transparent text-theme-fg hover:bg-theme-primary hover:text-theme-primary-text hover:border-theme-primary",
      ghost: "text-theme-fg hover:bg-theme-muted",
      danger: "bg-red-600 text-white hover:bg-red-700",
    }

    const sizeStyles = {
      sm: "px-4 py-1.5 text-sm",
      md: "px-6 py-2.5",
      lg: "px-8 py-3 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className,
        )}
        disabled={disabled}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"
