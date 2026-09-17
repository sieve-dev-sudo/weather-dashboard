import { useState, useEffect } from 'react'

const MAX_RECENT = 5

export function useRecentSearches() {
  const [recentIds, setRecentIds] = useState(() => {
    const saved = localStorage.getItem('recentSearches')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentIds))
  }, [recentIds])

  const addRecentSearch = (cityId) => {
    setRecentIds((prev) => {
      const withoutDuplicate = prev.filter((id) => id !== cityId)
      const updated = [cityId, ...withoutDuplicate]
      return updated.slice(0, MAX_RECENT)
    })
  }

  const clearRecentSearches = () => {
    setRecentIds([])
  }

  return { recentIds, addRecentSearch, clearRecentSearches }
}
