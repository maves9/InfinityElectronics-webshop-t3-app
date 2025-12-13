import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "~/lib/utils"

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeStyles = {
      sm: "h-4 w-4 border-2",
      md: "h-8 w-8 border-2",
      lg: "h-12 w-12 border-3",
      xl: "h-16 w-16 border-4",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full border-gray-300 border-t-theme-primary",
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    )
  },
)

Spinner.displayName = "Spinner"
