"use client"

import { useTranslations } from "next-intl"
import { Link } from "~/i18n/routing-intl"
import { Button, Heading, Text } from "~/elements"

export function EmptyCart() {
  const t = useTranslations('cart')

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level={1} className="mb-4">
          {t('emptyTitle')}
        </Heading>
        <Text color="muted" className="mb-8">
          {t('emptyMessage')}
        </Text>
        <Link href="/products" className="inline-block">
          <Button variant="primary" size="lg">
            {t('continueShopping')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
