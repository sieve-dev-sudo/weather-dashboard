import { CloudSun } from 'lucide-react'
import UnitToggle from './UnitToggle'
import DarkModeToggle from './DarkModeToggle'

function Header({ unit, onToggleUnit, isDark, onToggleDark }) {
  return (
    <header className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-sm border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <CloudSun size={24} className="text-amber-500" />
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
