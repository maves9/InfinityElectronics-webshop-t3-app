import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "~/lib/utils"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated"
  padding?: "none" | "sm" | "md" | "lg"
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = "default", padding = "md", children, ...props },
    ref,
  ) => {
    const variantStyles = {
      default: "bg-white",
      bordered: "bg-white border border-gray-200",
      elevated: "bg-white shadow-lg",
    }

    const paddingStyles = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    }

    return (
      <div
        ref={ref}
        className={cn(
          variantStyles[variant],
          paddingStyles[padding],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = "Card"
