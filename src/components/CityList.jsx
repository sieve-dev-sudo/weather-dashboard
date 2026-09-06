import { motion, AnimatePresence } from 'framer-motion'

function CityList({ cities, onSelectCity }) {
  if (cities.length === 0) {
    return (
      <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">No cities found.</p>
    )
  }

  return (
    <ul className="mt-2 border border-slate-200 dark:border-slate-700 rounded-lg divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
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
  )
}

export default CityList
