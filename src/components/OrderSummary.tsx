import Link from "next/link"
import { Button, Heading } from "~/elements"

interface OrderSummaryProps {
  total: number
}

export function OrderSummary({ total }: OrderSummaryProps) {
  return (
    <div className="lg:col-span-1">
      <div className="border border-gray-200 bg-white p-6">
        <Heading level={2} size="xl" className="mb-4">
          Order Summary
        </Heading>

        <div className="space-y-3 border-b border-gray-200 pb-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span>${(total * 0.1).toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between text-xl font-bold text-gray-900">
          <span>Total</span>
          <span>${(total * 1.1).toFixed(2)}</span>
        </div>

        <Button variant="primary" size="lg" fullWidth className="mt-6">
          Proceed to Checkout
        </Button>

        <Link
          href="/products"
          className="mt-4 block text-center text-sm text-blue-600 hover:text-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
