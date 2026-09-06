import { convertTemp } from '../utils/convertTemp'

function ForecastCard({ day, temp, icon, unit }) {
  const displayTemp = convertTemp(temp, unit)

  return (
    <div className="min-w-0 sm:flex-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2 sm:p-3 text-center shadow-sm">
      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">{day}</p>
      <p className="text-xl sm:text-2xl my-1 sm:my-2">{icon}</p>
      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">{displayTemp}°</p>
    </div>
  )
}

export default ForecastCard
