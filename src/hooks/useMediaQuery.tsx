import { useEffect, useState } from 'react'

const noop = () => {}

// React hook for JS media queries
export const useMediaQuery = query => {
  // Fall back on dummy matchMedia in SSR.
  const matchMedia =
    globalThis.matchMedia ||
    (() => ({ addListener: noop, removeListener: noop }))
  query = matchMedia(query)
  const [matches, setMatches] = useState(query.matches)
  useEffect(() => {
    const handleMatch = q => setMatches(q.matches)
    query.addListener(handleMatch)
    return () => query.removeListener(handleMatch)
  }, [query])
  return matches
}
