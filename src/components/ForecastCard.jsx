import { convertTemp } from '../utils/convertTemp'

function ForecastCard({ day, temp, icon, unit }) {
  const displayTemp = convertTemp(temp, unit)

  return (
    <div className="flex-1 bg-white rounded-lg border border-slate-200 p-3 text-center shadow-sm">
      <p className="text-sm font-medium text-slate-600">{day}</p>
      <p className="text-2xl my-2">{icon}</p>
      <p className="text-sm font-semibold text-slate-900">{displayTemp}°</p>
    </div>
  )
}

export default ForecastCard
