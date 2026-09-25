import { motion } from 'framer-motion'
import { convertTemp } from '../utils/convertTemp'
import { WeatherIcon } from '../utils/weatherIcons'

function ForecastCard({ day, temp, icon, unit, index = 0, isToday = false, onClick }) {
  const displayTemp = convertTemp(temp, unit)

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`View details for ${isToday ? 'Today' : day}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={`min-w-0 sm:flex-1 rounded-lg p-2 sm:p-3 text-center shadow-sm border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
        isToday
          ? 'bg-indigo-600 border-indigo-600 text-white'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
      }`}
    >
      <p className={`text-xs sm:text-sm font-medium ${
        isToday ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-300'
      }`}>
        {isToday ? 'Today' : day}
      </p>
      <div className="flex justify-center my-1 sm:my-2">
        <WeatherIcon
          icon={icon}
          size={28}
          className={isToday ? 'text-white' : 'text-amber-500 dark:text-amber-400'}
        />
      </div>
      <p className={`text-xs sm:text-sm font-semibold ${
        isToday ? 'text-white' : 'text-slate-900 dark:text-slate-100'
      }`}>
        {displayTemp}°
      </p>
    </motion.button>
  )
}

export default ForecastCard
