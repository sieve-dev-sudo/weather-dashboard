import ForecastCard from './ForecastCard'

function Forecast({ forecast, unit }) {
  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">7-Day Forecast</h3>
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
        {forecast.map((item, index) => (
          <ForecastCard
            key={index}
            day={item.day}
            temp={item.temp}
            icon={item.icon}
            unit={unit}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Forecast
