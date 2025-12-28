import Redis from "ioredis"

const getRedisUrl = () => {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL
  }
  return "redis://localhost:6379"
}

const globalForRedis = globalThis as unknown as {
  redis: Redis | undefined
}

export const redis =
  globalForRedis.redis ??
  new Redis(getRedisUrl(), {
    maxRetriesPerRequest: 3,
    retryStrategy(times) {
      if (times > 3) {
        // Stop retrying after 3 attempts
        console.error("Redis connection failed after 3 retries")
        return null
      }
      // Exponential backoff: 200ms, 400ms, 800ms
      return Math.min(times * 200, 800)
    },
    lazyConnect: true,
  })

if (process.env.NODE_ENV !== "production") {
  globalForRedis.redis = redis
}

export const CACHE_KEYS = {
  products: {
    all: "products:all",
    detail: (id: number) => `products:${id}`,
    byCategory: (category: string) => `products:category:${category}`,
    limited: (limit: number) => `products:limited:${limit}`,
  },
  categories: {
    all: "categories:all",
  },
} as const

export const CACHE_TTL = {
  default: 3600, // 1 hour
  long: 7200, // 2 hours
  short: 300, // 5 minutes
} as const

export async function getCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = CACHE_TTL.default
): Promise<T> {
  try {
    if (redis.status === "wait") {
      await redis.connect()
    }

    const cached = await redis.get(key)
    if (cached) {
      console.log(`[Redis] Cache HIT for key: ${key}`)
      return JSON.parse(cached) as T
    }
    console.log(`[Redis] Cache MISS for key: ${key}`)
  } catch (error) {
    console.error("[Redis] Get error:", error)
  }

  const data = await fetcher()

  try {
    if (redis.status === "ready") {
      void redis.setex(key, ttl, JSON.stringify(data))
    }
  } catch (error) {
    console.error("[Redis] Set error:", error)
  }

  return data
}

export async function invalidateCache(keys: string[]): Promise<void> {
  if (keys.length === 0) return

  try {
    if (redis.status === "ready") {
      await redis.del(...keys)
      console.log(`[Redis] Invalidated keys: ${keys.join(", ")}`)
    }
  } catch (error) {
    console.error("[Redis] Invalidation error:", error)
  }
}

export async function invalidateProductCache(id?: number): Promise<void> {
  const keys: string[] = [CACHE_KEYS.products.all]

  if (id) {
    keys.push(CACHE_KEYS.products.detail(id))
  }

  try {
    if (redis.status === "ready") {
      const limitedKeys = await redis.keys("products:limited:*")
      const categoryKeys = await redis.keys("products:category:*")
      keys.push(...limitedKeys, ...categoryKeys)
    }
  } catch (error) {
    console.error("[Redis] Pattern match error:", error)
  }

  await invalidateCache(keys)
}

export async function invalidateAllCache(): Promise<void> {
  try {
    if (redis.status === "ready") {
      await redis.flushdb()
      console.log("[Redis] Flushed all cache")
    }
  } catch (error) {
    console.error("[Redis] Flush error:", error)
  }
}
