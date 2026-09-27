import { Settings } from 'lucide-react'

function SettingsButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open settings"
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <Settings size={18} />
    </button>
  )
}

export default SettingsButton
