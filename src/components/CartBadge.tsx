"use client"

import { Link } from "~/i18n/routing-intl"
import { useCartStore } from "~/stores/cartStore"

export function CartBadge() {
  const totalItems = useCartStore((state) => state.totalItems)

  return (
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
  )
}
