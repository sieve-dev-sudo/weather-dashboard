function UnitToggle({ unit, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="px-3 py-1.5 text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
    >
      °C / °F
      <span className="ml-2 font-semibold text-indigo-600">
        {unit === 'C' ? 'Celsius' : 'Fahrenheit'}
      </span>
    </button>
  )
}

export default UnitToggle
