import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, RotateCcw, Trash2 } from 'lucide-react'
import AboutSection from './AboutSection'

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
        checked ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

function SettingsPanel({
  isOpen,
  onClose,
  cities,
  settings,
  onUpdateSetting,
  onResetSettings,
  onClearFavorites,
  onClearRecent,
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Settings"
          className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 max-w-md w-full p-5 max-h-[90vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Settings</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-5">
            {/* Default Unit */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Default Temperature Unit
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => onUpdateSetting('defaultUnit', 'C')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    settings.defaultUnit === 'C'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Celsius (°C)
                </button>
                <button
                  onClick={() => onUpdateSetting('defaultUnit', 'F')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    settings.defaultUnit === 'F'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Fahrenheit (°F)
                </button>
              </div>
            </div>

            {/* Default City */}
            <div>
              <label htmlFor="default-city-select" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Default City (on app load)
              </label>
              <select
                id="default-city-select"
                value={settings.defaultCityId}
                onChange={(e) => onUpdateSetting('defaultCityId', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.city}, {c.country}
                  </option>
                ))}
              </select>
            </div>

            {/* Notifications (mock) */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Weather Alerts</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Notify on severe weather (demo only)</p>
              </div>
              <ToggleSwitch
                checked={settings.notificationsEnabled}
                onChange={(val) => onUpdateSetting('notificationsEnabled', val)}
                label="Toggle weather alert notifications"
              />
            </div>

            {/* Data management */}
            <div className="border-t border-slate-100 dark:border-slate-700 pt-4 space-y-2">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Data</p>
              <button
                onClick={onClearFavorites}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              >
                <Trash2 size={14} />
                Clear all favorites
              </button>
              <button
                onClick={onClearRecent}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              >
                <Trash2 size={14} />
                Clear recent searches
              </button>
              <button
                onClick={onResetSettings}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              >
                <RotateCcw size={14} />
                Reset settings to default
              </button>
            </div>

            {/* About */}
            <AboutSection />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SettingsPanel
