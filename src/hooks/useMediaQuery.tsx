import { useEffect, useState } from 'react'

const noop = () => {}

// React hook for JS media queries
export const useMediaQuery = (query: any) => {
  // Fall back on dummy matchMedia in SSR.
  // eslint-disable-next-line no-undef
  const theGlobalThis = window
  const matchMedia =
    // eslint-disable-next-line no-undef
    theGlobalThis.matchMedia ||
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
