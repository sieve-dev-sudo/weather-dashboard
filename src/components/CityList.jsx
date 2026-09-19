import { motion, AnimatePresence } from 'framer-motion'
import EmptyState from './EmptyState'
import { WeatherIcon } from '../utils/weatherIcons'

function CityList({ cities, onSelectCity }) {
  const handleKeyDown = (e, city) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelectCity(city)
    }
  }

  if (cities.length === 0) {
    return (
      <div
        id="city-search-results"
        role="status"
        className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10"
      >
        <EmptyState
          icon="🌍"
          title="No cities found"
          description="Try searching for Phnom Penh, Bangkok, Tokyo, London, or New York"
        />
      </div>
    )
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-1 z-10">
      <ul
        id="city-search-results"
        role="listbox"
        aria-label="City search results"
        className="border border-slate-200 dark:border-slate-700 rounded-lg divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden max-h-64 overflow-y-auto"
      >
        <AnimatePresence>
          {cities.map((city) => (
            <motion.li
              key={city.id}
              role="option"
              aria-selected="false"
              tabIndex={0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(e) => {
                e.preventDefault()
                onSelectCity(city)
              }}
              onKeyDown={(e) => handleKeyDown(e, city)}
              className="px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 focus:bg-slate-100 dark:focus:bg-slate-700 focus:outline-none text-slate-900 dark:text-slate-100 flex items-center justify-between"
            >
              <span>{city.city}, {city.country}</span>
              <span className="flex items-center gap-1">
                <WeatherIcon icon={city.icon} size={18} className="text-amber-500 dark:text-amber-400" />
                {city.temp}°C
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default CityList
