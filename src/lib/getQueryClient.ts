import { QueryClient } from "@tanstack/react-query"
import { cache } from "react"
import { cacheConfig } from "./queries"

// Create a singleton QueryClient for server-side rendering
// Using React's cache() ensures the same QueryClient is used for the entire request
export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: cacheConfig.staleTime.default,
          gcTime: cacheConfig.gcTime.default,
        },
      },
    }),
)
