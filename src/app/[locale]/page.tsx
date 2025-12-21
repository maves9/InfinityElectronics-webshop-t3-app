import { getTranslations } from 'next-intl/server'
import { Hero } from "~/components/Hero"
import { FeaturedProducts } from "~/components/FeaturedProducts"
import { getLimitedProducts } from "~/lib/api"
import { homePageHeroSlideConfigs } from "~/data"
import type { HeroSlide } from "~/components/Hero"

export default async function HomePage() {
  const featuredProducts = await getLimitedProducts(8)
  const tFeatured = await getTranslations('home.featuredProducts')
  const tHero = await getTranslations('home.hero')

  const heroSlides: HeroSlide[] = homePageHeroSlideConfigs.map(config => ({
    title: tHero(`${config.translationKey}.title`),
    description: tHero(`${config.translationKey}.description`),
    cta: tHero(`${config.translationKey}.cta`),
    image: config.image,
    ctaLink: config.ctaLink,
  }))

  return (
    <div className="bg-white">
      <Hero slides={heroSlides} autoPlay={true} interval={5000} />
      <FeaturedProducts
        products={featuredProducts}
        title={tFeatured('title')}
        description={tFeatured('description')}
        priorityLoad={4}
      />
    </div>
  )
}
