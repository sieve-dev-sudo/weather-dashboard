import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Droplets, Wind, CloudRain } from 'lucide-react'
import { convertTemp } from '../utils/convertTemp'
import { WeatherIcon } from '../utils/weatherIcons'
import { estimateHourlyDetails } from '../utils/estimateHourlyDetails'

function HourlyDetailModal({ hour, hourIndex, city, unit, label, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!hour) return null

  const displayTemp = convertTemp(hour.temp, unit)
  const details = estimateHourlyDetails(city, hourIndex, hour.icon)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={`Weather detail for ${label}`}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 max-w-sm w-full p-5"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{city.city}, {city.country}</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{label}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 my-4">
            <WeatherIcon icon={hour.icon} size={48} className="text-amber-500 dark:text-amber-400" />
            <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">{displayTemp}°{unit}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center border-t border-slate-100 dark:border-slate-700 pt-4">
            <div>
              <Droplets size={16} className="mx-auto text-blue-500 mb-1" />
              <p className="text-xs text-slate-500 dark:text-slate-400">Humidity</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{details.humidity}%</p>
            </div>
            <div>
              <Wind size={16} className="mx-auto text-slate-400 mb-1" />
              <p className="text-xs text-slate-500 dark:text-slate-400">Wind</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{details.wind} km/h</p>
            </div>
            <div>
              <CloudRain size={16} className="mx-auto text-indigo-400 mb-1" />
              <p className="text-xs text-slate-500 dark:text-slate-400">Rain</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{details.chanceOfRain}%</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default HourlyDetailModal
