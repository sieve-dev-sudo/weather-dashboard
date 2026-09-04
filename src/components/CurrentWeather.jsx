import { convertTemp } from '../utils/convertTemp'

function CurrentWeather({ city, unit }) {
  const displayTemp = convertTemp(city.temp, unit)

  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {city.city}, {city.country}
          </h2>
          <p className="text-slate-500 text-sm">{city.condition}</p>
        </div>
        <span className="text-5xl">{city.icon}</span>
      </div>

      <div className="mt-4 flex items-end gap-2">
        <span className="text-5xl font-bold text-slate-900">{displayTemp}°</span>
        <span className="text-slate-500 mb-1">{unit}</span>
      </div>

      <div className="mt-4 flex gap-6 text-sm text-slate-600 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1">
          <span>💧</span>
          <span>Humidity: {city.humidity}%</span>
        </div>
        <div className="flex items-center gap-1">
          <span>💨</span>
          <span>Wind: {city.wind} km/h</span>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
