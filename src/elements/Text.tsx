import { forwardRef, type HTMLAttributes, type ElementType } from "react"
import { cn } from "~/lib/utils"

export interface TextProps extends HTMLAttributes<HTMLElement> {
  size?: "xs" | "sm" | "base" | "lg" | "xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  color?: "default" | "muted" | "primary" | "danger" | "success" | "warning"
  as?: ElementType
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      size = "base",
      weight = "normal",
      color = "default",
      as: Component = "p",
      children,
      ...props
    },
    ref,
  ) => {
    const sizeStyles = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    }

    const weightStyles = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    }

    const colorStyles = {
      default: "text-gray-900",
      muted: "text-gray-600",
      primary: "text-blue-600",
      danger: "text-red-600",
      success: "text-green-600",
      warning: "text-yellow-600",
    }

    return (
      <Component
        ref={ref}
        className={cn(
          sizeStyles[size],
          weightStyles[weight],
          colorStyles[color],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Text.displayName = "Text"
