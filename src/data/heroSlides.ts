/**
 * Hero slide configuration with image URLs
 * Text content should be provided via translations
 */
export interface HeroSlideConfig {
  image: string
  ctaLink: string
  translationKey: 'welcome' | 'newArrivals' | 'specialOffers'
}

export const homePageHeroSlideConfigs: HeroSlideConfig[] = [
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    ctaLink: "/products",
    translationKey: 'welcome',
  },
  {
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop",
    ctaLink: "/products",
    translationKey: 'newArrivals',
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop",
    ctaLink: "/products",
    translationKey: 'specialOffers',
  },
]
