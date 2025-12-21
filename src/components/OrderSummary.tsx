import { useTranslations } from "next-intl"
import { Link } from "~/i18n/routing-intl"
import { Button, Heading } from "~/elements"
import { formatPrice } from "~/lib/utils"

interface OrderSummaryProps {
  total: number
}

export function OrderSummary({ total }: OrderSummaryProps) {
  const t = useTranslations('cart')

  return (
    <div className="lg:col-span-1">
      <div className="border border-gray-200 bg-white p-6">
        <Heading level={2} size="xl" className="mb-4">
          {t('orderSummary')}
        </Heading>

        <div className="space-y-3 border-b border-gray-200 pb-4">
          <div className="flex justify-between text-gray-600">
            <span>{t('subtotal')}</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>{t('shipping')}</span>
            <span>{t('shippingFree')}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>{t('tax')}</span>
            <span>{formatPrice(total * 0.1)}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between text-xl font-bold text-gray-900">
          <span>{t('total')}</span>
          <span>{formatPrice(total * 1.1)}</span>
        </div>

        <Button variant="primary" size="lg" fullWidth className="mt-6">
          {t('proceedToCheckout')}
        </Button>

        <Link
          href="/products"
          className="mt-4 block text-center text-sm text-blue-600 hover:text-blue-700"
        >
          {t('continueShopping')}
        </Link>
      </div>
    </div>
  )
}
