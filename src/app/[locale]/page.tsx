import { getTranslations } from 'next-intl/server'
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Hero } from "~/components/Hero"
import { FeaturedProducts } from "~/components/FeaturedProducts"
import { homePageHeroSlideConfigs } from "~/data"
import { getQueryClient } from "~/lib/getQueryClient"
import { productQueries } from "~/lib/queries"
import type { HeroSlide } from "~/components/Hero"

export default async function HomePage() {
  const queryClient = getQueryClient()
  
  // Prefetch featured products
  await queryClient.prefetchQuery(productQueries.limited(8))
  const featuredProducts = queryClient.getQueryData(productQueries.limited(8).queryKey) ?? []
  
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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="bg-white">
        <Hero slides={heroSlides} autoPlay={true} interval={5000} />
        <FeaturedProducts
          products={featuredProducts}
          title={tFeatured('title')}
          description={tFeatured('description')}
          priorityLoad={4}
        />
      </div>
    </HydrationBoundary>
  )
}
