import { X } from 'lucide-react'
import { WeatherIcon } from '../utils/weatherIcons'

function RecentSearches({ cities, recentIds, onSelectCity, onClear }) {
  const recentCities = recentIds
    .map((id) => cities.find((c) => c.id === id))
    .filter(Boolean)

  if (recentCities.length === 0) {
    return null
  }

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Recent Searches
        </h3>
        <button
          onClick={onClear}
          aria-label="Clear recent searches"
          className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
        >
          <X size={12} />
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-1" role="list" aria-label="Recently searched cities">
        {recentCities.map((city) => (
          <button
            key={city.id}
            onClick={() => onSelectCity(city)}
            aria-label={`View weather for ${city.city}`}
            className="px-3 py-1.5 text-xs sm:text-sm bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <WeatherIcon icon={city.icon} size={16} className="text-amber-500 dark:text-amber-400" />
            <span>{city.city}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default RecentSearches
