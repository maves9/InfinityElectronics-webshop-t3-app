import type { HeroSlide } from "~/components/Hero"

/**
 * Default hero slides for the homepage
 * These can be replaced with database content in the future
 */
export const defaultHeroSlides: HeroSlide[] = [
  {
    title: "Welcome to Our Store",
    description: "Discover amazing products at unbeatable prices",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    cta: "Shop Now",
    ctaLink: "/products",
  },
]

/**
 * Homepage hero slides with multiple slides
 */
export const homePageHeroSlides: HeroSlide[] = [
  {
    title: "Welcome to InfinityElectronics",
    description: "Discover amazing products at unbeatable prices",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    cta: "Shop Now",
    ctaLink: "/products",
  },
  {
    title: "New Arrivals",
    description: "Check out our latest collection of products",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop",
    cta: "View Collection",
    ctaLink: "/products",
  },
  {
    title: "Special Offers",
    description: "Don't miss out on our exclusive deals",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop",
    cta: "View Deals",
    ctaLink: "/products",
  },
]
