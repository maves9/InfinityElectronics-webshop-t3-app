// Dummy html page
export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">About Us</h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg text-gray-600">
              Welcome to InfinityElectronics, your number one source for all
              things shopping. We&apos;re dedicated to providing you the very best of
              products, with an emphasis on quality, customer service, and
              uniqueness.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="mb-6 text-gray-600">
              Founded in 2024, InfinityElectronics has come a long way from its
              beginnings. When we first started out, our passion for providing
              the best shopping experience drove us to start our own business.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="mb-6 text-gray-600">
              We now serve customers all over the world and are thrilled that
              we&apos;re able to turn our passion into our own website. We hope you
              enjoy our products as much as we enjoy offering them to you.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
            <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
              <li>Wide selection of quality products</li>
              <li>Competitive prices</li>
              <li>Fast and reliable shipping</li>
              <li>Excellent customer service</li>
              <li>Secure shopping experience</li>
            </ul>

            <p className="mb-6 text-gray-600">
              If you have any questions or comments, please don&apos;t hesitate to
              contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
