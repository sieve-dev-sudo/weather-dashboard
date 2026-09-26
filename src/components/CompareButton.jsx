import { GitCompare } from 'lucide-react'

function CompareButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Compare cities"
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <GitCompare size={14} />
      <span>Compare</span>
    </button>
  )
}

export default CompareButton
