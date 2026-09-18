import { AlertTriangle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const ALERT_STYLES = {
  rain: 'bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-200',
  heat: 'bg-red-50 dark:bg-red-950/50 border-red-300 dark:border-red-800 text-red-800 dark:text-red-200',
  default: 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200',
}

function WeatherAlert({ alert, cityId }) {
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    setDismissed(false)
  }, [cityId])

  if (!alert || dismissed) {
    return null
  }

  const styleClass = ALERT_STYLES[alert.type] || ALERT_STYLES.default

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.25 }}
        role="alert"
        className={`overflow-hidden border rounded-lg mb-4 ${styleClass}`}
      >
        <div className="p-3 sm:p-4 flex items-start gap-3">
          <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm">{alert.title}</p>
            <p className="text-xs sm:text-sm mt-0.5 opacity-90">{alert.message}</p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss alert"
            className="flex-shrink-0 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WeatherAlert
