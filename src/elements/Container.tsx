import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "~/lib/utils"

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    const sizeStyles = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1920px]",
      full: "max-w-full",
    }

    return (
      <div
        ref={ref}
        className={cn("container mx-auto px-4", sizeStyles[size], className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Container.displayName = "Container"
