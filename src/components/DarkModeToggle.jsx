function DarkModeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

export default DarkModeToggle
