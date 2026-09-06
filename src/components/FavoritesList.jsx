function FavoritesList({ cities, favorites, onSelectCity }) {
  const favoriteCities = cities.filter((c) => favorites.includes(c.id))

  if (favoriteCities.length === 0) {
    return null
  }

  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
        ⭐ Favorites
      </h3>
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
        {favoriteCities.map((city) => (
          <button
            key={city.id}
            onClick={() => onSelectCity(city)}
            className="px-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1 whitespace-nowrap"
          >
            <span>{city.icon}</span>
            <span>{city.city}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FavoritesList
