import { useState } from 'react'
import { motion } from 'framer-motion'
import { convertTemp } from '../utils/convertTemp'
import { WeatherIcon } from '../utils/weatherIcons'
import { getHourLabel, isNightHour } from '../utils/getCurrentHourLabel'
import HourlyDetailModal from './HourlyDetailModal'

function HourlyForecast({ hourly, unit, city }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedHour = selectedIndex !== null ? hourly[selectedIndex] : null
  const selectedLabel = selectedIndex !== null ? getHourLabel(selectedIndex) : ''

  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Hourly Forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
        {hourly.map((item, index) => {
          const displayTemp = convertTemp(item.temp, unit)
          const label = getHourLabel(index)
          const night = isNightHour(index)
          const icon = night && item.icon !== '🌧️' ? '🌙' : item.icon

          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View details for ${label}`}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className={`flex-shrink-0 w-16 backdrop-blur-sm rounded-lg border p-2 text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                index === 0
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'bg-white/80 dark:bg-slate-800/80 border-slate-200/50 dark:border-slate-700/50'
              }`}
            >
              <p className={`text-xs ${index === 0 ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {label}
              </p>
              <div className="flex justify-center my-1.5">
                <WeatherIcon
                  icon={icon}
                  size={20}
                  className={index === 0 ? 'text-white' : 'text-amber-500 dark:text-amber-400'}
                />
              </div>
              <p className={`text-sm font-semibold ${index === 0 ? 'text-white' : 'text-slate-900 dark:text-slate-100'}`}>
                {displayTemp}°
              </p>
            </motion.button>
          )
        })}
      </div>

      {selectedHour && (
        <HourlyDetailModal
          hour={selectedHour}
          hourIndex={selectedIndex}
          city={city}
          unit={unit}
          label={selectedLabel}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  )
}

export default HourlyForecast
