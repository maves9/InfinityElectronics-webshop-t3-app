import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "~/lib/utils"
import { Button } from "./Button"

export interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  showControls?: boolean
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      value,
      onChange,
      min = 0,
      max,
      step = 1,
      label,
      showControls = true,
      disabled,
      ...props
    },
    ref,
  ) => {
    const handleDecrement = () => {
      const newValue = value - step
      if (min !== undefined && newValue < min) return
      onChange(newValue)
    }

    const handleIncrement = () => {
      const newValue = value + step
      if (max !== undefined && newValue > max) return
      onChange(newValue)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10)
      if (isNaN(newValue)) return
      if (min !== undefined && newValue < min) return
      if (max !== undefined && newValue > max) return
      onChange(newValue)
    }

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="flex items-center gap-3">
          {showControls && (
            <Button
              onClick={handleDecrement}
              disabled={disabled ?? (min !== undefined && value <= min)}
              variant="outline"
              size="sm"
              className="px-3 py-1"
              type="button"
            >
              -
            </Button>
          )}
          <input
            ref={ref}
            type="number"
            value={value}
            onChange={handleInputChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            className={cn(
              "w-16 border border-gray-300 px-2 py-1 text-center font-semibold focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
              !showControls && "w-full",
            )}
            {...props}
          />
          {showControls && (
            <Button
              onClick={handleIncrement}
              disabled={disabled ?? (max !== undefined && value >= max)}
              variant="outline"
              size="sm"
              className="px-3 py-1"
              type="button"
            >
              +
            </Button>
          )}
        </div>
      </div>
    )
  },
)

NumberInput.displayName = "NumberInput"
