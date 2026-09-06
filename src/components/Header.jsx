import UnitToggle from './UnitToggle'
import DarkModeToggle from './DarkModeToggle'

function Header({ unit, onToggleUnit, isDark, onToggleDark }) {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span>🌤️</span>
          <span>Weather Dashboard</span>
        </h1>
        <div className="flex items-center gap-2">
          <UnitToggle unit={unit} onToggle={onToggleUnit} />
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
        </div>
      </div>
    </header>
  )
}

export default Header
