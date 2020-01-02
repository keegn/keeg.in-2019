import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any
const windowGlobal = typeof window !== 'undefined' && window

const noop = () => {}
// React hook for JS media queries
export const useMediaQuery = (query: any) => {
  // Fall back on dummy matchMedia in SSR.
  // eslint-disable-next-line no-undef

  const theGlobalThis = windowGlobal
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
