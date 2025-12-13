export const PRODUCT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

export const PRODUCT_COLORS = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Gray", value: "#6B7280" },
  { name: "Navy", value: "#1E3A8A" },
  { name: "Red", value: "#DC2626" },
]

export type ProductSize = (typeof PRODUCT_SIZES)[number]
export type ProductColor = (typeof PRODUCT_COLORS)[number]
