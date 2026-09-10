import Header from './Header'
import { getWeatherTheme } from '../utils/weatherTheme'

function Layout({ children, unit, onToggleUnit, isDark, onToggleDark, condition }) {
  const theme = getWeatherTheme(condition)

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.gradient} transition-colors duration-700`}>
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
