import { Hero } from "~/components/Hero"
import { FeaturedProducts } from "~/components/FeaturedProducts"
import { getLimitedProducts } from "~/lib/api"
import { homePageHeroSlides } from "~/data"

export default async function HomePage() {
  const featuredProducts = await getLimitedProducts(8)

  return (
    <div className="bg-white">
      <Hero slides={homePageHeroSlides} autoPlay={true} interval={5000} />
      <FeaturedProducts
        products={featuredProducts}
        title="Featured Products"
        description="Check out our handpicked selection of amazing products"
        priorityLoad={4}
      />
    </div>
  )
}
