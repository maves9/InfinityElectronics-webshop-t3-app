export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm">
      {/* Image Skeleton */}
      <div className="relative aspect-square w-full animate-pulse bg-gray-200" />

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <div className="mb-1 h-3 w-16 animate-pulse bg-gray-200" />

        {/* Title */}
        <div className="mb-2 space-y-2">
          <div className="h-4 w-full animate-pulse bg-gray-200" />
          <div className="h-4 w-3/4 animate-pulse bg-gray-200" />
        </div>

        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-4 animate-pulse bg-gray-200"
              />
            ))}
          </div>
          <div className="h-3 w-8 animate-pulse bg-gray-200" />
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="h-6 w-20 animate-pulse bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
