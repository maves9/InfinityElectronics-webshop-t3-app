import { getTranslations } from 'next-intl/server'
import { Hero } from "~/components/Hero"
import { FeaturedProducts } from "~/components/FeaturedProducts"
import { getLimitedProducts } from "~/lib/api"
import { homePageHeroSlides } from "~/data"

export default async function HomePage() {
  const featuredProducts = await getLimitedProducts(8)
  const t = await getTranslations('home.featuredProducts')

  return (
    <div className="bg-white">
      <Hero slides={homePageHeroSlides} autoPlay={true} interval={5000} />
      <FeaturedProducts
        products={featuredProducts}
        title={t('title')}
        description={t('description')}
        priorityLoad={4}
      />
    </div>
  )
}
