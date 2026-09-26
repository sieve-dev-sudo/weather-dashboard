import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { convertTemp } from '../utils/convertTemp'
import { WeatherIcon } from '../utils/weatherIcons'

function CompareColumn({ city, unit }) {
  if (!city) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm p-6">
        Select a city
      </div>
    )
  }

  const displayTemp = convertTemp(city.temp, unit)

  return (
    <div className="flex-1 text-center px-2">
      <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base truncate">
        {city.city}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{city.country}</p>
      <div className="flex justify-center mb-2">
        <WeatherIcon icon={city.icon} size={36} className="text-amber-500 dark:text-amber-400" />
      </div>
      <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">{displayTemp}°{unit}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{city.condition}</p>

      <div className="space-y-1.5 text-left text-xs sm:text-sm border-t border-slate-100 dark:border-slate-700 pt-3">
        <div className="flex justify-between">
          <span className="text-slate-500 dark:text-slate-400">Feels like</span>
          <span className="font-medium text-slate-900 dark:text-slate-100">{convertTemp(city.feelsLike, unit)}°{unit}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 dark:text-slate-400">Humidity</span>
          <span className="font-medium text-slate-900 dark:text-slate-100">{city.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 dark:text-slate-400">Wind</span>
          <span className="font-medium text-slate-900 dark:text-slate-100">{city.wind} km/h</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 dark:text-slate-400">UV Index</span>
          <span className="font-medium text-slate-900 dark:text-slate-100">{city.uvIndex}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 dark:text-slate-400">AQI</span>
          <span className="font-medium text-slate-900 dark:text-slate-100">{city.aqi}</span>
        </div>
      </div>
    </div>
  )
}

function CityCompareModal({ cities, primaryCity, unit, onClose }) {
  const [secondCityId, setSecondCityId] = useState('')

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const secondCity = cities.find((c) => c.id === secondCityId) || null
  const otherCities = cities.filter((c) => c.id !== primaryCity.id)

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
          aria-label="Compare cities"
          className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 max-w-md w-full p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Compare Cities</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <X size={18} />
            </button>
          </div>

          <label htmlFor="compare-city-select" className="sr-only">
            Select a city to compare
          </label>
          <select
            id="compare-city-select"
            value={secondCityId}
            onChange={(e) => setSecondCityId(e.target.value)}
            className="w-full mb-4 px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a city to compare...</option>
            {otherCities.map((c) => (
              <option key={c.id} value={c.id}>
                {c.city}, {c.country}
              </option>
            ))}
          </select>

          <div className="flex gap-2 divide-x divide-slate-200 dark:divide-slate-700">
            <CompareColumn city={primaryCity} unit={unit} />
            <CompareColumn city={secondCity} unit={unit} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CityCompareModal
