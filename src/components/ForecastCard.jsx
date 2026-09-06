import { motion } from 'framer-motion'
import { convertTemp } from '../utils/convertTemp'

function ForecastCard({ day, temp, icon, unit, index = 0 }) {
  const displayTemp = convertTemp(temp, unit)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="min-w-0 sm:flex-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2 sm:p-3 text-center shadow-sm"
    >
      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">{day}</p>
      <p className="text-xl sm:text-2xl my-1 sm:my-2">{icon}</p>
      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">{displayTemp}°</p>
    </motion.div>
  )
}

export default ForecastCard
