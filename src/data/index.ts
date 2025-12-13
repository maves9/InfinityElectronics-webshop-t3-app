/**
 * Sample Data Index
 * 
 * This folder contains all static/sample data used throughout the application.
 * In the future, this data can be migrated to a database.
 * 
 * Current data files:
 * - heroSlides.ts: Hero carousel slide configurations
 * - navigation.ts: Navigation menu items and site configuration
 * - productOptions.ts: Product sizes and colors
 * 
 * Future migration considerations:
 * - Products data is already fetched from API (fakestoreapi.com)
 * - Hero slides could be stored in a CMS or database
 * - Navigation items could be managed via admin panel
 * - Theme configurations could be managed via admin panel
 * - Product options (sizes, colors) could be managed via admin panel
 */

export { defaultHeroSlides, homePageHeroSlides } from "./heroSlides"
export { mainNavigationItems, footerNavigationSections, siteConfig } from "./navigation"
export type { NavigationItem } from "./navigation"
export { PRODUCT_SIZES, PRODUCT_COLORS } from "./productOptions"
export type { ProductSize, ProductColor } from "./productOptions"
