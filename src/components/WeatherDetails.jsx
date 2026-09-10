import { Sunrise, Sunset, Gauge, ShieldAlert } from 'lucide-react'
import { getUvLabel } from '../utils/getUvLabel'

function WeatherDetails({ city }) {
  const uv = getUvLabel(city.uvIndex)

  return (
    <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <Sunrise size={14} />
          <span>Sunrise</span>
        </div>
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base">
          {city.sunrise}
        </p>
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <Sunset size={14} />
          <span>Sunset</span>
        </div>
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base">
          {city.sunset}
        </p>
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <Gauge size={14} />
          <span>Pressure</span>
        </div>
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base">
          {city.pressure} hPa
        </p>
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <ShieldAlert size={14} />
          <span>UV Index</span>
        </div>
        <p className={`font-semibold text-sm sm:text-base ${uv.color}`}>
          {city.uvIndex} · {uv.label}
        </p>
      </div>
    </div>
  )
}

export default WeatherDetails
