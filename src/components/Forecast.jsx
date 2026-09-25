import { useState } from 'react'
import ForecastCard from './ForecastCard'
import DayDetailModal from './DayDetailModal'
import { getTodayShortName } from '../utils/getToday'

function Forecast({ forecast, unit, city }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const todayName = getTodayShortName()

  const selectedDay = selectedIndex !== null ? forecast[selectedIndex] : null
  const selectedIsToday = selectedDay ? selectedDay.day === todayName : false

  return (
    <div className="mb-4 sm:mb-6">
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
            isToday={item.day === todayName}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedDay && (
        <DayDetailModal
          dayItem={selectedDay}
          dayIndex={selectedIndex}
          city={city}
          unit={unit}
          isToday={selectedIsToday}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  )
}

export default Forecast
