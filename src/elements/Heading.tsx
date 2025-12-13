import { forwardRef, type HTMLAttributes, type ElementType } from "react"
import { cn } from "~/lib/utils"

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold"
  as?: ElementType
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level = 1,
      size,
      weight = "bold",
      as,
      children,
      ...props
    },
    ref,
  ) => {
    // Determine the HTML element to use
    const Component: ElementType = as ?? `h${level}`

    // Default sizes based on heading level if not specified
    const defaultSizes = {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    }

    const sizeStyles = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    }

    const weightStyles = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    }

    const appliedSize = size ? sizeStyles[size] : defaultSizes[level]

    return (
      <Component
        ref={ref}
        className={cn(
          appliedSize,
          weightStyles[weight],
          "text-gray-900",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Heading.displayName = "Heading"
