import Header from './Header'

function Layout({ children, unit, onToggleUnit, isDark, onToggleDark }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Header
        unit={unit}
        onToggleUnit={onToggleUnit}
        isDark={isDark}
        onToggleDark={onToggleDark}
      />
      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {children}
      </main>
    </div>
  )
}

export default Layout
