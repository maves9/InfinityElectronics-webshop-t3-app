"use client"

import Link from "next/link"
import { useState } from "react"
import { useCartStore } from "~/stores/cartStore"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { mainNavigationItems, siteConfig } from "~/data"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const totalItems = useCartStore((state) => state.totalItems)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="nav-links sticky top-0 z-50 border-b border-theme-border bg-theme-bg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={siteConfig.logo.href} className="text-2xl font-bold text-theme-primary">
            {siteConfig.logo.text}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {mainNavigationItems.filter(item => item.href !== '/').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-theme-fg transition-colors hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher - Desktop */}
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <svg
                className="h-6 w-6 text-theme-fg hover:opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center bg-theme-primary text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-theme-fg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-theme-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {mainNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-theme-fg transition-colors hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
