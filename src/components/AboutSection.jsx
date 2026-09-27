import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info } from 'lucide-react'

function AboutModal({ isOpen, onClose }) {
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
          aria-label="About Weather Dashboard"
          className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 max-w-lg w-full p-6 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">About Weather Dashboard</h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
            Weather Dashboard is a demo frontend app built to explore weather data visualization.
            Search cities around the world, view hourly and 7-day forecasts, compare cities side by side,
            and track detailed conditions at a glance.
          </p>

          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Features</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside mb-5">
            <li>Search 24 cities with current weather, hourly, and 7-day forecasts</li>
            <li>Click any hour or day card for a detailed breakdown</li>
            <li>Compare two cities side by side</li>
            <li>Temperature trend graph and 8 detailed weather metrics</li>
            <li>Save favorites and recent searches</li>
            <li>Switch between light and dark mode, with your preference saved</li>
            <li>Share weather info via native share or clipboard copy</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Built With</h3>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside mb-5">
            <li>React 19 and Vite</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Recharts</li>
            <li>Vitest and Testing Library</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Data</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-1">
            All weather data is mock data for demonstration purposes only, no live API is used.
            Favorites, recent searches, and settings are saved locally in your browser using localStorage.
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-500 mt-5 pt-4 border-t border-slate-100 dark:border-slate-700">
            Version 1.0.0
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function AboutButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="About this app"
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <Info size={18} />
    </button>
  )
}

export default AboutModal
