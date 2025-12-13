import { CartContent } from "~/components/CartContent"

export default function CartPage() {
  // This could check cart items count server-side if needed
  // For now, the client component will handle the empty state
  return <CartContent />
}
