import UnitToggle from './UnitToggle'

function Header({ unit, onToggleUnit }) {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <span>🌤️</span>
          <span>Weather Dashboard</span>
        </h1>
        <UnitToggle unit={unit} onToggle={onToggleUnit} />
      </div>
    </header>
  )
}

export default Header
