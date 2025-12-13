// Dummy html page
export default function ReturnsPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            Returns & Refunds
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Return Policy
            </h2>
            <p className="mb-6 text-gray-600">
              We want you to be completely satisfied with your purchase. If
              you&apos;re not happy with your order, you can return it within 30 days
              of delivery for a full refund.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              How to Return an Item
            </h2>
            <ol className="mb-6 list-inside list-decimal space-y-2 text-gray-600">
              <li>
                Contact our customer service team at
                returns@InfinityElectronics.com
              </li>
              <li>Provide your order number and reason for return</li>
              <li>Pack the item securely in its original packaging</li>
              <li>Ship the item to the return address provided</li>
            </ol>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Refund Processing
            </h2>
            <p className="mb-6 text-gray-600">
              Once we receive your return, we&apos;ll inspect the item and process
              your refund within 5-7 business days. The refund will be issued to
              your original payment method.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Non-Returnable Items
            </h2>
            <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
              <li>Personalized or custom-made items</li>
              <li>Perishable goods</li>
              <li>Intimate or sanitary goods</li>
              <li>Items on sale or clearance</li>
            </ul>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Exchanges
            </h2>
            <p className="mb-6 text-gray-600">
              We only replace items if they are defective or damaged. If you
              need to exchange an item, contact us at
              support@InfinityElectronics.com
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Questions About Returns?
            </h2>
            <p className="text-gray-600">
              Contact our customer service team:
              <br />
              Email: returns@InfinityElectronics.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
