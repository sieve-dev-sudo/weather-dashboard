import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { convertTemp } from '../utils/convertTemp'
import { getHourLabel } from '../utils/getCurrentHourLabel'

function CustomTooltip({ active, payload, label, unit }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg px-3 py-2 text-xs">
        <p className="text-slate-500 dark:text-slate-400">{label}</p>
        <p className="font-semibold text-slate-900 dark:text-slate-100">{payload[0].value}°{unit}</p>
      </div>
    )
  }
  return null
}

function TemperatureGraph({ hourly, unit }) {
  const data = hourly.map((item, index) => ({
    label: getHourLabel(index),
    temp: convertTemp(item.temp, unit),
  }))

  return (
    <div className="mt-4 sm:mt-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-4">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Temperature Trend</h3>
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-slate-200 dark:text-slate-700" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11 }}
              stroke="currentColor"
              className="text-slate-400 dark:text-slate-500"
              interval={1}
            />
            <YAxis
              tick={{ fontSize: 11 }}
              stroke="currentColor"
              className="text-slate-400 dark:text-slate-500"
              width={35}
            />
            <Tooltip content={<CustomTooltip unit={unit} />} />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ r: 3, fill: '#6366f1' }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TemperatureGraph
