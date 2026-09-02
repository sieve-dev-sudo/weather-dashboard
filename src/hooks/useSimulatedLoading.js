import { useState, useEffect } from 'react'

export function useSimulatedLoading(dependency, delay = 500) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, delay)

    return () => clearTimeout(timer)
  }, [dependency, delay])

  return loading
}
