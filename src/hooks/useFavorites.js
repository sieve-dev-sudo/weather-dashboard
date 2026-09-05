import { useState, useEffect } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (cityId) => favorites.includes(cityId)

  const toggleFavorite = (cityId) => {
    setFavorites((prev) =>
      prev.includes(cityId)
        ? prev.filter((id) => id !== cityId)
        : [...prev, cityId]
    )
  }

  return { favorites, isFavorite, toggleFavorite }
}
