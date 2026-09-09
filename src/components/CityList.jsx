import { motion, AnimatePresence } from 'framer-motion'
import EmptyState from './EmptyState'

function CityList({ cities, onSelectCity }) {
  if (cities.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10">
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
      <ul className="border border-slate-200 dark:border-slate-700 rounded-lg divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden max-h-64 overflow-y-auto">
        <AnimatePresence>
          {cities.map((city) => (
            <motion.li
              key={city.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onSelectCity(city)}
              className="px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 flex items-center justify-between"
            >
              <span>{city.city}, {city.country}</span>
              <span>{city.icon} {city.temp}°C</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default CityList
