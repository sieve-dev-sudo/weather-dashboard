import { motion, AnimatePresence } from 'framer-motion'
import { convertTemp } from '../utils/convertTemp'
import FavoriteButton from './FavoriteButton'

function CurrentWeather({ city, unit, isFavorite, onToggleFavorite }) {
  const displayTemp = convertTemp(city.temp, unit)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={city.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="mt-4 sm:mt-6 p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                {city.city}, {city.country}
              </h2>
              <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{city.condition}</p>
          </div>
          <motion.span
            className="text-4xl sm:text-5xl"
            animate={{ rotate: [0, -8, 8, -8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
          >
            {city.icon}
          </motion.span>
        </div>

        <div className="mt-3 sm:mt-4 flex items-end gap-2">
          <span className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100">{displayTemp}°</span>
          <span className="text-slate-500 dark:text-slate-400 mb-1">{unit}</span>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700 pt-3 sm:pt-4">
          <div className="flex items-center gap-1">
            <span>💧</span>
            <span>Humidity: {city.humidity}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span>💨</span>
            <span>Wind: {city.wind} km/h</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CurrentWeather
