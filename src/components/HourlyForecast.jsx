import { motion } from 'framer-motion'
import { convertTemp } from '../utils/convertTemp'
import { WeatherIcon } from '../utils/weatherIcons'

function HourlyForecast({ hourly, unit }) {
  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Hourly Forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
        {hourly.map((item, index) => {
          const displayTemp = convertTemp(item.temp, unit)
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="flex-shrink-0 w-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-2 text-center"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.time}</p>
              <div className="flex justify-center my-1.5">
                <WeatherIcon icon={item.icon} size={20} className="text-amber-500 dark:text-amber-400" />
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {displayTemp}°
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default HourlyForecast
