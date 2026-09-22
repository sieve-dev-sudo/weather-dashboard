import { Sunrise, Sunset, Gauge, ShieldAlert, Eye, Droplets, Wind, CloudRain } from 'lucide-react'
import { getUvLabel } from '../utils/getUvLabel'
import { getAqiLabel } from '../utils/getAqiLabel'

function WeatherDetails({ city }) {
  const uv = getUvLabel(city.uvIndex)
  const aqi = getAqiLabel(city.aqi)

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

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <Eye size={14} />
          <span>Visibility</span>
        </div>
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base">
          {city.visibility} km
        </p>
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <Droplets size={14} />
          <span>Dew Point</span>
        </div>
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base">
          {city.dewPoint}°C
        </p>
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <Wind size={14} />
          <span>Air Quality</span>
        </div>
        <p className={`font-semibold text-sm sm:text-base ${aqi.color}`}>
          {city.aqi} · {aqi.label}
        </p>
      </div>

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 p-3">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
          <CloudRain size={14} />
          <span>Chance of Rain</span>
        </div>
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base">
          {city.chanceOfRain}%
        </p>
      </div>
    </div>
  )
}

export default WeatherDetails
