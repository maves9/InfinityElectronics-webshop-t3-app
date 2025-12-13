import Link from "next/link"
import { Button, Heading, Text } from "~/elements"

export function EmptyCart() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level={1} className="mb-4">
          Your Cart is Empty
        </Heading>
        <Text color="muted" className="mb-8">
          Looks like you haven&apos;t added anything to your cart yet.
        </Text>
        <Link href="/products" className="inline-block">
          <Button variant="primary" size="lg">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
